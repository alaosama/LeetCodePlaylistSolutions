<p>
  ssh-keygen -t rsa -b 4096 -C "ton.email@etu.univ.fr"
cat ~/.ssh/id_rsa.pub
New SSH Key ...
git clone git@github.com:prof/projet-examen.git
cd projet-examen
1. Revenir sur main
git checkout main
2. Mettre à jour ton code avec les dernières modifs du prof
git pull origin main
3. Créer ta branche pour la méthode
git checkout -b mehdi-calculTotal
git add .
git commit -m "feat: méthode calculTotal terminée"
git push -u origin mehdi-calculTotal

RENDRE TON TRAVAIL : CRÉER UNE PULL REQUEST
Va sur GitHub (dépôt du prof)
Clique sur "Compare & pull request"
Clique sur "Create pull request"
(Optionnel) Ajoute un message :
"Méthode terminée – Mehdi"
❗ Ne clique jamais sur "Merge" 

POUR LA MÉTHODE SUIVANTE
git checkout main
git pull origin main
git checkout -b mehdi-nouvelleMethode
tu codes, commits, push, pull request

</p>
