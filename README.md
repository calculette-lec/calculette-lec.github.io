# Calculette LEC 2025 - URH Hauts-de-France

Ce site web interactif permet de **calculer le quartile de ressources** (Q1, Q2, Q3, Q4) d’un ménage demandeur de logement social, selon les seuils définis par l’**arrêté du 3 juin 2025**, dans le cadre de la **loi Égalité et Citoyenneté (LEC)**.

> 📍 Outil développé par Laëtitia Deken – Union Régionale pour l’Habitat Hauts-de-France

## 🔧 Fonctionnalités principales

- Sélection dynamique du territoire (Région → Département → EPCI)
- Affichage des seuils de ressources Q1 / Q2 / Q3 (annuels et mensuels)
- Calcul automatique des **unités de consommation (UC)** selon la composition familiale
- Résultat instantané du quartile selon les ressources déclarées
- Affichage pédagogique des ressources/UC mensuelles et annuelles
- Compatible mobile et tablette (responsive)
- Bonus : quelques statistiques nationales et régionales (partie Évolutions)

## 🧮 Règles de calcul UC

- Titulaire = 1 UC
- Co-titulaire = 0,5 UC
- Enfant de 14 ans ou plus = 0,5 UC
- Enfant de moins de 14 ans = 0,3 UC


## 📥 Mise à jour annuelle

Pour chaque nouvelle année :
1. Générer un nouveau fichier `dataQuartiles_script.js` contenant les nouveaux seuils.
2. Remplacer le fichier dans `assets/data/` avec le **même nom**.
3. Aucun changement dans le HTML ou le JavaScript nécessaire.


## 📜 Sources officielles

- [Arrêté du 3 juin 2025 – JORF n°0130 du 7 juin 2025](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000051698932/)
- Code de la construction et de l'habitation – Art. L. 441-1

## ✅ Statut du projet

- Version actuelle : `v1.0 - Juillet 2025`
- Déploiement prévu sur GitHub Pages

## 📫 Contact

**Laëtitia Deken**  
Chargée d'études – Data Analyst  
URH Hauts-de-France  
📧 [l.deken@union-habitat.org](mailto:l.deken@union-habitat.org)  
📞 07 49 10 97 66  
🔗 [LinkedIn URH HDF](https://fr.linkedin.com/company/urh-hdf)

---

*Ce projet est librement réutilisable dans le cadre de la mission d'intérêt général portée par l’URH HDF.*


