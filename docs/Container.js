include('Component/tab.js');
docs['Container'] = function(lang = args()[0], nil = 'TRANSLATED_NOT') {
    const board = document.getElementById('board');
    /**
     * allocates data in void pointer array.  
chop data into bytes when operating.
     */
    let c = {};
    let p = board.tent('Dynamic', "div");
    p.tent('title', 'h1').tent('a', 'a').set('Dynamic');
    p.tent('title a').pos().href=getURL("Container/Dynamic");

    c["en"] = "is the basic array bundle.";
    c["ko"] = "기본적인 배열 형식입니다.";
    p.tab('desc', 'div').set((c[lang] ?? nil) + "<br/>");

    c = {};
    c["en"] = "manages the data in order to bytes.";
    c["ko"] = "바이트 단위로 메모리를 관리합니다.";
    p.tent('desc', 'div').append((c[lang] ?? nil));
}