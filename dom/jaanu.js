// var newparagraph=document.createElement("p")
// var textcontent=document.createTextNode("This is a new paragraph")
// newpara.appendchild(textcontent)
// var paraElement=document.getElementById(parentElement)
// new paraElement=document.getElementById(paraElement)

// var newitem=document.createElement("h1");
// var textcontent=document.createTextNode("list");
// newitem.appendchild(textcontent);
// var parentElement=document.getElementById("parentElement");
// function additem(){
// parentElement.appendChild(newitem);
// }

function removeParagraph(){
    var parentElement=document.getElementById("parentElement")
    var childParagraph =document.getElementById("childParagraph")
    if(childParagraph1){
        parentElement.removeChild(childParagraph);
    
    }
    else{
        console.log("childParagraph not found.");
    }
}





