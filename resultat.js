fetch("total.json")
  .then((res) => res.json())
  .then((json) => {
    const bets = json.bets;

    let wins = 0;
    const winRates = [0];
    bets.forEach((match, index) => {
      if (match.winner === match["real-winner"]) wins++;
      winRates.push((wins / (index + 1)) * 100);
    });

    const labels = winRates.map((_, index) => index);

    new Chart(document.getElementById("resultatchart"), {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Win chance (%)",
            data: winRates,
            borderColor: "green",
            tension: 0,
          },
        ],
      },
    });
  });
