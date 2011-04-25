
var ContentIterator = function(element){
    this.containerIndex = 0;
    this.containers = [].slice.call(element.search('*'));
    this.letterIndex = 0;
    this.letters = [];
};

ContentIterator.prototype = {
    
    nextLetter: function(){
        return this.letters[this.letterIndex++];
    },
    
    nextContainer: function(){
        var container = this.containers[++this.containerIndex];
        
        this.letters = container.textContent.split('');
        this.letterIndex = 0;
        
        return container;
    }
    
};
