var numPic = -1;
var selName;// select box
var playerName;


//game

//var Game = {
//    gamePlayerName = 'Player1',
//    gameNumElements = 50,
//    gameLevel = 1,
//    gameNumPic = 0
//}

function Game(playerName, numElements, level, numPic) {
    this.gamePlayerName = playerName;
    this.gameNumElements = numElements;
    this.gameLevel = level;
    this.gameNumPic = numPic;
}

//Champion

//var Champion = {
//    championName = 'Player1',
//    championPoints = 0
//}

function Champion(CName, CPoints) {
    this.championName = CName;
    this.championPoints = CPoints;
}


function DuplicateNames(currentName) {
    // checking if there are dup names in select box
    var duplicate = false;
    // all the obj elements
    var theOption = document.querySelectorAll("#selectName>option");
   // var theOptions = document.querySelectorAll("select>option");
    for (var i = 0; i < theOption.length; i++) {
        if (theOption[i].text == currentName) {
            duplicate = true;
        }
    }
    return duplicate;
}
//const playButton = document.querySelector('input[type="button"]');
//playButton.addEventListener('click', startGame);
// the checking input happen in time. not alone.

//function startGame() {
//    var flag = true;
//    var j = false;
//    // Retrieve player name
//    //const playerName = document.querySelector('input[type="text"]').value;
//    //if (playerName.length == 0) {
//    //    document.querySelector("#NameErr").style.display = "inline";
//    //    flag = false;
//    //}
//    //else
//    const playerName = document.querySelector('input[type="text"]').value;
//    const nameErrSpan = document.querySelector("#NameErr");

//    if (playerName.length == 0) {
//        nameErrSpan.style.display = "inline";
//        flag = false;
//    }
//    else if (playerName.length != 0) {
//        nameErrSpan.style.display = "none";
//    }
//    //document.querySelector("#NameErr").style.display = "none";

//    // Retrieve number of elements
//    const numElements = document.querySelector('input[type="number"]').value;

//    // Retrieve level
//    const level = document.querySelector('input[type="range"]').value;

//    // Retrieve selected element
//    let selectedElement = '';
//    const elementRadios = document.getElementsByName('celement');
//    const radioErrSpan = document.querySelector("#RadioErr");
//    for (let i = 0; i < elementRadios.length; i++) {
//        if (elementRadios[i].checked) {
//            selectedElement = elementRadios[i].id;
//            j = true;
//            break;
//        }
//    }
//    if (j == false) {
//        //  alert("יש לבחור אלמנט משחק");
//        // document.querySelector("#RadioErr").style.display = "inline";
//        radioErrSpan.style.display = "inline";
//        flag = false;
//    }
//    else {
//        // document.querySelector("#RadioErr").style.display = "none";
//        radioErrSpan.style.display = "none";
//    }
//    if (flag == true) {
//        alert("הנתונים נקלטו בהצלחה")


//// Save player details in local storage for later use
//        const playerDetails = {
//            name: playerName,
//            elements: numElements,
//            level: level,
//            element: selectedElement
//        };
//        // Redirect to the game page
//        localStorage.setItem('playerDetails', JSON.stringify(playerDetails));

//        window.location.href = 'secondPage.html';
/*//        return flag;*/
//        // Redirect to the game page
//        //window.location.href = `game.html?name=${encodeURIComponent(playerName)}`;
//        //window.location.href = `~/html/secondPage.html?name=${encodeURIComponent(playerName)}`;
//        //window.location.replace("~/html/secondPage.html");

//    }
//}

// the checking is actualy inside
//function CheckData(playerName, ) {
//    var flag = true;
//    var j = false;
//         if user name isnt empty
//    if (playerName.length == 0) {
//        //    alert("יש להכניס שם");
//        document.querySelector("#NameErr").style.display = "inline";
//        flag = false;
//    }
//     checink radio element
//    const elementRadios = document.getElementsByName('celement');
//    for (let i = 0; i < elementRadios.length; i++) {
//        if (elementRadios[i].checked) {
//            selectedElement = elementRadios[i].id;
//            j = true;
//            break;
//        }
//    }
//    if (j == false) {
//        //  alert("יש לבחור אלמנט משחק");
//        document.querySelector("#RadioErr").style.display = "inline";
//        flag = false;
//    }
//     if all okey
//    if (flag == true)
//        alert("הנתונים נקלטו בהצלחה")
//    return flag;
//}

