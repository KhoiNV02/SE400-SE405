
// window.addEventListener('popstate', function(event) {
//     sessionStorage.setItem('isFirstVisit', 'false');
//   });
// document.addEventListener('DOMContentLoaded', function() {
//     // Kiểm tra xem trang đã được truy cập lần đầu hay chưa
//     var isFirstVisit = sessionStorage.getItem('isFirstVisit');

// const { json } = require("express");

   
//     if (!isFirstVisit) {
//       // Thực hiện hành động chỉ khi lần đầu truy cập
//       sessionStorage.setItem('isFirstVisit', 'true');
//       console.log("hello");
  
//       // Đánh dấu rằng trang đã được truy cập lần đầu
      
//     }
//     else
// {
//     // sessionStorage.setItem('isFirstVisit', 'false');
//     console.log("đây là lần thứ 2 bạn vào trang");
// }
//   });
// js của startRoom
// Instead of import axios from 'axios';
// import {axios} from 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';


try
{ 
    var Location=Loca;
    console.log(Location);
    if (Location=='my')
    {  
    socket.emit("Create-Room",UserName+"'s Room");
    socket.on("Server-Send-Room",function(data)
    {
        console.log(data);
        // Gửi yêu cầu POST với dữ liệu trong phần thân
        // Dữ liệu bạn muốn gửi
        const params = {
            param1: 'value1',
            param2: 'value2',
            // Thêm các tham số khác tùy thuộc vào API của bạn
          };
          
        data=JSON.stringify(data);
        // Gửi yêu cầu POST với dữ liệu trong phần thân
        axios.post(`http://localhost:3000/HarvestFestival/edit`,data)
            .then(response => {
            console.log('Dữ liệu nhận được sau khi gửi POST request:', response.data);
            })
            .catch(error => {
            console.error('Lỗi khi gửi POST request:', error);
            });
        var id=1;
       

    })  
    }
    else
    if (Location="your")
    {   
        socket.emit("Create-Room","Username1's Room");
    }

}
catch
{

}
// js của Waiting-Room
var i=0;
var idPlayer=1;
var Username='';
while (i<log.length&&log[i]!=',')
i++;
i++;
while (i<log.length)
{
Username+=log[i];
i++;
}
// sự kiện nhân vật xuất hiện
var player1=document.querySelector("#player1");
player1.style.display="none";
var player2=document.querySelector("#player2");
player2.style.display="none";
var player3=document.querySelector("#player3");
player3.style.display="none";
var player4=document.querySelector("#player4");
player4.style.display="none";
 if (idPlayer=='1')
 {
 player1.style.display="block";
 var PlayerName=document.querySelector("#Player1-name");
 PlayerName.textContent=Username;
 }
 if (idPlayer=='2')
 {

player2.style.display="block";
 }
 else
 if (idPlayer=='3')
 {
 player3.style.display="block";
 }
 else
 if (idPlayer=='4')
 {
player4.style.display="block";
 }