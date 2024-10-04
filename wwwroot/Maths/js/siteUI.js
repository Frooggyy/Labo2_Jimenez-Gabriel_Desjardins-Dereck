//<span class="cmdIcon fa-solid fa-ellipsis-vertical"></span>
let contentScrollPosition = 0;
Init_UI();

function Init_UI() {
    renderResults({op:"!",n:2});
    
}


async function renderResults(props) {

    console.log();
    let results = await API_GetResults(props);
    
    if (results) {
            $("#tests").append(renderResult(results));
            
    } else {
        renderError("Service introuvable");
    }
}
function eraseContent() {
    $("#tests").empty();
}
function renderError(message) {
    eraseContent();
    $("#tests").append(
        $(`
            <div class="errorContainer">
                ${message}
            </div>
        `)
    );
}
function renderResult(result) {
    console.log(result);
    return $(`
     <div>
        <span>OK ===> ${result}</span>
    </div>           
    `);
}