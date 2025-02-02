const valeurInput = document.getElementById("value");
const bouton = document.querySelector("button");
const resultat = document.querySelector("ul");

bouton.addEventListener('click', () => {
  const valeurFinale = valeurInput.value;
  
  if (valeurFinale.trim() !== "") {
    const nouvelleTache = document.createElement('li');
    resultat.appendChild(nouvelleTache);
    nouvelleTache.textContent = valeurFinale;
    
  
    const boutonSuppression = document.createElement('button');
    boutonSuppression.textContent = 'Effacer❌';
    nouvelleTache.appendChild(boutonSuppression);

    boutonSuppression.addEventListener('click', () => {
      nouvelleTache.remove();
    });
    const boutonAccomplir = document.createElement('button');
    boutonAccomplir.textContent = '✔️';
    nouvelleTache.appendChild(boutonAccomplir);

    boutonAccomplir.addEventListener('click', () => {


      nouvelleTache.style.textDecoration = 'line-through';
      nouvelleTache.style.color = 'gray';
      boutonAccomplir.disabled = true;  
      boutonAccomplir.textContent = 'Accomplie'; 
    });

    valeurInput.value = ""; 
  }
});
