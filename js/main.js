
var canvas = document.id('canvas'),
    surface = document.id('front'),
    sizer = new LetterSizer(surface, 'p'),
    contentIterator = new ContentIterator(document.id('input')),
    cursor = new Cursor(front);

var parent = document.createElement('p'),
    children = 0;
front.appendChild(parent);

cursor.onMovement(function(next, previous, diff, length, angle){
    var letter = contentIterator.getLetter();
    
    if (!letter) return;
    
    var span = document.createElement('span'),
        height = (sizer.getSize(letter) * length);
    
    span.style.width = length + 'px';
    span.style.height = height + 'px';
    span.style.fontSize = height + 'px';
    span.style.top = (next.y - (height / 2)) + 'px';
    span.style.left = (next.x - length) + 'px';
    span.style.webkitTransform = 'rotate(' + angle + 'deg)';
    span.innerHTML = letter;
    
    parent.appendChild(span);
    
    children++;
    
    if (children % 100 == 0)
        front.appendChild(parent = document.createElement('p'));
});

