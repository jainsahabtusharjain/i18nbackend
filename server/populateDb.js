const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const TranslationSchema = new mongoose.Schema({
    lang: String,
    translations: Object
});

const Translation = mongoose.model('Translation', TranslationSchema);

const englishTranslations = {
    "home": {
        "title": "Welcome to <1>{{appName}}</1>",
        "description": "This is the home page of {{appName}}. Enjoy your stay!"
    },
    "about": {
        "title": "About <1>{{appName}}</1>",
        "description": "{{appName}} is an amazing application that does wonderful things."
    }
};

const frenchTranslations = {
    "home": {
        "title": "Bienvenue sur <1>{{appName}}</1>",
        "description": "Ceci est la page d'accueil de {{appName}}. Profitez de votre visite !"
    },
    "about": {
        "title": "À propos de <1>{{appName}}</1>",
        "description": "{{appName}} est une application incroyable qui fait des choses merveilleuses."
    }
};

async function populateDb() {
    await Translation.deleteMany({});
    await Translation.create({ lang: 'en', translations: englishTranslations });
    await Translation.create({ lang: 'fr', translations: frenchTranslations });
    console.log('Database populated with translations');
    mongoose.connection.close();
}

populateDb();

