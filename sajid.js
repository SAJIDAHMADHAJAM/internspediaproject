function changecolor(){
    var hex_num = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];
    var hexcode1 = "";
     for(var i = 0; i < 6;i++){
        var  random_index = Math.floor(Math.random() * hex_num.length);
        hexcode1 += hex_num[random_index];
}
document.getElementById("hex_code").innerHTML = hexcode1;
document.getElementsByTagName("body")[0].style.background = "#" + hexcode1;
}