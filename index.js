//$('#process').load('https://www.dropbox.com/s/g56qxevr4an0o1t/dict-4letters.txt?dl=0');
//$('#process').load('./dict-4letters.txt');

//$.get('./dict-4letters.txt',callback(data));
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
    $('#process').append(myWord + ' : ' + eat + 'eat ' + bite + 'bite<br>');
    if(eat == 4){
      alert('正解です！\n' + $('#answer').text() + ' : ' + $('#description').text());
      location.reload();
    }
  }else{
    alert('4文字のアルファベットを入力してください');
  }
//  alert($('#answer').text());
});

/*for(var i=0;i<10;i++){
  console.log(list[i]);
}*/