const playerSelectButtons = document.getElementsByClassName("player-select");

for (const playerSelectButton of playerSelectButtons) {

    playerSelectButton.addEventListener("click", function (event) {
        const playerList = document.getElementById("list-container");
        const listItem = event.target.parentNode.children[0].innerText;

        const li = document.createElement("li");
        li.className = "single-list";
        li.innerText = listItem;
        li.style.listStyle = "number"
        event.target.style.backgroundColor = "gray"

        if (playerList.getElementsByClassName("single-list").length == 5) {
            alert("Uou cannot select more than five player's.");
            event.target.style.background = "#015196"
        }
        else {
            playerList.appendChild(li);
        }
        event.target.setAttribute("disabled", true)
    })
}