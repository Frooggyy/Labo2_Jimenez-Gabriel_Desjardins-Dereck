//<span class="cmdIcon fa-solid fa-ellipsis-vertical"></span>
let contentScrollPosition = 0;
Init_UI();

function Init_UI() {
    Test();

    
}


async function renderResults(props) {

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
        <span>OK ===> ${JSON.stringify(result)}</span>
    </div>           
    `);
}
function Test(){
    renderResults({op:"+",x:-111, y:-244});
    renderResults({op:"-",x:1, y:"abc"});
    renderResults({op:"p",n:"a"});
    renderResults({op:"-",x:111, y:244});
    renderResults({op:"*",x:11.56, y:244.12345});
    renderResults({op:"/",x:99, y:11.06});
    renderResults({op:"/",x:99, y:0});
    renderResults({op:"/",x:0, y:0});
    renderResults({op:"%",x:5, y:5});
    renderResults({op:"%",x:100, y:13});
    renderResults({op:"%",x:100, y:0});
    renderResults({op:"%",x:0, y:0});
    renderResults({op:"!",n:0});
    // renderResults({op:"p",n:1});
    // renderResults({op:"p",n:2});
    // renderResults({op:"p",n:5});
    // renderResults({op:"p",n:6});
    // renderResults({op:"p",n:65});
    // renderResults({op:"p",n:113});
    // renderResults({op:"p",n:114});
    // renderResults({op:"p",n:0});
    renderResults({op:"+",x:-111, y:-244});
    renderResults({op:"+",x:-111, y:-244});
    renderResults({op:"+",x:-111, y:-244});
    renderResults({op:"+",x:-111, y:-244});
    renderResults({op:"+",x:-111, y:-244});
}