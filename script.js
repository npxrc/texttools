setTimeout(() => {
    document.getElementById('caps').addEventListener('click',()=>{
        document.getElementById('uncaps').checked = false
        document.getElementById('altcaps').checked = false
        document.getElementById('tobase64').checked = false
        document.getElementById('frombase64').checked = false
        document.getElementById('urlfriendly').checked = false
        run()
    })
    document.getElementById('uncaps').addEventListener('click',()=>{
        document.getElementById('caps').checked = false
        document.getElementById('altcaps').checked = false
        document.getElementById('tobase64').checked = false
        document.getElementById('frombase64').checked = false
        document.getElementById('urlfriendly').checked = false
        run()
    })
    document.getElementById('altcaps').addEventListener('click',()=>{    
        document.getElementById('caps').checked = false
        document.getElementById('uncaps').checked = false
        document.getElementById('tobase64').checked = false
        document.getElementById('frombase64').checked = false
        document.getElementById('urlfriendly').checked = false
        run()
    })
    document.getElementById('tobase64').addEventListener('click',()=>{
        document.getElementById('caps').checked = false
        document.getElementById('uncaps').checked = false
        document.getElementById('altcaps').checked = false
        document.getElementById('frombase64').checked = false
        document.getElementById('urlfriendly').checked = false
        run()
    })
    document.getElementById('frombase64').addEventListener('click',()=>{
        document.getElementById('caps').checked = false
        document.getElementById('uncaps').checked = false
        document.getElementById('altcaps').checked = false
        document.getElementById('tobase64').checked = false
        document.getElementById('urlfriendly').checked = false
        run()
    })
    document.getElementById('urlfriendly').addEventListener('click',()=>{
        document.getElementById('caps').checked = false
        document.getElementById('uncaps').checked = false
        document.getElementById('altcaps').checked = false
        document.getElementById('tobase64').checked = false
        document.getElementById('frombase64').checked = false
        run()
    })
    document.getElementById('userinputbox').addEventListener('keydown',updateoutput)
    document.getElementById('userinputbox').addEventListener('keypress',updateoutput)
    document.getElementById('userinputbox').addEventListener('keyup',updateoutput)
    document.getElementById('footer').addEventListener('click',()=>{
        location.href = '/changelog/'
    })
}, 100);
function updateoutput(){
    if (document.getElementById('userinputbox').value.length>20){
        let length = document.getElementById('userinputbox').value.length-20
        length*=8
        length+=300
        if (Math.floor(length) >= Math.floor(window.innerWidth)){
            document.getElementById('userinputbox').style.width = window.innerWidth-200
        } else{
            document.getElementById('userinputbox').style.width = length
        }
    } else{
        document.getElementById('userinputbox').style.width = 300
    }
    run()
}
function run(){
    /*// Caps |
    *///      V
    if (document.getElementById('caps').checked){
        let input = document.getElementById('userinputbox').value.toString().toUpperCase()
        document.getElementById('output').innerHTML = "<code style=\"font-size: x-large;\">Output</code>\n<div class=\"seperator\"></div><br>\n<output id=\"outputbox\">"+input+"</output><br>\n<div class=\"seperator\"></div><br>\n<br>"
    }
    /*// UNcaps |
    *///        V 
    else if (document.getElementById('uncaps').checked){
        let input = document.getElementById('userinputbox').value.toString().toLowerCase()
        document.getElementById('output').innerHTML = "<code style=\"font-size: x-large;\">Output</code>\n<div class=\"seperator\"></div><br>\n<output id=\"outputbox\">"+input+"</output><br>\n<div class=\"seperator\"></div><br>\n<br>"
    }
    /*// Alt Caps |
    *///          V 
    else if (document.getElementById('altcaps').checked){
        let input = document.getElementById('userinputbox').value.toString().toLowerCase()
        var chars = input.toLowerCase().split("");
        for (var i = 1; i < chars.length; i += 2) {chars[i] = chars[i].toUpperCase()}
        chars = chars.join("");
        input = chars;
        document.getElementById('output').innerHTML = "<code style=\"font-size: x-large;\">Output</code>\n<div class=\"seperator\"></div><br>\n<output id=\"outputbox\">"+input+"</output><br>\n<div class=\"seperator\"></div><br>\n<br>"
    }
    /*/// TO Base64 |
    /*///           V
    else if (document.getElementById('tobase64').checked){
        let input = document.getElementById('userinputbox').value.toString().toLowerCase()
        input = btoa(input)
        document.getElementById('output').innerHTML = "<code style=\"font-size: x-large;\">Output</code>\n<div class=\"seperator\"></div><br>\n<output id=\"outputbox\">"+input+"</output><br>\n<div class=\"seperator\"></div><br>\n<br>"
    }
    /*/// FROM Base64 |
    /*///             V
    else if (document.getElementById('frombase64').checked){
        let input = document.getElementById('userinputbox').value.toString().toLowerCase()
        input = atob(input)
        document.getElementById('output').innerHTML = "<code style=\"font-size: x-large;\">Output</code>\n<div class=\"seperator\"></div><br>\n<output id=\"outputbox\">"+input+"</output><br>\n<div class=\"seperator\"></div><br>\n<br>"
    }
    /*/// URL Friendly |
    /*///              V
    else if (document.getElementById('urlfriendly').checked){
        let input = document.getElementById('userinputbox').value.toString().toLowerCase()
        input = input.replace(/ /g, "-")
        document.getElementById('output').innerHTML = "<code style=\"font-size: x-large;\">Output</code>\n<div class=\"seperator\"></div><br>\n<output id=\"outputbox\">"+input+"</output><br>\n<div class=\"seperator\"></div><br>\n<br>"
    }
}