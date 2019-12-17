var arrayStr = {"lists" :  ["Home","back","close","continue"]};
function myFunction()
{
    var addList = "";
    var newList = document.getElementById("textBox").value;
        if (newList.length > 0)
        {
            arrayStr.lists.push(newList);
        }
    var listLength = arrayStr.lists.length;
   for( var i=0; i<listLength; i++)
    {
addList += "<li>" + arrayStr.lists[i] +"</li>";
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

