$.ajax({
  url: './dict-4letters.txt',
  success: main
});

function main(data){
  var list = data.split('\n');
  for(var i=0;i<list.length;i++){
    list[i] = list[i].split('\t');
  }
  var num = Math.floor(Math.random() * list.length);
  var word = list[num];
  $('#answer').text(word[0]);
  $('#description').text(word[1]);
}

var wordNum = 4;
$('#start').click(function(){
  $('#process').text('');
  $('#answer').css('display','none');
  $('#description').css('display','none');
  var url;
  if($('#select').val() == '3freq'){
    url = './dict-3letters-frequent.txt';
    wordNum = 3;
  }else if($('#select').val() == '3'){
    url = './dict-3letters.txt';
    wordNum = 3;
  }else if($('#select').val() == '4freq'){
    url = './dict-4letters-frequent.txt';
    wordNum = 4;
  }else if($('#select').val() == '4'){
    url = './dict-4letters.txt';
    wordNum = 4;
  }else if($('#select').val() == '5freq'){
    url = './dict-5letters-frequent.txt';
    wordNum = 5;
  }else if($('#select').val() == '5'){
    url = './dict-5letters.txt';
    wordNum = 5;
  }
  $('#wordNum').text(wordNum);
  $.ajax({
    url: url,
    success: main
  });
});

$('#submit').click(function(){
  var myWord = $('#text').val();
  var match;
  if(wordNum == 3){
    match = myWord.match(/^[a-z]{3}$/);
  }else if(wordNum == 4){
    match = myWord.match(/^[a-z]{4}$/);
  }else if(wordNum == 5){
    match = myWord.match(/^[a-z]{5}$/);
  }
  if(match){
    var eat = 0;
    var bite = 0;
    var letters = $('#answer').text().split('');
    var myLetters = myWord.split('');
    for(var i=0;i<letters.length;i++){
      for(var j=0;j<letters.length;j++){
        if(i==j && letters[i]==myLetters[j]){
          eat++;
        }else if(i!=j && letters[i]==myLetters[j]){
          bite++;
        }
        if(i!=j && myLetters[i]==myLetters[j]){
          alert('異なる文字を入れてください');
          return;
        }
      }
    }
    $('#process').prepend('<tr><td>' + myWord + '</td><td>' + eat + 'eat ' + bite + 'bite</td></tr>');
    if(eat == wordNum){
      alert('正解です！\n' + $('#answer').text() + ' : ' + $('#description').text());
    }
  }else{
    alert(wordNum + '文字のアルファベットを入力してください');
  }
});

$('#open').click(function(){
  $('#answer').css('display','inline');
  $('#description').css('display','inline');
});

document.addEventListener('touchstart', event => {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, true);

let lastTouch = 0;
document.addEventListener('touchend', event => {
  const now = window.performance.now();
  if (now - lastTouch <= 500) {
    event.preventDefault();
  }
  lastTouch = now;
}, true);