
var container = document.id('container'),
    canvasElement = document.querySelector('canvas'),
    canvas = new Canvas(canvasElement),
    sizer = new LetterSizer(container, 'p'),
    contentIterator = new ContentIterator(document.id('input')),
    cursor = new Cursor(canvasElement);

cursor.onMovement(function(point, length, angle){
    var letter = contentIterator.getLetter(),
        height;

    if (!letter) return;

    height = (sizer.getSize(letter) * length);
    canvas.draw(letter, length, height, point, angle);
});

