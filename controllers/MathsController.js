import Controller from './Controller.js';

export default class MathsController extends Controller {
    constructor(HttpContext) {
        super(HttpContext);
    }
    get(id){
        params = this.HttpContext.path.params;
        console.log(params)
    }
}
