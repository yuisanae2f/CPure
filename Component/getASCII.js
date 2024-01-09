function getASCII(text) {
    const bytes = [];
    for (let i = 0; i < text.length; i++) {
        const codePoint = text.codePointAt(i);
        
        if (codePoint <= 0x7F) {
            bytes.push(codePoint);  
        } else if (codePoint <= 0x7FF) {
            bytes.push((codePoint >> 6) | 0xC0);
            bytes.push((codePoint & 0x3F) | 0x80);
        } else if (codePoint <= 0xFFFF) {
            bytes.push((codePoint >> 12) | 0xE0);
            bytes.push(((codePoint >> 6) & 0x3F) | 0x80);
            bytes.push((codePoint & 0x3F) | 0x80);
        } else {
            bytes.push((codePoint >> 18) | 0xF0);
            bytes.push(((codePoint >> 12) & 0x3F) | 0x80);
            bytes.push(((codePoint >> 6) & 0x3F) | 0x80);
            bytes.push((codePoint & 0x3F) | 0x80);
        }
    } bytes.push(0); return bytes;
}