'use strict';
const fs = require('fs');
const dictData = fs.readFileSync('dict-5letters.txt','utf8');
let dictData2 = dictData.split('\n');
let dict = {};
for(let i=0;i<dictData2.length;i++){
  dictData2[i] = dictData2[i].split('\t');
  dict[dictData2[i][0]] = dictData2[i][1];
}

const freqDictData = fs.readFileSync('dict-frequent-words.txt','utf8');
let freqDict = freqDictData.split('\n');
for(let i=0;i<freqDict.length;i++){
  freqDict[i] = freqDict[i].split(' ');
  freqDict[i][2] = freqDict[i][2].slice(0,-1);
  let freqLetters = freqDict[i][2].split('');
  if(freqLetters.length == 5 && dict[freqDict[i][2]]){
    console.log(freqDict[i][2] + '\t' + dict[freqDict[i][2]]);
  }
}