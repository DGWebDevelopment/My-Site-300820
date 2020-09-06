var pawsnclawsprojectbox = document.getElementById("pawsnclawsprojectbox");
var pawsnclawsprojecttext = document.getElementById("pawsnclawsprojecttext");
pawsnclawsprojectbox.onmouseover=function() {
    pawsnclawsprojectbox.style.backgroundImage= "url('threepawsgreyblur.jpg')";
    pawsnclawsprojecttext.style.opacity= "1";
    pawsnclawsprojectbox.style.borderColor="black";
    pawsnclawsprojectbox.style.borderStyle="solid";
};
pawsnclawsprojectbox.onmouseout=function() {
    pawsnclawsprojectbox.style.backgroundImage= "url('pawsnclawscleartilted.jpg')";
    pawsnclawsprojecttext.style.opacity= "0";
    pawsnclawsprojectbox.style.borderColor="red";
    pawsnclawsprojectbox.style.borderStyle="solid";
};


var mysiteprojectbox = document.getElementById("mysiteprojectbox");
var mysiteprojecttext = document.getElementById("mysiteprojecttext");
mysiteprojectbox.onmouseover=function() {
    mysiteprojectbox.style.backgroundImage= "url('')";
    mysiteprojectbox.style.backgroundColor= "rgb(47,46,51)";
    mysiteprojecttext.style.opacity= "1";
    mysiteprojectbox.style.borderColor="black";
    mysiteprojectbox.style.borderStyle="solid";
};
mysiteprojectbox.onmouseout=function() {
    mysiteprojectbox.style.backgroundImage= "url('streetlights250.png')";
    mysiteprojecttext.style.opacity= "0";
    mysiteprojectbox.style.borderColor="rgb(47, 156, 189)";
    mysiteprojectbox.style.borderStyle="solid";
};