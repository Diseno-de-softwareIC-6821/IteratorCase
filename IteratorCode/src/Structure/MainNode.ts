import {Iterator} from "../Interfaces/Iterator";
import {AbstractNode} from "../abstractNode";
import {SecondNode} from "./secondNode";

export class MainNode extends AbstractNode implements Iterator<AbstractNode> {

    private index: number = 0;
    constructor(data: Number, 
        private seconds: SecondNode[]
        ){
        super(data);
        this.index = 0;
    }
    
    getSecond(i:number): SecondNode{
        return this.seconds[i];
    }
    getNextSecond(): SecondNode{
        this.index++;
        return this.seconds[this.index];
    }

    
    getCurrentSecond(): SecondNode{
        return this.seconds[this.index];
    }
    getLastSecond(): SecondNode{
        for(let i = this.seconds.length-1; i >=0; i--){
            if(this.seconds[i] !== undefined){
                return this.seconds[i];
            }
        }
        return this.seconds[0];
    }
    
    isLastMain(): boolean {
        if(this.getLastSecond().getNextMain() === undefined){
            return true;
        }else {
            return false;
        }
    }
    isLastSecond(): boolean {
        if(this.getSecond(this.index+1) === undefined){
            return true;
        }else {
            return false;
        }
    }
    isLastPrevSecond(): boolean {
        if(this.index<=1){
            return true;
        }else{
            return false
        }
    }
 

    next(): AbstractNode {
        return this.getNextSecond();
    }
    hasNext(): boolean {
        if(this.getNextSecond() !== undefined){
            return true;
        }else {
            return false;
        }
    }

}
