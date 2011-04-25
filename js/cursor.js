

var Cursor = function(element){
    this.element = element;
    
    // binding methods to an instance method...
    this.movement = this.movement.bind(this);
    
    var moveStart = this.moveStart.bind(this),
        moveEnd = this.moveEnd.bind(this);
    
    element.addEvents({
        'mousedown': moveStart('mousemove'),
        'touchstart': moveStart('touchmove'),
        'mouseup': moveEnd('mousemove'),
        'touchend': moveEnd('touchmove'),
        'touchcancel': moveEnd('touchmove')
    });
    
};

Cursor.prototype = {
    
    moveStart: function(eventName){
        var element = this.element,
            movement = this.movement;
        
        return (function(event){
            event.preventDefault();
            this.reset();
            element.addEvent(eventName, movement); // move on subsequent moves
        }).bind(this);
    },
    
    moveEnd: function(eventName){
        var element = this.element,
            movement = this.movement;
        
        return (function(){
            element.removeEvent(eventName, movement);
        }).bind(this);
    },
    
    reset: function(){
        delete this.previous;
    },
    
    movement: function(event){
        if (event.touches) event = event.touches[0];
    }
    
};
