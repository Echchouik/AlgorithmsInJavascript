"use strict"

function isPalaindrome (string) {
    string = string.toLowerCase();
    var characterArr = string.split(' ');
    var validCharcters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    var lettersArr = [];
    characterArr.forEach(char => {
        if (validCharcters.indexOf(char) > -1) lettersArr.push(char);
    });

    if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
    else false;
}

isPalaindrome("race care");