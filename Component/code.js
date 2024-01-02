HTMLElement.prototype.code = function(type, code, link = '') {
    let rtn = document.createElement((link ?? '') == '' ? 'span' : 'a');
    let colour = {};

    colour["function"] = colour["fun"] = "rgb(222, 222, 0)";
    colour["word"] = colour["reserved"] = "rgb(80,80,222)";
    colour["preprocessor"] = colour["pre"] = "rgb(140,140,140)";
    colour["var"] = "rgb(100,100,255)";
    colour["struct"] = colour["class"] = "rgb(0,150,150)";
    colour["def"] = colour["defined"] = "rgb(200,180,250)";
    colour["//"] = "rgb(10,10,100)";
    colour["string"] = colour["str"] = "rgb(200,120,120)";
    
    rtn.style.color = colour[type] ?? 'rgb(180,180,180)';
    rtn.innerHTML = code;
    
    switch(link) {
        default: rtn.href = link;
        case '': break;
    }
    this.appendChild(rtn);

    return rtn;
}

tent.prototype.code = function(type = '', code, link = '') {
    return this.pos().code(type, code, link);
}