try
{
 
    // English vocabulary array++
      var iconsGame=['../main/assets/nicework.png','../main/assets/amazing.png','../main/assets/champion.png','../main/assets/Cool.png','../main/assets/greatjob.png','../main/assets/nicework2.png','../main/assets/weldon.png','../main/assets/welldone.png','../main/assets/youdoit.png','../main/assets/congratulation.png'];
      var backGame=['../main/assets/bumchiu.gif','../main/assets/flow.gif','../main/assets/lolo.gif','../main/assets/tede.gif','../main/assets/money.gif'];
      var VocabularyArray;
      function rand(max,min)
      {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      var Starting=document.querySelector("#Starting");
      var Games;
      var reduce;
      var Check0=true;
    // gửi về cho server biết là vào game rồi và truyền độ dài của mảng, nếu bằng 33-32 thì chạy round đầu, còn ko thì chạy round 2 hết
    var Questions=document.querySelectorAll(".cell");
    var Score=document.querySelectorAll(".Score");
    var Ques=document.querySelectorAll(".question");
    console.log(Score.length);
    console.log(Ques.length);
    for (var i=0;i<Score.length;i++)

    var audio2=document.querySelector("#audio2");
    var icon1=document.querySelector("#icon1");
    var icon2=document.querySelector("#icon2");
    var typeAnswer=document.querySelector("#typeAnswer");
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
    var turn;
var gPoint;
var gScore;
var gQues;
// hàm để bắt đầu vòng chơi mới.
function StartRound(data) {
    gScore='fkaoksfaoksfokasf';
    gQues='kfaoskfoaksfkasfo';
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
                    gPoint = rand(32, 0);
                    runEffect(gPoint);
                    i++;
                } else {
                    runEffect(data.gPoint);
                        // gọi runEffect với gPoint được server gửi về
                        gPoint=data.gPoint;
                    var sc=data.sc;
                    var qu=data.qu;
                    // console.log('gPoint lỗi hay là Score[gPoint]')
                    // console.log(gPoint);
                    // console.log(Score[gPoint]);
                    if (Score[gPoint].querySelector('p')!=null)
                    {
                    Score[gPoint].querySelector('p').textContent = sc.toString();
                    Ques[gPoint].querySelector('p').textContent=data.VocabularyArray.question;    
                }
                else
                {
                console.log("Lỗi");
            clearInterval(intervalId);    
            }
               
                    gScore=sc.toString();
                    gQues=data.VocabularyArray.root;
                    clearInterval(intervalId);
                    resolve();
                }
            }, 70);
        });
    });
}
// server gửi về đây là oke, chạy hiệu ứng trận đầu tiên đi và truyền về gồm có sc,qu,gPoint
// đây là round đầu tiên
var cReduce=true;
var cGame=true;
socket.on("RoundInfor",function(data)
{   check0=true;
    // console.log("dữ liệu trận này");
    // console.log(data);
    turn=data.turn;
    VocabularyArray=data.VocabularyArray;

    StartRound(data).then(function(){
      var  reduce1=setInterval(function(){
        if ((parseInt(Score[gPoint].querySelector('p').textContent)-30)<=0&&check0===true)
        {
            Score[gPoint].querySelector('p').textContent ='0';
            gQues='kfaoskfoaksfkasfo';
            var right={
                username:'NoBody',
                room:rn,
                turn:roundInfor.round,
                score:0 ,
            }
            socket.emit("IAmRight",right);
            clearInterval(reduce1);
        }
        else
        {
       if (cReduce===true)    Score[gPoint].querySelector('p').textContent =(parseInt(Score[gPoint].querySelector('p').textContent)-30).toString();
    else
if (cReduce===false) clearInterval(reduce1);
        }
       },3000);
     
   })
})

// bắt đầu round mới ở đây nè



function Congratulation(choise)
{
   typeAnswer.value='';
   var i1=rand(8,0);
   var i2=rand(4,0);
   if(choise===1)
   {
    icon1.querySelector('img').setAttribute("src",iconsGame[i1]);
   }
   else
   {
    icon1.querySelector('img').setAttribute("src", '../main/assets/dontgiveup.png');
   
   }
    icon2.querySelector('img').setAttribute("src",backGame[i2]);
    icon1.style.zIndex='3';
    icon2.style.zIndex='3';
    audio2.play();
    icon1.style.display='block';
    icon2.style.display='block';
    icon1.classList.remove('hide');
    icon2.classList.remove('hide');

    setTimeout(() => {
        icon1.classList.add('hide');
        icon2.classList.add('hide');

    }, 1500);
}
typeAnswer.onkeydown=function(event){
    if (event.key === "Enter" || event.keyCode === 13)
   {
    if (typeAnswer.value.toUpperCase()==='1')
    socket.emit("GameEnd");
    if (typeAnswer.value.toUpperCase()===gQues.toUpperCase())
  {
    gQues='kfaoskfoaksfkasfo';
    check0=false;
    var right={
        username:UserName,
        room:rn,
        turn:roundInfor.round,
        score:parseInt(Score[gPoint].querySelector('p').textContent) ,
    }
    socket.emit("IAmRight",right);
   
//    gửi req về server tôi đã đúng để chặn những người chơi khác lại, sau đó server phải gửi về lại là ai đúng, rồi chạy hiệu ứng chúc
//mừng cho người đó, còn những người kia sẽ hiển thị you not lucky
  }
   }
}
socket.on("TheWinner",function(data)
{
    console.log("đã chạy vào đyâ");
   cReduce=false;
   cGame=false;
    if (data===UserName)
    Congratulation(1);
        else
            Congratulation(0);
setTimeout(() => {
    Score[gPoint].querySelector('p').textContent = '??';
    Ques[gPoint].querySelector('p').textContent = '!!/!!/!!';
    roundInfor.round+=1;
    cReduce=true;
socket.emit("StartGame",roundInfor);

}, 3000);

})

}
catch(error)
{

}