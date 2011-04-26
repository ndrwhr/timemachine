
var canvas = document.id('canvas'),
    iterator = new ContentIterator(document.id('original-content')),
    cursor = new Cursor(canvas);

var container = document.createElement('p');

canvas.appendChild(container);

var lookup = { undefined: 0.25 };

'!"\'(),-.:;?ABCDEFGHIJKLMNOPQRSTUVWXY[]abcdefghijklmnopqrstuvwxyz—…'.split('').forEach(function(letter){
    var span = document.createElement('span');
    span.innerHTML = letter;
    container.appendChild(span);
    
    var rect = span.getClientRects()[0];
    lookup[letter] = (rect.height / rect.width);
    container.removeChild(span);
});

canvas.removeChild(container);


var parent = document.createElement(iterator.getContainer().tagName);

canvas.appendChild(parent);

cursor.onMovement(function(next, previous, diff, length, angle){
    var letter = iterator.getLetter();
    
    if (!letter){
        parent = document.createElement(iterator.getContainer().tagName);
        letter = iterator.getLetter();
        canvas.appendChild(parent);
    }
    
    var div = document.createElement('span'),
        height = (lookup[letter] * length);
    
    div.style.width = length + 'px';
    div.style.height = height + 'px';
    div.style.fontSize = height + 'px';
    div.style.top = (next.y - (height / 2)) + 'px';
    div.style.left = next.x + 'px';
    div.style.webkitTransform = 'rotate(' + angle + 'deg)';
    div.innerHTML = letter;
    
    parent.appendChild(div);
});
