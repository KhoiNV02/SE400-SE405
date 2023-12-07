var chat=document.querySelector("#chatbar");
function addParagraph(mes) {
    // Tạo một thẻ <p>
    var newParagraph = document.createElement("p");
    newParagraph.classList.add("usernam1-hello-DmX");
    // Thêm nội dung cho thẻ <p> (có thể sửa đổi dòng này để thêm nội dung mong muốn)
    var paragraphContent = document.createTextNode(mes);
    newParagraph.appendChild(paragraphContent);

    // Lấy thẻ <div> dựa trên ID
    var myDiv = document.getElementById("chat");

    // Thêm thẻ <p> vào bên trong thẻ <div>
    myDiv.appendChild(newParagraph);
    myDiv.scrollTop = myDiv.scrollHeight;
  }

chat.onkeydown= function handleKeyDown(event) {
    // Kiểm tra xem phím Enter đã được nhấn hay không (keyCode 13 hoặc key "Enter")
    if (event.key === "Enter" || event.keyCode === 13) {
      // Thực hiện các hành động khi người dùng nhấn Enter ở đây
      socket.emit("send-hello",chat.value);
      // addParagraph(chat.value);
      chat.value="";
    }
  }
  socket.on("send-hello-e",function(data)
  {
    addParagraph(data);
  })




  var audio=document.querySelector("#nut");
  var i=0;
 audio.onclick=function() {
      var p=document.querySelector("#audio");
      if (i%2==0)
      {
          audio.setAttribute("src","../main/assets/vector-5s3.png");
      p.play();
      }
  else
  {
      audio.setAttribute("src","../main/assets/volumne1.png");
  p.pause();
  }
i++;
  }