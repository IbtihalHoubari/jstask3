
var heading=" ";
heading += "<h2>favorite programming languages </h2>";
document.querySelector("h2").innerHTML = heading;

var languageslist=["python", "html", "c++"];
var data=" ";
for( i=0 ; i<3 ;i++){
    data += "<li>" + languageslist[i] + "</li>";
}

 document.querySelector("ul").innerHTML= data;
