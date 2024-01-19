include('Component/box.js');
include('Component/code.js');
include('Component/array.js');

docs['Container/File'] = (lang = args()[0], nil = 'TRANSLATED_NOT') => {
    const 
    board = document.getElementById("board");
    let c = {}, fun = {}, p;

    const gu = (th) => `https://yuisanae2f.github.io/YuiSanae2f/${args()[1] == '1' ? "index" : 'dark'}.html?${btoa(`${args()[0]} ${args()[1]} ${th}`)}`;

    fun['_'] = () => {
        p = board.tent('File', 'div');
        p.tent('title', 'h1').set('File');
        p = p.tab('desc', 'div');

        /**
        struct ae2f_File {
            const char* path;
            unsigned long long len;
            unsigned long long off;
            FILE* fp; char mode;
        };
         */
        ((p) => {
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_File ', '#board File')
            .code(0, '{');

            ((p) => {
                p
                .code('word', 'const ', gu('0/C/type const'))
                .code('word', 'char', gu('0/C/type char'))
                .code(0, '* ', gu('0/C/type *'))
                .code(0, 'path', gu('0/C/struct member'))
                .code(0, ';<br/>');

                p
                .code('word', 'unsigned ', gu('0/C/type unsigned'))
                .code('word', 'long ', gu('0/C/type long'))
                .code('word', 'long ', gu('0/C/type int'))
                .code(0, 'len', gu('0/C/struct member'))
                .code(0, ';<br/>');

                p
                .code('word', 'unsigned ', gu('0/C/type unsigned'))
                .code('word', 'long ', gu('0/C/type long'))
                .code('word', 'long ', gu('0/C/type int'))
                .code(0, 'off', gu('0/C/struct member'))
                .code(0, ';<br/>');

                p
                .code('struct', 'FILE')
                .code(0, '* ', gu('0/C/type *'))
                .code(0, 'fp', gu('0/C/struct member'))
                .code(0, '; ');

                p
                .code('word', 'char ', gu('0/C/type char'))
                .code(0, 'mode', gu('0/C/struct member'))
                .code(0, ';');
            })(p.tab('ae2f_File'));

            p.code(0, '}');
        })(p.box('declares'));
    }

    // struct ae2f_File* ae2f_File(struct ae2f_File* _this, const char* path);
    fun['make'] = () => {
        p = board.tent('make', 'div');
        p.tent('title', 'h1').set('ae2f_File');
        p = p.tab('desc', 'div');

        ((p) => {
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_File', '#board File')
            .code(0, '* ', gu('0/C/type *'))
            .code('fun', 'ae2f_File', '#board make')
            .code(0, "(");

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_File', '#board File')
            .code(0, '* ', gu('0/C/type *'))
            .code('#', '_this', gu('0/C/function param'));

            p.code(0, ', ');

            p
            .code('word', 'const ', gu('0/C/type const'))
            .code('word', 'char', gu('0/C/type char'))
            .code(0, '* ', gu('0/C/type *'))
            .code('#', 'path', gu('0/C/function param'));

            p.code(0, ');');
        })(p.box('declares'));
    }

    // struct ae2f_File* ae2f_File_create(struct ae2f_File* _this);
    fun['create'] = () => {
        p = board.tent('create', 'div');
        p.tent('title', 'h1').set('ae2f_File_create');
        p = p.tab('desc', 'div');

        ((p) => {
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_File', '#board File')
            .code(0, '* ', gu('0/C/type *'))
            .code('fun', 'ae2f_File_create', '#board create')
            .code(0, "(");

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_File', '#board File')
            .code(0, '* ', gu('0/C/type *'))
            .code('#', '_this', gu('0/C/function param'));

            p.code(0, ');');
        })(p.box('declares'));
    }

    // struct ae2f_File* ae2f_File_open(struct ae2f_File* _this, char mode);
    fun['open'] = () => {
        p = board.tent('open', 'div');
        p.tent('title', 'h1').set('ae2f_File_open');
        p = p.tab('desc', 'div');

        ((p) => {
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_File', '#board File')
            .code(0, '* ', gu('0/C/type *'))
            .code('fun', 'ae2f_File_open', '#board open')
            .code(0, "(");

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_File', '#board File')
            .code(0, '* ', gu('0/C/type *'))
            .code('#', '_this', gu('0/C/function param'));

            p.code(0, ', ');

            p
            .code('word', 'char ', gu('0/C/type char'))
            .code('#', 'mode', gu('0/C/function param'));

            p.code(0, ');');
        })(p.box('declares'));
    }

    // unsigned long long ae2f_File_read(struct ae2f_File* _this, struct ae2f_Dynamic* buff);
    fun['read'] = () => {
        p = board.tent('read', 'div');
        p.tent('title', 'h1').set('ae2f_File_read');
        p = p.tab('desc', 'div');

        ((p) => {
            p
            .code('word', 'unsigned ', gu('0/C/type unsigned'))
            .code('word', "long ", gu('0/C/type long'))
            .code('word', 'long ', gu('0/C/type int'))
            .code('fun', 'ae2f_File_read', '#board read');

            p.code(0, '(');

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_File', '#board File')
            .code(0, '* ', gu('0/C/type *'))
            .code('#', '_this', gu('0/C/function param'));

            p.code(0, ', ');

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Dynamic', gu('Container/Dynamic'))
            .code(0, '* ', gu('0/C/type *'))
            .code('#', 'buff', gu('0/C/function param'));

            p.code(0, ');');
        })(p.box('declares'));
    }

    // unsigned long long ae2f_File_write(struct ae2f_File* _this, struct ae2f_Dynamic buff);
    fun['write'] = () => {
        p = board.tent('write', 'div');
        p.tent('title', 'h1').set('ae2f_File_write');
        p = p.tab('desc', 'div');

        ((p) => {
            p
            .code('word', 'unsigned ', gu('0/C/type unsigned'))
            .code('word', "long ", gu('0/C/type long'))
            .code('word', 'long ', gu('0/C/type int'))
            .code('fun', 'ae2f_File_write', '#board write');

            p.code(0, '(');

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_File', '#board File')
            .code(0, '* ', gu('0/C/type *'))
            .code('#', '_this', gu('0/C/function param'));

            p.code(0, ', ');

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Dynamic ', gu('Container/Dynamic'))
            .code('#', 'buff', gu('0/C/function param'));

            p.code(0, ');');
        })(p.box('declares'));
    }

    // struct ae2f_File* ae2f_File_close(struct ae2f_File* _this);
    fun['close'] = () => {
        p = board.tent('close', 'div');
        p.tent('title', 'h1').set('ae2f_File_close');
        p = p.tab('desc', 'div');

        ((p) => {
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_File', '#board File')
            .code(0, '* ', gu('0/C/type *'))
            .code('fun', 'ae2f_File_close', '#board close')
            .code(0, "(");

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_File', '#board File')
            .code(0, '* ', gu('0/C/type *'))
            .code('#', '_this', gu('0/C/function param'));

            p.code(0, ');');
        })(p.box('declares'));
    }
    return [fun, ['_', 'make', 'create', 'open', 'read', 'write', 'close']];
}