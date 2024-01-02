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
            p = p.tent('c', 'div').array('table', [cc.value]);
        } 
        
        document.getElementById('board make desc a len value').innerHTML = cc.value;
    });

    p = board.tent('make desc a').tent('len', 'div');
    p.tent('title', 'h2').set(`<a href="#board make desc code a">a</a><a href="#board Dynamic desc code">.len</a>`);
    p.tent('value', 'div').set('0');

    // struct ae2f_Dynamic* ae2f_Dynamic_(struct ae2f_Dynamic* _this, void* val, unsigned long long len);
    p = board.tent('make_', 'div');
    p.tent('title', 'h1').set('ae2f_Dynamic_');
    p = p.tab('desc', 'div');

    c = {};
    c['ko0'] = "입력받은 크기만큼 할당을 진행한 후, ";
    c['ko1'] = '의 값으로 초기화합니다.';
    c['ko2'] = ''; c['ko3'] = '의 크기는 동적 할당을 진행하는 바이트 수로 가정합니다.';

    c['en0'] = 'initialises the allocated memory as ';
    c['en1'] = 'after allocating the memory as the size of input length in order to bytes.';
    c['en2'] = 'The size of '; c['en3'] = ' will be assumed as the same size as the allocated memory.';

    p.append((c[`${lang}0`] ?? nil));
    p.append('<strong>val</strong>');
    p.append((c[`${lang}1`] ?? nil) + '<br/>');
    p.append((c[`${lang}2`] ?? nil));
    p.append('<strong>val</strong>');
    p.append((c[`${lang}3`] ?? nil));
}