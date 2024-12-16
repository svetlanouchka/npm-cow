// Importer les modules
const dotenv = require("dotenv");
const cowsay = require("cowsay");

// Charger les variables d'environnement depuis .env
dotenv.config();

// Récupérer les variables depuis .env
const name = process.env.NAME || "Unknown";
const campus = process.env.CAMPUS || "Unknown location";

// Construire le message personnalisé
const message = `Hello, my name is ${name} and I am from the campus of ${campus}.`;

// Utiliser le module cowsay pour afficher le message
console.log(
    cowsay.say({
        text: message,
        e: "^^", // Les yeux de la vache
        T: "U ", // La langue de la vache
    })
);
