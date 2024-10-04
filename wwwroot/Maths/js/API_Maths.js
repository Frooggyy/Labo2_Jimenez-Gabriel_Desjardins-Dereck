//const API_URL = "https://api-server-5.glitch.me/api/contacts";


const API_URL = "http://localhost:5000/api/maths";
let currentHttpError = "";

function API_getcurrentHttpError () {
    return currentHttpError; 
}
function API_GetResults(params) {
    console.log(params);
    let queryString = ""
    for(let param in params){
        console.log(params.length);
        queryString+=param+'%3D'+params[param]+'%2B'

    }
    return new Promise(resolve => {
        $.ajax({
            url: API_URL + "?" + queryString,
            success: result => { currentHttpError = "";resolve(result); },
            error: (xhr) => { currentHttpError = xhr.responseJSON.error_description; resolve(null); }
        });
    });
}
