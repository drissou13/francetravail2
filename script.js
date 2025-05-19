document.addEventListener("DOMContentLoaded", () => {
  const btnConnexion = document.getElementById("btnConnexion");
  const loginSection = document.getElementById("loginSection");
  const loginForm = document.getElementById("loginForm");
  const btnActualiser = document.getElementById("btnActualiser");
  const actualisationSection = document.getElementById("actualisationSection");
  const actualisationForm = document.getElementById("actualisationForm");
  const moisInput = document.getElementById("mois");
  const situationSelect = document.getElementById("situation");
  const travailDetails = document.getElementById("travailDetails");
  const confirmationMessage = document.getElementById("confirmationMessage");

  btnConnexion.addEventListener("click", () => {
    loginSection.style.display = "block";
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    loginSection.style.display = "none";
    btnConnexion.style.display = "none";
    btnActualiser.style.display = "block";
  });

  btnActualiser.addEventListener("click", () => {
    actualisationSection.style.display = "block";
    const mois = new Date().toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
    moisInput.value = `Mois : ${mois}`;
  });

  situationSelect.addEventListener("change", () => {
    travailDetails.style.display = situationSelect.value === "travail" ? "block" : "none";
  });

  actualisationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    confirmationMessage.style.display = "block";
  });
});
