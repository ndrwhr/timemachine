
var ContentIterator = function(input){
    this.input = input;
    this.index = 0;
};

ContentIterator.prototype = {
    
    getLetter: function(){
        var input = this.input.value,
            letter = input.charAt(this.index);
        this.index = (++this.index) % input.length;
        return letter;
    }
    
};
