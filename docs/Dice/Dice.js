include('Component/box.js');
include('Component/code.js');

docs['Dice/Dice'] = (lang = args()[0], nil = 'TRANSLATED_NOT') => {
    const 
    board = document.getElementById("board"),
    gu = (th) => `https://yuisanae2f.github.io/YuiSanae2f/${args()[1] == '1' ? "index" : 'dark'}.html?${btoa(`${args()[0]} ${args()[1]} ${th}`)}`;

    let c = {}, p,  fun = {};

    /**
    struct ae2f_Dice {
        unsigned long mt[624];
        int mti;
    };
     */
    fun['_'] = () => {
        p = board.tent('Dice', 'div');
        p.tent('title', 'h1').set('Dice');
        p = p.tab('desc', 'div');

        ((p) => {
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Dice', '#board Dice');

            p.code(0, ' {');

            ((p) => {
                p
                .code('word', 'unsigned ', gu('0/C/type unsigned'))
                .code('word', 'long ', gu('0/C/type int'))
                .code(0, 'mt', gu('0/C/struct member'))

                .code(0, '[')
                .code('num', '624')
                .code(0, ']')

                .code(0, ';<br/>');

                p
                .code('word', 'int ', gu('0/C/type int'))
                .code(0, 'mti', gu('0/C/struct member'))
                .code(0, ';<br/>');
            })(p.tab('ae2f_Dice'));

            p.code(0, '};');
        })(p.box('declares'));

        c = {};
        c['en'] = `generates the random number by <a href="https://en.wikipedia.org/wiki/Mersenne_Twister#Pseudocode"><strong>Mersenne Twister</strong></a>.`;
        p.append(c[lang] ?? nil);
    }

    // struct ae2f_Dice* ae2f_Dice(struct ae2f_Dice* _this, unsigned long s);
    fun['make'] = () => {
        p = board.tent('make', 'div');
        p.tent('title', 'h1').set('ae2f_Dice');
        p = p.tab('desc', 'div');
        ((p) => {
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Dice', '#board Dice')
            .code(0, '* ', gu('0/C/type *'))
            .code('fun', 'ae2f_Dice', '#board make');

            p.code(0, '(');

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Dice', '#board Dice')
            .code(0, '* ', gu('0/C/type *'))
            .code('#', '_this', gu('0/C/function member'));

            p.code(0, ', ');

            p
            .code('word', 'unsigned ', gu('0/C/type unsigned'))
            .code('word', 'long ', gu('0/C/type int'))
            .code('#', 'seed', gu('0/C/function param'));

            p.code(0, ');');
        })(p.box('declares'));

        c = {};
        // initialises the given structure <strong>_this</strong> with a <strong>seed</strong>.
        c['en'] = `initialises the given structure <strong>_this</strong> with a <strong>seed</strong>.`;
        p.append(c[lang] ?? nil);
    }

    // struct ae2f_Dice* ae2f_Dice_(struct ae2f_Dice* _this, unsigned long* seed, int len);
    fun['make_'] = () => {
        p = board.tent('make_', 'div');
        p.tent('title', 'h1').set('ae2f_Dice_');
        p = p.tab('desc', 'div');

        ((p) => {
            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Dice', '#board Dice')
            .code(0, '* ', gu('0/C/type *'))
            .code('fun', 'ae2f_Dice_', '#board make_');

            p.code(0, '(');

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Dice', '#board Dice')
            .code(0, '* ', gu('0/C/type *'))
            .code('#', '_this', gu('0/C/function member'));

            p.code(0, ', ');

            p
            .code('word', 'unsigned ', gu('0/C/type unsigned'))
            .code('word', 'long', gu('0/C/type int'))
            .code(0, '* ', gu('0/C/type *'))
            .code('#', 'seed', gu('0/C/function param'));

            p.code(0, ', ');
            
            p
            .code('word', 'int ', gu('0/C/type int'))
            .code('#', 'len', gu('0/C/function param'));

            p.code(0, ');');
        })(p.box('declares'));

        // initialises the given structure <strong>_this</strong> with a array of <strong>seed</strong> as a length of <strong>len</strong>.
        c = {};
        c['en'] = "initialises the given structure <strong>_this</strong> with a array of <strong>seed</strong> as a length of <strong>len</strong>.";
        p.append(c[lang] ?? nil);
    }

    // unsigned long ae2f_Dice_int32(struct ae2f_Dice* _this);
    fun['int32'] = () => {
        p = board.tent('int32', 'div');
        p.tent('title', 'h1').set('ae2f_Dice_int32');
        p = p.tab('desc', 'div');

        ((p) => {
            p
            .code('word', 'unsigned ', gu('0/C/type unsigned'))
            .code('word', 'long ', gu('0/C/type int'))
            .code('fun', 'ae2f_Dice_int32', '#board int32');

            p.code(0, '(');

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Dice', '#board Dice')
            .code(0, '* ', gu('0/C/type *'))
            .code(0, '_this', gu('0/C/function param'));

            p.code(0, ');');
        })(p.box('declares'));

        // generates the random number of <strong>unsigned long</strong> from <strong>_this</strong>.
        c = {};
        c['en'] = 'generates the random number of <strong>unsigned long</strong> from <strong>_this</strong>.';
        p.append(c[lang] ?? nil);
    }

    // long ae2f_Dice_int31(struct ae2f_Dice* _this);
    fun['int31'] = () => {
        p = board.tent('int31', 'div');
        p.tent('title', 'h1').set('ae2f_Dice_int31');
        p = p.tab('desc', 'div');

        ((p) => {
            p
            .code('word', 'long ', gu('0/C/type int'))
            .code('fun', 'ae2f_Dice_int31', '#board int31');

            p.code(0, '(');

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Dice', '#board Dice')
            .code(0, '* ', gu('0/C/type *'))
            .code(0, '_this', gu('0/C/function param'));

            p.code(0, ');');
        })(p.box('declares'));

        // generates the random number of `long` from `_this`.
        c ={};
        c['en'] = 'generates the random number of <strong>long</strong> from <strong>_this</strong>.';
        p.append(c[lang] ?? nil);
    }

    // double ae2f_Dice_real(struct ae2f_Dice* _this);
    fun['real'] = () => {
        p = board.tent('real', 'div');
        p.tent('title', 'h1').set('ae2f_Dice_real');
        p = p.tab('desc', 'div');

        ((p) => {
            p
            .code('word', 'double ', gu('0/C/type double'))
            .code('fun', 'ae2f_Dice_real', '#board real');

            p.code(0, '(');

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Dice', '#board Dice')
            .code(0, '* ', gu('0/C/type *'))
            .code(0, '_this', gu('0/C/function param'));

            p.code(0, ');');
        })(p.box('declares'));

        // generates the random number of `double` from `_this`.
        c = {};
        c['en'] = 'generates the random number of <strong>double</strong> from <strong>_this</strong>.';

        p.append(c[lang] ?? nil)
    }

    // double ae2f_Dice_real_(struct ae2f_Dice* _this);
    fun['real_'] = () => {
        p = board.tent('real_', 'div');
        p.tent('title', 'h1').set('ae2f_Dice_real_');
        p = p.tab('desc', 'div');

        ((p) => {
            p
            .code('word', 'double ', gu('0/C/type double'))
            .code('fun', 'ae2f_Dice_real_', '#board real_');

            p.code(0, '(');

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Dice', '#board Dice')
            .code(0, '* ', gu('0/C/type *'))
            .code(0, '_this', gu('0/C/function param'));

            p.code(0, ');');
        })(p.box('declares'));

        c = {};
        c['en'] = 'generates the random number of <strong>double</strong> from <strong>_this</strong>.';

        p.append(c[lang] ?? nil)
    }

    // double ae2f_Dice_real_2(struct ae2f_Dice* _this);
    fun['real_2'] = () => {
        p = board.tent('real_2', 'div');
        p.tent('title', 'h1').set('ae2f_Dice_real_2');
        p = p.tab('desc', 'div');

        ((p) => {
            p
            .code('word', 'double ', gu('0/C/type double'))
            .code('fun', 'ae2f_Dice_real_2', '#board real_2');

            p.code(0, '(');

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Dice', '#board Dice')
            .code(0, '* ', gu('0/C/type *'))
            .code(0, '_this', gu('0/C/function param'));

            p.code(0, ');');
        })(p.box('declares'));

        c = {};
        c['en'] = 'generates the random number of <strong>double</strong> from <strong>_this</strong>.';

        p.append(c[lang] ?? nil)
    }

    // double ae2f_Dice_res53(struct ae2f_Dice* _this);
    fun['res53'] = () => {
        p = board.tent('res53', 'div');
        p.tent('title', 'h1').set('ae2f_Dice_res53');
        p = p.tab('desc', 'div');

        ((p) => {
            p
            .code('word', 'double ', gu('0/C/type double'))
            .code('fun', 'ae2f_Dice_res53', '#board res53');

            p.code(0, '(');

            p
            .code('word', 'struct ', gu('0/C/struct'))
            .code('struct', 'ae2f_Dice', '#board Dice')
            .code(0, '* ', gu('0/C/type *'))
            .code(0, '_this', gu('0/C/function param'));

            p.code(0, ');');
        })(p.box('declares'));

        c = {};
        c['en'] = 'generates the random number of <strong>double</strong> from <strong>_this</strong>.';

        p.append(c[lang] ?? nil)
    }

    return [fun, ['_', 'make', 'make_', 'int32', 'int31', 'real', 'real_', 'real_2', 'res53']];
}