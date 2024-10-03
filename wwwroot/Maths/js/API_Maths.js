//const API_URL = "https://api-server-5.glitch.me/api/contacts";

const API_URL = "http://localhost:5000/api/maths";
let currentHttpError = "";

function API_getcurrentHttpError () {
    return currentHttpError; 
}
function API_GetResult(API_URL, queryString) {
    return new Promise(resolve => {
        $.ajax({
            url: API_URL + "?" + queryString,
            success: result => { currentHttpError = ""; resolve(result); },
            error: (xhr) => { currentHttpError = xhr.responseJSON.error_description; resolve(null); }
        });
    });
}
