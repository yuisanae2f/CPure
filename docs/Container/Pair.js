include('Component/box.js');
include('Component/code.js');
include('Component/array.js');
include('Component/getASCII.js');

docs['Container/Pair'] = function(lang = args()[0], nil = 'TRANSLATED_NOT') {
    const 
    board = document.getElementById("board"),
    gu = (th) => `https://yuisanae2f.github.io/YuiSanae2f/${args()[1] == '1' ? "index" : 'dark'}.html?${btoa(`${args()[0]} ${args()[1]} ${th}`)}`;

    let c = {}, p,  fun = {};

    function struct(wh) {

        wh.code('word', 'struct ', gu('0/C/struct'));
        wh.code('class', 'ae2f_Pair ', '#board Pair');
        wh.code('', '{<br/>');

        ((wh) => {
            wh.code('word', 'struct ', gu('0/C/struct'));
            wh.code('struct', 'ae2f_Dynamic ', getURL('Container/Dynamic'));
            wh.code('', 'c;<br/>', gu('0/C/struct member'));
            wh.code('word', 'struct ', gu('0/C/struct'));
            wh.code('struct', 'ae2f_Unit ', getURL('Container/Unit'));
            wh.code('', 'val;<br>', gu('0/C/struct member'));
        })(wh.tab('tab'));

        wh.code('', '};');
    }
    fun['_'] = () => {
        p = board.tent('Pair', 'div');
        p.tent('title', 'h1').set('Pair');
        p = p.tab('desc');

        c['ko0'] = "두 요소가 관계가 있음을 암시하기 위해 하나의 구조체에 묶습니다.";
        c['ko1'] = "두 자료는 메모리에 연속적으로 저장되며, ";
        c['ko2'] = "은 두 번째 메모리의 위치를 가리킵니다.";
        c['ko3'] = '편의상 왼쪽의 메모리를 <strong>키</strong>, 오른쪽의 메모리를 <strong>값</strong>이라 부르겠습니다.';
    
        c['en0'] = "Binds two data in a structure two suggest them relatable.";
        c['en1'] = "Two data will be stored successively. <br/>";
        c['en2'] = " points the second address of the second data.";
        c['en3'] = "I will call the left memory <strong>Key</strong>, and the right memory <strong>Value</strong> in order to explain the reference.";
    
        p.append(`${c[`${lang}0`] ?? nil} <br/>`);
        p.append(`${c[`${lang}1`] ?? nil}`);
        p.append(`<strong>val</strong>`);
        p.append(`${c[`${lang}2`] ?? nil}<br/>`);
        p.append(`${c[`${lang}3`] ?? nil}`); 
    
        struct(p.box('code'));
    
        ((wh) => {
            c = {};
            c["ko Key"] = "키";
            c["ko Value"] = "값";
    
            c["en Key"] = "Key";
            c["en Value"] = "Value";
    
            wh.pos().style.display = 'flex';
            wh.pos().style.width = '100%';
    
            for(const id of ["Key", "Value"]) {
                ((id) => {
                    let p = wh.tent(id, 'div');
                    p.pos().style.border = '1px solid';
                    p.pos().style.width = {Key : "60%", Value: "40%"}[id];
                    p.pos().style.textAlign = 'center';
                    p.set(c[`${lang} ${id}`] ?? id);
                })(id);
            }
        })(p.tent("image", 'div').tent('table', 'div'));
    
        ((wh) => {
            wh.set('ㄴ<strong>val</strong>');
            wh.pos().style.paddingLeft = "60%";
        })(p.tent("image", 'div').tent('pointer', 'div'));
    }
    fun['ae2f_Dynamic_owned'] = () => {
        // typedef struct ae2f_Dynamic ae2f_Dynamic_owned;
        p = board.tent('ae2f_Dynamic_owned', 'div');
        p.tent("title", 'h1').set(`ae2f_Dynamic_owned : <a href=${getURL('Container/Dynamic')}>ae2f_Dynamic</a>`);

        p = p.tab('desc', 'div');

        ((p) => {
            p.code('word', 'typedef ', gu('0/C/typedef'));
            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('class', 'ae2f_Dynamic ', getURL('Container/Dynamic'));
            p.code('class', 'ae2f_Dynamic_owned', '#board ae2f_Dynamic_owned');
            p.code('', ';');
        })(p.box('code'));

        c = {};

        c['ko'] = '이 자료형은 해당 자료가 읽기 전용임을 암시합니다.';
        c['en'] = 'declares that this data is for read-only.';
        p.append(c[lang] ?? nil);
    }
    function Pair(name, id, wh) {
        const p = wh.tent(id, 'span');
        p.code('word', 'struct ', gu('0/C/struct'));
        p.code('struct', 'ae2f_Pair ', '#board Pair');
        p.code('var', name);
        p.code('', ';');
    }
    function make(name, id, wh) {
        const p = wh.tent(id, 'span');
        p.code('fun', 'ae2f_Pair', '#board make');
        p.code('', '(');

        p.code('', '&', gu('0/C/operator &/0'));
        p.code('var', name);
        p.code('', ', ');

        p.tent('key', 'input');
        p.code('', ', ');
        p.tent('value', 'input');

        p.code('', ');');
    }
    fun['make'] = () => {
        // struct ae2f_Pair* ae2f_Pair(struct ae2f_Pair* _this, struct ae2f_Dynamic key, struct ae2f_Dynamic value);
        p = board.tent('make', 'div');
        p.tent("title", 'h1').set('ae2f_Pair');
        p = p.tab('desc', 'div');

        ((p) => {
            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('class', 'ae2f_Pair', '#board Pair');
            p.code('', '* ', gu('0/C/type *'));
            p.code('fun', 'ae2f_Pair', '#board make');
            p.code('', '(');

            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('class', 'ae2f_Pair', '#board Pair');
            p.code('', '* ', gu('0/C/type *'));
            p.code('pre', '_this', gu('0/C/function param'));
            p.code('', ', ');

            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('class', 'ae2f_Dynamic ', getURL('Container/Dynamic'));
            p.code('pre', 'key', gu('0/C/function param'));
            p.code('', ', ');

            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('class', 'ae2f_Dynamic ', getURL('Container/Dynamic'));
            p.code('pre', 'value', gu('0/C/function param'));

            p.code('', ');');
        })(p.box('declares'));

        c = {};
        c['en0'] = "initialises this structure.";
        c['ko0'] = "해당 구조체를 초기화합니다.";
        p.append((c[`${lang}0`] ?? nil));
        
        ((wh) => {
            Pair('a', '', wh);
            wh.append('<br/>');
            make('a', '', wh);
        })(p.box('code'));

        ((p) => {
            p.pos().style.width = "100%";

            ((p) => {
                p.pos().style.display = 'flex';
            })(p.tent('table', 'div'));

            ((p) => {
                p.pos().style.width = "100%";
            })(p.tent('pointer', 'div'))

            const c = {
                key: document.getElementById(`board make desc code key`),
                value: document.getElementById(`board make desc code value`)
            };

            for(const ii of ["key", 'value']) {

                document.getElementById(`board make desc code ${ii}`).addEventListener('input', () => {
                    ((p) => {
                        const r = (id) => (getASCII(c[id].value).length / (getASCII(c.key.value).length + getASCII(c.value.value).length) * 100);
                        for(const as of ['key', 'value']) {
                            p.pos().style.width = `${r(as)}%`;
                            p.array(as, [getASCII(c[as].value).length], (cc) => getASCII(c[as].value).at(cc));
                        }

                        ((wh) => {
                            // board make desc result table key
                            wh.set('ㄴval');
                            wh.pos().style.marginLeft = `${p.tent('key').pos().offsetWidth}px`;
                        })(board.tent('make desc result pointer', 'div').tent('mouse', 'div'));

                        board.tent('make desc result pointer', 'div').pos().style.display = 'flex';
                    })(p.tent('table', 'div'));
                });
            }
        })(p.tent('result', 'div'));
    }
    fun['make_'] = () => {
        p = board.tent('make_', 'div');
        p.tent("title", 'h1').set('ae2f_Pair_');
        p = p.tab('desc');
        
        ((p) => {
            // struct ae2f_Pair* ae2f_Pair_(struct ae2f_Pair* _this, void* key, unsigned long long kLen, void* val, unsigned long long vLen);
            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('class', 'ae2f_Pair', '#board Pair');
            p.code('', '* ', gu('0/C/type *'));
            p.code('fun', 'ae2f_Pair_', '#board make_');
            p.code('', '(');

            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('class', 'ae2f_Pair', '#board Pair');
            p.code('', '* ', gu('0/C/type *'));
            p.code('pre', '_this', gu('0/C/function param'));
            p.code('', ', ');

            p.code('word', 'void', gu('0/C/type void'));
            p.code('', '* ', gu('0/C/type *'));
            p.code('pre', 'key', gu('0/C/function param'));
            p.code('', ', ');

            p.code('class', 'uint64_t ', gu('0/C/h/stdint uint64_t'))
            p.code('pre', 'kLen', gu('0/C/function param'));
            p.code('', ', ');

            p.code('word', 'void', gu('0/C/type void'));
            p.code('', '* ', gu('0/C/type *'));
            p.code('pre', 'val', gu('0/C/function param'));
            p.code('', ', ');

            p.code('class', 'uint64_t ', gu('0/C/h/stdint uint64_t'));
            p.code('pre', 'vLen', gu('0/C/function param'));

            p.code('', ');');
        })(p.box('declares'));

        c = {};
        c['ko0'] = ''; c['ko1'] = '와 같은 작업을 수행합니다.';
    
        c['en0'] = "operates the same as "; c['en1'] = ".";
    
        p.append((c[`${lang}0`] ?? nil));
        p.append('<a href="#board make"><strong>ae2f_Pair</strong></a>');
        p.append((c[`${lang}1`] ?? nil));
    }
    function free(name, id, wh) {
        const p = wh.tent(id, 'span');
        p.code('fun', 'ae2f_Pair_free', '#board free');
        p.code('', '(');
        p.code('', '&', gu('0/C/operator &/0'));
        p.code('var', name);
        p.code('', ');');
    }
    fun['free'] = () => {
        // ae2f_Pair_free
        p = board.tent('free', 'div');
        p.tent('title', 'h1').set('ae2f_Pair_free');
        p = p.tab('desc');
        
        ((p) => {
            p.code('word', 'struct ', gu('0/C/struct'));
            p.code("class", 'ae2f_Pair', '#board Pair');
            p.code('', '* ', gu("0/C/type *"));
            p.code('fun', 'ae2f_Pair_free', '#board free');
            p.code(2, '(');
            
            p.code('word', 'struct ', gu('0/C/struct'));
            p.code("class", 'ae2f_Pair', '#board Pair');
            p.code('', '* ', gu("0/C/type *"));
            p.code('pre', '_this', gu('0/C/function param'));

            p.code('', ');');
        })(p.box('declares'));

        c = {};
        c['ko'] = "해당 구조체에 할당된 메모리를 해제합니다.";
        c['en'] = "frees the existing memory from this structure.";
        p.append(c[lang] ?? nil);

        ((wh) => {
            Pair('a', '', wh);
            wh.append('<br/>');
            make('a', '', wh);
            wh.append('<br/>');
            let c = {};
            c['ko'] = '작업 수행...';
            c['en'] = "Operation..."
            wh.code('//', `// ${c[lang] ?? nil}`);
            wh.append('<br/>');
            free('a', '', wh);
        })(p.box('code'));
    }
    fun['weigh'] = () => {
        // ae2f_Pair_weigh
        p = board.tent('weigh', 'div');
        p.tent('title', 'h1').set('ae2f_Pair_weigh');

        p = p.tab('desc');

        // char ae2f_Pair_weigh(struct ae2f_Pair p1, struct ae2f_Dynamic p2, char where);
        ((p) => {
            p.code('word', 'char ', gu('0/C/type char'));
            p.code('fun', 'ae2f_Pair_weigh', '#board weigh');
            p.code('', '(');
            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('class', 'ae2f_Pair ', '#board Pair');
            p.code('pre', 'p1', gu('0/C/function param'));
            p.code('', ', ');
            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('class', 'ae2f_Dynamic ', getURL('Container/Dynamic'));
            p.code('pre', 'p2', gu('0/C/function param'));
            p.code('', ', ');
            p.code('class', 'uint8_t ', gu('0/C/h/stdint uint8_t'));
            p.code('pre', 'where', gu('0/C/function param'));
            p.code('', ');');

        })(p.box('declares'));

        c = {};
        c['ko0'] = '<strong>where</strong>이 0일 경우 <strong>키</strong>를, 1의 경우 <strong>값</strong>을 가져와 '; c['ko1'] = '와 같은 작업을 수행합니다.';
        c['en0'] = 'operates '; 
        c['en1'] = ' with the value from <strong>Key</strong> when <strong>where</strong> is zero or from <strong>Value</strong> when one.'; // 확인 필요함

        p.append(c[`${lang}0`] ?? nil);
        p.append(`<a href="${getURL("Container/Dynamic weigh")}"><strong>ae2f_Dynamic_weigh</strong></a>`)
        p.append((c[`${lang}1`] ?? nil));
    }

    fun['get'] = () => {
        p = board.tent('get', 'div');
        p.tent('title', 'h1').set('ae2f_Pair_get');
        p = p.tab('desc', 'div');

        // struct ae2f_Dynamic ae2f_Pair_get(struct ae2f_Pair* _this, char where);
        ((p) => {
            p.code('struct', 'ae2f_Dynamic_owned ', '#board ae2f_Dynamic_owned');
            p.code('fun', 'ae2f_Pair_get', '#board get');
            p.code('', '(');
            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('struct', 'ae2f_Pair', '#board Pair');
            p.code('', '* ', gu('0/C/type *'));
            p.code('pre', '_this', gu('0/C/function param'));
            p.code('', ', ');
            p.code('class', 'uint8_t ', gu('0/C/h/stdint uint8_t'));
            p.code('pre', 'where', gu('0/C/function param'));
            p.code('', ');');
        })(p.box('declares'))

        c ={};
        c['ko0'] = ""; c["ko1"] = "의 게터 함수입니다.";
        c['en0'] = "is the getter for "; c['en1'] = '.';

        c['ko2'] = "<strong>where</strong>의 값에 따라 <strong>_this</strong>의 멤버를 반환합니다.";
        c['en2'] = "returns the value at which <strong>where</strong> decides to get among the members of <strong>_this</strong>.";

        p.append(c[`${lang}0`] ?? nil);
        p.append(`<a href="#board Pair"><strong>ae2f_Pair</strong></a>`);
        p.append((c[`${lang}1`] ?? nil) + "<br/>");

        p.append(c[`${lang}2`] ?? nil);
    }
    // struct ae2f_Pair* ae2f_Pair_set(struct ae2f_Pair* _this, struct ae2f_Dynamic val, char where);
    fun['set'] = () => {
        p = board.tent('set', 'div');
        p.tent('title', 'h1').set('ae2f_Pair_set');
        p = p.tab('desc', 'div');

        ((p) => {
            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('class', 'ae2f_Pair', '#board Pair');
            p.code('', '* ', gu('0/C/type *'));
            p.code('fun', 'ae2f_Pair_set', '#board set');
            p.code(0, '(');
            
            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('class', 'ae2f_Pair', '#board Pair');
            p.code('', '* ', gu('0/C/type *'));
            p.code('pre', '_this', gu('0/C/function param'));
            p.code(0, ', ');

            p.code('word', 'struct ', gu('0/C/struct'));
            p.code('class', 'ae2f_Dynamic ', getURL('Container/Dynamic'));
            p.code('pre', 'val', gu('0/C/function param'));
            p.code(0, ', ');

            p.code('class', 'uint8_t ', gu('0/C/h/stdint uint8_t'));
            p.code('pre', 'where', gu('0/C/function param'));

            p.code(0, ');');
        })(p.box('declares'));

        c ={};
        c['ko0'] = ""; c["ko1"] = "의 게터 함수입니다.";
        c['en0'] = "is the getter for "; c['en1'] = '.';

        c['ko2'] = "<strong>where</strong>의 값에 따라 <strong>_this</strong>의 멤버의 값을 <strong>val</strong>로 바꿉니다.";
        c['en2'] = "changes the value at which <strong>where</strong> decides to get among the members of <strong>_this</strong> to <strong>val</strong>.";

        p.append(c[`${lang}0`] ?? nil);
        p.append(`<a href="#board Pair"><strong>ae2f_Pair</strong></a>`);
        p.append((c[`${lang}1`] ?? nil) + "<br/>");

        p.append(c[`${lang}2`] ?? nil);
    }
    return [fun, ['_', 'ae2f_Dynamic_owned', 'make', 'make_', 'free', 'weigh', 'get', 'set']];
}