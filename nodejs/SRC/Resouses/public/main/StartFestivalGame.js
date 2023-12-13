var Starting=document.querySelector("#Starting");
var Games;
// English vocabulary array
const beforeVocabularyArray = [
    "Sun",
    "Clouds",
    "Ocean",
    "Mountains",
    "Rose",
    "Piano",
    "Books",
    "Mobile phone",
    "Earth",
    "Hero",
    "Moon",
    "City",
    "Family",
    "Park",
    "Street lights",
    "Artist",
    "Delicious food",
    "Computer",
    "Northern lights",
    "Travel",
    "Adventure",
    "Fireworks",
    "Coffee",
    "Rainbow",
    "Waves",
    "Laughter",
    "Dreams",
    "Butterfly",
    "Serenity",
    "Galaxy",
    "Magic",
    "Journey",
    "Harmony"
  ];  
  function rand(max,min)
  {
    return Math.floor(Math.random() * (max - min + 1)) + 1;
  }
if (Starting.style.display==='block')
{
    var Questions=document.querySelectorAll(".cell");
    var Score=document.querySelectorAll(".Score");
    var Ques=document.querySelectorAll(".question");
    function runEffect(i) {
        if (i < Questions.length)
        {
        for (var j = 0; j < Questions.length; j++)
        {
            Questions[j].style.background = '#5b5b5b';
            Questions[j].style.opacity='0.4';
            Questions[j].style.animation='none';
            Questions[j].style.transform='scale(1)';
            Questions[j].style.zIndex='0';
        }
        color='#fcec78';
        Questions[i].style.opacity='1';
        Questions[i].style.background = color;
        Questions[i].style.animation='glow 2s infinite';
        Questions[i].style.transform='scale(1.25)';
        Questions[i].style.zIndex='1';
        }
    }
var gPoint;
var gScore;
var gQues;
function StartRound() {
    gScore='';
    gQues='';
    return new Promise(function (resolve) {
        var au = document.querySelector("#audio1");
        au.play();

        var i = 0;
        var intervalId = setInterval(function () {
            if (i <= 33) {
                runEffect(i);
                i++;
            } else {
                clearInterval(intervalId);
                resolve();
            }
        }, 70);
    }).then(function () {
        return new Promise(function (resolve) {
            var i = 0;
            var intervalId = setInterval(function () {
                if (i <= 33) {
                    gPoint = rand(33, 1);
                    runEffect(gPoint);
                    i++;
                } else {
                    var sc=rand(99,20);
                    // lấy chiều dài hiện tại của mảng
                    var qu=rand(vocabularyArray.length-1,0);
                
                    Score[gPoint].textContent = sc.toString();
                    
                    Ques[gPoint].textContent = beforeVocabularyArray[qu];
                    gScore=sc.toString();
                    gQues=beforeVocabularyArray[qu];
                    clearInterval(intervalId);
                    resolve();
                }
            }, 70);
        });
    });
}
// đây là round đầu tiên
// StartRound().then(function(){
//     setTimeout(function(){
//         Score[gPoint].textContent = '??';
//         Ques[gPoint].textContent = '!!/!!/!!';
//     },8000);
// })
// bắt đầu round mới ở đây nè
function start()
{
    Games=setInterval(function () {
        StartRound().then(function () {
            setTimeout(function(){
                Score[gPoint].textContent = '??';
                Ques[gPoint].textContent = '!!/!!/!!';
            },10000)
          
        });
    }, 15000);   
}
gQues='hello';
var audio2=document.querySelector("#audio2");
var icon1=document.querySelector("#icon1");
console.log(audio2);
console.log(icon1);
var typeAnswer=document.querySelector("#typeAnswer");
console.log(typeAnswer);
typeAnswer.onkeydown=function(event){
    if (event.key === "Enter" || event.keyCode === 13)
   {
    if (typeAnswer.value===gQues)
  {
    audio2.play();
    icon1.style.display='block';
  }
   }
}
// clearInterval(Games);

}