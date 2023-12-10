// begin copy mã mời bằng link, xử lý sau, thêm 1 file hbs để người dùng nhập tên rồi mới vào 
// var text = document.querySelector("#codeJoinRoom");

// text.addEventListener("click", function() {
//     // Tạo một textarea tạm thời
//     var tempTextarea = document.createElement("textarea");
//     tempTextarea.value = text.innerText;

//     // Thêm textarea vào trang web
//     document.body.appendChild(tempTextarea);

//     // Chọn toàn bộ văn bản trong textarea
//     tempTextarea.select();

//     try {
//         // Thực hiện lệnh copy
//         document.execCommand("copy");

//         // Thông báo hoặc thực hiện các hành động khác sau khi copy
//         alert("Text has been copied!");
//     } catch (err) {
//         console.error("Unable to copy text", err);
//     } finally {
//         // Xóa textarea sau khi đã copy
//         document.body.removeChild(tempTextarea);
//     }
// });
// end copy mã mời

try
{ 
  
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

}
catch
{

}

