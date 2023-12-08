
// window.addEventListener('popstate', function(event) {
//     // Kiểm tra xem có thể đặt lại giá trị isFirstVisit tại đây nếu cần
//     this.alert("hello");
// });
// Xử lý sự kiện popstate khi người dùng nhấn nút "Back"
// window.addEventListener('popstate', function(event) {
//     // Thực hiện hành động của bạn khi người dùng nhấn nút "Back"
//     localStorage.setItem('myKey', 'myValue1');
//     // Xóa token khi người dùng nhấn nút "Back"
 
// });

// Lấy giá trị từ sessionStorage để kiểm tra trạng thái
// Lấy giá trị của biến dùng chung



// js của startRoom
// Instead of import axios from 'axios';
// import {axios} from 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';
  // DeleteRoomInDatabase(data);
  
//   document.addEventListener('keydown', function(event) {
//     // Kiểm tra xem phím nhấn có phải là F5 hay không
//     if (event.key === 'F5') {
//         // Thực hiện hành động của bạn khi người dùng nhấn F5
//         // console.log("Người dùng đã nhấn F5");
//         alert("f5");
//         // Đặt lại giá trị isFirstVisit nếu cần
//         // sessionStorage.setItem('isFirstVisit', 'false');
//     }
// });



function decodeHtmlEntity(encodedString) {
    var doc = new DOMParser().parseFromString(encodedString, 'text/html');
    return doc.documentElement.textContent;
}
var decodedString = decodeHtmlEntity(idPlayer1);
function DeleteRoomInDatabase(data)
{   
    data=JSON.stringify(data);
    axios.post(`http://localhost:3000/HarvestFestival/edit`,data)
        .then(response => {
        console.log('Dữ liệu nhận được sau khi gửi POST request:', response.data);
        })
        .catch(error => {
        console.error('Lỗi khi gửi POST request:', error);
        }); 
}
try
{ 
    var Location=Loca;
    // console.log(Location);
    if (Location=='my')
    {  
    // socket.emit("Create-Room",UserName+"'s Room");
    var randomNumber = Math.floor(Math.random() * (9000)) + 1000;
    socket.emit("Create-Room", { UserName: UserName, RoomName: UserName + "'s Room",Code:randomNumber });
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
        
        socket.emit("Create-Room",{UserName: UserName, RoomName:decodedString });
    }

}
catch
{

}

// js của Waiting-Room
// var i=0;
// var idPlayer=1;
// var Username='';
// while (i<log.length&&log[i]!=',')
// i++;
// i++;
// while (i<log.length)
// {
// Username+=log[i];
// i++;
// }
// // sự kiện nhân vật xuất hiện
// var player1=document.querySelector("#player1");
// player1.style.display="none";
// var player2=document.querySelector("#player2");
// player2.style.display="none";
// var player3=document.querySelector("#player3");
// player3.style.display="none";
// var player4=document.querySelector("#player4");
// player4.style.display="none";
//  if (idPlayer=='1')
//  {
//  player1.style.display="block";
//  var PlayerName=document.querySelector("#Player1-name");
//  PlayerName.textContent=Username;
//  }
//  if (idPlayer=='2')
//  {

// player2.style.display="block";
//  }
//  else
//  if (idPlayer=='3')
//  {
//  player3.style.display="block";
//  }
//  else
//  if (idPlayer=='4')
//  {
// player4.style.display="block";
//  }