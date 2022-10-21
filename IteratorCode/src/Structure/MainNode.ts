import {Iterator} from "../Interfaces/Iterator";
import {AbstractNode} from "../abstractNode";
import {SecondNode} from "./second";

export class MainNode extends AbstractNode implements Iterator<SecondNode> {

    private index: number = 0;
    constructor(data: Number, 
        private seconds: SecondNode[]
        ){
        super(data);
        this.index = 0;
    }
    
    

    next(): SecondNode {
        return this.seconds[this.index++];
    }
    
    hasNext(): boolean {

        return this.seconds[this.index+1] != undefined ? true : false || this.index < 2 ? true : false;; 
    }

    

    


}
