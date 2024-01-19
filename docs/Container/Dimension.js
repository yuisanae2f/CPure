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
                .code('word', 'struct ', gu('0/C/struct'))
                .code('struct', 'ae2f_Dimension', '#board Dimension')
                .code(0, '* ', gu('0/C/type *'))
                .code(0, 'pre', gu('0/C/struct member'));

                p.code(0, ';');
            })(p.tab('ae2f_Dimension'))

            p.code(0, '};');
        })(p.box('declares'));
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
    }
    return [fun, ['_', 'make', 'free', 'point', 'lay', 'morph', 'copy']];
} // 덜 됨