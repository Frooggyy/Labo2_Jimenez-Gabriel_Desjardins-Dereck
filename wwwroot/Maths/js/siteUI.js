//<span class="cmdIcon fa-solid fa-ellipsis-vertical"></span>
let contentScrollPosition = 0;


function Init_UI(url) {
    Test(url);
    console.log(url);

}

async function renderResults(props,url) {

    let results = await API_GetResults(props, url);
    
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
    return $(`
     <div>
        <span>OK ===> ${JSON.stringify(result)}</span>
    </div>           
    `);
}
function Test(url){
    eraseContent();
    if(url){
        renderResults({op:"+",x:-111, y:-244}, url);
        renderResults({op:"-",x:1, y:"abc"}, url);
        renderResults({op:"p",n:"a"}, url);
        renderResults({op:"-",x:111, y:244}, url);
        renderResults({op:"*",x:11.56, y:244.12345}, url);
        renderResults({op:"/",x:99, y:11.06}, url);
        renderResults({op:"/",x:99, y:0}, url);
        renderResults({op:"/",x:0, y:0}, url);
        renderResults({op:"%",x:5, y:5}, url);
        renderResults({op:"%",x:100, y:13}, url);
        renderResults({op:"%",x:100, y:0}, url);
        renderResults({op:"%",x:0, y:0}, url);
        renderResults({op:"!",n:0}, url);
        renderResults({op:"p",n:0}, url);
        renderResults({op:"p",n:1}, url);
        renderResults({op:"p",n:2}, url);
        renderResults({op:"p",n:5}, url);
        renderResults({op:"p",n:6}, url);
        renderResults({op:"p",n:6.5}, url);
        renderResults({op:"p",n:113}, url);
        renderResults({op:"p",n:114}, url);
        renderResults({op:"np",n:1}, url);
        renderResults({n:30, op:"np"}, url);
        renderResults({op:"+",X:111, y:244}, url);
        renderResults({op:"+",x:111, Y:244}, url);
        renderResults({op:"+",x:-111, y:-244, z:0}, url);
        renderResults({op:"!",n:5, z:0}, url);
        renderResults({op:"!",n:5.5}, url);
        renderResults({z:0}, url);
        renderResults({n:-5, op:'!'}, url);
        renderResults({x:null}, url);
    }
    
}