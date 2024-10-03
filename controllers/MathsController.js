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
            if( params.n || params.n != null || params.n != undefined ){
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
                let response= {op: params.op, error: "n parameter is missing"};
                this.HttpContext.response.JSON(response);
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
<DIv>{JSONResponse}</DIv>
JSONReponse = "{op: '!', n:'2', value}"