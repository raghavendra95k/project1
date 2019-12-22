var arrayStr;
function myFunctiononload()
{
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       arrayStr=JSON.parse(xhttp.responseText);

    var addList = "";
    var listLength = arrayStr.lists.length;
   for( var i=0; i<listLength; i++)
    {
addList += "<li>" + arrayStr.lists[i] +"</li>";
    }
    document.getElementById("showList").innerHTML = addList;
}
};
xhttp.open("GET", "arraListJson.json", true);
xhttp.send();    
}

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

