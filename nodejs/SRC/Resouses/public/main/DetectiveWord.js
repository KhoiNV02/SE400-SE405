
function DeleteRoomInDatabase(data)
{   
    const request={
        data:JSON.stringify(data),
        range:range,
        gameMode:gameMode,
    }
    
            
    axios.post(`http://localhost:3000/HarvestFestival/edit`,request
    , {
        headers: {
          'Content-Type': 'application/json',
        },}
    )
        .then(response => {
        console.log('Dữ liệu nhận được sau khi gửi POST request:', response.data);
        })
        .catch(error => {
        console.error('Lỗi khi gửi POST request:', error);
        }); 
}
var wating=document.querySelectorAll(".leftbodyBomb");
var ButtonStart=document.querySelector("#ButtonStart");
var ButtonLeave=document.querySelector("#ButtonLeave");
var audio=document.querySelector("#audio");
var players=document.querySelectorAll(".playerSpace");
var Location=Loca;
ButtonLeave.onclick=function()
{
    window.history.back();
}
// console.log(Location);
if (Location=='my')
{  
// socket.emit("Create-Room",UserName+"'s Room");
// var randomNumber = Math.floor(Math.random() * (9000)) + 1000;
socket.emit("Create-Room", { UserName: UserName, RoomName: UserName + "'s Room",Code:idPlayer1 });
socket.on("Server-Send-Room",function(data)
{ 
    if (data[data.length-1].UserName === UserName)
    {       
        DeleteRoomInDatabase(data); 
    }
})
socket.emit("Create-Player");  

socket.on("Player-At-TheMoment",function(data){
  for (var i=0;i<data.length;i++)
  {players[i].querySelector('.playerNameSpace').querySelector('p').textContent=data[i].Use;
    if (data[i].Use===UserName)
    players[i].querySelector('.playerNameSpace').querySelector('p').style.animation='bounce 1s infinite';
    else
    players[i].querySelector('.playerNameSpace').querySelector('p').style.animation='none';
}
});
}
else
if (Location=="your")
{   
    ButtonStart.style.display='none';
    ButtonLeave.style.display='block';
    socket.emit("Create-Room",{UserName: UserName, RoomName:Of });
    socket.emit("Create-Player");  
    socket.on("Player-At-TheMoment",function(data){
        for (var i=0;i<data.length;i++)
        {  if (data[i].Use===UserName)
            players[i].querySelector('.playerNameSpace').querySelector('p').style.animation='bounce 1s infinite';
            else
            players[i].querySelector('.playerNameSpace').querySelector('p').style.animation='none';
            players[i].querySelector('.playerNameSpace').querySelector('p').textContent=data[i].Use;
        }  
    });
}

var rn;
if (Loca==='my')
rn=Of+"'s Room";
else
rn=Of;
var t=4;
var Mang=[];
socket.emit("iWantToKnowMember",rn);
socket.on("memberWating",function(data){
     t=4-data;
    if (t==3)
    wating[0].style.backgroundImage="url('main/assets/detectiveWord-5.png')";
   else
    if (t==2)
    wating[0].style.backgroundImage="url('main/assets/detective-4.png')";
    else
    if (t==1)
    wating[0].style.backgroundImage="url('main/assets/detective-3.png')";   
    else
    if (t==0)
    wating[0].style.backgroundImage="url('main/assets/detectiveWord-2.png')";   

});
function zoGame()
{
    var set
    set=setInterval(() => {
        audio.volume-=0.04;
    }, 50);
    setTimeout(function () {
        // document.querySelector('.transition-container').style.opacity = '0';
    
       wating[0].style.opacity = '0';
       clearInterval(set);
      }, 1000);
     
      // Redirects to the next page after the transition effect finishes
      setTimeout(function () {
        setTimeout(function(){
            audio.currentTime = 0;
            audio.volume=1;
        },500)
        
        wating[0].style.display='none';
        wating[1].style.display='flex';
        clearInterval(set);
      }, 2000); // Change 2000 to match the total duration of your transition effect
}
var Ques=[
  { Word: 'Dog', WordRelative: 'Cat' },
  { Word: 'Sun', WordRelative: 'Moon' },
  { Word: 'City', WordRelative: 'Countryside' },
  { Word: 'Ocean', WordRelative: 'Island' },
  { Word: 'Problem', WordRelative: 'Solution' },
  { Word: 'Hero', WordRelative: 'Villain' },
  { Word: 'Love', WordRelative: 'Hate' },
  { Word: 'Fire', WordRelative: 'Water' },
  { Word: 'Shit', WordRelative: 'Shrimp Paste' },
  { Word: 'Summer', WordRelative: 'Winter' },
  { Word: 'Docter', WordRelative: 'Patient' },
  { Word: 'Rice', WordRelative: 'Drug' },
  { Word: 'Car', WordRelative: 'Bike' },
  { Word: 'Desktop', WordRelative: 'Laptop' },
  { Word: 'Sunny', WordRelative: 'Raining' },
  { Word: 'Train', WordRelative: 'Ship' },
  { Word: 'Cry', WordRelative: 'Laugh' },
  { Word: 'Rich', WordRelative: 'Poor' },
  { Word: 'Black', WordRelative: 'White' },
  { Word: 'Fast', WordRelative: 'Slow' },
  { Word: 'C#', WordRelative: 'HTML' },
  { Word: 'Coconut', WordRelative: 'Pineapple' },
  { Word: 'Street', WordRelative: 'Land' },
  { Word: 'Eagle', WordRelative: 'Pinguine' },
  { Word: 'Eat', WordRelative: 'Drink' },
  { Word: 'Beer', WordRelative: 'Water' },
  { Word: 'Shirt', WordRelative: 'Pants' },
  { Word: 'Cotton', WordRelative: 'Cloud' },
  { Word: 'Mouse', WordRelative: 'Cockroach' },
  { Word: 'Skirt', WordRelative: 'Pants' },
  { Word: 'Red', WordRelative: 'Yellow' },
  { Word: 'Crush', WordRelative: 'Debtor' },
  { Word: 'Female', WordRelative: 'Male' },
  { Word: '18', WordRelative: '5' },
  { Word: 'Grass', WordRelative: 'Tree' },
];
var Round=1;
var Vote=Math.floor(Math.random() * (3 - 0 + 1)) +0;
ButtonStart.onclick=function()
{

    // dùng xong nhớ xóa đoạn t=0;
    t=0;
if (t>0)
alert("Vui lòng chờ đủ 4 người chơi để bắt đầu");
else
if (t==0)
{
    var obj=
    {
        rn:rn,
        Ques:Ques,
    }
    socket.emit("StartDetec",obj);
}
}
var Bom=document.querySelector("#Bom");
  var Bum=document.querySelector("#Bom1");
  var Ques1=document.querySelector("#Ques");
