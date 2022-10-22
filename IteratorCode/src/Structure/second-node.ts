import {Iterator} from "../Interfaces/iterator";
import {AbstractNode} from "../abstract-classes/abstract-node";
import { MainNode } from "./main-node";

export class SecondNode extends AbstractNode {

    private primaryNodes: (MainNode | undefined) [] 

    constructor(data: number) {
        super(data);

        this.primaryNodes = [undefined, undefined];

    }

    //getters
    getFirstMain(): MainNode | undefined{
       return this.primaryNodes[0];
    }
    getSecondMain(): MainNode | undefined{
        return this.primaryNodes[1];
    }

    //setters
    setFirstMain(node: MainNode | undefined): SecondNode{
        this.primaryNodes[0] = node;
        return this;
    }
    setSecondMain(node: MainNode | undefined): SecondNode{
        this.primaryNodes[1] = node;
        return this;
    }
   

}