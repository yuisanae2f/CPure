include('Component/box.js');
include('Component/code.js');

docs['Ariadne/String'] = (lang = args()[0], nil = 'TRANSLATED_NOT') => {
    const
    board = document.getElementById("board"),
    gu = (th) => `https://yuisanae2f.github.io/YuiSanae2f/${args()[1] == '1' ? "index" : 'dark'}.html?${btoa(`${args()[0]} ${args()[1]} ${th}`)}`,
    bs = (tt, ttt) => {
        let rtn = board.tent(tt);
        rtn.tent('title', 'h1').set(ttt);

        return rtn.tab('desc', 'div');
    }

    let c = {}, fun = {}, p;

    fun['_'] = () => {
        p = bs('string', 'String');
        /**
         * 
         * struct ae2f_Ariadne_String {
            double
                * Wxh,
                * Whh,
                * Why,
                * bh,
                * by,
                * hprev,
                (*activation)(double),
                * outBuff;

            uint64_t io, hid;
        };
         */
        ((p) => {
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Ariadne_String', '#board string')
            .code(0, ' {');

            ((p) => {
                p
                .code('word', 'double', gu('0/C/type double'));
                ((pp) => {
                    for(const str of ["Wxh", 'Whh', 'Why', 'bh', 'by', 'hprev', 'outBuff']) {
                        pp
                        .code(0, '* ', gu('0/C/type *'))
                        .code(0, str, gu('0/C/struct member'))
                        .code(0, ',<br/>');
                    } 

                    pp.append('<br/>');

                    ((p) => {
                        p.code(0, '(*activation)(');
                        p.code('word', 'double');
                        p.code(0, ');');
                    })(pp.tent('activation', 'a'));
                    pp.tent('activation').pos().setAttribute('href', gu('0/C/struct member'));
                })(p.tab('tab'));

                p.code('class', 'uint64_t ', gu('0/C/h/stdint'));
                p.code(0, 'io, hid;', gu('0/C/struct member'));
            })(p.tab('tab'))

            p.code(0, '};');
        })(p.box('declares'));
    }

    // ae2f_Ariadne_String
    fun['make'] = () => {
        p = bs('make', 'ae2f_Ariadne_String');

        /**
         * struct ae2f_Ariadne_String* ae2f_Ariadne_String(
            struct ae2f_Ariadne_String* a,	// simple rnn model
            uint64_t b,						// count of buffer of input and output as [double]
            uint64_t c,						// count of buffer of hidden layer
            double* d,						// early set output buffer
            double(*e)(						// activation function
                double a					// and its parameter
            )
        );
         */
        ((p) => {
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Ariadne_String', '#board string')
            .code(0, '* ', gu('0/C/type *'))
            .code('fun', 'ae2f_Ariadne_String', '#board make');

            p.code(0, '(');

            ((p) => {
                p
                .code('word', 'struct ', gu('0/C/struct'))
                .code('struct', 'ae2f_Ariadne_String', '#board string')
                .code(0, '* ', gu('0/C/type *'))
                .code('#', '_this', gu('0/C/function param'));
    
                p.code(0, ',<br/>');

                
                for(prm of ['ioLen', 'hiddenLen'])
                p
                .code('struct', 'uint64_t ', gu('0/C/h/stdint uint64_t'))
                .code('#', prm, gu('0/C/function param'))
                .code(0, ',<br/>');
    
                p
                .code('word', 'double', gu('0/C/type double'))
                .code(0, '* ', gu('0/C/type *'))
                .code('#', 'outBuff', gu('0/C/function param'))
                .code(0, ',<br/>');

                p
                .code('word', 'double', gu('0/C/type double'))
                .code(0, '(')
                .code(0, '*', gu('0/C/type *'))
                .code('#', 'activation', gu('0/C/function param'))
                .code(0, ')')
                .code(0, '(')
                .code('word', 'double', gu('0/C/type double'))
                .code(0, ')')
            })(p.tab('tab'));

            p.code(0, ');');
        })(p.box('declares'))
    }

    fun['re'] = () => {
        p = bs('re', 'ae2f_Ariadne_String_re');

        /**
         * struct ae2f_Ariadne_String* ae2f_Ariadne_String_re(
            struct ae2f_Ariadne_String* a,	// simple rnn model
            uint64_t b,						// new io size
            uint64_t c						// new hidden size
        );
         */
        ((p) => {
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Ariadne_String', '#board string')
            .code(0, '* ', gu('0/C/type *'))
            .code('fun', 'ae2f_Ariadne_String_re', '#board re')
            .code(0, '(');

            ((p) => {
                p
                .code('word', 'struct ', gu('0/C/struct'))
                .code('struct', 'ae2f_Ariadne_String', '#board string')
                .code('#', '_this', gu('0/C/function param'))
                .code(0, ',<br/>');

                for(const s of ['ioSize', 'hSize']) {
                    p
                    .code('struct', 'uint64_t ', gu('0/C/h/stdint uint64_t'))
                    .code('#', s, gu('0/C/function param'));
                    switch(s) {
                        case 'hSize': break;
                        default: 
                        p.code(0, ',<br/>');
                        break;
                    }
                }
            })(p.tab('tab'));

            p.code(0, ');');
        })(p.box('declares'));
    }

    fun['free'] = () => {
        p = bs('free', 'ae2f_Ariadne_String_free');

        /**
         * struct ae2f_Ariadne_String* ae2f_Ariadne_String_free(
                struct ae2f_Ariadne_String* a	// rnn to be freed
            );
         */
        ((p) => {
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Ariadne_String', '#board string')
            .code(0, '* ', gu('0/C/type *'))
            .code('fun', 'ae2f_Ariadne_String_free', '#board free')
            .code(0, '(');

            ((p) => {
                p
                .code('word', 'struct ', gu('0/C/struct'))
                .code('struct', 'ae2f_Ariadne_String', '#board string')
                .code(0, '* ', gu('0/C/type *'))
                .code('#', '_this', gu('0/C/function param'))
            })(p.tab('.'))

            p.code(0, ');');
        })(p.box('declares'));
    }

    fun['forward'] = () => {
        p = bs('forward', 'ae2f_Ariadne_String_forward');

        /**
         double* ae2f_Ariadne_String_forward(
            struct ae2f_Ariadne_String* a,	// rnn model
            double* b						// input
        );
         */
        ((p) => {
            p
            .code('word', 'double', gu('0/C/type double'))
            .code(0, '* ', gu('0/C/type *'))
            .code('fun', 'ae2f_Ariadne_String_forward', '#board forward')
            .code(0, '(');

            ((p) => {
                p
                .code('word', 'struct ', gu('0/C/struct'))
                .code('struct', 'ae2f_Ariadne_String', '#board string')
                .code(0, '* ', gu('0/C/type *'))
                .code('#', '_this', gu('0/C/function param'))
                .code(0, ', <br/>');

                p
                .code('word', 'double', gu('0/C/type double'))
                .code(0, '* ', gu('0/C/type *'))
                .code('#', 'inputBuff', gu('0/C/function param'));
            })(p.tab('.'));
            p.code(0, ');');
        })(p.box('declares'));
    }

    fun['backward'] = () => {
        p = bs('backward', 'ae2f_Ariadne_String_backward');

        /**
         struct ae2f_Ariadne_String* ae2f_Ariadne_String_backward(
            struct ae2f_Ariadne_String* a,	// rnn model
            double* b,						// input
            double* c,						// wanted value
            double d						// learning rate
        );
         */
        ((p) => {
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Ariadne_String', '#board string')
            .code(0, '* ', gu('0/C/type *'))
            .code('fun', 'ae2f_Ariadne_String_backward', '#board backward');
    
            p.code(0, '(');

            ((p) => {
                p
                .code('word', 'struct ', gu('0/C/struct'))
                .code('struct', 'ae2f_Ariadne_String', '#board string')
                .code(0, '* ', gu('0/C/type *'))
                .code('#', '_this', gu('0/C/function member'))
                .code(0, ',<br/>')

                .code('word', 'double', gu('0/C/type double'))
                .code(0, '* ', gu('0/C/type *'))
                .code('#', 'inputBuff', gu('0/C/function member'))
                .code(0, ',<br/>')

                .code('word', 'double', gu('0/C/type double'))
                .code(0, '* ', gu('0/C/type *'))
                .code('#', 'wantedVal', gu('0/C/function member'))
                .code(0, ',<br/>')

                .code('word', 'double ', gu('0/C/type double'))
                .code('#', 'learningRate', gu('0/C/function member'));
            })(p.tab('.'));

            p.code(0, ');');
        })(p.box('declares'));
    }

    fun['revolve'] = () => {
        p = bs('revolve', 'ae2f_Ariadne_String_revolve');

        /**
         struct ae2f_Ariadne_String* ae2f_Ariadne_String_revolve(
            struct ae2f_Ariadne_String* a,	// rnn model
            double* b,						// input
            double* c,						// wanted value
            double d						// learning rate
        );
         */
        ((p) => {
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Ariadne_String', '#board string')
            .code(0, '* ', gu('0/C/type *'))
            .code('fun', 'ae2f_Ariadne_String_revolve', '#board revolve')
            .code(0, '(');

            ((p) => {
                p
                .code('word', 'struct ', gu('0/C/struct'))
                .code('struct', 'ae2f_Ariadne_String', '#board string')
                .code(0, '* ', gu('0/C/type *'))
                .code('#', '_this', gu('0/C/function member'))
                .code(0, ',<br/>')

                .code('word', 'double', gu('0/C/type double'))
                .code(0, '* ', gu('0/C/type *'))
                .code('#', 'inputBuff', gu('0/C/function member'))
                .code(0, ',<br/>')

                .code('word', 'double', gu('0/C/type double'))
                .code(0, '* ', gu('0/C/type *'))
                .code('#', 'wantedVal', gu('0/C/function member'))
                .code(0, ',<br/>')

                .code('word', 'double ', gu('0/C/type double'))
                .code('#', 'learningRate', gu('0/C/function member'));
            })(p.tab('.'));

            p.code(0, ');');
        })(p.box('declares'));
    }

    fun['copy'] = () => {
        p = bs('copy', 'ae2f_Ariadne_String_copy');

        /**
         * struct ae2f_Ariadne_String* ae2f_Ariadne_String_copy(
                struct ae2f_Ariadne_String* a,	// source
                struct ae2f_Ariadne_String* b	// destinations
            );
         */
        ((p) => {
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Ariadne_String', '#board string')
            .code(0, '* ', gu('0/C/type *'))
            .code('fun', 'ae2f_Ariadne_String_copy', '#board copy')
            .code(0, '(');

            ((p) => {
                p
                .code('word', 'struct ', gu('0/C/struct'))
                .code('struct', 'ae2f_Ariadne_String', '#board string')
                .code(0, '* ', gu('0/C/type *'))
                .code('#', 'source', gu('0/C/function param'))

                .code(0, ',<br/>')

                .code('word', 'struct ', gu('0/C/struct'))
                .code('struct', 'ae2f_Ariadne_String', '#board string')
                .code(0, '* ', gu('0/C/type *'))
                .code('#', 'destination', gu('0/C/function param'));
            })(p.tab('.'));

            p.code(0, ');');
        })(p.box('declares'));
    }

    fun['out'] = () => {
        p = bs('out', 'ae2f_Ariadne_String_out');

        /**
         * struct ae2f_Dynamic ae2f_Ariadne_String_out(
                struct ae2f_Ariadne_String* a	// model where output buffer located
            );
         */
        ((p) => {
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Ariadne_String', '#board string')
            .code(0, '* ', gu('0/C/type *'))
            .code('fun', 'ae2f_Ariadne_String_out', '#board out')
            .code(0, '(');

            ((p) => {
                p
                .code('word', 'struct ', gu('0/C/struct'))
                .code('struct', 'ae2f_Ariadne_String', '#board string')
                .code(0, '* ', gu('0/C/type *'))
                .code('#', 'source', gu('0/C/function param'))
            })(p.tab('.'));

            p.code(0, ');');
        })(p.box('declares'));
    }

    return [fun, ['_', 'make', 're', 'free', 'forward', 'backward', 'revolve', 'copy', 'out']];
}