window.onload=function(){
	var elements=document.getElementsByClassName("typewrite");
    var toRotate=elements[0].getAttribute("data-type");
    var data = JSON.parse(toRotate);
    
    var i = 0;
    var speed = 100;
    var j = 0;
    var curr_data = data[j];

    function typeWriter(curr_data) {
        if (i < curr_data.length) {
            document.getElementById("type").innerHTML += curr_data.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }else{
            retypeWriter(curr_data);
        }
        }
        function retypeWriter(curr_data) {
        if (i > 0) {
            document.getElementById("type").innerHTML = curr_data.slice(0,i -1) ;
            i--;
            setTimeout(retypeWriter, speed);
        }else{
            j = ( j + 1 ) % 2;
            curr_data = data[j];
            typeWriter(curr_data);
        }
    }
    typeWriter(curr_data);


}



