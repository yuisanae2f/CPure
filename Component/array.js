tent.prototype.array = function(id, lArr, fun = (c) => 'undefined') {
    let table = this.tent(id, 'div');
    table.set('');
    table.pos().style.display = 'flex';
    // table.pos().style.flexDirection = 'column';
    table.pos().style.border = '1';

    function go(_id, numArr) {
        let na = numArr.slice();
        const l = na.shift();
        for(let i = 0; i < l; i++) {
            const d = document.getElementById(_id).tent(`${i}`, 'div');
            d.pos().style.display = 'flex';
            d.pos().style.border = '1px solid';
            d.pos().style.padding = `${na.length * 5}px`
            switch(na.length % 2) {
                case 0: d.pos().style.flexDirection = 'column'; break;
                case 1: d.pos().style.flexDirection = 'row'; break;
            }

            d.set(fun(d.id.split(table.id)[1]));

            go(d._id, na);
        }
    } go(table.id, lArr);

    return table;
}

HTMLElement.prototype.array = function(id, lArr, fun) {
    new tent('', '', this).array(id, lArr, fun);
}