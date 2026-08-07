# Calculette LEC - Quartiles de ressources des demandeurs de logement social
## Une création de l'Union régionale pour l'Habitat Hauts-de-France - MAJ Août 2026

Ce site web interactif permet de calculer le quartile de ressources (Q1, Q2, Q3 ou Q4) d'un ménage demandeur de logement social, à partir des seuils nationaux publiés chaque année par arrêté ministériel dans le cadre de la loi Égalité et Citoyenneté, promulguée le 27 janvier 2017. Les seuils actuellement disponibles sont ceux des années **2024, 2025 et 2026**.

> 📍 Outil développé par Laëtitia Deken – Data Analyst / Chargée d'études – Union Régionale pour l’Habitat Hauts-de-France


## 🎯 Objectif

Cet outil a pour vocation de faciliter l'application de l'article L. 441-1 du Code de la construction et de l'habitation en permettant d'identifier rapidement le quartile de ressources d'un ménage, conformément aux seuils publiés annuellement.


## 🔧 Fonctionnalités principales :

- Consultation des seuils 2024, 2025 et 2026 ;
- Sélection de l'année de référence ;
- Sélection dynamique du territoire (Région → Département → EPCI) ;
- Calcul automatique des unités de consommation (UC) ;
- Calcul du quartile de ressources (Q1 à Q4) par territoire sélectionné ;
- Affichage des seuils annuels et mensuels ;
- Téléchargement des calculettes Excel 2024, 2025 et 2026 ;
- Compatible mobile et tablette (responsive) ;
- Statistiques nationales et régionales (Hauts-de-France) (partie Évolutions).



## 🧮 Règles de calcul UC :

- Titulaire = 1 UC ;
- Co-titulaire = 0,5 UC ;
- Enfant de 14 ans ou plus = 0,5 UC ;
- Enfant de moins de 14 ans = 0,3 UC.


## 📥 Mise à jour annuelle :

Chaque nouvelle campagne de seuils nécessite uniquement :

1. Ajouter le fichier `quartiles_20XX.json` dans `assets/data/` ;
2. Ajouter la calculette Excel correspondante ;
3. Ajouter l'année dans la liste déroulante.



## 📜 Sources officielles :

- Arrêtés annuels relatifs aux seuils de ressources des ménages du premier quartile. Le plus récent : [Arrêté du 23 avril 2026 – JORF n°0103 du 2 mai 2026](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054022378)
- Code de la construction et de l'habitation – Art. L. 441-1

## ✅ Statut du projet :

- Version actuelle : `v2.0 - Août 2026` ;
- Déploiement sur GitHub Pages.


## 📂 Architecture

assets/
 ├── data/
 │    ├── quartiles_2024.json
 │    ├── quartiles_2025.json
 │    └── quartiles_2026.json
 │
 ├── js/
 ├── css/

calcul-lec.html
evolutions.html
index.html


## 📫 Contact :

**Laëtitia Deken**  
Chargée d'études – Data Analyst  
URH Hauts-de-France  
📧 [l.deken@union-habitat.org](mailto:l.deken@union-habitat.org)  
📞 07 49 10 97 66  
🔗 [LinkedIn URH HDF](https://fr.linkedin.com/company/urh-hdf)

---

*Ce projet est librement réutilisable dans le cadre de la mission d'intérêt général portée par l’URH HDF.*


