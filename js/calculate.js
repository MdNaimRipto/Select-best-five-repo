// Per Player Expence
document.getElementById("calculate").addEventListener("click", function () {
    const players = arrayLength();
    const totalPlayer = players.length;
    const perPlayerCost = getInputValueById("per-player-cost");

    if (isNaN(perPlayerCost)) {
        alert("Not a valid number or box empty. Please check again and provide a valid number.")
        return;
    }

    const totalPlayerCost = perPlayerCost * totalPlayer;
    setTextValueById("total-player-cost", totalPlayerCost)
})

// Total Expence
document.getElementById("calculate-total").addEventListener("click", function () {
    const totalPlayerCost = getTextValueById("total-player-cost");
    const managerCost = getInputValueById("manager-cost");
    const coachCost = getInputValueById("coach-cost");

    if (totalPlayerCost == "") {
        alert("Player's expenceses empty. Please calculate players cost first");
        return;
    }
    if (isNaN(managerCost) || isNaN(coachCost)) {
        alert("Not a valid number or box empty. Please check again and provide a valid number.")
        return;
    }
    const totalExpence = totalPlayerCost + managerCost + coachCost;
    setTextValueById("total-expence", totalExpence);
})