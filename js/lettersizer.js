
var LetterSizer = function(parent, element){
    element = this.element = document.createElement(element);
    element.style.visibility = 'hidden';
    parent.appendChild(element);
    
    for (var i = 32; i < 127; i++)
        this.getSize(String.fromCharCode(i));
};

LetterSizer.prototype = {
    
    map: {},
    
    getSize: function(letter){
        var element = this.element,
            map = this.map;
        
        letter = '' + letter + '';
        
        if (map[letter]) return map[letter];
        
        var span = document.createElement(span);
        span.innerHTML = letter;
        this.element.appendChild(span);
        
        var rect = span.getClientRects()[0];
            ratio = map[letter] = (rect.height / rect.width) || 0.25;
        
        return ratio;
    }
    
};
