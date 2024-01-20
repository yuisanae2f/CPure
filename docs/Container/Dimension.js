include('Component/box.js');
include('Component/code.js');

docs['Container/Dimension'] = (lang = args()[0], nil = 'TRANSLATED_NOT') => {
    const 
    board = document.getElementById("board");
    let c = {}, fun = {}, p;

    const gu = (th) => `https://yuisanae2f.github.io/YuiSanae2f/${args()[1] == '1' ? "index" : 'dark'}.html?${btoa(`${args()[0]} ${args()[1]} ${th}`)}`;

    fun['_'] = () => {
        p = board.tent('Dimension', 'div');
        p.tent('title', 'h1').set('Dimension');

        p = p.tab('desc', 'div');
        /**
         * struct ae2f_Dimension {
            struct ae2f_Dynamic c;
            unsigned long long depth;
            char end;
            struct ae2f_Dimension* pre;
        };
         * 
         */
        ((p) => {
            
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Dimension', '#board Dimension');

            p.code(0, ' {');

            ((p) => {
                p
                .code('word', 'struct ', gu('0/C/struct'))
                .code('struct', 'ae2f_Dynamic ', getURL('Container/Dynamic'))
                .code(0, 'c', gu('0/C/struct member'))
                .code(0, ';<br/>');

                p
                .code('word', 'unsigned ', gu('0/C/type unsigned'))
                .code('word', 'long ', gu('0/C/type long'))
                .code('word', 'long ', gu('0/C/type int'))
                .code(0, 'depth', gu('0/C/struct member'));

                p.code(0, ';<br/>');

                p
                .code('word', 'char ', gu('0/C/type char'))
                .code(0, 'end', gu('0/C/struct member'));

                p.code(0, ';<br/>');

                p
                .code('word', 'struct ', gu('0/C/struct'))
                .code('struct', 'ae2f_Dimension', '#board Dimension')
                .code(0, '* ', gu('0/C/type *'))
                .code(0, 'pre', gu('0/C/struct member'));

                p.code(0, ';');
            })(p.tab('ae2f_Dimension'))

            p.code(0, '};');
        })(p.box('declares'));

        p.append({
            en: `
            provides the feature of managing the multidimensional array.
            `,

            ko: `
            다차원 배열을 지원합니다.
            `
        }[lang] ?? nil);

        ((p) => {
            p.tent('title', 'h2').set('depth');
            p = p.tab('desc', 'div');
            p.append({
                en: "stands for the count of the parent above this structure.",
                ko: `해당 구조체의 깊이 레벨을 표시합니다.`
            }[lang] ?? nil);
        })(p.tent('depth'));

        ((p) => {
            p.tent('title', 'h2').set('end');
            p = p.tab('desc', 'div');

            p.append({
                en: "describes if this has a child.",
                ko: `해당 구조체가 자식을 가지는가 여부를 표시합니다.`
            }[lang] ?? nil);
        })(p.tent('end'));

        ((p) => {
            p.tent('title', 'h2').set('pre');
            p = p.tab('desc', 'div');

            p.append({
                en: "points the parent structure of this.",
                ko: `해당 구조체의 부모의 위치를 가리킵니다.`
            }[lang] ?? nil);
        })(p.tent('pre'));

        ((p) => {
            p.tent('title', 'h2').set('c');
            p = p.tab('desc', 'div');

            p.append({
                en: `
                container for the value.<br/>
                contains the array of pointer of its child provided <strong><a href="#board Dimension desc end">end</a></strong> does not equals to zero.
                `,

                ko: `
                실제 값의 보관 주소입니다. <br/>
                <strong><a href="#board Dimension desc end">end</a></strong>가 0이 아닐 경우 자식의 위치를 가리킵니다.
                `
            }[lang] ?? nil);
        })(p.tent('c'));
    }

    // struct ae2f_Dimension* ae2f_Dimension(struct ae2f_Dimension* _this, unsigned long long depth, unsigned long long* lengthArray);
    fun['make'] = () => {
        p = board.tent('make', 'div');
        p.tent('title', 'h1').set('ae2f_Dimension');
        p = p.tab('desc', 'div');

        ((p) => {
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Dimension', '#board Dimension')
            .code(0, '* ', gu('0/C/type *'))
            .code('fun', 'ae2f_Dimension', '#board make');

            p.code(0, '(');

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Dimension', '#board Dimension')
            .code(0, '* ', gu('0/C/type *'))
            .code('#', '_this', gu('0/C/function param'));

            p.code(0, ', ');

            p
            .code('word', 'unsigned ', gu('0/C/type unsigned'))
            .code('word', 'long ', gu('0/C/type long'))
            .code('word', 'long ', gu('0/C/type int'))
            .code('#', 'depth', gu('0/C/function param'));

            p.code(0, ', ');

            p
            .code('word', 'unsigned ', gu('0/C/type unsigned'))
            .code('word', 'long ', gu('0/C/type long'))
            .code('word', 'long', gu('0/C/type int'))
            .code(0, '* ', gu('0/C/type *'))
            .code('#', 'lengthArray', gu('0/C/function param'));

            p.code(0, ');');
        })(p.box('declares'));

        p.append({
            en: `
            initialises the certain structure of <strong>_this</strong>. <br/>
            receives the <strong>depth</strong>, and array of required length for each depth level as <strong>lengthArray</strong>.
            `,

            ko: `
            구조체 <strong>_this</strong>의 초기화 함수입니다. <br/>
            최대 깊이 레벨 <strong>depth</strong>와 각 깊이 레벨에서의 길이 배열 <strong>lengthArray</strong>를 받습니다.
            `
        }[lang] ?? nil)
    }

    // struct ae2f_Dimension* ae2f_Dimension_free(struct ae2f_Dimension* _this);
    fun['free'] = () => {
        p = board.tent('free', 'div');
        p.tent('title', 'h1').set('ae2f_Dimension_free');
        p = p.tab('desc', 'div');

        ((p) => {
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Dimension', '#board Dimension')
            .code(0, '* ', gu('0/C/type *'))
            .code('fun', 'ae2f_Dimension_free', '#board free');

            p.code(0, '(');

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Dimension', '#board Dimension')
            .code(0, '* ', gu('0/C/type *'))
            .code('#', '_this', gu('0/C/function param'));

            p.code(0, ');');  
        })(p.box('declares'));

        p.append({
            ko: `
            <strong>_this</strong>의 메모리를 전부 해제합니다.
            `,
            en: `
            free the memory of <strong>_this</strong>.
            will iterate its child and also free them.
            `
        }[lang] ?? nil)
    }

    // struct ae2f_Dimension* ae2f_Dimension_point(struct ae2f_Dimension* _this, unsigned long long depth, unsigned long long* posArray);
    fun['point'] = () => {
        p = board.tent('point', 'div');
        p.tent('title', 'h1').set('ae2f_Dimension_point');
        p = p.tab('desc', 'div');

        ((p) => {
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Dimension', '#board Dimension')
            .code(0, '* ', gu('0/C/type *'))
            .code('fun', 'ae2f_Dimension_point', '#board point');

            p.code(0, '(');

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Dimension', '#board Dimension')
            .code(0, '* ', gu('0/C/type *'))
            .code('#', '_this', gu('0/C/function param'));

            p.code(0, ', ');

            p
            .code('word', 'unsigned ', gu('0/C/type unsigned'))
            .code('word', 'long ', gu('0/C/type long'))
            .code('word', 'long ', gu('0/C/type int'))
            .code('#', 'depth', gu('0/C/function param'));

            p.code(0, ', ');

            p
            .code('word', 'unsigned ', gu('0/C/type unsigned'))
            .code('word', 'long ', gu('0/C/type long'))
            .code('word', 'long', gu('0/C/type int'))
            .code(0, '* ', gu('0/C/type *'))
            .code('#', 'posArray', gu('0/C/function param'));

            p.code(0, ');');
        })(p.box('declares'));

        p.append({
            en: `
            points the child of <strong>_this</strong> in the depth level of <strong>depth</strong>.  <br/>
            in each level of depth will read the <strong>posArray</strong> with index of <strong>depth</strong> as a position where the child has been estimated.
            `,

            ko: `
            <strong>_this</strong> <strong>depth</strong>의 깊이에 있는 요소를 참조합니다. <br/>
            각 깊이 레벨에서 <strong>posArray</strong> 배열에서 찾아갈 위치를 참조합니다. <br/>
            `
        }[lang] ?? nil)
    }

    // struct ae2f_Dimension* ae2f_Dimension_lay(struct ae2f_Dimension* _this, unsigned long long length);
    fun['lay'] = () => {
        p = board.tent('lay', 'div');
        p.tent('title', 'h1').set('ae2f_Dimension_lay');
        p = p.tab('desc', 'div');

        ((p) => {
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Dimension', '#board Dimension')
            .code(0, '* ', gu('0/C/type *'))
            .code('fun', 'ae2f_Dimension_lay', '#board lay');

            p.code(0, '(');

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Dimension', '#board Dimension')
            .code(0, '* ', gu('0/C/type *'))
            .code('#', '_this', gu('0/C/function param'));

            p.code(0, ', ');

            p
            .code('word', 'unsigned ', gu('0/C/type unsigned'))
            .code('word', 'long ', gu('0/C/type long'))
            .code('word', 'long ', gu('0/C/type int'))
            .code('#', 'length', gu('0/C/function param'));

            p.code(0, ');');
        })(p.box('declares'));

        p.append({
            en: `
            iterates the end of the childs of <strong>_this</strong> and sets the array of <strong><a href='#board Dimension'>ae2f_Dimension</a></strong> with a count of <strong>length</strong>. <br/>
            is could be called multiple times until it is <strong><a href="#board morph">morphed</a></strong>.
            `,

            ko: `
            <strong>_this</strong>의 자식 끝을 순회하여 새로이 <strong><a href='#board Dimension'>ae2f_Dimension</a></strong>의 배열을 <strong>length</strong>의 개수만큼 할당하여 초기화합니다. <br/>
            <strong><a href="#board morph">morph</a></strong>가 호출되기 전까지 여러 번 호출하여도 무방합니다.
            `
        }[lang] ?? nil)
    }

    fun['morph'] = () => {
        p = board.tent('morph', 'div');
        p.tent('title', 'h1').set('ae2f_Dimension_morph');
        p = p.tab('desc', 'div');

        ((p) => {
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Dimension', '#board Dimension')
            .code(0, '* ', gu('0/C/type *'))
            .code('fun', 'ae2f_Dimension_morph', '#board morph');

            p.code(0, '(');

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Dimension', '#board Dimension')
            .code(0, '* ', gu('0/C/type *'))
            .code('#', '_this', gu('0/C/function param'));

            p.code(0, ', ');

            p
            .code('word', 'unsigned ', gu('0/C/type unsigned'))
            .code('word', 'long ', gu('0/C/type long'))
            .code('word', 'long ', gu('0/C/type int'))
            .code('#', 'length', gu('0/C/function param'));

            p.code(0, ');');
        })(p.box('declares'));

        p.append({
            en: `
            iterates the end of the childs of <strong>_this</strong> and allocates the value with a length of <strong>length</strong>. <br/>
            must be called once with <strong>_this</strong> which is not <strong><a href="#board morph">morphed</a></strong>.
            `,

            ko: `
            <strong>_this</strong>의 자식의 끝을 전부 순회하여 <strong>length</strong>의 길이로 메모리를 할당합니다. <br/>
            <strong><a href="#board morph">morph</a></strong>가 콜백되지 않은 구조체에 사용하십시오.
            `
        }[lang] ?? nil);
    }

    // struct ae2f_Dimension* ae2f_Dimension_copy(struct ae2f_Dimension* _this, struct ae2f_Dimension* to);
    fun['copy'] = () => {
        p = board.tent('copy', 'div');
        p.tent('title', 'h1').set('ae2f_Dimension_copy');
        p = p.tab('desc', 'div');

        ((p) => {
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Dimension', '#board Dimension')
            .code(0, '* ', gu('0/C/type *'))
            .code('fun', 'ae2f_Dimension_copy', '#board copy');

            p.code(0, '(');

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Dimension', '#board Dimension')
            .code(0, '* ', gu('0/C/type *'))
            .code('#', '_this', gu('0/C/function param'));

            p.code(0, ', ');

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Dimension', '#board Dimension')
            .code(0, '* ', gu('0/C/type *'))
            .code('#', 'to', gu('0/C/function param'));

            p.code(0, ');');
        })(p.box('declares'));

        p.append({
            en: `
            copies the value of <strong>_this</strong> and its child and paste in <strong>to</strong>.
            `,

            ko: `
            <strong>to</strong>의 위치로 <strong>_this</strong>의 값을 복사합니다.
            `
        }[lang] ?? nil);
    }
    return [fun, ['_', 'make', 'free', 'point', 'lay', 'morph', 'copy']];
} // 덜 됨