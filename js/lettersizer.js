
var LetterSizer = function(parent, element){
    element = this.element = document.createElement(element);
    element.style.visibility = 'hidden';
    parent.appendChild(element);
    
    for (var i = 32; i < 127; i++)
        this.getSize(String.fromCharCode(i));
};

LetterSizer.prototype = {
    
    defaultRatio: 0.25,
    
    map: {},
    
    getSize: function(letter){
        var element = this.element,
            map = this.map,
            ratio = this.defaultRatio;
        
        letter = '' + letter + '';
        
        if (map[letter]) return map[letter];
        
        var span = document.createElement(span);
        span.innerHTML = letter;
        this.element.appendChild(span);
        
        var rect = span.getClientRects()[0];
        
        if (rect) map[letter] = (rect.height / rect.width) || this.defaultRatio;
        else map[letter] = this.defaultRatio;
        
        return map[letter];
    }
    
};
