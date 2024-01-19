function include(path, wh = document.head) {
    let scr;
    const pv = path.split('.');
    switch(pv[pv.length - 1]) {
        case 'js':
            scr = document.createElement("script");
            scr.src = document.currentScript.dir + path;
            break;
        case 'css':
            scr = document.createElement('link');
            scr.rel = 'stylesheet';
            scr.type = 'text/css';
            scr.href= document.currentScript.dir + path;
            break;
    }

    wh.appendChild(scr);
}

include('global.js');
include('tent.js');
include('style.js');
include('locale.js');

function main() {
    let c = document.getElementById('args');
    c.value = argt();
    locale('TRANSLATED_NOT');
    style('TRANSLATED_NOT');
    const board = new tent("board", "div", document.body);

    if (docs[args()[2]] == undefined) {
        const none = board.tent('404', 'div');
        let content = {};
        content['en'] = "We've couldn't find the requested content.";
        content['ko'] = '요청받은 자료를 찾지 못하였습니다.';

        none.tent('title', 'h1').set("NOT_FOUND");
        none.append(content[args()[0]] ?? 'TRANSLATED_NOT');
    } else {
        const funn = docs[args()[2]](args()[0], 'TRANSLATED_NOT');

        if(funn[1].includes(args()[3])) funn[0][args()[3]]();
        else for(const w of funn[1]) funn[0][w]();
    }

    return 0;
}