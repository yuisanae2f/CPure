tent.prototype.box = function(id) {
    let rtn = this.tent(id, "div");
    rtn.pos().style.backgroundColor = 'rgba(30, 30, 30)';
    rtn.pos().style.marginBottom = '20px';
    rtn.pos().style.marginTop = '20px';
    rtn.pos().style.borderRadius = '15px';
    rtn.pos().style.padding = '15px';
    rtn.pos().style.boxShadow = '0 0 10px 5px rgba(30, 30, 30, 0.5)';
    return rtn;
}

HTMLElement.prototype.box = function(id) {
    return new tent('', 'div', this).box(id);
}