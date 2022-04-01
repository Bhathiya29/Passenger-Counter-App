
var count =0
var saveEl=document.getElementById("save-El")

document.getElementById('count-el').innerHTML=count


function add(){
    count++
    document.getElementById('count-el').innerHTML=count
    
    //alert(count)
}

function deduct(){
    count--
    document.getElementById('count-el').innerHTML=count
}

function save(){
        var countStr=count+"-"
        document.getElementById("save-El").innerHTML+=countStr
        
}