function putNames() {
    selName = document.querySelector("#selectName");
    // runing on 3 levels
    for (var level = 1; level <= 3; level++) {
        var key = "Level" + level;// or 1 or 2 or 3
        var Champions = JSON.parse(localStorage.getItem(key));
        if (Champions != null) {
            for (var i = 0; i < Champions.length; i++) {
                // if there are double names
                //Duplicate = DuplicateNames(Champions[i].championsName);
                Duplicate = DuplicateNames(Champions[i].championName);
                // if there are no dup name we need to add it to the names list
                if (Duplicate == false) {
                    var theOption = document.createElement("option");
                    theOption.textContent = Champions[i].championName;
                    selName.appendChild(theOption);

                }
            }
            // if there are values in the select attribut we cant show the text box
            document.querySelector("#PlayerName").style.display = "none"
        }
    }
}

function showText() {
    // click on "another"
    // to show the text box
    document.querySelector("#PlayerName").style.display = "inline";
    // to undo the choosing the select box
    selName.selectedIndex = 0;
}

function HideText() {
    // where choosing the select box we hide the text box
    document.querySelector("#PlayerName").style.display = "none";
}

function RemoveImages() {
    // where clicking on rand pic
    // the value of the img get 1 when its rand option
    numPic = -1;
    var ArrImg = document.querySelectorAll(".imgElements");
    var parentImg = document.querySelector("#ParentImages");
    for (var i = 0; i < ArrImg.length; i++) {
        parentImg.removeChild(ArrImg[i]);
    }
    instraction();
}

function CreateImages() {
    // when user want to choose the element(img)
    // creating img to choosing
    var parentImg = document.querySelector("#ParentImages");
    var ArrImg = [];
    for (var i = 0; i < 8; i++) {
        ArrImg[i] = document.createElement("img");
        parentImg.appendChild(ArrImg[i]);
        ArrImg[i].src = "../Images/elements/" + i + ".png";
        ArrImg[i].setAttribute("class", "imgElements");
        ArrImg[i].onclick = function (e) {
            chooseImg(e.target);
        }
    }
    ArrImg[0].style.border = "5px dotted #000000"// defualt border for the first img
    numPic = 0;// saving number img that have the border
    instraction();
}

function chooseImg(obj) {
    // putting a border around the choosing img
    var ArrImg = document.querySelectorAll(".imgElements");
    for (var i = 0; i < ArrImg.length; i++) {
        if (ArrImg[i] == obj) {
            ArrImg[i].style.border = "5px dotted #000000";
            numPic = i;// saving num img that user choosed
        }
        else {
            // to delete the previose border
            ArrImg[i].style.border = "none";
        }
    }
    instraction();
}

function goNext() {
    // to go to the game page
    // sending details
    // the player name:
    selName = document.querySelector("#selectName");
    if (selName.selectedIndex == 0) {
        // if wasnt choosing name
        // we need to take a name from the text box
        playerName = document.querySelector("#PlayerName").value;
    }
    else {
        // we will take a name from the list
        playerName = selName.options[selName.selectedIndex].textContent;
    }

    // num of elements
    var numElements = document.querySelector("#NumElements").value;
    // the level
    var level = document.querySelector("#level").value;

    //game obj
    var objGame = new Game(playerName, numElements, level, numPic);
    // saving to sending to the game page
    sessionStorage.Game = JSON.stringify(objGame);
    // going to the game page
    window.location = "secondPage.html";
}
function instraction() {
    if (numPic == -1) {
        document.getElementById("explanation").textContent = "Help us collect as many points as possible";

    }
    else {
        switch (numPic) {
            case 0: document.getElementById("explanation").textContent = "Help Nahum the policeman catch the thief's gardens";
                break;
            case 1: document.getElementById("explanation").textContent = "Help the shoe trample the annoying cockroach";
                break;
            case 2: document.getElementById("explanation").textContent = "The caterpillar was so hungry, help him gnaw as many books as possible";
                break;
            case 3: document.getElementById("explanation").textContent = "What an experience to blow as many soap bubbles as possible";
                break;
            case 4: document.getElementById("explanation").textContent = "It is important to attack the rab-ko on every trip";
                break;
            case 5: document.getElementById("explanation").textContent = "How easy it is to blow up balloons";
                break;
            case 6: document.getElementById("explanation").textContent = "Chewing gum is not nice - educate the koalas";
                break;
            case 7: document.getElementById("explanation").textContent = "Help Miri eat as many candies as possible";
                break;

            default: document.getElementById("explanation").textContent = "Help us collect as many points as possible";
                break;
        }

    }
    

}