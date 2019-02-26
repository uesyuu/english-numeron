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

$('#button').click(function(){
  var myWord = $('#text').val();
  if(myWord.match(/^[a-z]{4}$/)){
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
    if(eat == 4){
      alert('正解です！\n' + $('#answer').text() + ' : ' + $('#description').text());
      location.reload();
    }
  }else{
    alert('4文字のアルファベットを入力してください');
  }
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