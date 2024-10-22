const express = require("express");
// filesystem and a path for getting a translation file 
const fs = require("fs");
const path = require("path");
// cors for the middleware purpose
const cors = require("cors");

const app = express();
// we are using port 3001 bcoz n the port 3000 react app will be hosted
const port = 3001;

const corsOptions = {
    origin: ["http://localhost:3000", "http://localhost:5173"], // Allow both origins
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))

// translation end that our react frontend is using
app.get("/translation/:lang", (req, res)=>{
    // fetching values of the lang
    const lang = req.params.lang;
    console.log(`Received request for language: ${lang}`);

    // need the construct the file form where we are fetching the translationjson content
    //  while we are fetching the content of the language from the frontend
    //  it is in the different format it is something like that "language-location"
    // so for that we spliting it down below and take only language(name[en/fr])
    const filePath = path.join(__dirname, "translation", `${lang.split('-')[0]}.json`)

    // code to read this file content
    fs.readFile(filePath, "utf-8", (err, data) => {
        if(err){
            return res.status(400).json({error : "Translation file not find."});
        }

        try{
            const jsonData = JSON.parse(data);
            res.set("Cache-control", "Public, max-age=3600");
            res.json(jsonData);
        } catch(parseError){
            res.status(500).json({error : "Error Parsing Translation File."});
        }
    })
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});