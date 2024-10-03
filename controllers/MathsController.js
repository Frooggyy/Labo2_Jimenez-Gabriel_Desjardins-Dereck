import Controller from './Controller.js';
import * as utilities from '../utilities.js';


export default class MathsController extends Controller {
    constructor(HttpContext) {
        super(HttpContext);
    }
    get(id){
        let params = this.HttpContext.path.params;
        let singleParams = ["!", "p", "np"];
        if(singleParams.includes(params.op)){
            if(n != null || n != undefined){
                switch(params.op){
                    case"!":
                        this.HttpContext.response.JSON(utilities.factorialize(params.n));
                        break;
                    case"p":
                        let result = utilities.isPrime(params.n)
                        this.HttpContext.response.JSON(result);
                        break;
                    case"np":
                        this.HttpContext.response.JSON(utilities.posPrime(params.n));
                        break;
                    default:
                        this.HttpContext.response.notFound();
                        break;
                }
            }
            else{
                let reponse = "n parameter is not defined"
                this.HttpContext.response.JSON()
            }

        }
        else{
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
                default:
                    this.HttpContext.response.notFound();
                    break;    
            }
        }
    }
}
