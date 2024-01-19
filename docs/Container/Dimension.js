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
            `
        }[lang] ?? nil);

        ((p) => {
            p.tent('title', 'h2').set('depth');
            p = p.tab('desc', 'div');
            p.append({
                en: "stands for the count of the parent above this structure."
            }[lang] ?? nil);
        })(p.tent('depth'));

        ((p) => {
            p.tent('title', 'h2').set('end');
            p = p.tab('desc', 'div');

            p.append({
                en: "describes if this has a child."
            }[lang] ?? nil);
        })(p.tent('end'));

        ((p) => {
            p.tent('title', 'h2').set('pre');
            p = p.tab('desc', 'div');

            p.append({
                en: "points the parent structure of this."
            }[lang] ?? nil);
        })(p.tent('pre'));

        ((p) => {
            p.tent('title', 'h2').set('c');
            p = p.tab('desc', 'div');

            p.append({
                en: `
                container for the value.<br/>
                contains the array of pointer of its child provided end does not equals to zero.
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
            `
        }[lang] ?? nil);
    }
    return [fun, ['_', 'make', 'free', 'point', 'lay', 'morph', 'copy']];
} // 덜 됨