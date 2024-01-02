include("./Component/tab.js");

function locale(nil = "") {
    let aa = args();
    let l = new tent("locale", "div", document.body);
    let lh = l.tent("title", "h1");
    lh.set({ko: "언어", en: "Languages"}[aa[0]] ?? nil);

    if(args()[0] != 'ko') {
        aa[0] = 'ko';
        let ko = l.tab("ko", "div").tent("a", "a");
        ko.set("한국어");
        ko.pos().href = `${window.location.href.split('?')[0]}?${btoa(argt(aa))}`;
    }

    if(args()[0] != 'en') {
        aa[0] = 'en';
        let en = l.tab("en", "div").tent("a", "a");
        en.set("English");
        en.pos().href = `${window.location.href.split('?')[0]}?${btoa(argt(aa))}`;
    }
}