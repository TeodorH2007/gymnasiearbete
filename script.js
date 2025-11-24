document.addEventListener("DOMContentLoaded", () => {
  fetch("total.json")
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("match-historik");
      const ul = document.createElement("ul");
      data.bets.forEach((b) => {
        const li = document.createElement("li");
        li.textContent = b.match;
        ul.appendChild(li);
      });
      container.appendChild(ul);
    });
});
