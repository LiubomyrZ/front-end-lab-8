// Your code goes here
function createHashString(text){
    return text.replace(" ","-");
}

function buildListItem(tank) {
    var tankSection = document.createElement("div");
    tankSection.className = "tankSection";
    tankSection.onclick = function () {
        window.location.hash = createHashString(tank.model);
    };

    // img
    var thumbnail = document.createElement("img");
    thumbnail.className = "thumbnailImg";
    thumbnail.src = tank.preview;
    tankSection.appendChild(thumbnail);

    var info = document.createElement("div");
    info.className = "info";

    // flag
    var flag = document.createElement("img");
    flag.title = tank.country;
    var innerSpase = document.createElement("span");
    innerSpase.innerText = " ";
    flag.className = "flag";
    flag.src = tank.country_image;
    info.appendChild(flag);
    info.appendChild(innerSpase);
    // level
    var level = document.createElement("span");
    level.className = "level";
    level.innerText = tank.level;
    info.appendChild(level);

    // name
    var name = document.createElement("span");
    name.className = "name";
    name.innerText = (" "+tank.model+" ");
    info.appendChild(name);
    info.title = tank.model;
    

    tankSection.appendChild(info);
    return tankSection;
}

function renderThumbnailsPage() {
    var thumbnails = document.createElement("div");
    thumbnails.className = "thumbnails";

    var heading = document.createElement("h2");
    heading.innerText = "Most popular tanks";
    thumbnails.appendChild(heading);

    var list = document.createElement("div");
    list.className = "list";

    for (var i = 0; i < tanks.length; i++) {
        list.appendChild(buildListItem(tanks[i]));
    }
    thumbnails.appendChild(list);
    rootNode.innerHTML = null;
    rootNode.appendChild(thumbnails);
}

function createTableRow(table, index, name, value){
    var row = table.insertRow(index);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = name;
    cell2.innerHTML = value;
}

function renderDetailsPage(tank) {
    var details = document.createElement("div");
    details.className = "details";

    // header
    var heading = document.createElement("h2");
    var flag = document.createElement("img");
    var spanText = document.createElement("span");
    spanText.className = "toUppercase";
    flag.src = tank.country_image;
    flag.title = tank.country;
    var upperText = document.createTextNode(" " + tank.model + " ");
    spanText.appendChild(upperText);
    heading.appendChild(flag);
    heading.appendChild(spanText);
    heading.appendChild(document.createTextNode(" (level " + tank.level + ")"));
    details.appendChild(heading);

    var tankInfo = document.createElement("div");
    tankInfo.className = "tank-info";

    var preview = document.createElement("div");
    preview.className = "tank-preview";

    var previewHeading = document.createElement("h3");
    previewHeading.innerText = "Preview";
    preview.appendChild(previewHeading);

    var tankImg = document.createElement("img");
    tankImg.src = tank.preview;
    preview.appendChild(tankImg);

    tankInfo.appendChild(preview);

    var characteristic = document.createElement("div");
    characteristic.className = "tank-characteristic";

    var characteristicHeading = document.createElement("h3");
    characteristicHeading.innerText = "Characteristic";
    characteristic.appendChild(characteristicHeading);

    var characteristicTable = document.createElement("table");
    createTableRow(characteristicTable, 0, 'damage', tank.details.damage);
    createTableRow(characteristicTable, 1, 'breoning', tank.details.breoning);
    createTableRow(characteristicTable, 2, 'attack speed', tank.details.attack_speed);
    createTableRow(characteristicTable, 3, 'time of targeting', tank.details.time_of_targeting);
    createTableRow(characteristicTable, 4, 'ammunition', tank.details.ammunition);    
    characteristic.appendChild(characteristicTable);

    tankInfo.appendChild(characteristic);

    details.appendChild(tankInfo);

    // back link
    var backLink = document.createElement("a");
    backLink.innerText = "Back to list view";
    backLink.href = location.href.replace(location.hash,"");
    details.appendChild(backLink);

    rootNode.innerHTML = null;
    rootNode.appendChild(details);
}

function renderPage() {
    if (window.location.hash.length > 0) {
        const tank = tanks.find( t => createHashString(t.model) === window.location.hash.replace("#", ""));
        renderDetailsPage(tank);
    } else {
        renderThumbnailsPage();
    }
}
document.getElementsByTagName("BODY")[0].onhashchange = function () { renderPage() };

var rootNode = document.getElementById("root");
renderPage();