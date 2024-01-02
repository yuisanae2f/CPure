include('Component/tab.js');

docs['C'] = function(lang = args()[0], nil = 'TRANSLATED_NOT') {
    const board = document.getElementById("board");
    let c = {};
    let p = board.tent('Container', 'div');

    p = p.tent('title', 'h1').tent('a', 'a');
    p.set('Container');
    p.pos().href = getURL('Container');

    p = board.tent('Container').tab('desc', 'div');

    c['en'] = "stores data in <strong>void pointer array</strong>.";
    c['ko'] = '<strong>보이드 포인터</strong>에 데이터를 보관합니다.';
    p.set((c[lang] ?? nil));

    p = board.tent('Dice', 'div').tent('title', 'h1').tent('a', 'a');
    p.set('Dice'); p.pos().href = getURL('Dice');

    c = {}; let mtx = function(t) { return `<a href="https://en.wikipedia.org/wiki/Mersenne_Twister#Pseudocode"><strong>${t}</strong></a>` };
    c['en'] = `generates the random number based on algorithm ${mtx("Mersenne Twister")}.`;
    c['ko'] = `${mtx("메르센 트위스터 알고리즘")}에 기반하여 난수를 생성합니다.`;
    board.tent('Dice').tab('desc', 'div').set(c[lang] ?? nil);

    p = board.tent('File', 'div').tent('title', 'h1').tent('a', 'a');
    p.set('File'); p.pos().href=getURL('File');
    c = {};
    c['en'] = "provides the sugary features of file I/O for other custom structures.";
    c['ko'] = "이 라이브러리의 다른 구조체를 위한 파일 입출력을 수행합니다.";
    board.tent('File').tab('desc', 'div').set(c[lang] ?? nil);

    p = board.tent('Printer', 'div').tent('title', 'h1').tent('a', 'a');
    p.set('Printer'); p.pos().href=getURL('Printer');
    c = {};
    c["en"] = "provides the method of printing for other custom structures.";
    c["ko"] = "이 라이브러리의 다른 구조체를 위한 콘솔 입출력을 수행합니다.";
    board.tent('Printer').tab('desc', 'div').set(c[lang] ?? nil);
}