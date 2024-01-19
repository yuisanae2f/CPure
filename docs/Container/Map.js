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