import {Iterator} from "../Interfaces/Iterator";
import {AbstractNode} from "../abstractNode";
import { MainNode } from "./MainNode";

export class SecondNode extends AbstractNode implements Iterator<AbstractNode> {


    constructor(data: Number, private previousMain: MainNode, private nextMain: MainNode){
        super(data);
    }
    getNextMain(): MainNode{
       return this.nextMain;
    }
    getPreviuosMain(): MainNode{
        return this.previousMain;
    }
    next(): AbstractNode {
        return this.getNextMain();
    }
    hasNext(): boolean {
        if(this.getNextMain() !== undefined){
            return true;
        }else {
            return false;
        }
    }
   

}