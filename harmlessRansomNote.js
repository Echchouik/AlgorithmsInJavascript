"use strict"
 /*
 This function will made a note from a magazine text
 The purpose is to tell us if we have enough words in the magazine to create note
 if we do the functio will return true
 else it will return false
 */

 function harmlessRansomNote (noteText, magazineText) {
     var noteArr = noteText.split(' ');
     var magazineArr = magazineText.split(' '); 
     var magazineObj = {};

     magazineArr.forEach(word => {
         if (!magazineObj[word]) magazineObj[word] = 0;
         magazineObj[word]++;
     });

     var noteIsPossible = true;
     noteArr.forEach(word => {
         if (magazineObj[word]) {
             magazineObj[word]--;
             if (magazineObj[word] < 0) noteIsPossible = false;
         }
         else noteIsPossible = false;
     });

     //return noteIsPossible;
     console.log(noteIsPossible);
 }

 harmlessRansomNote('this text', 'this is all the magazine text in the magazine');