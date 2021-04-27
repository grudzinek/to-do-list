const quests = document.querySelector(".quests");
const newTile = document.querySelector(".newTile");
const tekst = document.querySelector(".tekst");
const btn = document.querySelector(".but");
const input = document.querySelector("#pole");


let numOfTiles = 0;



let createQuest = function ()
{
    let inputText = document.querySelector("#pole").value;
    const tile = document.createElement("div");
    const tekst = document.createElement("div");
    const checkBox = document.createElement("div");
    const bin = document.createElement("div");

    if(input.value == "")
    {
        createQuest.setAttribute("onclick",";");
    }

    tekst.textContent = inputText;

    tile.classList.add("newTile");
    tekst.classList.add("tekst");
    checkBox.classList.add("checkBox");
    bin.classList.add("del");

    tile.appendChild(checkBox);
    tile.appendChild(tekst);
    tile.appendChild(bin);

    quests.appendChild(tile);

    numOfTiles = numOfTiles + 1

    document.querySelector("#pole").value = "";


    let deleteTile = function(e)
        {
            const item = e.target

            if(item.classList[0] === "del")
                {
                    item.parentElement.remove();
                    numOfTiles = numOfTiles - 1;

                }
        }

    tile.addEventListener("click", deleteTile);

    let addCheck = function(e)
    {
        const item = e.target

        if(item.classList[0] === "checkBox")
            {
                item.classList.toggle("checked");

            }
    }

    tile.addEventListener("click", addCheck);
}

btn.addEventListener("click", createQuest);

window.onload = function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('time').innerHTML =
    h + ":" + m ;
    let t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }






