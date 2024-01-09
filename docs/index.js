include('Component/box.js');
include('Component/tab.js');
include('Component/code.js');

docs["index"] = function(lang = args()[0], nil = 'TRANSLATED_NOT') {
    const board = document.getElementById("board");
    let desc = new tent("CPure", "div", board);

    const gu = (th) => `https://yuisanae2f.github.io/YuiSanae2f/${args()[1] == '1' ? "index" : 'dark'}.html?${btoa(`${args()[0]} ${args()[1]} ${th}`)}`;
    
    desc.tent("title", "h1").set("CPure");

    let content = {};
    desc = desc.tab("desc", "div");

    content = {};
    content["en"] = "is the bunch of C/C++ libraries made just by hobby.";
    content["ko"] = "취미에 의해 만들어진 C/C++ 라이브러리 모음입니다.";
    desc.append((content[lang] ?? nil) + '<br/>');

    content = {};
    content["en"] = "has a prefix of <strong>ae2f</strong>, or <strong>AE2F</strong> in constant definition.";
    content["ko"] = "정의에 있어 <strong>AE2F</strong>, 혹은 <strong>ae2f</strong>의 접두사를 가집니다.";
    desc.append(content[lang] ?? nil);

    content = {};
    content["en"] = "definitions";
    content["ko"] = "정의";
    desc = new tent("defs", "div", board);
    desc.tent("title", "h1").set(content[lang] ?? nil);
    desc = desc.tab("AE2F_CPP", "div");
    desc.tent("title", "h2").set("AE2F_CPP");

    content = {};
    content["en"] = "Most of the code is written in Language of C.";
    content["ko"] = "대부분의 코드는 C로 작성됩니다.";
    desc.append((content[lang] ?? nil) + '<br/>');

    content = {};
    content["en"] = "If you are to use these in a landscape of C++, define <strong>AE2F_CPP</strong> to declare it.";
    content["ko"] = "C++에서 이 라이브러리를 사용하려 할 경우 <strong>AE2F_CPP</strong>를 정의하십시오.";
    desc.append(content[lang] ?? nil);

    desc = desc.box("code");
    desc.code("preprocessor", "#define ", '0/C/#define');
    desc.code("def", "AE2F_CPP");

    desc = new tent('defs', 'div', board);
    desc = desc.tab('AE2F_IGNORE_MISSINGS', 'div');
    desc.tent('title', 'h2').set('AE2F_IGNORE_MISSINGS');
    desc = desc.tent('desc', 'div');

    content = {};
    content["en"] = 'Each of the headers which has any of <strong>critical dependencies</strong> would try to find it by including.';
    content["ko"] = '<strong>필수 종속성</strong>을 가진 헤더들은 이를 찾기 위해 포함(#include)을 시도할 것입니다.';
    desc.append((content[lang] ?? nil) + "<br/>");

    content = {};
    content['en'] = "If you want it not, define <strong>AE2F_IGNORE_MISSINGS</strong> to halt it.";
    content["ko"] = '이를 원하지 않을 경우 <strong>AE2F_IGNORE_MISSINGS</strong>을 정의하여 이를 중단시킬 수 있습니다.';
    desc.append(content[lang] ?? nil);
    desc = desc.box('code');
    desc.code("preprocessor", "#define ", '0/C/#define');
    desc.code("def", "AE2F_IGNORE_MISSINGS");

    desc = board.tent('Usage', 'div');
    content = {};
    content['en'] = "Usage method";
    content['ko'] = '사용법';
    desc.tent('title', 'h1').set(content[lang] ?? nil);

    content = {};
    content['en'] = "Check the critical dependency.";
    content['ko'] = "필수 종속성을 확인하십시오.";
    desc.tab('0', 'div').tent('title', 'h2').set(content[lang] ?? nil);

    desc = desc.tent('0', 'div').tent('desc', 'div');
    content = {};
    content['en'] = "You could check via each document which matches the header.";
    content['ko'] = "해당 문서를 통해 확인할 수 있습니다.";
    desc.append((content[lang] ?? nil) + "<br/>");

    content = {};
    content['en'] = "The top of the each pages shows the list of <strong>critical dependencies</strong>.";
    content['ko'] = "각 페이지의 맨 위에 <strong>필수 종속성</strong>을 열거하여 표시합니다.";
    desc.append(content[lang] ?? nil);

    desc = board.tent('Usage');
    content = {};
    content['en'] = "Check the directory for linkers.";
    content["ko"] = "링커를 위한 파일 경로를 확인하십시오.";
    desc.tab('1', 'div').tent('title', 'h2').set(content[lang] ?? nil);

    desc = desc.tent('1').tent('desc', 'div');
    content = {};
    content['en'] = "You could find the library files which has an extension of <strong>lib</strong> and <strong>dll</strong>.";
    content['ko'] = "확장명 <strong>.lib</strong>와 <strong>.dll</strong>을 가진 파일이 들어가 있는 경로를 찾으십시오.";
    desc.append((content[lang] ?? nil) + '<br/>');

    content = {};
    content['en'] = 'Take the file which has the name of the library you want.';
    content["ko"] = '그곳에서 원하는 라이브러리의 파일을 가져가시면 됩니다.';
    desc.append(content[lang] ?? nil);

    desc = board.tent('Usage').tab('2', 'div');

    content = {};
    content['en'] = "Define the AE2F_PATH_C for .lib path.";
    content['ko'] = "AE2F_PATH_C를 .lib 파일의 상위 디렉토리로 정의하십시오.";
    desc.tent("title", "h2").set(content[lang] ?? nil);
    
    desc = desc.tent('desc', 'div');
    content = {};
    content['en'] = 'Each headers at the very first has the macros for implicit linking for .lib.';
    content['ko'] = '각 헤더의 시작점은 암시적 링크 작업을 위한 매크로를 가집니다.';
    desc.append((content[lang] ?? nil) + '<br/>');

    content = {};
    content["en"] = "Once global directory for dll <strong>AE2F_PATH_C</strong> defined, rest will be done automatically.";
    content['ko'] = "<strong>AE2F_PATH_C</strong>이 정의되었을 경우, 자동으로 암시적 링크를 수행합니다."
    desc.append((content[lang] ?? nil));

    desc = desc.box('code');
    // define AE2F_PATH_C "../x64/Release" // path for your dll's.
    desc.code("pre", "#define ", gu('0/C/#define'));
    desc.code("def", "AE2F_PATH_C ");
    desc.code("string", `"path/for/your/lib/"`, gu('0/C/string'));

    desc = board.tent('cpp', 'div');

    content = {};
    content["en"] = "In a case of C++:";
    content["ko"] = "C++의 경우";
    desc.tent('title', 'h1').set(content[lang] ?? nil);

    desc = desc.tab('desc', 'div');
    content = {};
    content["en"] = 'Some of these libraries has a version for C++.';
    content["ko"] = "이 라이브러리들 중 C++용으로 개발된 버전이 있습니다.";
    desc.append((content[lang] ?? nil) + '<br/>');

    content = {};
    content["en"] = "Each of them has a suffix as <strong>_Plus</strong>";
    content["ko"] = "이들은 기본으로 하는 라이브러리에서 접미사 <strong>_Plus</strong>를 더한 이름을 가집니다.";
    desc.append(content[lang] ?? nil);

    desc = board.tent("cpp").tab('AE2F_PATH_CPP');
    desc.tent('title', 'h2').set("AE2F_PATH_CPP");
    
    content = {};
    content["en"] = 'Unlike the existing libraries, the one with a suffix of <strong>_Plus</strong> finds its <strong>.lib</strong> with a value of <strong>AE2F_PATH_CPP</strong>.';
    content["ko"] = "기존 라이브러리와 달리, <strong>_Plus</strong>의 접미사를 가진 라이브러리들은 <strong>.lib</strong>의 위치를 확인하는 매개변수로써 <strong>AE2F_PATH_CPP</strong>를 사용합니다.";
    desc.append((content[lang] ?? nil) + '<br/>');

    content = {};
    content["en"] = "If you are to use them both, you need to define those two both.";
    content["ko"] = "C용 라이브러리와 C++용 라이브러리 둘을 동시에 사용할 경우, 이 둘을 전부 정의할 필요가 있습니다.";
    desc.append(content[lang] ?? nil);

    desc = desc.box('code');
    desc.code("pre", "#define ", gu('0/C/#define'));
    desc.code("def", "AE2F_PATH_C ");
    desc.code("string", `"path/for/your/lib/c/"<br/>`, gu('0/C/string'));

    desc.code("pre", "#define ", gu('0/C/#define'));
    desc.code("def", "AE2F_PATH_CPP ");
    desc.code("string", `"path/for/your/lib/cpp/"`, gu('0/C/string'));

    desc = board.tent('LICENSE', 'h1').tent('a', 'a');
    desc.set('LICENSE'); desc.pos().href="https://github.com/yuisanae2f/CPure/blob/main/LICENSE";

    content["en"] = "is the content of license of this project.";
    content['ko'] = "본 프로젝트의 라이센스입니다.";
    desc = board.tab('LICENSE desc', "div").set(content[lang] ?? nil);

    desc = board.tent('github', 'h1').tent('a', 'a');
    desc.set('Github'); desc.pos().href = "https://github.com/yuisanae2f/CPure";

    content["en"] = "is the repository of this project.";
    content['ko'] = "본 프로젝트의 깃허브 리포지토리 주소입니다.";
    desc = board.tab('github desc').set(content[lang] ?? nil);

    desc = document.body.tent("libs", "div");
    desc.pos().style.display = "flex";
    desc.pos().style.justifyContent = desc.pos().style.alignItems = 'center';
    desc.pos().style.flexDirection = 'column';  
    desc.pos().style.marginTop = "200px";

    content = {};
    content["en"] = "Now you are ready to use this piece of shxt!";
    content['ko'] = "당신은 이 난장판을 사용해 볼 준비가 되셨습니다!";
    desc.tent("title", 'h1').set((content[lang] ?? nil));

    content = {};
    content["en"] = "below here are the list of libraries as C/C++.";
    content['ko'] = "아래에 라이브러리 목록이 있습니다.";
    desc.tent('desc', 'div').set(content[lang] ?? nil);

    desc = desc.tent("display", 'div');
    desc.pos().style.display = "flex";
    desc.pos().style.justifyContent = 'center';
    desc.pos().style.width = "100%";

    desc = [desc.tent('C', 'div'), desc.tent('C++', 'div')];
    desc[0].pos().style.width = desc[1].pos().style.width =
    desc[0].pos().style.height = desc[1].pos().style.height = '100%';

    desc[0].pos().style.marginLeft = desc[1].pos().style.marginLeft =
    desc[0].pos().style.marginRight = desc[1].pos().style.marginRight = '5px';

    desc[0].tent('title', 'h1').tent('a', 'a').set('C');
    desc[1].tent('title', 'h1').tent('a', 'a').set('C++');

    desc[0].tent('title a', 'h1').pos().href = getURL('C');
    desc[1].tent('title a', 'h1').pos().href = getURL('C++');

    desc[0] = desc[0].tent('desc', 'div');
    desc[1] = desc[1].tent('desc', 'div');

    content = {};
    content["en"] = "has the basic functions for the library.";
    content['ko'] = '라이브러리의 기본 기능들을 구현합니다.';
    desc[0].append(content[lang] ?? nil);
    
    content = {};
    content['en'] = "has the features of classes based on existing C libraries.";
    content['ko'] = "기존의 C 라이브러리의 기능을 클래스로 사용할 수 있습니다.";
    desc[1].append((content[lang] ?? nil) + '<br/>');

    const ae2f_cpp_id = "<a href='#board defs AE2F_CPP title'><strong>AE2F_CPP</strong></a>";
    content = {};
    content['en'] = `defines ${ae2f_cpp_id} automatically.`;
    content['ko'] = `${ae2f_cpp_id}를 자동으로 정의합니다.`;
    desc[1].append((content[lang] ?? nil));
}