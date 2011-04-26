
var ContentIterator = function(element){
    this.containerIndex = -1;
    this.containers = [].slice.call(element.search('*'));
    this.letterIndex = 0;
    this.letters = [];
};

ContentIterator.prototype = {
    
    getLetter: function(){
        return this.letters[this.letterIndex++];
    },
    
    getContainer: function(){
        var container = this.containers[++this.containerIndex];
        
        this.letters = container ? container.textContent.split('') : [];
        this.letterIndex = 0;
        
        return container;
    }
    
};
