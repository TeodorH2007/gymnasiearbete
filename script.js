document.addEventListener("DOMContentLoaded", () => {
  fetch("total.json")
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("match-historik");
      const ol = document.createElement("ol");
      ol.type = "1";
      data.bets.forEach((b) => {
        const li = document.createElement("li");
        li.textContent =
          "Match: " +
          b.match +
          " - " +
          b.match_time +
          " - Odds: " +
          b.odds +
          "x";
        if (b.winner === b["real-winner"]) {
          li.classList.add("match-correct");
        } else {
          li.classList.add("match-incorrect");
        }
        ol.appendChild(li);
      });
      container.appendChild(ol);
    });
});
