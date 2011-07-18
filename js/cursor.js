

var Cursor = function(element){
    this.element = element;
    
    window.addEventListener('resize', this.calculateOffsets.bind(this), false);
    this.calculateOffsets();
    
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
    
    previous: new Vector,
    movementCallback: function(){},
    
    moveStart: function(eventName){
        var element = this.element,
            movement = this.movement;
        
        return (function(event){
            event.preventDefault();
            this.previous = this.createVector_(event);
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
    
    createVector_: function(event){
        if (event.touches) event = event.touches[0];
        
        return new Vector(event.pageX, event.pageY).subtract(this.offsets);
    },
    
    movement: function(event){
        var current = this.createVector_(event),
            diff = current.subtract(this.previous),
            length = diff.length();
        
        if (length > 5){
            this.movementCallback(current, this.previous, diff, length, diff.angle());
            this.previous = current;
        }
    },
    
    onMovement: function(callback){
        this.movementCallback = callback;
    },
    
    calculateOffsets: function(){
        var element = this.element.parentNode;
        this.offsets = new Vector(element.offsetLeft, element.offsetTop);
    }
    
};
