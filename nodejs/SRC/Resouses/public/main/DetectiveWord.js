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

var Location=Loca;
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
}
else
if (Location=="your")
{   
    socket.emit("Create-Room",{UserName: UserName, RoomName:Of });
}



var rn;
if (Loca==='my')
rn=Of+"'s Room";
else
rn=Of;
var t=0;
var Mang=[];
socket.emit("iWantToKnowMember",rn);
socket.on("memberWating",function(data){
     t=4-data;
    console.log(t);
    Mang=[idPlayer1,UserName,Loca,Of];
     });
     //gửi số lượng người còn thiếu

    //  joinTheGame.onclick=function(){
    //     window.location.href = `http://localhost:3000/HarvestFestival/${Mang}`; 
    //    }
