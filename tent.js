class tent {
    constructor(id, type, where) {
        this.id = (where.id ?? '');
        this.id += this.id == '' || (id ?? '') == '' ? '' : ' ';
        this.id += id ?? ''; 

        let pos = document.createElement(type);
        pos.id = this.id;

        document.getElementById(this.id) ?? where.appendChild(pos);

    }
    pos() { return document.getElementById(this.id); }
    tent(id, type) { return new tent(id, type, this.pos()); }
    get() { return this.pos().innerHTML ?? ''; }
    set(c) { this.pos().innerHTML = c; }
    append(c, wh = this.get().length) { const g = this.get(); this.set(g.slice(0, wh) + c + g.slice(wh, g.length - wh + 1)) }
}

HTMLElement.prototype.tent = function(id, type) {
    return new tent(id, type, this);
}