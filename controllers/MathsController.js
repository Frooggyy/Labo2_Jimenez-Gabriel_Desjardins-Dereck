import Controller from './Controller.js';
import * as utilities from '../utilities.js';


export default class MathsController extends Controller {
    constructor(HttpContext) {
        super(HttpContext);
    }
    get(id){
        let params = this.HttpContext.path.params;
        let reponse = 0;
        console.log(params);
        switch(params.op){
            case" ":
                this.HttpContext.response.JSON(params.x + params.y);
                break;
            case"-":
                this.HttpContext.response.JSON(params.x - params.y);
                break;
            case"*":
                this.HttpContext.response.JSON(params.x * params.y);  
                break;          
            case"/":
                this.HttpContext.response.JSON(params.x / params.y);
                break;
            case"%":
                this.HttpContext.response.JSON(params.x % params.y);
                break;
            case"!":
                this.HttpContext.response.JSON(utilities.factorialize(params.x));
                break;
            case"p":
                let result = utilities.isPrime(params.x)
                this.HttpContext.response.JSON(result);
                break;
            case"np":
                this.HttpContext.response.JSON(utilities.posPrime(params.x));
                break;
            default:
                this.HttpContext.response.notFound();
                break;
        }
    }
}
