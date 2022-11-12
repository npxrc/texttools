setTimeout(() => {
    document.getElementById('caps').addEventListener('click',()=>{
        if (document.getElementById('uncaps').checked||document.getElementById('altcaps').checked){
            document.getElementById('uncaps').checked = false
            document.getElementById('altcaps').checked = false
        }
    })
    document.getElementById('uncaps').addEventListener('click',()=>{
        if (document.getElementById('caps').checked||document.getElementById('altcaps').checked){
            document.getElementById('caps').checked = false
            document.getElementById('altcaps').checked = false
        }
    })
    document.getElementById('altcaps').addEventListener('click',()=>{
        if (document.getElementById('caps').checked||document.getElementById('uncaps').checked){
            document.getElementById('caps').checked = false
            document.getElementById('uncaps').checked = false
        }
    })
    document.getElementById('footer').addEventListener('click',()=>{
        location.href = '/changelog/'
    })
}, 100);
setInterval(() => {
    if (document.getElementById('inputbox').value.length>20){
        let length = document.getElementById('inputbox').value.length-20
        length*=8
        length+=300
        if (Math.floor(length) >= Math.floor(window.innerWidth)){
            document.getElementById('inputbox').style.width = window.innerWidth-200
        } else{
            document.getElementById('inputbox').style.width = length
        }
    } else{
        document.getElementById('inputbox').style.width = 300
    }
    run()
}, 10);
function run(){
    /*// Caps |
    //        |
    *///      V
    if (document.getElementById('caps').checked){
        let input = document.getElementById('inputbox').value.toString().toUpperCase()
        document.getElementById('output').innerHTML = "<code style=\"font-size: x-large;\">Output</code>\n<div class=\"seperator\"></div><br>\n<output id=\"outputbox\">"+input+"</output><br>\n<div class=\"seperator\"></div><br>\n<br>"
    }
    /*// UNcaps |
    //          |
    *///        V 
    else if (document.getElementById('uncaps').checked){
        let input = document.getElementById('inputbox').value.toString().toLowerCase()
        document.getElementById('output').innerHTML = "<code style=\"font-size: x-large;\">Output</code>\n<div class=\"seperator\"></div><br>\n<output id=\"outputbox\">"+input+"</output><br>\n<div class=\"seperator\"></div><br>\n<br>"
    }
    /*// Alt Caps |
    //            |
    *///          V 
    else if (document.getElementById('altcaps').checked){
        let input = document.getElementById('inputbox').value.toString().toLowerCase()
        var chars = input.toLowerCase().split("");
        for (var i = 1; i < chars.length; i += 2) {chars[i] = chars[i].toUpperCase()}
        chars = chars.join("");
        input = chars;
        document.getElementById('output').innerHTML = "<code style=\"font-size: x-large;\">Output</code>\n<div class=\"seperator\"></div><br>\n<output id=\"outputbox\">"+input+"</output><br>\n<div class=\"seperator\"></div><br>\n<br>"
    }
}