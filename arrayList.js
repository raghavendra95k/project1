// var arrayStr = ["Home","back","close","continue"];
var arrayStr = {"lists" :  ["Home","back","close","continue"]};

// var container = document.getElementById("list-tab");
function myFunction()
{
    var addList = "";
    var newList = document.getElementById("textBox").value;

    // var arrayStr = [];
    // var idButton = document.getElementById("button").value;
    // var idButton1 = document.getElementById("button1").value;   
    // var button= document.querySelector("button");
    
    // if(document.getElementById('button').clicked == true)
    // {
        if (newList.length > 0)
        {
            arrayStr.lists.push(newList);
        }
    // else if(document.getElementById('button1').clicked == true)
    // {
    //  var delVal = arrayStr.indexOf(newList);
    //  arrayStr.slice(delVal,1); 
    // }
    var listLength = arrayStr.lists.length;
    // var myList = document.createElement("li");
    // myList.className = "list";
   for( var i=0; i<listLength; i++)
    {
        // var listItem = document.createElement("li");
        // var listValue = document.createTextNode(arrayStr[i]);
        // listItem.appendChild(listValue);
        // listItem.innerHTML = arrayStr[i];
        // myList.appendChild(listItem);
addList += "<li>" + arrayStr.lists[i] +"</li>";
//  container.appendChild(myList);
// document.getElementById("list-tab").appendChild(listItem);
    }
    document.getElementById("showList").innerHTML = addList;    
}


function delFunction()
{
    var delList = document.getElementById("textBox").value;
    var addList = "";
    
     var delVal = arrayStr.lists.indexOf(delList);
     if(delVal>=0)
     {
     arrayStr.lists.splice(delVal,1); 
     }
    var listLength = arrayStr.lists.length;
   for( var i=0; i<listLength; i++)
    {

addList += "<li>" + arrayStr.lists[i] +"</li>";
  }
    document.getElementById("showList").innerHTML = addList;    
}

