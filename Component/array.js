tent.prototype.array = function(id, lArr, fun = (c) => 'undefined') {
    let table = this.tent(id, 'div');
    table.set('');
    table.pos().style.display = 'flex';

    switch(lArr.length % 2) {
        case 0: table.pos().style.flexDirection = 'column'; break;
        case 1: table.pos().style.flexDirection = 'row'; break;
    }

    function go(_id, numArr) {
        let na = numArr.slice();
        const l = na.shift();
        for(let i = 0; i < l; i++) {
            let d = document.getElementById(_id).tent(` ${i}`, 'div');

            d.pos().style.display = 'flex';
            d.pos().style.margin = `${na.length * 5}px`
            switch(na.length % 2) {
                case 0: d.pos().style.flexDirection = 'column'; break;
                case 1: d.pos().style.flexDirection = 'row'; break;
            }

            switch(na.length) {
                case 0:
                    d.set(fun(d.id.split(table.id)[1]));
                    d.pos().style.border = '1px solid';
                default: break;
            }

            go(d.id, na);
        }
    } go(table.id, lArr);

    return table;
}

HTMLElement.prototype.array = function(id, lArr, fun) {
    new tent('', '', this).array(id, lArr, fun);
}

