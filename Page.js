// Calculer dynamiquement le total de la commande en fonction de la quantité commandée.
document.querySelector(".quantity").addEventListener("input", function () {
    const price = 750;
    const quantity = parseInt(this.value) || 1;//1 si aucune valeur n'est saisie
    const total = price * quantity;//calcul du total
    document.querySelector(".total").textContent = total + "MAD";//mise a jour du texte

});

//validation du formulaire
document.querySelector(".order.form").addEventListener("submit",function(e){
e.preventDefault();//empeche l'envoi du formulaire par défaut

//récupération des valeurs saisies
const name=document.querySelector(".name").value.trim();
const email=document.querySelector(".email").value.trim();
const adress=document.querySelector(".adress").value.trim();
const phone=document.querySelector(".phone").value.trim();

//vérification des champs obligatoires
if(!name || !email || !adress || !phone){
    alert("veuillez remplir tous les champs correctement.")
    return; //arrete l'execution si un champ estt vide
}

//vérification du numéro de telephone
const phoneRegex= /^\d{10}$/;
if(!phoneRegex.test(phone)){
    alert("veuillez entrer un numéro de téléphone")
    return;
}

//vérification du gmail
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Veuillez entrer un email valide.");
    return;
} 
//confirmation de la commande
alert("commande passée avec succés!");

//rénitialisation du formulaire
document.querySelector(".order.form").reset();
document.querySelector(".total").textContent="750 MAD"
});

// fonctionnement de menu
document.getElementById('menu-toggle').addEventListener('click', function () {
    const mobileMenu = document.getElementById('menu-mobile');
    mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
  });
//   bouton 
document.querySelectorAll(".btn").forEach(function(button){
    button.addEventListener("click",function(){
        document.querySelector(".form-container").scrollIntoView({
            behavior:"smooth"
        });
    });

});












// Fonction pour ajouter une commande au tableau
document.getElementById('commande-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page lors de l'envoi du formulaire

    // Récupérer les valeurs des champs du formulaire
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var adress = document.getElementById('adress').value;
    var phone = document.getElementById('phone').value;
    var quantity = document.getElementById('quantity').value;
    var total = document.getElementById('total').textContent;

    // Créer une nouvelle ligne dans le tableau
    var tableBody = document.getElementById('commande-tbody');
    var newRow = document.createElement('tr');

    // Ajouter les données dans les cellules
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${email}</td>
      <td>${adress}</td>
      <td>${phone}</td>
      <td>${quantity}</td>
      <td>${total}</td>
    `;

    // Ajouter la nouvelle ligne au tableau
    tableBody.appendChild(newRow);

    // Réinitialiser le formulaire après soumission
    document.getElementById('commande-form').reset();
  });
  