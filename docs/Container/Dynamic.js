include('Component/box.js');
include('Component/code.js');
include('Component/array.js');
include('Component/getASCII.js');

docs['Container/Dynamic'] = function(lang = args()[0], nil = 'TRANSLATED_NOT') {
    const 
    board = document.getElementById("board");
    let c = {}, fun = {}, p;

    const gu = (th) => `https://yuisanae2f.github.io/YuiSanae2f/${args()[1] == '1' ? "index" : 'dark'}.html?${btoa(`${args()[0]} ${args()[1]} ${th}`)}`;

    fun['_'] = () => {
        p = board.tent('Dynamic', 'div');
        p.tent('title', 'h1').set('Dynamic');

        c = [{}, {}, {}, {}];
        c[0]['ko'] = '메모리를 컴파일 전이 아닌 실행 중에 추가로 할당하고 싶을 경우 동적 할당을 사용합니다.';
        c[1]['ko'] = '기존의 동적 할당 ';
        c[2]['ko'] = '은 바이트 단위를 입력받아 그만큼 메모리를 할당합니다.';
        c[3]['ko'] = '본 구조체는 할당된 메모리의 크기와 메모리의 주소를 저장하기 위하여 사용됩니다.';
    
        c[0]['en'] = 'Dynamic allocation is for the situation when the additional memory is needed on running the programme.';
        c[1]['en'] = 'The existing runtime memory allocating function, ';
        c[2]['en'] = ' allocates the memory in the size of the received value in order to bytes.';
        c[3]['en'] = 'This structure is to store the address and size of the allocated memory.';
    
        p = p.tab('desc', 'div');
        p.append((c[0][lang] ?? nil) + '<br/>');
        p.append((c[1][lang] ?? nil));
        
        p.append(`<a href="${gu('0/C/stdlib.h/malloc')}">malloc()</a>`);
    
        p.append((c[2][lang] ?? nil) + '<br/>');
        p.append((c[3][lang] ?? nil));
    
        // Dynamic 코드
        p = p.box('code');
        p.code('word', 'struct ', gu(`0/C/struct`));
        p.code('struct', 'ae2f_Dynamic ', '#board Dynamic');
        p.code('', '{<br/>');
        p = p.tab('tab');
        p.code('word', 'union ', gu("0/C/struct union"));
        p.code('class', 'ae2f_Unit ', getURL('Container/Unit'));
        p.code('', 'c;<br/>', gu('0/C/struct member'));
        p.code('class', 'uint64_t ', gu('0/C/h/stdint uint64_t'));
        p.code('', 'len;', gu('0/C/struct member'));
        p = board.tent('Dynamic desc code');
        p.code('', '};');
    }

    // struct ae2f_Dynamic* ae2f_Dynamic(struct ae2f_Dynamic* _this, unsigned long long len);
    function make(id, p) {
        p = p.tent(id, 'span');
        p.code('word', 'struct ', gu(`0/C/struct`));
        p.code('class', 'ae2f_Dynamic ', '#board Dynamic');
        p.tent('a', 'span').code('var', 'a', gu('0/var'));
        p.code('', ';<br/>');
        p.code('fun', 'ae2f_Dynamic', '#board make');
        p.code('', '(');
        p.code('', '&', gu('0/C/operator &/0'));
        p.code('var', 'a', '#board make desc code a');
        p.code('', ', ');
        
        let i = p.tent('len', 'input', gu('0/C/function member'));
        i.pos().type = 'number';

        p.code('', ');');
        return;
    }
    fun['make'] = () => {
        p = board.tent('make', 'div');
        p.tent('title', 'h1').set('ae2f_Dynamic');
    
        p = p.tab('desc');
        c = {};
        c['ko0'] = '입력받은 바이트 크기만큼 동적 할당을 수행한 뒤 ';
        c['ko1'] = '의 위치에 그 정보를 저장합니다.';
        c['ko2'] = '이후 입력받은 '; c['ko3'] = '의 위치를 그대로 반환합니다.';
        c['ko4'] = '값의 초기화 작업은 진행하지 않습니다.';
    
        c['en0'] = "allocates the memory as the bytes of value which is input and stores the information at the address of ";
        c['en1'] = '.';
        c['en2'] = 'returns the given address of ';
        c['en3'] = '.';
        c['en4'] = 'does not initialise the allocated memory.';
        
        ((p) => {
            // struct ae2f_Dynamic* ae2f_Dynamic(struct ae2f_Dynamic* _this, unsigned long long len);
            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('struct', 'ae2f_Dynamic', "#board Dynamic");
            p.code('', '* ', gu('0/C/type *'));

            p.code('fun', 'ae2f_Dynamic', '#board make');
            p.code('', '(');

            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('struct', 'ae2f_Dynamic', "#board Dynamic");
            p.code('', '* ', gu('0/C/type *'));

            p.code('pre', '_this', gu('0/C/function param'));
            p.code('', ', ');

            p.code('class', 'uint64_t ', gu('0/C/h/stdint uint64_t'));

            p.code('pre', 'len', gu('0/C/function param'));

            p.code('', ');');
        })(p.box('declares'));

        p.append((c[`${lang}0`] ?? nil));
        p.append(`<a href="#board Dynamic"><strong>ae2f_Dynamic</strong></a>`);
        p.append((c[`${lang}1`] ?? nil) + '<br/>');
        p.append((c[`${lang}2`] ?? nil));
        p.append(`<a href="#board Dynamic"><strong>ae2f_Dynamic</strong></a>`);
        p.append((c[`${lang}3`] ?? nil) + '<br/>');
        p.append((c[`${lang}4`] ?? nil));
    
        make('', p.box('code'));
        p = p.tent('a', 'div').tent('c', 'div').tent('title', 'h2');
        p.append('<a href="#board make desc code a">a</a>');
        p.append('<a href="#board Dynamic desc code">.c</a>');
    
        document.getElementById('board make desc code len').addEventListener('input', () => {
            const cc = document.getElementById('board make desc code len');        
            if(cc.value <= 0) {
                let d = document.getElementById('board make desc a c table');
                if (d != undefined) {
                    d.remove();
                }
                cc.value = 0;
            } else {
                let p = board.tent('make desc a');
                p = p.tent('c', 'div').array('table', [cc.value], (c) => 'undefined');
            } 
            
            document.getElementById('board make desc a len value').innerHTML = cc.value;
        });
    
        p = board.tent('make desc a').tent('len', 'div');
        p.tent('title', 'h2').set(`<a href="#board make desc code a">a</a><a href="#board Dynamic desc code">.len</a>`);
        p.tent('value', 'div').set('0');
    };

    // struct ae2f_Dynamic* ae2f_Dynamic_(struct ae2f_Dynamic* _this, void* val, unsigned long long len);
    function make_(id, p) {
        const pp = p.id.split(' ')[1];
        p = p.tent(id, 'span');
        p.code('word', 'struct ', gu(`0/C/struct`));
        p.code('class', 'ae2f_Dynamic ', '#board Dynamic');
        p.code('var', 'a', gu('0/var'));
        p.code('', ';<br/>');
        p.code('fun', 'ae2f_Dynamic_', `#board make_`);
        p.code('', '(');
        p.code('', '&', gu('0/C/operator &/0'));
        p.code('var', 'a', `#board ${pp} desc code a`);
        p.code('', ', ');
        
        let i = p.tent('val', 'input');
        p.code('', ', ');
        i = board.tent(`${pp} desc code${id ? ` ${id}` : id}`, 'span').tent('len', 'input');
        i.pos().type = 'number';

        p.code('', ');');
        return;
    }
    fun['make_'] = () => {
        // make_
        p = board.tent('make_', 'div');
        p.tent('title', 'h1').set('ae2f_Dynamic_');
        p = p.tab('desc', 'div');

        ((p) => {
            // struct ae2f_Dynamic* ae2f_Dynamic_(struct ae2f_Dynamic* _this, void* val, unsigned long long len);
            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('struct', 'ae2f_Dynamic', "#board Dynamic");
            p.code('', '* ', gu('0/C/type *'));

            p.code('fun', 'ae2f_Dynamic_', '#board make_');

            p.code("", '(');

            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('struct', 'ae2f_Dynamic', "#board Dynamic");
            p.code('', '* ', gu('0/C/type *'));
            p.code('pre', '_this', gu("0/C/function param"));

            p.code('', ', ');

            p.code('word', 'void', gu('0/C/type void'));
            p.code('', '* ', gu('0/C/type *'));
            p.code('pre', 'val', gu("0/C/function param"));

            p.code('', ', ');

            p.code('class', 'uint64_t ', gu('0/C/h/stdint uint64_t'));
            p.code('pre', 'len', gu("0/C/function param"));

            p.code("", ');');
        })(p.box('declares'));

        c = {};
        c['ko0'] = "입력받은 크기만큼 할당을 진행한 후, ";
        c['ko1'] = '의 값으로 초기화합니다.';
        c['ko2'] = ''; c['ko3'] = '의 크기는 동적 할당을 진행하는 바이트 수로 가정합니다.';

        c['en0'] = 'initialises the allocated memory as ';
        c['en1'] = ' after allocating the memory as the size of input length in order to bytes.';
        c['en2'] = 'The size of '; c['en3'] = ' will be assumed as the same size as the allocated memory.';

        p.append((c[`${lang}0`] ?? nil));
        p.append('<strong>val</strong>');
        p.append((c[`${lang}1`] ?? nil) + '<br/>');
        p.append((c[`${lang}2`] ?? nil));
        p.append('<strong>val</strong>');
        p.append((c[`${lang}3`] ?? nil));

        make_('', p.box('code'));
        
        // c
        p = p.tent('a', 'div').tent('c', 'div');
        p.tent('title', 'h2').set(`<a href="#board make desc code a">a</a><a href="#board Dynamic desc code">.c</a>`);
        p.tent('value', 'div');


        for(const c of ["len", 'val']) {
            document.getElementById(`board make_ desc code ${c}`).addEventListener('input', () => {
                const cc = document.getElementById('board make_ desc code len');
                if(cc.value <= 0) {
                    let d = document.getElementById('board make_ desc a c table');
                    if (d != undefined) {
                        d.remove();
                    }
                    cc.value = 0;
                } else {
                    const cp = getASCII(document.getElementById('board make_ desc code val').value);
                    board.tent('make_ desc a').tent('c', 'div').array('table', [cc.value], (i) => `<div style="font-size: 9px; text-align: center; opacity: ${(cp.at(i) != undefined) * 100};">'${cp.at(i) ? String.fromCharCode(cp.at(i)) : '\\0'}'</div><div style="text-align: center;">${cp.at(i)}</div>`);
                } document.getElementById('board make_ desc a len value').innerHTML = cc.value;
            }); // getASCII
        }

        // len
        p = board.tent('make_ desc a').tent('len', 'div');
        p.tent('title', 'h2').set(`<a href="#board make_ desc code a">a</a><a href="#board Dynamic desc code">.len</a>`);
        p.tent('value', 'div').set('0'); 
    };

    function copy(id, p) {
        p = p.tent(id, 'span');

        p.code('fun', 'ae2f_Dynamic_free', '#board free');
        p.code('', '(');
        p.code('', '&', gu('0/C/operator &/0'));
        p.code('var', 'a', gu('0/var'));
        p.code('', ");<br/><br/>");

        p.code('word', 'struct ', gu('0/C/struct'));
        p.code('class', 'ae2f_Dynamic ', '#board Dynamic title');
        p.tent('b', 'span').code('var', 'b ', gu('0/var'));
        p.code('', '= ', gu('0/C/operator ='));

        p.code('fun', 'ae2f_Dynamic_copy', '#board copy');
        p.code('', '(');
        p.code('', '&', gu('0/C/operator &/0'));
        p.code('var', 'a', gu('0/var'));
        p.code('', ');');
    }
    fun['copy'] = () => {
                // struct ae2f_Dynamic ae2f_Dynamic_copy(struct ae2f_Dynamic* _this);
        p = board.tent('copy', 'div');
        p.tent('title', 'h1').set('ae2f_Dynamic_copy');
        p = p.tab('desc', 'div');
        
        ((p)=>{
            // struct ae2f_Dynamic ae2f_Dynamic_copy(struct ae2f_Dynamic* _this);
            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('struct', 'ae2f_Dynamic ', '#board Dynamic');
            p.code('fun', 'ae2f_Dynamic_copy', '#board copy');
            p.code('0', '(');

            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('struct', 'ae2f_Dynamic', '#board Dynamic');
            p.code('', '*', gu('0/C/type *'));

            p.code('pre', '_this', gu('0/C/function param'));

            p.code('', ');');
        })(p.box('declares'));

        c = {};
        c['ko0'] = "입력받은 구조체의 크기만큼 새로 메모리를 할당한 후 입력받은 구조체의 값으로 초기화시킵니다.";
        c['ko1'] = "새로이 할당받은 메모리의 정보를 반환합니다.";

        c['en0'] = "allocates the memory as the size as structure input and initialises as its value.";
        c['en1'] = "returns a new structure that contains the information of newly allocated memory.";

        p.append((c[lang + 0] ?? nil) + '<br/>');
        p.append((c[lang + 1] ?? nil));

        make_('', p.box('code'));
        p.box('code').code('', "<br/><br/>");
        copy('', p.box('code'));

        p = p.tent('a', 'div');
        p.tent('c', 'div').tent('title', 'h2').set('<a href="#board copy desc code a">a</a><a href="#board Dynamic desc code">.c</a>');
        c = {};
        c['ko'] = "메모리는 해제된 상태입니다.";
        c['en'] = "The allocated memory has been freed.";
        p.tent('c', 'div').tent('value', 'div').set(`<a href='#board free'>${c[lang] ?? nil}</a>`);

        p.tent('len', 'div').tent('title', 'h2').set('<a href="#board copy desc code a">a</a><a href="#board Dynamic desc code">.len</a>');
        p.tent('len', 'div').tent('value', 'div').set('0');

        p = board.tent('copy desc').tent('b', 'div');
        p.tent('c', 'div').tent('title', 'h2').set('<a href="#board copy desc code b">b</a><a href="#board Dynamic desc code">.c</a>');
        p.tent('c', 'div').tent('value', 'div');

        p.tent('len', 'div').tent('title', 'h2').set('<a href="#board copy desc code b">b</a><a href="#board Dynamic desc code">.len</a>');
        p.tent('len', 'div').tent('value', 'div');

        for(const c of ["len", 'val']) {
            document.getElementById(`board copy desc code ${c}`).addEventListener('input', () => {
                const cc = document.getElementById('board copy desc code len');

                if(cc.value <= 0) {
                    let d = document.getElementById('board copy desc b c table');
                    if (d != undefined) {
                        d.remove();
                    }
                    cc.value = 0;
                } else {
                    const c = getASCII(document.getElementById('board copy desc code val').value);
                    board.tent(`copy desc b`).tent('c', 'div').array('table', [cc.value], (i) => {
                        return `<div style="font-size: 9px; opacity: ${(c.at(i) != undefined) * 100}; text-align: center;">'${ c    .at(i) ? String.fromCharCode(c.at(i)) : '\\0' }'</div><div style="text-align: center;">${c.at(i)}</div>`;
                    });
                } document.getElementById('board copy desc b len value').innerHTML = cc.value;
            });
        }
    };

    function free(id, p) {
        p = p.tent(id, 'span');

        p.code('fun', 'ae2f_Dynamic_free', '#board free');
        p.code('', '(');
        p.code('', '&', gu('0/C/operator &/0'));
        p.code('var', 'a', gu('0/var'));
        p.code('', ");");
    }
    fun['free'] = () => {
        // struct ae2f_Dynamic* ae2f_Dynamic_free(struct ae2f_Dynamic* _this);
        p = board.tent('free', 'div');
        p.tent('title', 'h1').set('ae2f_Dynamic_free');
        p = p.tab('desc', 'div');

        ((p) => {
            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('class', 'ae2f_Dynamic', '#board Dynamic');
            p.code('', '* ', gu('0/C/type *'));
            p.code('fun', 'ae2f_Dynamic_free', '#board free');
            p.code('', '(');

            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('class', 'ae2f_Dynamic', '#board Dynamic');
            p.code('', '* ', gu('0/C/type *'));

            p.code('pre', '_this', gu('0/C/function param'));

            p.code('', ');');
        })(p.box('declares'));

        c = {};
        c['ko0'] = "메모리를 할당한 이후에는 해제하기 전까지 계속 유지됩니다.";
        c['ko1'] = "이 함수는 "; c['ko2'] = "에 저장된 메모리 주소를 해제하고 길이를 0으로 초기화해 저장합니다.";

        c['en0'] = "The memory which has been allocated lasts until be freed.";
        c['en1'] = "This function frees the memory which is stored in "; c['en2'] = " and sets the lengths as zero.";

        p.append(`${c[`${lang}0`] ?? nil}<br/>`);
        p.append(`${c[`${lang}1`] ?? nil}`);
        p.append(`<a href="#board Dynamic"><strong>ae2f_Dynamic</strong></a>`);
        p.append(`${c[`${lang}2`] ?? nil}`);

        c = {};
        c['ko'] = '작업을 수행합니다.';
        c['en'] = 'Operating';

        p.box('code').code('word', 'struct ');
        p.box('code').code('class', 'ae2f_Dynamic ');
        p.box('code').code('var', 'a');
        p.box('code').code('', ';<br/>');

        p.box('code').code('//', `<br/>// ${c[lang] ?? nil}<br/><br/>`);
        free('', p.box('code'));
    }

    function re(id, p) {
        p = p.tent(id, 'span');
        p.code('fun', 'ae2f_Dynamic_re', '#board re');
        p.code('', '(');
        p.code('', '&', gu('0/C/operator &/0'));
        p.code('var', 'a', gu('0/var'));
        p.code('', ', ');
        
        p.tent('val', 'input').pos().type = 'number';
        p.code('', ');');
    }
    fun['re'] = () => {
        p = board.tent('re', 'div');
        p.tent('title', 'h1').set('ae2f_Dynamic_re');
    
        p = p.tab('desc', 'div');
        
        // struct ae2f_Dynamic* ae2f_Dynamic_re(struct ae2f_Dynamic* _this, unsigned long long len);
        ((p) => {
            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('struct', 'ae2f_Dynamic', '#board Dynamic');
            p.code('', '* ', gu("0/C/type *"));
            p.code('fun', 'ae2f_Dynamic_re', '#board re');

            p.code('', '(');

            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('struct', 'ae2f_Dynamic', '#board Dynamic');
            p.code('', '* ', gu("0/C/type *"));
            p.code('pre', '_this', gu('0/C/function param'));
            
            p.code('', ', ');
            p.code('class', 'uint64_t ', gu('0/C/h/stdint uint64_t'));
            p.code('pre', 'len', gu('0/C/function param'));

            p.code('', ');');
        })(p.box('declares'));

        c = {};
        c['ko'] = "할당된 메모리의 내용을 유지하며 크기를 변경합니다.";
        c['en'] = "Resize the memory while sustaining its value.";
    
        p.append(`${c[`${lang}`] ?? nil}<br/>`);
    
        make_('mk', p.box('code'));
        p.box('code').code('', '<br/>');
        re('', p.box('code'));
    
        for(c of ['c', 'len']) {
            const cp = p.tent('a', 'div').tent(c, 'div');
            cp.tent('title', 'h2').append('<a href="#board re desc code a">a</a>');
            cp.tent('title', 'h2').append(`<a href="#board Dynamic desc code">.${c}</a>`);
    
            cp.tent('value', 'div');
        }
    
        for(const id of ['mk len', 'mk val', 'val']) {
            // ev
            document.getElementById(`board re desc code ${id}`).addEventListener('input', () => {
                const cc = document.getElementById('board re desc code mk len');
                const cd = document.getElementById('board re desc code val');
                
                if(cc.value < 0) cc.value = 0;
    
                if(cd.value <= 0) {
                    let d = document.getElementById('board re desc a c table');
                    if (d != undefined) {
                        d.remove();
                    }
                    cd.value = 0;
                } else {
                    const c = getASCII(document.getElementById('board re desc code mk val').value);
                    board
                        .tent('re desc a')
                        .tent('c', 'div')
                        .array(
                            'table',
                            [cd.value], 
                            (i) => `<div style="font-size: 9px; opacity: ${(c.at(i) != undefined && parseInt(cc.value) > parseInt(i)) * 100}; text-align: center;">'${ c.at(i) ? String.fromCharCode(c.at(i)) : '\\0' }'</div><div style="text-align: center;">${parseInt(cc.value) <= parseInt(i) ? 'undefined' : c.at(i)}</div>`
                    );
                }
                
                document.getElementById('board re desc a len value').innerHTML = cd.value;
            });
        }
    }

    function re_(id, p) {
        const pp = p.id.split(' ')[1];
        p = p.tent(id, 'span');
        p.code('fun', 'ae2f_Dynamic_re_', `#board re_`);
        p.code('', '(');
        p.code('', '&', gu('0/C/operator &/0'));
        p.code('var', 'a', `#board ${pp} desc code a`);
        p.code('', ', ');
        
        let i = p.tent('val', 'input');
        p.code('', ', ');
        i = board.tent(`${pp} desc code${id ? ` ${id}` : id}`, 'span').tent('len', 'input');
        i.pos().type = 'number';

        p.code('', ');');
        return;
    } 
    fun['re_'] = () => {
        // struct ae2f_Dynamic* ae2f_Dynamic_re_(struct ae2f_Dynamic* _this, void* arr, unsigned long long len);
        p = board.tent('re_', 'div');
        p.tent('title', 'h1').set('ae2f_Dynamic_re_');
        p = p.tab('desc', 'div');
        
        ((p) => {
            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('class', 'ae2f_Dynamic', '#board Dynamic')
            p.code('', '* ', gu('0/C/type *'));
            
            p.code('fun', 'ae2f_Dynamic_re_', '#board re_');
            p.code('', '(');

            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('class', 'ae2f_Dynamic', '#board Dynamic');
            p.code('', '* ', gu('0/C/type *'));
            p.code('pre', '_this', gu('0/C/function param'));

            p.code('', ', ');

            p.code('word', 'void', gu('0/C/type void'));
            p.code('', '* ', gu('0/C/type *'));
            p.code('pre', 'arr', gu('0/C/function param'));

            p.code('', ', ');

            p.code('class', 'uint64_t ', gu('0/C/h/stdint uint64_t'));
            p.code('pre', 'len', gu('0/C/function param'));

            p.code('', ');');
        })(p.box('declares'));

        c = {};
        c['ko0'] = '메모리를 새로운 크기로 할당하며, 새로 할당한 위치를 입력받은 포인터에 저장된 값으로 초기화합니다.';
        c['ko1'] = '메모리에 저장되어 있던 기존값은 해제됩니다.';
        
        c['en0'] = 'resizes the memory and initailises the newly allocated pointer as the value from pointer parameter.';
        c['en1'] = 'The value from existing memory will be freed automatically.';

        p.append((c[`${lang}0`] ?? nil) + "<br/>");
        p.append((c[`${lang}1`] ?? nil));

        make_('mk', p.box('code')); p.box('code').append('<br/>');
        re_('', p.box('code'));

        // c
        p = p.tent('a', 'div').tent('c', 'div');
        p.tent('title', 'h2').set(`<a href="#board re_ desc code a">a</a><a href="#board Dynamic desc code">.c</a>`);
        p.tent('value', 'div');


        for(const c of ["len", 'val']) {
            document.getElementById(`board re_ desc code ${c}`).addEventListener('input', () => {
                const cc = document.getElementById('board re_ desc code len');
                if(cc.value <= 0) {
                    let d = document.getElementById('board re_ desc a c table');
                    if (d != undefined) {
                        d.remove();
                    }
                    cc.value = 0;
                } else {
                    const cp = getASCII(document.getElementById('board re_ desc code val').value);
                    board.tent('re_ desc a').tent('c', 'div').array('table', [cc.value], (i) => `<div style="font-size: 9px; text-align: center; opacity: ${(cp.at(i) != undefined) * 100};">'${cp.at(i) ? String.fromCharCode(cp.at(i)) : '\\0'}'</div><div style="text-align: center;">${cp.at(i)}</div>`);
                } document.getElementById('board re_ desc a len value').innerHTML = cc.value;
            }); // getASCII
        }

        // len
        p = board.tent('re_ desc a').tent('len', 'div');
        p.tent('title', 'h2').set(`<a href="#board re_ desc code a">a</a><a href="#board Dynamic desc code">.len</a>`);
        p.tent('value', 'div').set('0');   
    }

    function weigh(id, p) {
        p = p.tent(id, 'span');
        p.code('fun', 'ae2f_Dynamic_weigh', '#board weigh');
        p.code('', '(');

        const iin = ((id, pp) => {
            pp.tent(id, 'input');
        });

        iin('a', p);
        p.code('', ', ');
        iin('b', p);

        p.code('', ');');
    }
    fun['weigh'] = () => {
        // char ae2f_Dynamic_weigh(struct ae2f_Dynamic a, struct ae2f_Dynamic b);
        p  = board.tent('weigh', 'div');
        p.tent('title', 'h1').set('ae2f_Dynamic_weigh');
        p = p.tab('desc', 'div');

        ((p) => {
            p.code('word', 'char ', gu('0/C/type char'));
            p.code('fun', 'ae2f_Dynamic_weigh', '#board weigh');
            p.code('', '(');

            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('class', 'ae2f_Dynamic', '#board Dynamic');
            p.code('', '* ', gu('0/C/type *'));
            p.code('pre', 'a', gu('0/C/function param'));

            p.code('', ', ');

            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('class', 'ae2f_Dynamic', '#board Dynamic');
            p.code('', '* ', gu('0/C/type *'));
            p.code('pre', 'b', gu('0/C/function param'));
            p.code('', ');');
        })(p.box('declares'));

        c = {};
        c['ko0'] = '입력받은 두 데이터를 비교합니다.';
        c['ko1'] = '두 번째 데이터에서 첫 번째 데이터의 뺄셈을 수행할 경우의 부호를 반환합니다.';
        c['ko2'] = '반환값의 절댓값은 0 혹은 1로 고정되며, 반환값이 0인 경우는 두 데이터가 일치할 경우입니다.';

        c['en0'] = 'compares the two input data.';
        c['en1'] = 'returns the number with the sign of the result of a subtraction of the second data and the first one.';
        c['en2']
        = 'The absolute value of the return will be fixed as <strong>0</strong> or <strong>1</strong>.<br>';
        + "The case of zero means that two data are the same.";

        p.append((c[`${lang}0`] ?? nil) + '<br/>');
        p.append((c[`${lang}1`] ?? nil) + '<br/>');
        p.append((c[`${lang}2`] ?? nil));
        
        weigh('', p.box('code'));

        p = p.tent('return', 'div');
        c = {};
        c['ko'] = "반환값";
        c['en'] = "Return Value";
        p.tent('title', 'h2').set(c[lang] ?? nil);

        ((p) => {
            for(const k of "ab") {
                document.getElementById(`board weigh desc code ${k}`).addEventListener('input', () => {
                    const com = { 
                        a: document.getElementById('board weigh desc code a').value,
                        b: document.getElementById('board weigh desc code b').value
                    };

                    p.set(((a, b) => {
                        if(a.length != b.length) {
                            if (a.length > b.length) return -1;
                            else return 1;
                        }

                        for (let i = 0; i < a.length; i++) {
                            if(a.at(i) == b.at(i)) continue;
                            else if (a.at(i) > b.at(i)) return -1;
                            else return 1;
                        } return 0;
                    })(getASCII(com.a), getASCII(com.b)));
                });
            } p.set('0');
        })(p.tent('desc', 'div'));
    }

    fun['puts'] = () => {
        // unsigned long long ae2f_Dynamic_puts(struct ae2f_Dynamic* _this, struct ae2f_Dynamic another);
        p = board.tent('puts', 'div');
        p.tent('title', 'h1').set('ae2f_Dynamic_puts');
        p = p.tab('desc');

        ((p) => {
            p.code('struct', 'uint64_t ', gu('0/C/h/stdint uint64_t'));

            p.code('fun', 'ae2f_Dynamic_puts', '#board puts');
            p.code('', '(');
            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('struct', 'ae2f_Dynamic', '#board Dynamic');
            p.code('', '* ', gu('0/C/type *'));
            p.code('pre', '_this', gu('0/C/function param'));
            p.code('', ', ');

            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('struct', 'ae2f_Dynamic', '#board Dynamic');
            p.code(0, '* ', gu('0/C/type *'));
            p.code('pre', 'another', gu('0/C/function param'));

            p.code('', ');');
        })(p.box('declares'));

        c = {};
        c['ko0'] = "메모리를 새로 할당하지 않고 기존 메모리에 원하는 값을 새로 대입합니다.";
        c['en0'] = 'sets the value of the existing memory.';

        c['ko1'] = '<strong>_this</strong>에 <strong>another</strong>의 값을 복사합니다.';
        c['en1'] = 'copies the value of <strong>another</strong> to <strong>_this</strong>.';
        p.append((c[lang + '0'] ?? nil) + '<br/>');
        p.append(c[lang + '1'] ?? nil);
    }
    return [fun, ['_', 'make', 'make_', 'copy', 'free', 're', 're_', 'weigh', 'puts']];
}