let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let action = ["run", "danced"];

for (let i = 0; i < pronoun.length; i++) {
  for (let a = 0; a < adj.length; a++) {
    for (let b = 0; b < noun.length; b++) {
      for (let c = 0; c < action.length; c++) {
        document.querySelector("#domain").innerHTML +=
          "<p>" + pronoun[i] + adj[a] + noun[b] + action[c] + ".com</p>";
      }
    }
  }
}
