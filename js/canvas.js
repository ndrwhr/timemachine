
var Canvas = function(canvas){
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.context.textBaseline = 'middle';
    this.context.fillStyle = 'black';
    this.context.shadowOffsetY = 1;
    this.context.shadowBlur    = 3;
    this.context.shadowColor   = 'rgba(0, 0, 0, 0.4)';
    this.baseFont = 'px Georgia';
};

Canvas.prototype = {
    draw: function(letter, width, height, point, angle){
        var context = this.context;

        context.save();
        context.translate(point.x - width, point.y);
        context.rotate(angle);
        context.font = height + this.baseFont;
        context.fillText(letter, 0, 0);
        context.restore();
    }
};
