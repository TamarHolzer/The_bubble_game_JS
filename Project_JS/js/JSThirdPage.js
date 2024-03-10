
// adding new champion
function addNewChampion(champ) {
    // adding to the correct list
    var CName = champ.playerName;
    var CPoints = champ.playerPoints;
    var CLevel = champ.playerLevel;
    var key = "Level" + CLevel;// level 1 or 2 or 3

    //creating champion obj
    var NewChampion = new Champion(CName, CPoints);

    //if there is nothing un this level
    // he will be the first parameter
    if (JSON.parse(localStorage.getItem(key)) == null) {
        Champions = [];
        Champions[0] = NewChampion;
        localStorage.setItem(key, JSON.stringify(Champions));
    }
    // the list isnt empty
    else {
        var flag = false;
        // pop from the according local-storage
        var Champions = JSON.parse(localStorage.getItem(key));

        //checking location, to the new champion
        var len = Champions.length;
        for (var i = 0; i < len; i++) {
            // to pushing between
            if (NewChampion.championPoints >= Champions[i].championPoints) {
                for (var j = len - 1; j >= i;j--) {
                    Champions[j + 1] = Champions[j];// pushing
                }
                Champions[i] = NewChampion;
                flag = true;
                break; // stop the loop
            }
        }
        if (flag == false) {
            Champions[len] = NewChampion;
        }
        // if more then 10 champs we need to delete the last
        if (Champions.length > 10) {
            Champions.pop();
        }
        // saving again in the local-storage
        localStorage.setItem(key, JSON.stringify(Champions));

    }


}

function showChampions() {
    // table and saving data where the page is loaded
    var objPlayer = JSON.parse(sessionStorage.Player);
    addNewChampion(objPlayer);
    showTable();
}

function showTable() {
    // weriting 3 tables on the page:
    var theDiv = document.querySelector("#divTable");
    theDiv.innerHTML = "";// deleting the past tables
    // runing on the 3 levels
    for (var level = 1; level <= 3; level++) {
        // creating table
        var theTable = document.createElement("table");
        theDiv.appendChild(theTable);//putting the table into the div
        // top line creating
        var theTr = document.createElement("tr");
        var theTh = document.createElement("th");
        theTh.innerHTML = "<h2>level " + level+"</h2>";
        theTh.colSpan = "2";
        theTr.appendChild(theTh);// top line in the line
        theTable.appendChild(theTr);// adding the line into the table
        // poping from the according lical-storage
        var key = "Level" + level;
        var Champions = JSON.parse(localStorage.getItem(key));
        if (Champions != null) {
            // show the table like the details
            for (var i = 0; i < Champions.length; i++) {
                var theTr = document.createElement("tr");//creating a line
                for (var j = 0; j < 1; j++) {
                    // creating 2 td: name and points
                    var theTd = document.createElement("td");
                    theTd.innerHTML = Champions[i].championName;
                    //adding td to tr
                    theTr.appendChild(theTd);

                    var theTd = document.createElement("td");
                    theTd.innerHTML = Champions[i].championPoints;
                    theTr.appendChild(theTd);// adding td to row
                }
                theTable.appendChild(theTr);// adding the row to the table
            }
        }


    }
}

function ClearChampions() {
    // deleting champions details
    localStorage.Level1 = null;
    localStorage.Level2 = null;
    localStorage.Level3 = null;
    showTable();// to watch that the table is empty
}

function goToHomePage() {
    window.location.href = 'main.html';
}










////// Retrieve champions data from local storage or initialize it if not present
////let championsData = JSON.parse(localStorage.getItem('championsData'));
////if (!championsData) {
////    championsData = [];
////}

////// Update champions data with current player's details
////const playerDetails = JSON.parse(localStorage.getItem('playerDetails'));
////const currentPlayer = {
////    name: playerDetails.name,
////    points: parseInt(document.getElementById('points').textContent)
////};
////championsData.push(currentPlayer);

////// Save updated champions data back to local storage
////localStorage.setItem('championsData', JSON.stringify(championsData));
