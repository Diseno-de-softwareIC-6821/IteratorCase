import {Iterator} from "../Interfaces/Iterator";
import {AbstractNode} from "../abstractNode";
import { MainNode } from "./MainNode";

export class SecondNode extends AbstractNode implements Iterator<MainNode> {


    constructor(data: Number, private previousMain: MainNode, private nextMain: MainNode){
        super(data);
    }
    next(): MainNode {
        return this.nextMain;
    }
  
    hasNext(): boolean {
        return this.nextMain != undefined ? true : false;
    }
    


}