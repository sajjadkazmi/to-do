function add(){
    var val=document.getElementById("val");
    var list = document.getElementById("list");
    var li = document.createElement("LI");
    var btn = document.createElement("BUTTON");
    var btnText= document.createTextNode("delete");
    btn.appendChild(btnText);
    btn.onclick=function(){
        var li=this.parentNode;
        var ul=li.parentNode;
        ul.removeChild(li);
    }
    var btnn = document.createElement("BUTTON");
    var btnnText= document.createTextNode("Edit");   
    btnn.appendChild(btnnText);
    btnn.onclick=function(){
        var li=this.parentNode;
        var ul=li.parentNode;
        ul.editChild(li);
    }
    var text = document.createTextNode(val.value);
    li.appendChild(text)
    li.appendChild(btn)
    li.appendChild(btnn)
    list.appendChild(li)
    val.value="";
}
function deleteAll(){
    alert("are you sure?");
    document.getElementById("list").innerHTML="";
}