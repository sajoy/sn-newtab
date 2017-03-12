// words & images
var what = ["Code", "Rock", "Make Things", "Break Things", "Dance"];
var image = ["https://media2.giphy.com/media/xT8qBgHkfCACqvjJny/giphy.gif",
             "https://media4.giphy.com/media/xTiTnCUAyJcByJDAk0/giphy.gif",
             "https://media4.giphy.com/media/Rh3GZ0r5KFpRe/giphy.gif",]


// setting properties and stuff
var randomWord = what[randomI(what.length)];
document.getElementById( 'word' ).innerHTML += ' ' + randomWord;

var randomImg = image[randomI(image.length)];
var img = document.getElementById( 'visual' );
img.src = randomImg;
img.style.transformOrigin = randomOrigin();

var img2 = img.cloneNode( true );
img.style.transformOrigin = randomOrigin();
document.body.append( img2 );


// helper functions

function randomI ( max, min = 0 ) {
    return Math.floor( Math.random( max - min) * max );
}

function randomOrigin () {
    var possibilities = ['top', 'right', 'bottom', 'left'];
    var options;

    for( var i = 0; i < 2; i ++ ){
        var randomP = randomI( possibilities.length );
        var selected = possibilities[randomP];
        possibilities.splice( randomP, 1 );
        console.log( i, selected );
        options += ' ' + selected;
        console.log( options );
    }

    return options;
}
