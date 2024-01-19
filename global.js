var globalPrm;

function getURL(arg) {
    return `./${globalPrm[1] == 0?'dark':'index'}.html?${btoa(`${globalPrm[0]} ${globalPrm[1]} ${arg}`)}`;
}

function run() {
    const t = document.getElementById('args').value;
    window.open(`./${t.split(' ')[1] == '0' ? 'dark' : 'index'}.html` + '?' + btoa(t));
}

function preMain() {
    const p = window.location.href.split('?');
    
    let text;    

    try {
        text = atob(p[1].split('#')[0]); 
    } catch (error) {
        text = p[1] ?? '';
    } let argv = text.split(' ');

    argv[0] = argv[0].split('-')[0];

    switch (argv.length) {
        case 0: case 1: case 2:
            text = `${navigator.language || navigator.userLanguage} 1 index`;
        default:
            argv = text.split(' ');
            globalPrm = [argv[0], argv[1]];
            document.getElementsByTagName('html')[0].lang = argv[0];
            break;
    }

    include('docs.js');
    include(`docs/${argv[2]}.js`);
    return argv;
}

function args() {
    return document.getElementById('args').value.split(' ');
}

var argv = preMain();
function argt(v = argv) {
    let str = "";
    for(let i = 0; i < v.length; i++) {
        str += v[i] + (i + 1 == v.length ? '' : ' ');
    } return str;
}