//This array matches each input field with its relevant default placeholder (for use in resetting them in the 'processClick' function below).
let inputFields = [
    {id:"nameinput", placeholder: "Please enter your name here:"},
    {id:"emailinput", placeholder: "Please enter your email address here:"},
    {id:"messageinput", placeholder: "Please type your message here"},
];

//This function is used to blank each input's placeholder when the input is selected, and then restore the default placeholder when somewhere else is clicked on the page.
window.onclick=processClick;
function processClick (eventObj) {
    if (eventObj.target.getAttribute("class")=="input") {
        eventObj.target.setAttribute("placeholder", "");
        eventObj.target.style.border= "2px solid rgb(105, 168, 50)";
    }
    for (var i=0; i<inputFields.length; i++) {
        if (inputFields[i].id!==eventObj.target.id) {
            document.getElementById(inputFields[i].id).setAttribute("placeholder", inputFields[i].placeholder);
            if (document.getElementById(inputFields[i].id).value==="") {
                document.getElementById(inputFields[i].id).style.border= "";
            }
        }  
    }
};

//Please note that I hid the actuall submit button associated with the form as I was having issues using Javascript to filter whether the PHP is activated,
//therefore I just included activation of the real submit button as being called only when the filter function further down proves correct.


//The following 2 functions are just to style the submit button (once all 3 input fields are correctly filled, the submit button's text will go green when it is hovered over).
document.getElementById("falsesubmitbutton").onmouseover=function() {
    if (document.getElementById("nameinput").value!==""&&
    document.getElementById("emailinput").value!==""&&
    document.getElementById("messageinput").value!==""){
        document.getElementById("falsesubmitbutton").setAttribute("style", "color:green")
    }
}
document.getElementById("falsesubmitbutton").onmouseout = function() {
    document.getElementById("falsesubmitbutton").setAttribute("style", "color:black");
}

//The following function filters whether the user has input text into all 3 fields, letting them know if they haven't correctly done this, and calling the genuine 'Submit' button if they have in fact done it correctly. 
document.getElementById("falsesubmitbutton").onclick=function() {
    console.log("testdylan");
    if (document.getElementById("nameinput").value===""||
    document.getElementById("emailinput").value===""||
    document.getElementById("messageinput").value===""){
        document.getElementById("formerrormessage").style.opacity="1";
        document.getElementById("formerrormessagestar").style.opacity="1";
    }
    else {
        document.getElementById("submitbutton").click();
    }

    for (var i=0; i<inputFields.length; i++) {
        var errorStarIdString= inputFields[i].id.replace(/input/g,'') + "errorstar";

        if (document.getElementById(inputFields[i].id).value==="") {
            document.getElementById(errorStarIdString).style.opacity="1";
        }
        else {
            document.getElementById(errorStarIdString).style.opacity="0";
        }
    }
};

//The following 2 functions are just to stop the form submitting (or attempting to submit) when the user has the name or email input fields selected and presses the Enter button on their keyboard.
//The reason I done this was in case the user thought pressing Enter button on their keyboard when they had either of these fields selected would just knock them down to the next field, but this would actually submit the form which they might not wish to do therefore I have negated it.
document.getElementById("nameinput").addEventListener("keydown", function(event){
    if (event.keyCode===13) {
        event.preventDefault();
    }
});
document.getElementById("emailinput").addEventListener("keydown", function(event){
    if (event.keyCode===13) {
        event.preventDefault();
    }
});