// 1. Convert the following `for` loops to `while` loops
//
// 2. Replace Han with per-movie Wookie noises using `if...else if...else`:
// http://www.buzzfeed.com/jessicamisener/the-10-best-chewbacca-quotes

var starWarsMovies = ['anh', 'tesb', 'rotj', 'tpm', 'aotc', 'rots', 'tfa'];

function sortChronologically() {
    for (var i = 0; i < 3; i++) {
        var temp = starWarsMovies[i];
        starWarsMovies[i] = starWarsMovies[i + 3];
        starWarsMovies[i + 3] = temp;
    }
}

function sortChronologically() {
    var i = 0;
    while (i < 3) {
        var temp = starWarsMovies[i];
        starWarsMovies[i] = starWarsMovies[i + 3];
        starWarsMovies[i + 3] = temp;
        i++;

    }
}

function chewie() {
    for (var i = 0; i < starWarsMovies.length; i++) {
        if (starWarsMovies[i] === 'tepm' || starWarsMovies[i] === 'aotc') {
            console.log(starWarsMovies[i], 'Which way to Kashyyyk?');
        } else {
            console.log(starWarsMovies[i], 'Laugh it up fuzzball!');
        }
    }
}

chewie();
sortChronologically();

function chewie() {
    var i = 0;
    while (count < starWarsMovies.length) {
        if (starWarsMovies[i] === 'tpm' || starWarsMovies[i] === 'aotc') {
            console.log('Which way to Kashyyyk?');
        } else {
            console.log('Laugh it up fuzzball!');
            i++;
        }
    }