include('Component/box.js');
include('Component/code.js');
include('Component/array.js');

docs['Container/Context'] = (lang = args()[0], nil = 'TRANSLATED_NOT') => {
    const
    board = document.getElementById("board"),
    gu = (th) => `https://yuisanae2f.github.io/YuiSanae2f/${args()[1] == '1' ? "index" : 'dark'}.html?${btoa(`${args()[0]} ${args()[1]} ${th}`)}`;

    let c = {}, fun = {}, p;

    fun['_'] = () => {
        p = board.tent('Context', 'div');
        p.tent('title', 'h1').set('Context');

        p = p.tab('desc', 'div');
        
        ((p) => {
            /**
             *  struct ae2f_Context {
                    struct ae2f_Dynamic c;
                    unsigned long long len;
                    unsigned long long _amp;
                    unsigned long long _div;
                };
             */
                p.code('word', 'struct ', gu('0/C/struct'));
                p.code('struct', 'ae2f_Context ', '#board Context');
                p.code('', '{');

                ((p) => {
                    p.code('word', 'struct ', gu('0/C/struct'));
                    p.code('struct', 'ae2f_Dynamic ', getURL('Container/Dynamic'));
                    p.code('', 'c', gu('0/C/struct member'));
                    p.code('', ';<br/>');
                    p.code('class', 'uint64_t ', gu('0/C/h/stdint uint64_t'))
                    p.code('', '_amp;<br/>', gu('0/C/struct member'));

                    p.code('class', 'uint64_t ', gu('0/C/h/stdint uint64_t'))
                    p.code('', '_div;', gu('0/C/struct member'));
                })(p.tab('_'));

                p.code('', '};');
        })(p.box('declares'));

        c ={
            en0: "is the binder for the temporary dynamic allocation on scope.",
            en1: "could be used when you want to manage temporary dynamic allocation in the same scope.",

            ko0: "메모리를 일괄적으로 해제하는 기능을 제공합니다.",
            ko1: ""
        };

        p.append((c[lang + 0] ?? nil) + '<br/>');
        p.append(c[lang + 1] ?? nil);
    }

    // content
    fun['make'] = () => {
        p = board.tent('make', 'div');
        p.tent('title', 'h1').set('ae2f_Context');

        p = p.tab('desc', 'div');
        ((p) => {
            // struct ae2f_Context* ae2f_Context(struct ae2f_Context* _this);
            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('class', 'ae2f_Context', '#board Context');
            p.code(0, '* ', gu('0/C/type *'));
            p.code('function', 'ae2f_Context', '#board make');
            p.code(0, '(');

            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('class', 'ae2f_Context', '#board Context');
            p.code(0, '* ', gu('0/C/type *'));
            p.code('#', '_this', gu('0/C/function param'));

            p.code(0, ');');
        })(p.box('declares'));

        // initialises _this ready for action.
        c = {
            en: 'initialises <strong>_this</strong> ready for action.',
            ko: '<strong>_this</strong>의 값을 초기화시킵니다.'
        }

        p.append(c[lang] ?? nil);
    }

    fun['malloc'] = () => {
        p = board.tent('malloc', 'div');
        p.tent('title', 'h1').set('ae2f_Context_malloc');

        p = p.tab('desc', 'div');

        // struct ae2f_Dynamic* ae2f_Context_malloc(struct ae2f_Context* _this, unsigned long long len);
        ((p) => {
            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('class', 'ae2f_Context', '#board Context');
            p.code(0, '* ', gu('0/C/type *'));
            p.code('function', 'ae2f_Context_malloc', '#board malloc');
            p.code(0, '(');

            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('class', 'ae2f_Context', '#board Context');
            p.code(0, '* ', gu('0/C/type *'));
            p.code('#', '_this', gu('0/C/function param'));

            p.code(0, ', ');

            p.code('class', 'uint64_t ', gu('0/C/h/stdint uint64_t'));
            p.code('#', 'len', gu('0/C/function param'));

            p.code(0, ');');
        })(p.box('declares'));

        // allocates the room chained by `_this`, in the size of `len`.
        p.append({
            en: `
            allocates the room chained by <strong>_this</strong>, in the size of <strong>len</strong>. <br/>
            returns the address of the room allocated.
            `,

            ko: `
            <strong>len</strong> 크기의 바이트로 메모리를 할당하여 <strong>_this</strong>에 종속시킵니다. <br/>
            할당된 포인터의 정보를 반환합니다.
            `
        }[lang] ?? nil);
    }

    fun['free'] = () => {
        p = board.tent('free', 'div');
        p.tent('title', 'h1').set('ae2f_Context_free');

        p = p.tab('desc', 'div');

        // struct ae2f_Context* ae2f_Context_free(struct ae2f_Context* _this);
        ((p) => {
            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('class', 'ae2f_Context', '#board Context');
            p.code(0, '* ', gu('0/C/type *'));
            p.code('function', 'ae2f_Context_free', '#board free');
            p.code(0, '(');

            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('class', 'ae2f_Context', '#board Context');
            p.code(0, '* ', gu('0/C/type *'));
            p.code('#', '_this', gu('0/C/function param'));

            p.code(0, ');');
        })(p.box('declares'));

        p.append({
            en: `
            frees all the room chained by <strong>_this</strong>. <br/>
            returns the address of <strong>_this</strong>.
            `,

            ko: `
            <strong>_this</strong>에서 할당한 메모리를 전부 해제합니다. <br/>
            <strong>_this</strong>의 포인터를 반환합니다.
            `
        }[lang] ?? nil);
    }

    return [fun, ['_', 'make', 'malloc', 'free']];
};