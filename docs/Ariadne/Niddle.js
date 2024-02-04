include('Component/box.js');
include('Component/code.js');

docs['Ariadne/Niddle'] = (lang = args()[0], nil = 'TRANSLATED_NOT') => {
    const
    board = document.getElementById("board"),
    gu = (th) => `https://yuisanae2f.github.io/YuiSanae2f/${args()[1] == '1' ? "index" : 'dark'}.html?${btoa(`${args()[0]} ${args()[1]} ${th}`)}`;
    bs = (tt, ttt) => {
        let rtn = board.tent(tt);
        rtn.tent('title', 'h1').set(ttt);

        return rtn.tab('desc', 'div');
    }
    let c = {}, fun = {};

    fun['_'] = () => {
        const p = bs('_', 'Niddle');

        /**
        struct ae2f_Ariadne_Niddle {
            struct ae2f_Ariadne_String* str;
            struct ae2f_Map* map;
            ae2f_Dynamic_owned outBuff;
        };
         */
        ((p) => {
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Ariadne_Niddle', '#board _')
            .code(0, ' {');

            ((p) => {
                p
                .code('word', 'struct ', gu('0/C/struct'))
                .code('struct', 'ae2f_Ariadne_String', getURL('Ariadne/String'))
                .code(0, '* ', gu('0/C/type *'))
                .code(0, 'str', gu('0/C/struct member'))
                .code(0, ';<br/>')

                .code('word', 'struct ', gu('0/C/struct'))
                .code('struct', 'ae2f_Map', getURL('Container/Map'))
                .code(0, '* ', gu('0/C/type *'))
                .code(0, 'map', gu('0/C/struct member'))
                .code(0, ';<br/>')

                .code('struct', 'ae2f_Dynamic_owned ', getURL('Container/Pair ae2f_Dynamic_owned'))
                .code(0, 'outBuff', gu('0/C/struct member'))
                .code(0, ';<br/>')
            })(p.tab('0'));

            p.code(0, '};');
        })(p.box('declares'));
    }

    fun['updateMap'] = () => {
        const p = bs('updateMap', 'ae2f_Ariadne_Niddle_updateMap');

        /**
         struct ae2f_Ariadne_Niddle* ae2f_Ariadne_Niddle_updateMap(
            struct ae2f_Ariadne_Niddle* a,	// receiver
            struct ae2f_Map* b				// new value source
        );
         */
        ((p) => {
            p
            .code('word', 'struct ')
            .code('struct', 'ae2f_Ariadne_Niddle', '#board _')
            .code(0, '* ', gu('0/C/type *'))
            .code('fun', 'ae2f_Ariadne_Niddle_updateMap', '#board updateMap')
            .code(0, '(');

            ((p) => {
                p
                .code('word', 'struct ')
                .code('struct', 'ae2f_Ariadne_Niddle', '#board _')
                .code(0, '* ', gu('0/C/type *'))
                .code('#', '_this', gu('0/C/function param'))
                .code(0, ',<br/>');

                p
                .code('word', 'struct ')
                .code('struct', 'ae2f_Map', getURL('Container/Map'))
                .code(0, '* ', gu('0/C/type *'))
                .code('#', 'map', gu('0/C/function param'));
            })(p.tab('.'));

            p.code(0, ');');
        })(p.box('declares'));
    }

    fun['revolve'] = () => {
        const p = bs('revolve', 'ae2f_Ariadne_Niddle_revolve');

        /**
         struct ae2f_Ariadne_Niddle* ae2f_Ariadne_Niddle_revolve(
            struct ae2f_Ariadne_Niddle* a,	// receiver
            double b						// learning rate
        );
         */
        ((p) => {
            p
            .code('word', 'struct ')
            .code('struct', 'ae2f_Ariadne_Niddle', '#board _')
            .code(0, '* ', gu('0/C/type *'))
            .code('fun', 'ae2f_Ariadne_Niddle_revolve', '#board revolve')
            .code(0, '(');

            ((p) => {
                p
                .code('word', 'struct ')
                .code('struct', 'ae2f_Ariadne_Niddle', '#board _')
                .code(0, '* ', gu('0/C/type *'))
                .code('#', '_this', gu('0/C/function member'))
                .code(0, ',<br/>')

                .code('word', 'double ', gu('0/C/type double'))
                .code('#', 'learningRate', gu('0/C/function member'));
            })(p.tab('.'))

            p.code(0, ');');
        })(p.box('declares'));
    }

    fun['get'] = () => {
        const p = bs('get', 'ae2f_Ariadne_Niddle_get');

        /**
         * ae2f_Dynamic_owned* ae2f_Ariadne_Niddle_get(
                struct ae2f_Ariadne_Niddle* a,	// receiver
                struct ae2f_Dynamic* b			// input value
            );
         */
        ((p) => {
            p
            .code('struct', 'ae2f_Dynamic_owned', getURL('Container/Pair ae2f_Dynamic_owned'))
            .code(0, '* ', gu('0/C/type *'))
            .code('fun', 'ae2f_Ariadne_Niddle_revolve', '#board revolve')
            .code(0, '(');

            ((p) => {
                p
                .code('word', 'struct ', gu('0/C/struct'))
                .code('struct', 'ae2f_Ariadne_Niddle', '#board _')
                .code(0, '* ', gu('0/C/type *'))
                .code('#', '_this', gu('0/C/function member'))
                .code(0, ',<br/>');

                p
                .code('word', 'struct ', gu('0/C/struct'))
                .code('struct', 'ae2f_Dynamic', getURL('Container/Dynamic'))
                .code(0, '* ', gu('0/C/type *'))
                .code('#', 'intputValue', gu('0/C/function member'));
            })(p.tab('0', 'div'));

            p.code(0, ')');
        })(p.box('declares'));
    }

    return [fun, ['_', 'updateMap', 'revolve', 'get']];
}