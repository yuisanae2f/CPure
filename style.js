function style(nil = "") {
    let _style = new tent("style", "div", document.body);
    let title = _style.tent("title", "h1");
    switch(argv[1]) {
        case '0':
            let dark = _style.tab("dark", "div");
            d = {en: "Dark mode", ko: "다크 모드"};
            let dark_a = dark.tent("a", "a");

            let aa = args();
            aa[1] = '1';
            dark_a.pos().href = './index.html' + '?' + btoa(argt(aa));
            dark_a.append(d[argv[0]] ?? nil);
            break;
        case "1": default:
            let light = _style.tab("light", "div");
            let light_a = light.tent("a", "a");
            l = {en: "Light mode", ko: "라이트 모드"};

            let ab = args();
            ab[1] = '0';
            light_a.pos().href = './dark.html' + '?' + btoa(argt(ab));
            light_a.append(l[argv[0]] ?? nil);
            break;
    }

    t = {en: "Theme", ko: "테마"};

    title.append(t[argv[0]] ?? nil);
}