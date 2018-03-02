// Your code goes here

var el = document.getElementById("root");

function tankPreview(arr, element){
    element.innerHTML = "";
    var thumbnails = document.createElement("div");
    thumbnails.setAttribute("class", "thumbnails");
    var h1 = document.createElement("h1");
    h1.innerHTML = "Most popular tanks";
    thumbnails.appendChild(h1);
    for(let i = 0; i < arr.length; i++){
        var div = document.createElement("div");
        var p = document.createElement("p");
        var model = document.createElement("span");
        var preview = document.createElement("img");
        var country_image = document.createElement("img");
        var level = document.createElement("span");
        var tank_model;
        
        if(arr[i].model.length > 14){
            tank_model = arr[i].model.slice(0, 11)+"...";
        }else{
            tank_model = arr[i].model
        }
        
        model.innerHTML = tank_model.toLocaleUpperCase();
        model.setAttribute("class", "model")
        preview.setAttribute("src", arr[i].preview);
        preview.setAttribute("class", "preview");
        country_image.setAttribute("src", arr[i].country_image);
        level.innerHTML = arr[i].level;
        
        p.appendChild(country_image);
        p.appendChild(level);
        p.appendChild(model);
        div.appendChild(preview);
        div.appendChild(p);
        
        div.addEventListener("click", function(){
            window.location.hash = arr[i].model;
        });
        thumbnails.appendChild(div);
    }
    element.appendChild(thumbnails);
}

function tankDetails(arr, element, tankName){
    element.innerHTML = "";
    var tank_details = document.createElement("div");
    tank_details.setAttribute("class", "tank-details");
    var index;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i].model === tankName){
            index = i;
            break;
        }
    }
    
    var div = document.createElement("div");
    var h1 = document.createElement("h1");
    var h2 = document.createElement("h2");
    var model_and_lvl = document.createElement("span");
    var preview = document.createElement("img");
    var country_image = document.createElement("img");
    
    country_image.setAttribute("src", arr[index].country_image);
    model_and_lvl.innerHTML = arr[index].model.toUpperCase()+" (level "+arr[index].level+")";
    h1.appendChild(country_image);
    h1.appendChild(model_and_lvl);
    h2.innerHTML = "Preview";
    preview.setAttribute("src", arr[index].preview);
    
    div.appendChild(h2);
    div.appendChild(preview);
    
    var characteristic_div = document.createElement("div");
    var characteristic_h2 = document.createElement("h2");
    characteristic_h2.innerHTML = "Characteristic";
    var table = document.createElement("table")
    
    for (key in arr[index].details) {
        var tr1 = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        td1.innerHTML = key.replace(/_/g, " ");		
        td2.innerHTML = arr[index].details[key];
        tr1.appendChild(td1);
        tr1.appendChild(td2);
        table.appendChild(tr1);
    }
    
    var back_to_list_view = document.createElement("p");
    back_to_list_view.innerHTML = "Back to list view";
    back_to_list_view.addEventListener("click", function(){
        window.location.hash = "";
    });
    var group = document.createElement("div");
    group.setAttribute("class", "group");
    
    characteristic_div.appendChild(characteristic_h2);
    characteristic_div.appendChild(table);
    group.appendChild(div);
    group.appendChild(characteristic_div);
    tank_details.appendChild(h1);
    tank_details.appendChild(group);
    tank_details.appendChild(back_to_list_view);
    element.appendChild(tank_details);
    
}
function local(){
    if(window.location.hash === ""){
        tankPreview(tanks, el);
    }else{
        tankDetails(tanks, el, window.location.hash.slice(1));
    }
}
local();

window.addEventListener("hashchange", function() {
    local();
})