var rootNode = document.getElementById("root");

// Your code goes here

var tree = document.createElement("ul");
function createTree(arr, element){
  for(let i = 0; i < arr.length; i++){
    if(arr[i]["folder"] === true){
      var folder = document.createElement("li");
      folder.className = "folder";
      var icon = document.createElement("i");
      icon.className = "material-icons";
      icon.innerHTML = "folder";
      var span = document.createElement("span");
      span.innerHTML = arr[i]["title"];
      var div = document.createElement('div');
      div.appendChild(icon);
      div.appendChild(span);
      div.setAttribute("onclick", "folderVisible(this)");
      folder.appendChild(div);
      if(arr[i]["children"]){
        var ul = document.createElement("ul");
        ul = createTree(arr[i]["children"], ul);
        ul.style.display = "none";
        folder.appendChild(ul);
      }else{
        var ul = document.createElement("ul");
        var emptyLi = document.createElement("li");
        emptyLi.className = "empty";
        emptyLi.innerHTML = "Folder is empty";
        ul.appendChild(emptyLi);
        ul.style.display = "none";
        folder.appendChild(ul);
      }
      element.appendChild(folder);
    }else{
      var file = document.createElement("li");
      var icon = document.createElement("i");
      icon.className = "material-icons";
      icon.innerHTML = "insert_drive_file";
      var span = document.createElement("span");
      span.innerHTML = arr[i]["title"];
      var div = document.createElement('div');
      div.appendChild(icon);
      div.appendChild(span);
      file.appendChild(div);
      element.appendChild(file);
    }
  }
  return element;
}

var resultTree = createTree(structure, tree);
rootNode.appendChild(resultTree);

function folderVisible(element){
  var nextEl = element.nextElementSibling;
  if(nextEl.style.display === "none"){
    nextEl.style.display = "block";
    element.getElementsByClassName("material-icons")[0].innerHTML = "folder_open";
  }else{
    nextEl.style.display = "none";
    element.getElementsByClassName("material-icons")[0].innerHTML = "folder";
  }
}
