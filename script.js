

function OpeningCeremony(callback) {
  console.log("Welcome to the Sports Day!");
  const scores = { RED: 0, BLUE: 0, GREEN: 0, YELLOW: 0 };
  setTimeout(() => callback(scores), 1000);
}

function Race100M(scores, callback) {
  console.log("Starting the 100M Race...");
  setTimeout(() => {
      const raceTimes = {
          RED: Math.random() * 10 + 5,
          BLUE: Math.random() * 10 + 5,
          GREEN: Math.random() * 10 + 5,
          YELLOW: Math.random() * 10 + 5,
      };
      console.log("Race Times:", raceTimes);

      const sortedTeams = Object.entries(raceTimes).sort((a, b) => a[1] - b[1]);
      scores[sortedTeams[0][0]] += 50;
      scores[sortedTeams[1][0]] += 30;
      scores[sortedTeams[2][0]] += 20;

      console.log("Updated Scores after Race:", scores);
      callback(scores);
  }, 3000);
}

function LongJump(scores, callback) {
  console.log("Starting Long Jump...");
  setTimeout(() => {
      const winner = ["RED", "BLUE", "GREEN", "YELLOW"][Math.floor(Math.random() * 4)];
      console.log(("winner of Long Jump:",winner))
      scores[winner] += 20;
      console.log("Score board after Long jump:",scores);
      callback(scores);
  }, 2000);
}

function HighJump(scores, callback) {
  console.log("Starting High Jump...");
  const team = prompt("Enter a team name (RED, BLUE, GREEN, YELLOW):").toUpperCase();
  if (Object.keys(scores).includes(team)) {
      scores[team] += 30;
  } else {
      console.log("Invalid team name, skipping High Jump.");
  }
  console.log("current Score after High Jump:",scores);
  callback(scores);
}

function AwardCeremony(scores) {
  console.log("Final Scores:", scores);
  const sortedTeams = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  console.log("🏆 Award Ceremony Results:");
  console.log(`🥇 1st Place: ${sortedTeams[0][0]} with ${sortedTeams[0][1]} points`);
  console.log(`🥈 2nd Place: ${sortedTeams[1][0]} with ${sortedTeams[1][1]} points`);
  console.log(`🥉 3rd Place: ${sortedTeams[2][0]} with ${sortedTeams[2][1]} points`);
}


OpeningCeremony((scores) => {
  Race100M(scores, (scores) => {
      LongJump(scores, (scores) => {
          HighJump(scores, AwardCeremony);
      });
  });
});
