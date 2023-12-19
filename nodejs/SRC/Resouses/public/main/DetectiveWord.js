
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



console.log(players.length);
console.log(wating[0].style.backgroundImage);
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

ButtonStart.onclick=function()
{

    // dùng xong nhớ xóa đoạn t=0;
    t=0;
if (t>0)
alert("Vui lòng chờ đủ 4 người chơi để bắt đầu");
else
if (t==0)
{
    socket.emit("StartDetec",rn);
}
}
socket.on("DetecStart",function(){
    zoGame(rn);
})
     socket.on("Check-people", function () {
        socket.emit("iWantToKnowMember", rn);

      })
