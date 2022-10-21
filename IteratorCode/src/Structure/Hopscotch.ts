
import { Iterator } from "../Interfaces/Iterator";
import { AbstractNode } from '../abstractNode';
import { MainNode } from './MainNode';
import { SecondNode } from './secondNode';

export class HopscotchList implements Iterator<AbstractNode> {

    private current: MainNode;
    constructor(
        public firstNode : MainNode,
       
    ){
        this.current = firstNode;
    }



    next(): AbstractNode {
        if(!this.current.isLastMain()){
            if(!this.current.isLastPrevSecond()){
                //obtener los dos anteriores nodos solamente
                return this.current.getNextSecond();
            }else{
                this.current = this.current.getLastSecond().getNextMain()
                return this.current ;
            }
        }else{
            if(!this.current.isLastSecond()){
                return this.current.getNextSecond();
            }else{
                return new MainNode(-1,[]);
            }
        }
    }
    hasNext(): boolean {
        if(this.current.isLastMain()){
            if(this.current.isLastSecond()){
                return false;
            }else{
                return true;
            }
        }
        return true;
    }
}



