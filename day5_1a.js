//How many languages are there in the countries API
const axios = require('axios');
const API_URL = 'https://restcountries.com/v3/all'
const totalLanguage = async ()=>{
    const res = await axios(API_URL);
    let result = res.data
    let language = [], languagesArray = []
    // creating array of object of languages country wise
    for(let i=0; i<result.length;i++){
        language.push(result[i].languages)
    }
//creating array of total language used
    for(let i=0; i<language.length;i++){
        if (i == 144){              //used to skip, there is NULL value
            continue
        }
        let keyLength = Object.keys(language[i]).length        
        for (let j=0;j<keyLength;j++){
            languagesArray.push(Object.values(language[i])[j])
        }
    }
    let uniq = [...new Set(languagesArray)];
    console.log("Total Number of languagesin country api " +uniq.length)
}

totalLanguage()