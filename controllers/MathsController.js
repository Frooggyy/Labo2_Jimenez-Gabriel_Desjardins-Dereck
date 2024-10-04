import Controller from "./Controller.js";
import * as utilities from "../utilities.js";

export default class MathsController extends Controller {
    constructor(HttpContext) {
        super(HttpContext);
    }

    get() {
        let params = this.HttpContext.path.params;
        console.log(params);
        
        let singleParams = ["!", "p", "np"];
        if (params.op != null || params.op != undefined) {
            if (singleParams.includes(params.op)) {
                if (params.n != null || params.n != undefined) {
                    if (params.n != NaN) {
                        if(Number.isInteger(parseInt(params.n)) && parseInt(params.n) >= 1){
                            if (Object.keys(params).length <= 2) {
                                switch (params.op) {
                                    case "!":
                                        params.value = utilities.factorialize(params.n);
                                        this.HttpContext.response.JSON(params);
                                        break;
                                    case "p":
                                        params.value = utilities.isPrime(params.n);
                                        this.HttpContext.response.JSON(params);
                                        break;
                                    case "np":
                                        params.value = utilities.posPrime(params.n);
                                        this.HttpContext.response.JSON(params);
                                        break;
                                }
                            } else {
                                params.error = "Too many parameters";
                                this.HttpContext.response.JSON(params);
                            }
                        }else{
                            params.error = "n must be an integer > 0";
                            this.HttpContext.response.JSON(params);
                        }

                    } else {
                        params.error = "n parameter is not a number";
                        this.HttpContext.response.JSON(params);
                    }
                } else {
                    params.error = "n parameter is missing";
                    this.HttpContext.response.JSON(params);
                }
            } else {
                if(params.x != null || params.x != undefined){
                    if(params.y != null || params.y != undefined){
                        if (!isNaN(params.x)) {
                            if (!isNaN(params.y)) {
                                if (Object.keys(params).length <= 3) {
                                    params.x = parseInt(params.x);
                                    params.y = parseInt(params.y);
                                    switch (params.op) {
                                        case " ":
                                            params.value = params.x + params.y;
                                            this.HttpContext.response.JSON(params);
                                            break;
                                        case "-":
                                            params.value = params.x - params.y;
                                            this.HttpContext.response.JSON(params);
                                            break;
                                        case "*":
                                            params.value = params.x * params.y;
                                            this.HttpContext.response.JSON(params);
                                            break;
                                        case "/":
                                            params.value = params.x / params.y;
                                            this.HttpContext.response.JSON(params);
                                            break;
                                        case "%":
                                            params.value = params.x % params.y;
                                            this.HttpContext.response.JSON(params);
                                            break;
                                    }
                                }
                                else{
                                    params.error = "Too many parameters";
                                    this.HttpContext.response.JSON(params);
                                }
                            } else {
                                params.error = "y parameter is not a number";
                                this.HttpContext.response.JSON(params);
                            }
                        } else {
                            params.error = "x parameter is not a number";
                            this.HttpContext.response.JSON(params);
                        }
                    }else{
                        params.error = "y parameter is not defined";
                        this.HttpContext.response.JSON(params);
                    }
                }else{
                    params.error = "x parameter is not defined";
                    this.HttpContext.response.JSON(params);
                }

            }
        } else {
            params.error = "op parameter is missing";
            this.HttpContext.response.JSON(params);
        }
    }
}
