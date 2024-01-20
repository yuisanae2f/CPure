include('Component/tab.js');

docs['Container'] = function(lang = args()[0], nil = 'TRANSLATED_NOT') {
    const board = document.getElementById('board');
    const gu = (th) => `https://yuisanae2f.github.io/YuiSanae2f/${args()[1] == '1' ? "index" : 'dark'}.html?${btoa(`${args()[0]} ${args()[1]} ${th}`)}`;

    let fun = {};

    fun['Dynamic'] = () => {
        ((p) => {
            p.tent('title', 'h1').tent('a', 'a').set('Dynamic');
            p.tent('title a').pos().href=getURL("Container/Dynamic");
    
            p = p.tab('desc', 'div');
    
            p.set({
                ko: `
                기본적인 배열 형식입니다. <br/>
                바이트 단위로 메모리를 관리합니다.
                `,
    
                en: `
                is the basic array bundle. <br/>
                manages the data in order to bytes.
                `
            }[lang] ?? nil);
        })(board.tent('Dynamic', 'div'));
    }

    fun['Pair'] = () => {
        ((p) => {
            p.tent('title', 'h1').set(`<a href="${getURL('Container/Pair')}">Pair</a>`);    
    
            c = {};
            c["ko"] = "두 데이터를 하나의 관계로 묶습니다.";
            c["en"] = "binds two data in a structure.";
            p.tab('desc', 'div').append((c[lang] ?? nil));
        })(board.tent('Pair', 'div'));
    }

    fun['Map'] = () => {
        p = board.tent('Map', 'div');
        p.tent('title', 'h1').set(`<a href="${getURL('Container/Map')}">Map</a>`);

        p = p.tab('desc', 'div').set({
            en: `is an unordered map.`,
            ko: `맵의 기능을 제공합니다.`
        }[lang] ?? nil);
    }

    fun['Dimension'] = () => {
        p = board.tent('Dimension', 'div');
        p.tent('title', 'h1').set(`<a href="${getURL('Container/Dimension')}">Dimension</a>`);

        p.tab('desc', 'div').set({
            en: `provides the feature of managing the multidimensional array.`,
            ko: `다차원 배열을 구현합니다.`
        }[lang] ?? nil);
    }

    fun['Context'] = () => {
        p = board.tent('File', 'div');
        p.tent('title', 'h1').set(`<a href="${getURL('Container/Context')}">Context</a>`);

        p.tab('desc', 'div').set({
            en: `is the binder for the temporary dynamic allocation on scope.`,
            ko: `일괄적으로 메모리를 해제할 수 있는 동적 할당을 수행합니다.`
        }[lang] ?? nil);
    }
    return [fun, ['Dynamic', 'Pair', 'Map', 'Dimension', 'Context']];
}