
var ContentIterator = function(input){
    this.input = input;
    this.index = 0;
};

ContentIterator.prototype = {
    
    getLetter: function(){
        var input = this.input.value;
        this.index = (++this.index) % input.length;
        return input.charAt(this.index);
    }
    
};
