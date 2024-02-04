include('Component/tab.js');

docs['Ariadne'] = function(lang = args()[0], nil = 'TRANSLATED_NOT') {
    const
    board = document.getElementById("board"),
    gu = (th) => `https://yuisanae2f.github.io/YuiSanae2f/${args()[1] == '1' ? "index" : 'dark'}.html?${btoa(`${args()[0]} ${args()[1]} ${th}`)}`;
    bs = (tt, ttt) => {
        let rtn = board.tent(tt);
        rtn.tent('title', 'h1').set(ttt);

        return rtn.tab('desc', 'div');
    }
    let c = {}, fun = {};

    fun['String'] = () => {
        const p = bs('String', `<a href="${getURL('Ariadne/String')}">String</a>`);
    }

    fun['Niddle'] = () => {
        const p = bs('Niddle', `<a href="${getURL('Ariadne/Niddle')}">Niddle</a>`);
    }

    return [fun, ['String', 'Niddle']];
}