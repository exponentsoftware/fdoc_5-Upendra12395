const axios = require('axios');
const API_URL = 'https://restcountries.com/v3/all'
var result
const getinfo = async ()=>{
    const res = await axios(API_URL);
    result = res.data
    let obj = result.sort( compare );
    let array = []
    
    for (let i=0;i<10;i++){
        array.push({Country : obj[i].name.common, Area : obj[0].area})
    }
    console.log(array)
}

getinfo()

function compare( a, b ) {
    if ( a.area < b.area){
      return 1;
    }
    if ( a.area > b.area ){
      return -1;
    }
    return 0;
  }
  
