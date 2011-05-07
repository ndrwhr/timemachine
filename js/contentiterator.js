
var ContentIterator = function(element){
    this.containerIndex = -1;
    this.containers = [].slice.call(element.search('*'));
    this.letterIndex = 0;
    this.letters = [];
    
    this.nextContainer();
};

ContentIterator.prototype = {
    
    getLetter: function(){
        if (this.letterIndex >= this.letters.length)
            this.nextContainer();
        
        return this.letters[this.letterIndex++];
    },
    
    nextContainer: function(){
        var container = this.containers[++this.containerIndex];
        this.letters = container ? container.textContent.split('') : [];
        this.letterIndex = 0;
    }
    
};
