var rootNode = document.getElementById("root");

function getIcon(folder) {
    var icon = document.createElement("i");
    icon.innerText = folder ? "folder" : "insert_drive_file";
    icon.className = "material-icons";
    if (icon.innerText == "insert_drive_file"){
        icon.className += " driveFile";
    }
    return icon;
}

function buildNode(node, hidden) {
    var item = document.createElement("div");
    item.className = hidden ? "hidden" : "newClass";

    item.onclick = function (e) {
        // prevent from firing parent element on click of the child
        e.stopPropagation();

        if (node.folder) {
            var icon = this.children[0];
            if (icon.innerText == "folder") {
                icon.innerText = "folder_open";
            } else {
                icon.innerText = "folder";
            }

            for (var i = 0; i < this.children.length; i++) {
                if (i > 0) {
                    if(this.children[i].className.indexOf("hidden") > -1){
                        this.children[i].className = this.children[i].className.replace("hidden", "");
                    } else {
                        this.children[i].className += "hidden";
                    }
                } else if (this.children[i].tagName == "i") {
                    if (this.children[i].innerText == "folder") {
                        this.children[i].innerText = "folder_open";
                    } else {
                        this.children[i].innerText = "folder";
                    }
                }
            }
        }
    };

    if(node.empty){
        item.className = "italic " + item.className;
        item.innerText = "Folder is empty";
    } else {
        item.appendChild(getIcon(node.folder));
        item.appendChild(document.createTextNode(node.title));
    }

    if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
            item.appendChild(buildNode(node.children[i], true));
        }
    } else if(node.folder){
        item.appendChild(buildNode({empty: true}, true));
    }
    return item;
}
var treeView = document.createElement("div");
treeView.className = "treeView";

for (var i = 0; i < structure.length; i++) {
    treeView.appendChild(buildNode(structure[i], false));
}

rootNode.appendChild(treeView);
