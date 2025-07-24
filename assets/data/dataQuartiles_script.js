let dataQuartiles = [];

fetch('assets/data/quartiles_2025.json')
  .then(response => response.json())
  .then(json => {
    dataQuartiles = json;
    if (typeof chargerQuartiles === "function") {
      chargerQuartiles();
    }
  })
  .catch(error => {
    console.error("Erreur lors du chargement de quartiles_2025.json :", error);
  });
