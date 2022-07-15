(function () {

   let aDeviner = Math.round(Math.random() * 10)
   let essais = 3
   let essai
    for(let i = 0; i < 3; i++){
        if (i ==0) {
            essai = prompt('Entrez votre chiffre')
        } else {
            essai = prompt('Retentez votre chance')
        }
         essai = parseInt(essai, 10)
            if (essai == aDeviner) {
                break
            } else if (essai > aDeviner) {
                alert('Trop haut')
            } else {
                alert('Trop bas')
            }
        }

        if (essai == aDeviner) {
            alert('Bravo !')
        } else {
            alert('Echec')
        }
   /*
   ON choisit un chiffre RAMDOM
   DEMANDE à l'utilisateur de rentrer un chiffre
   TANT QUE le chiffre n'est pas bon
   SI le chiffre est au dessus
    ALERT au dessus
   SINON
    ALERT en dessous
   DEMANDE a l'utilisateur de rentrer un chiffre
   FIN TANT QUE
   ALERT success
   */
})()