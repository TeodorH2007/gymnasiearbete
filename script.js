document.addEventListener("DOMContentLoaded", () => {
  fetch("total.json")
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("match-historik");
      const ol = document.createElement("ol");
      ol.type = "1";
      data.bets.forEach((bet) => {
        const li = document.createElement("li");
        li.textContent =
          "Match: " +
          bet.match +
          " - " +
          bet.match_time +
          " - Odds: " +
          bet.odds +
          "x";
        if (bet.winner === bet["real-winner"]) {
          li.classList.add("korrekt");
        } else {
          li.classList.add("felaktig");
        }
        ol.appendChild(li);
      });
      container.appendChild(ol);
    });
});