function mytimer (ques)
{
  setTimeout(()=>{Bom.style.transform= "scale(1.2)";},300); 
  setTimeout(()=>{Bom.style.transform= "scale(1.5)";},600); 
  setTimeout(()=>{Bom.style.transform= "scale(2.)";},800); 
  setTimeout(()=>{Bom.style.transform= "scale(2.5)"; Bum.style.display="block";},1000); 
  setTimeout(()=>{ Bom.style.opacity="0"; Bom.style.transform= "scale(0.8)"; },1200);
  setTimeout(()=>{ Bom.style.opacity="1"; Bum.style.display="none"; Ques1.querySelector('p').textContent=ques},1600);
}
socket.on("DetecStart",function(){
        zoGame(rn);
        setTimeout(() => {
            socket.emit("DecStartRound",Round);
        }, 3000);
})
socket.on("RoundInforDec",function(data){
    console.log("Thông tin vòng chơi");
    console.log(data);
   if (players[data.imposter].querySelector('.playerNameSpace').querySelector('p').textContent===UserName)
    mytimer(data.ques.WordRelative);
else
    mytimer(data.ques.Word);

setTimeout(function(){
    var r=10;
 var timeover= setInterval(function(){
    Ques1.style.marginTop='-3%';
    Ques1.querySelector('p').textContent=`The Time comming Over,please Voted Who is Imposter ${r}`;
    r--;
    if (r<0)
    {
        clearInterval(timeover);
      
    var obj={
        Vote:Vote,
        rn:rn,
    }
    socket.emit("Voted",obj);
    socket.on("TheImposter",function(data1){
     
        Ques1.style.marginTop='0';
        var name=players[data1].querySelector('.playerNameSpace').querySelector('p').textContent;
          Ques1.querySelector('p').textContent=`'${name}' got the most votes`;
          var avt=players[data1].querySelector('.playeravtSpace').querySelector('img').src;
    if(data1===1)
    {
        Bom.style.width='50%';
    }
    Bom.setAttribute("src",avt);
    players[data1].style.opacity=0;
    
    Bom1.setAttribute("src","../main/assets/prison.png");
    Bom1.style.display='block';
    Bom1.style.width='80%';
    Bom1.style.top='-10px';
    Bom1.style.left='10%';
    Bom1.style.opacity='0.8';
    var tt;
    setTimeout(function(){
        Ques1.querySelector('p').textContent=`The Imposter is ${name}`;
        if (data1==data.imposter)
        {   if (data1===1)
            Bom.style.width='80%';
            Bom1.style.top='-30px';
            avt='main/assets/Virus.png';
            Bom.setAttribute("src",avt);  
            tt= players[data.imposter].querySelector('.playeravtSpace').querySelector('img').src;
        }
        else
        {
        players[data.imposter].querySelector('.playeravtSpace').querySelector('img').style.width='90%';
         tt= players[data.imposter].querySelector('.playeravtSpace').querySelector('img').src;
        players[data.imposter].querySelector('.playeravtSpace').querySelector('img').setAttribute("src","main/assets/Virus.png");
        }
    
        setTimeout(function(){
            Ques1.querySelector('p').style.display='none'
            Bom.setAttribute("src","../main/assets/questionBox.png");
         players[data.imposter].querySelector('.playeravtSpace').querySelector('img').setAttribute("src",tt)
          players[data.imposter].querySelector('.playeravtSpace').querySelector('img').style.width='50%';
         Bom.style.width='70%';
         Bom.style.transform='1';
        Ques1.style.marginTop='0';
        Bom1.style.display='none';
        Bom1.style.width='150%';
        Bom1.style.top='-100px';
        Bom1.style.left='-80px';
        Bom1.style.opacity='1';
        players[data1].style.opacity=1;
        setTimeout(function(){
    if (rn===UserName+"'s Room")
        {
        Round++;
        console.log("tôi là chủ room");
        socket.emit("DecStartRound",Round);
        }
        },3000);
        },3000);

    },5000);
   
    })
  
    }
    },100);
    
  
},1000);
})
for (var i=0;i<players.length;i++)
{   
    (function (index) {
    players[index].onclick=function(){
    for (var j=0;j<players.length;j++)
    players[j].style.animation='none';
    players[index].style.animation='glow 2s infinite';
    Vote=index;
    console.log(Vote);
            }
        })(i);
}

// setInterval(function(){
//     Round+=1;
//     socket.emit("DecStartRound",Round);
// },10000)

     socket.on("Check-people", function () {
        socket.emit("iWantToKnowMember", rn);

      })
