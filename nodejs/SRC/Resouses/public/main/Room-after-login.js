// Tạo hiệu ứng nhảy cho cái hình Festival
var Dance=document.querySelector("#Dance");
var i=0;
Dance.onclick = function(){
    if (i%2==0)
    Dance.src="./assets/harvest.gif";
else
Dance.src="./assets/harvestfestival-1.png";
i++
};
// 
// Bắt sự kiện chọn loại room Public hay private
var Public=document.querySelector("#Left");

var Private=document.querySelector("#Right");

var Mid=document.querySelector("#Mid");


Private.onclick =function(){

    Mid.style.transform = "translateX(100%)";
}

Public.onclick =function(){
 
    Mid.style.transform = "translateX(0%)";
}



