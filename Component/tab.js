tent.prototype.tab = function(id, type = 'div', pad = '15px') {
    let rtn = this.tent(id, type);
    rtn.pos().style.paddingLeft = pad;
    return rtn;
}

HTMLElement.prototype.tab = function(id, type='div', pad='15px') {
    return new tent('', 'div', this).tab(id, type, pad);
}