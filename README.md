Créez un nouveau projet React :

Commencez par créer un nouveau projet React à l'aide d'un outil tel que Create React App (CRA) ou de votre méthode préférée.

npx create-react-app my-react-tailwind-app
cd my-react-tailwind-app


Installez Tailwind CSS :
Installez Tailwind CSS et ses dépendances à l'aide de npm

npm install tailwindcss
Générez la configuration CSS Tailwind :
Créez un fichier tailwind.config.js par défaut à l'aide de la commande suivante :

npx tailwindcss init -p

Ce fichier (tailwind.config.js) sera utilisé par le système pour compiler et filtrer les classes de Tailwind

Configurez vos chemins de modèles
Ajoutez les chemins d'accès à tous vos fichiers de modèle dans votre fichier tailwind.config.js.

@type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
Dans le contenttableau, nous stipulons que tous les fichiers se terminant par .js, .jsx, .tset .tsxdans le dossier ./src/et ses enfants seront surveillés pour compiler Tailwind.

Créez des feuilles de style :
Créez un fichier de feuille de style (par exemple, src/styles/tailwind.css) dans lequel vous importez Tailwind CSS.

@tailwind base;
@tailwind components;
@tailwind utilities;
Ces lignes importeront dans votre fichier CSS toutes les classes de Tailwind.

Importez des styles dans votre application React :
Importez les styles CSS Tailwind dans votre composant React principal ou votre point d'entrée.

import React from "react";
import ReactDOM from "react-dom";
import "./styles/tailwind.css"; // Import Tailwind CSS styles
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);



////////////////////////////////////////////////////////////////////////////
