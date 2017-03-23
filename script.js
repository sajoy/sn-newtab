var tabCount = getData( 'tabCount' );
setData( 'tabCount', tabCount ? tabCount + 1 : 1 );

var type = getData( 'type' );
setData( 'type', type ? type : 'french' );

var typeSpan = document.getElementById( 'type' );
typeSpan.innerHTML = type || 'french';
typeSpan.addEventListener( 'blur', function () {
    setData( 'type', typeSpan.innerHTML );
});

document.getElementById( 'count' ).innerHTML = tabCount;

var pile = document.getElementById( 'tally' );
var pileSize;
if ( tabCount < 50 ) {
    pile.style.width = '400px';
    pileSize = 400;
} else if ( tabCount < 100 ) {
    pile.style.width = '600px';
    pileSize = 600;
} else {
    pile.style.width = '90%';
    pileSize = window.innerWidth - 200;
}


for( var i = 0; i < tabCount; i ++ ) {
    var tally = document.createElement( 'li' );
    tally.classList.add( 'delay' + i );
    tally.style.width = randomNumber( 200, 40 ) + 'px';
    tally.style.left = randomNumber( pileSize - 100, 0 ) + 'px';

    var randTop = randomNumber( 500 ) + 'px';
    tally.animate({ top: ['-1000px', randTop] }, { delay: i * 10, duration: 500, fill: 'forwards'});

    document.getElementById( 'tally' ).appendChild( tally );
}



// functions
function setData ( keypath, data ) {
    localStorage.setItem( keypath, JSON.stringify( data ) );
}

function getData ( keypath ) {
    var data = null;

    if ( localStorage[keypath] ) {
        data = JSON.parse( localStorage[keypath] );
    }

    return data;
}

function randomNumber ( max, min = 0 ) {
    return Math.floor( Math.random() * ( max - min ) + min );
    // reference: http://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
}
