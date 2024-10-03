//<span class="cmdIcon fa-solid fa-ellipsis-vertical"></span>
let contentScrollPosition = 0;
Init_UI();

function Init_UI() {
    renderResults({op:"!", n:1});
    renderResults();
    renderResults();
    renderResults();
    renderResults();
    renderResults();
    renderResults();
    renderResults();
    renderResults();
}


async function renderResults(query) {
    let results = await API_GetResults(query);
    eraseContent();
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
function renderResults(result) {
    return $(`
     <div>
        <span>OK ===> ${result}</span>
    </div>           
    `);
}