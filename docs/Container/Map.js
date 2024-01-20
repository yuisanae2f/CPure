include('Component/box.js');
include('Component/code.js');
include('Component/array.js');

docs['Container/Map'] = (lang = args()[0], nil = 'TRANSLATED_NOT') => {
    const 
    board = document.getElementById("board");
    let c = {}, fun = {}, p;

    const gu = (th) => `https://yuisanae2f.github.io/YuiSanae2f/${args()[1] == '1' ? "index" : 'dark'}.html?${btoa(`${args()[0]} ${args()[1]} ${th}`)}`;

    /**
    struct ae2f_Map {
        struct ae2f_Dynamic pairs;
        unsigned long long len;
        unsigned long long _amp; unsigned long long _div;
    };
     */
    fun['_'] = () => {
        p = board.tent('Map', 'div');
        p.tent('title', 'h1').set('Map');
        p = p.tab('desc', 'div');
        ((p) => {
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Map', '#board Map');

            p.code(0, ' {');
            ((p) => {
                p
                .code('word', 'struct ', gu('0/C/struct'))
                .code('struct', 'ae2f_Dynamic ', getURL('Container/Dynamic'))
                .code(0, 'pairs', gu('0/C/struct members'))
                .code(0, ';<br/>');
    
                p
                .code('word', 'unsigned ', gu('0/C/type unsigned'))
                .code('word', 'long ', gu('0/C/type long'))
                .code('word', 'long ', gu('0/C/type int'))
                .code(0, 'len', gu('0/C/struct members'))
                .code(0, ';<br/>');
    
                p
                .code('word', 'unsigned ', gu('0/C/type unsigned'))
                .code('word', 'long ', gu('0/C/type long'))
                .code('word', 'long ', gu('0/C/type int'))
                .code(0, '_amp', gu('0/C/struct members'))
                .code(0, ';<br/>');
    
                p
                .code('word', 'unsigned ', gu('0/C/type unsigned'))
                .code('word', 'long ', gu('0/C/type long'))
                .code('word', 'long ', gu('0/C/type int'))
                .code(0, '_div', gu('0/C/struct members'))
                .code(0, ';<br/>');
            })(p.tab('ae2f_Map'));

            p.code(0, '};');
        })(p.box('declares'));

        p.append({
            en: `
            is an unordered map similar to the hashmap. <br/>
            but it is not the same. <br/><br/>
            
            provides the map, which has a key.`,

            ko: `
            key-value 형태의 맵을 제공합니다.
            `
        }[lang] ?? nil);
    }

    // struct ae2f_Map* ae2f_Map(struct ae2f_Map* _this);
    fun['make'] = () => {
        p = board.tent('make', 'div');
        p.tent('title', 'h1').set('ae2f_Map');
        p = p.tab('desc', 'div');

        ((p) => {
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Map', '#board Map')
            .code(0, '* ', gu('0/C/type *'))
            .code('fun', 'ae2f_Map', '#board make');

            p.code(0, '(');

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Map', '#board Map')
            .code(0, '* ', gu('0/C/type *'))
            .code('#', '_this', gu('0/C/function param'));

            p.code(0, ');');
        })(p.box('declares'));

        p.append({
            en: `
            initialies the value from <strong>_this</strong>.
            `,

            ko: `
            구조체 <strong>_this</strong>의 초기화 함수입니다.
            `
        }[lang] ?? nil);
    }

    // struct ae2f_Pair* ae2f_Map_at(struct ae2f_Map* _this, struct ae2f_Dynamic key);
    fun['at'] = () => {
        p = board.tent('at', 'div');
        p.tent('title', 'h1').set('ae2f_Map_at');
        p = p.tab('desc', 'div');

        ((p) => {
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Map', '#board Map')
            .code(0, '* ', gu('0/C/type *'))
            .code('fun', 'ae2f_Map', '#board make');

            p.code(0, '(');

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Map', '#board Map')
            .code(0, '* ', gu('0/C/type *'))
            .code('#', '_this', gu('0/C/function param'));

            p.code(0, ', ');

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Dynamic ', getURL('Container/Dynamic'))
            .code('#', 'key', gu('0/C/function param'));

            p.code(0, ');');
        })(p.box('declares'));

        p.append({
            en: `
            returns the pointer of the value where the <strong>key</strong> matches the key from the structure, <strong>_this</strong>.   <br/>
            returns zero when <strong>key</strong> has not been found.
            `,

            ko: `
            <strong>_this</strong>에서 <strong>key</strong>와 일치하는 key값을 가지는 값을 찾아 반환합니다. <br/>
            key값을 찾지 못할 경우 0을 반환합니다.
            `
        }[lang] ?? nil);
    }

    // struct ae2f_Map* ae2f_Map_add(struct ae2f_Map* _this, struct ae2f_Dynamic k, struct ae2f_Dynamic v);
    fun['add'] = () => {
        p = board.tent('add', 'div');
        p.tent('title', 'h1').set('ae2f_Map_add');
        p = p.tab('desc', 'div');

        ((p) => {
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Map', '#board Map')
            .code(0, '* ', gu('0/C/type *'))
            .code('fun', 'ae2f_Map', '#board make');

            p.code(0, '(');

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Map', '#board Map')
            .code(0, '* ', gu('0/C/type *'))
            .code('#', '_this', gu('0/C/function param'));

            p.code(0, ', ');

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Dynamic ', getURL('Container/Dynamic'))
            .code('#', 'k', gu('0/C/function param'));

            p.code(0, ', ');

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Dynamic ', getURL('Container/Dynamic'))
            .code('#', 'v', gu('0/C/function param'));

            p.code(0, ');');
        })(p.box('declares'));

        p.append({
            en: `
            copies of the pair of value of <strong>k</strong> and <strong>v</strong> and adds this map <strong>_this</strong>.  <br/>
            Since <a href="${getURL('Container/Dynamic')}"><strong>dynamics</strong></a> as parametres <a href="${getURL('Container/Dynamic copy')}">has been duplicated</a>,
            still the original ones are need to be freed after the map has been freed.
            `,

            ko: `
            <strong>_this</strong>에 <strong>k</strong>, <strong>v</strong>를 복사하여 쌍으로써 추가합니다. <br/>
            기존 값의 복사본을 추가하므로, <strong>_this</strong>의 메모리를 해제하여도 기존 값의 메모리는 남아 있을 것입니다.
            `
        }[lang] ?? nil);
    }

    // struct ae2f_Map* ae2f_Map_del(struct ae2f_Map* _this, struct ae2f_Pair* wh);
    fun['del'] = () => {
        p = board.tent('del', 'div');
        p.tent('title', 'h1').set('ae2f_Map_del');
        p = p.tab('desc', 'div');

        ((p) => {
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Map', '#board Map')
            .code(0, '* ', gu('0/C/type *'))
            .code('fun', 'ae2f_Map_del', '#board del');

            p.code(0, '(');

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Map', '#board Map')
            .code(0, '* ', gu('0/C/type *'))
            .code('#', '_this', gu('0/C/function param'));

            p.code(0, ', ');

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Pair', getURL('Container/Pair'))
            .code(0, '* ', gu('0/C/type *'))
            .code('#', 'wh', gu('0/C/function param'));

            p.code(0, ');');
        })(p.box('declares'));

        p.append({
            en: `
            deletes the value in <strong>wh</strong> as a pointer of value which belongs to <strong>_this</strong>.  <br/>
            pointer of value could be found via <strong><a href="#board at">ae2f_Map_at</a></strong>.
            `,

            ko: `
            <strong>_this</strong>에 등록되어 있던 값 중 하나의 포인터 <strong>wh</strong>를 받아 해당 값을 <strong>_this</strong>로부터 제거합니다. <br/>
            <strong><a href="#board at">at</a></strong>에서 <strong>wh</strong>의 위치를 얻을 수 있습니다.
            `
        }[lang] ?? nil);
    }

    // struct ae2f_Map* ae2f_Map_free(struct ae2f_Map* _this);
    fun['free'] = () => {
        p = board.tent('free', 'div');
        p.tent('title', 'h1').set('ae2f_Map_free');
        p = p.tab('desc', 'div');

        ((p) => {
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Map', '#board Map')
            .code(0, '* ', gu('0/C/type *'))
            .code('fun', 'ae2f_Map_free', '#board free');

            p.code(0, '(');

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Map', '#board Map')
            .code(0, '* ', gu('0/C/type *'))
            .code('#', '_this', gu('0/C/function param'));

            p.code(0, ');');
        })(p.box('declares'));

        p.append({
            en: `
            will reset the map <strong>_this</strong>.
            `,

            ko: `
            <strong>_this</strong>의 메모리를 해제합니다.
            `
        }[lang] ?? nil);
    }

    // struct ae2f_Map ae2f_Map_copy(struct ae2f_Map* _this);
    fun['copy'] = () => {
        p = board.tent('copy', 'div');
        p.tent('title', 'h1').set('ae2f_Map_copy');
        p = p.tab('desc', 'div');

        ((p) => {
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Map', '#board Map')
            .code(0, '* ', gu('0/C/type *'))
            .code('fun', 'ae2f_Map_copy', '#board copy');

            p.code(0, '(');

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Map', '#board Map')
            .code(0, '* ', gu('0/C/type *'))
            .code('#', '_this', gu('0/C/function param'));

            p.code(0, ');');
        })(p.box('declares'));
    }
    return [fun, ['_', 'make', 'at', 'add', 'del', 'free', 'copy']];
}