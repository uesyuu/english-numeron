'use strict';
const fs = require('fs');
const readline = require('readline');
const stream = fs.createReadStream('./ejdic-hand-utf8.txt','utf8');

let beforeWord = '';
const reader = readline.createInterface({input:stream});
reader.on('line',(data) => {
  let data2 = data.split('\t');
  let sameLetter = false;
  if(data2[0].match(/^[a-z]{3}$/)){
    let letters = data2[0].split('');
    for(let i=0;i<letters.length;i++){
      for(let j=0;j<letters.length;j++){
        if(i != j && letters[i] == letters[j]){
          sameLetter = true;
          break;
        }
        if(sameLetter){
          break;
        }
      }
    }
    if(!sameLetter && data2[0] != beforeWord){
      console.log(data2[0] + '\t' + data2[1]);
    }
  }
  beforeWord = data2[0];
});