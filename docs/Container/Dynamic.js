include('Component/box.js');
include('Component/code.js');
include('Component/array.js');

docs['Container/Dynamic'] = function(lang = args()[0], nil = 'TRANSLATED_NOT') {
    const board = document.getElementById("board");
    let c = {};
    let p = board.tent('Dynamic', 'div');

    const gu = (th) => `https://yuisanae2f.github.io/YuiSanae2f/${args()[1] == '1' ? "index" : 'dark'}.html?${btoa(`${args()[0]} ${args()[1]} ${th}`)}`;

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
    p.code('word', 'union ', gu("0/C/union"));
    p.code('class', 'ae2f_Unit ', getURL('Container/Unit'));
    p.code('', 'c;<br/>');
    p.code('word', 'unsigned ', gu('0/C/unsigned'));
    p.code('word', 'long ', gu("0/C/long"));
    p.code('word', 'long ', gu("0/C/type/int long"));
    p.code('', 'len;');
    p = board.tent('Dynamic desc code');
    p.code('', '};');

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
    c['en4'] = 'does not initialise the allocated memory.'
    
    p.append((c[`${lang}0`] ?? nil));
    p.append(`<a href="#board Dynamic"><strong>ae2f_Dynamic</strong></a>`);
    p.append((c[`${lang}1`] ?? nil) + '<br/>');
    p.append((c[`${lang}2`] ?? nil));
    p.append(`<a href="#board Dynamic"><strong>ae2f_Dynamic</strong></a>`);
    p.append((c[`${lang}3`] ?? nil) + '<br/>');
    p.append((c[`${lang}4`] ?? nil));

    // struct ae2f_Dynamic* ae2f_Dynamic(struct ae2f_Dynamic* _this, unsigned long long len);
    function make(id, p) {
        p = p.tent(id, 'span');
        p.code('word', 'struct ', gu(`0/C/struct`));
        p.code('class', 'ae2f_Dynamic ', '#board Dynamic');
        p.tent('a', 'span').code('var', 'a', gu('0/var'));
        p.code('', ';<br/>');
        p.code('fun', 'ae2f_Dynamic', '#board make');
        p.code('', '(');
        p.code('', '&', gu('0/C/& 0'));
        p.code('var', 'a', '#board make desc code a');
        p.code('', ', ');
        
        let i = p.tent('len', 'input');
        i.pos().type = 'number';

        p.code('', ');');
        return;
    }

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
            p = p.tent('c', 'div').array('table', [cc.value], (c) => 'NaN');
        } 
        
        document.getElementById('board make desc a len value').innerHTML = cc.value;
    });

    p = board.tent('make desc a').tent('len', 'div');
    p.tent('title', 'h2').set(`<a href="#board make desc code a">a</a><a href="#board Dynamic desc code">.len</a>`);
    p.tent('value', 'div').set('0');

    // make_
    p = board.tent('make_', 'div');
    p.tent('title', 'h1').set('ae2f_Dynamic_');
    p = p.tab('desc', 'div');

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
        p.code('', '&', gu('0/C/& 0'));
        p.code('var', 'a', `#board ${pp} desc code a`);
        p.code('', ', ');
        
        let i = p.tent('val', 'input');
        p.code('', ', ');
        i = board.tent(`${pp} desc code`, 'span').tent('len', 'input');
        i.pos().type = 'number';

        p.code('', ');');
        return;
    } make_('', p.box('code'));
    
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
                let p = board.tent('make_ desc a');
                p = p.tent('c', 'div').array('table', [cc.value], (i) => { 
                    const c = document.getElementById('board make_ desc code val').value; 
                    const rtn = (i == c.length ? 0 : c.charCodeAt(i));

                    return `<div style="font-size: 9px; text-align: center; opacity: ${(rtn.toString() != 'NaN') * 100};">'${String.fromCharCode(rtn)}'</div><div>${rtn}</div>`;
                });
            } document.getElementById('board make_ desc a len value').innerHTML = cc.value;
        });
    }

    // len
    p = board.tent('make_ desc a').tent('len', 'div');
    p.tent('title', 'h2').set(`<a href="#board make_ desc code a">a</a><a href="#board Dynamic desc code">.len</a>`);
    p.tent('value', 'div').set('0'); 

    // struct ae2f_Dynamic ae2f_Dynamic_copy(struct ae2f_Dynamic* _this);
    p = board.tent('copy', 'div');
    p.tent('title', 'h1').set('ae2f_Dynamic_copy');
    p = p.tab('desc', 'div');
    
    c = {};
    c['ko0'] = "입력받은 구조체의 크기만큼 새로 메모리를 할당한 후 입력받은 구조체의 값으로 초기화시킵니다.";
    c['ko1'] = "새로이 할당받은 메모리의 정보를 반환합니다.";

    c['en0'] = "allocates the memory as the size as structure input and initialises as its value.";
    c['en1'] = "returns a new structure that contains the information of newly allocated memory.";

    p.append((c[lang + 0] ?? nil) + '<br/>');
    p.append((c[lang + 1] ?? nil));

    function copy(id, p) {

        p = p.tent(id, 'span');

        p.code('fun', 'ae2f_Dynamic_free', '#board free');
        p.code('', '(');
        p.code('', '&', gu('0/C/& 0'));
        p.code('var', 'a', gu('0/var'));
        p.code('', ");<br/><br/>");

        p.code('word', 'struct ', gu('0/C/struct'));
        p.code('class', 'ae2f_Dynamic ', '#board Dynamic title');
        p.tent('b', 'span').code('var', 'b ', gu('0/var'));
        p.code('', '= ', gu('0/C/='));

        p.code('fun', 'ae2f_Dynamic_copy', '#board copy');
        p.code('', '(');
        p.code('', '&', gu('0/C/& 0'));
        p.code('var', 'a', gu('0/var'));
        p.code('', ');');

        
    }
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
                let p = board.tent(`copy desc b`);
                p = p.tent('c', 'div').array('table', [cc.value], (i) => {
                    const c = document.getElementById('board copy desc code val').value;
                    const rtn = (i == c.length ? 0 : c.charCodeAt(i));

                    return `<div style="font-size: 9px; opacity: ${(rtn.toString() != 'NaN') * 100}; text-align: center;">'${ c.at(i) ?? '\\0' }'</div><div style="text-align: center;">${rtn}</div>`;
                });
            } document.getElementById('board copy desc b len value').innerHTML = cc.value;
        });
    }

    // struct ae2f_Dynamic* ae2f_Dynamic_free(struct ae2f_Dynamic* _this);
    p = board.tent('free', 'div');
    p.tent('title', 'h1').set('ae2f_Dynamic_free');
    p = p.tab('desc', 'div');

    c = {};
    c['ko0'] = "메모리를 할당한 이후에는 해제하기 전까지 계속 유지됩니다.";
    c['ko1'] = "이 함수는 "; c['ko2'] = "에 저장된 메모리 주소를 해제하고 길이를 0으로 초기화해 저장합니다.";

    c['en0'] = "The memory which has been allocated lasts until be freed.";
    c['en1'] = "This function frees the memory which is stored in "; c['en2'] = " and sets the lengths as zero.";

    p.append(`${c[`${lang}0`] ?? nil}<br/>`);
    p.append(`${c[`${lang}1`] ?? nil}`);
    p.append(`<a href="#board Dynamic"><strong>ae2f_Dynamic</strong></a>`);
    p.append(`${c[`${lang}2`] ?? nil}`);

    function free(id, p) {
        p = p.tent(id, 'span');

        p.code('fun', 'ae2f_Dynamic_free', '#board free');
        p.code('', '(');
        p.code('', '&', gu('0/C/& 0'));
        p.code('var', 'a', gu('0/var'));
        p.code('', ");");
    }

    c = {};
    c['ko'] = '작업을 수행합니다.';
    c['en'] = 'Operating';

    p.box('code').code('word', 'struct ');
    p.box('code').code('class', 'ae2f_Dynamic ');
    p.box('code').code('var', 'a');
    p.box('code').code('', ';<br/>');

    p.box('code').code('//', `<br/>// ${c[lang] ?? nil}<br/><br/>`);
    free('', p.box('code'));

    p = board.tent('re');
    p.tent('title', 'h1').set('ae2f_Dynamic_re');

    p = p.tab('desc', 'div');
    
    c = {};
    c['ko0'] = "";

    p.append('asdf');
}