include('Component/box.js');
include('Component/code.js');
include('Component/array.js');
include('Component/getASCII.js');

docs['Container/Unit'] = function(lang = args()[0], nil = 'TRANSLATED_NOT') {
    const 
    board = document.getElementById("board"),
    gu = (th) => `https://yuisanae2f.github.io/YuiSanae2f/${args()[1] == '1' ? "index" : 'dark'}.html?${btoa(`${args()[0]} ${args()[1]} ${th}`)}`;

    let p, fun = {};

    /**
    union ae2f_Unit {
        void* raw;

        char* bt1;
        unsigned char* ubt1;

        short* bt2;
        unsigned short* ubt2;

        int* bt4;
        unsigned int* ubt4;

        long long* bt8;
        unsigned long long* ubt8;

        long long num;
        unsigned long long unum;
    };
     */
    fun['_'] = () => {
        p = board.tent('Unit', 'div');
        p.tent('title', 'h1').set('Unit');

        p = p.tab('desc', 'div');
        ((p) => {
            p
            .code('word', 'union ', gu('0/C/union'))
            .code('struct', 'ae2f_Unit', '#board Unit')
            
            p.code(0, ' {');

            ((p) => {
                p
                .code('word', 'void', gu('0/C/type void'))
                .code(0, '* ', gu('0/C/type *'))
                .code(0, 'raw', gu('0/C/struct member'))
                .code(0, ';<br/><br/>');

                p
                .code('word', 'char', gu('0/C/type char'))
                .code(0, '* ', gu('0/C/type *'))
                .code(0, 'bt1', gu('0/C/struct member'))
                .code(0, ';<br/>');

                p
                .code('word', 'unsigned ', gu('0/C/type unsigned'))
                .code('word', 'char', gu('0/C/type char'))
                .code(0, '* ', gu('0/C/type *'))
                .code(0, 'ubt1', gu('0/C/struct member'))
                .code(0, ';<br/><br/>');

                p
                .code('word', 'short', gu('0/C/type short'))
                .code(0, '* ', gu('0/C/type *'))
                .code(0, 'bt2', gu('0/C/struct member'))
                .code(0, ';<br/>');

                p
                .code('word', 'unsigned ', gu('0/C/type unsigned'))
                .code('word', 'short', gu('0/C/type short'))
                .code(0, '* ', gu('0/C/type *'))
                .code(0, 'ubt2', gu('0/C/struct member'))
                .code(0, ';<br/><br/>');

                p
                .code('word', 'int', gu('0/C/type int'))
                .code(0, '* ', gu('0/C/type *'))
                .code(0, 'bt4', gu('0/C/struct member'))
                .code(0, ';<br/>');

                p
                .code('word', 'unsigned ', gu('0/C/type unsigned'))
                .code('word', 'int', gu('0/C/type int'))
                .code(0, '* ', gu('0/C/type *'))
                .code(0, 'ubt4', gu('0/C/struct member'))
                .code(0, ';<br/><br/>');

                p
                .code('word', 'long long', gu('0/C/type long'))
                .code(0, '* ', gu('0/C/type *'))
                .code(0, 'bt8', gu('0/C/struct member'))
                .code(0, ';<br/>');

                p
                .code('word', 'unsigned ', gu('0/C/type unsigned'))
                .code('word', 'long long', gu('0/C/type long'))
                .code(0, '* ', gu('0/C/type *'))
                .code(0, 'ubt8', gu('0/C/struct member'))
                .code(0, ';<br/><br/>');

                p
                .code('word', 'long long ', gu('0/C/type long'))
                .code(0, 'num', gu('0/C/struct member'))
                .code(0, ';<br/>');

                p
                .code('word', 'unsigned ', gu('0/C/type unsigned'))
                .code('word', 'long long ', gu('0/C/type long'))
                .code(0, 'unum', gu('0/C/struct member'))
                .code(0, ';<br/><br/>');

                p
                .code('word', 'double ', gu('0/C/type double'))
                .code(0, 'real', gu('0/C/struct member'))
                .code(0, ';<br/><br/>');

                p
                .code('word', 'float', gu('0/C/type float'))
                .code(0, '* ', gu('0/C/type *'))
                .code(0, 'rbt4', gu('0/C/struct member'))
                .code(0, ';<br/>');
                p
                .code('word', 'double', gu('0/C/type double'))
                .code(0, '* ', gu('0/C/type *'))
                .code(0, 'rbt8', gu('0/C/struct member'))
                .code(0, ';<br/>');
            })(p.tab('ae2f_Unit', 'div'));

            p.code(0, '};')
        })(p.box('declares'));

        p.append({
            en: `
            is the slicer for a pointer. <br/>
            has members share their data each other.
            `
        }[lang] ?? nil);
    }
    
    return [fun, ['_']];
}