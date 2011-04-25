
(function(){

// Implement a super simple (non-standard) version of bind, if not already there.
if (!Function.prototype.bind){
    Function.prototype.bind = function (bind){
        var self = this;
        return function(){
            return self.apply(bind, arguments);
        };
    };
}

var methods = {
    
    addEvent: function(event, callback){
        this.addEventListener(event, callback, false);
    },
    
    addEvents: function(events){
        for (var event in events)
            this.addEvent(event, events[event]);
    },
    
    removeEvent: function(event, callback){
        this.removeEventListener(event, callback, false);
    },
    
    position: function(x, y, rotation){
    }
    
};

for (method in methods)
    HTMLElement.prototype[method] = methods[method];

})();
