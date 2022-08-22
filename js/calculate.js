// Per Player Expence
document.getElementById("calculate").addEventListener("click", function () {
    const players = arrayLength();
    const totalPlayer = players.length;
    const perPlayerCost = getInputValueById("per-player-cost");
    const totalPlayerCost = perPlayerCost * totalPlayer;
    setTextValueById("total-player-cost", totalPlayerCost)
})

// Total Expence
document.getElementById("calculate-total").addEventListener("click", function () {
    const totalPlayerCost = getTextValueById("total-player-cost");
    const managerCost = getInputValueById("manager-cost");
    const coachCost = getInputValueById("coach-cost");
    const totalExpence = totalPlayerCost + managerCost + coachCost;
    setTextValueById("total-expence", totalExpence);
})