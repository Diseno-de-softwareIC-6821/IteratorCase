
import { Iterator } from "../Interfaces/Iterator";
import { AbstractNode } from '../abstractNode';
import { MainNode } from './MainNode';

export class Hopscotch implements Iterator<AbstractNode> {

    private current: MainNode;
    constructor(
        public firstNode : MainNode,
       
    ){
        this.current = firstNode;
    }
    next(): AbstractNode {
        return this.current.next();
    }
    hasNext(): boolean {
        return this.firstNode.hasNext();
    }



}