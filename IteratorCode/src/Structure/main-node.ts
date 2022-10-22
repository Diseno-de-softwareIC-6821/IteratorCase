import {Iterator} from "../Interfaces/iterator";
import {AbstractNode} from "../abstract-classes/abstract-node";
import {SecondNode} from "./second-node";

export class MainNode extends AbstractNode{

    private index: number = 0;
    private secondNodeReferences: (SecondNode|undefined)[];

    constructor(data: number, private secondNodes: SecondNode[]) {
        super(data);
        this.index = 0;
        this.secondNodeReferences = secondNodes;
    }
    
    getSecondaryNodeList(): (SecondNode|undefined)[]{
        return this.secondNodeReferences;
    }

    getSecondaryNode(index: number): SecondNode | undefined{
        return this.secondNodeReferences[index];
    }

    getLeftSide(): (SecondNode|undefined) []{
        return this.secondNodeReferences.slice(0, 2);
    }

    getRightSide(): (SecondNode|undefined) []{
        return this.secondNodeReferences.slice(2, 4);
    }

    setSecondaryNodes(nodes: (SecondNode|undefined)[]){
        this.secondNodeReferences = nodes;
    }





    // getSecond(i:number): SecondNode{
    //     return this.secondNodeReferences[i];
    // }
    // getNextSecond(): SecondNode{
    //     this.index++;
    //     return this.secondNodeReferences[this.index];
    // }

    
    // getCurrentSecond(): SecondNode{
    //     return this.secondNodeReferences[this.index];
    // }
    // getLastSecond(): SecondNode{
    //     for(let i = this.secondNodeReferences.length-1; i >=0; i--){
    //         if(this.secondNodeReferences[i] !== undefined){
    //             return this.secondNodeReferences[i];
    //         }
    //     }
    //     return this.secondNodeReferences[0];
    // }
    
    // isLastMain(): boolean {
    //     if(this.getLastSecond().getNextMain() === undefined){
    //         return true;
    //     }else {
    //         return false;
    //     }
    // }
    // isLastSecond(): boolean {
    //     if(this.getSecond(this.index+1) === undefined){
    //         return true;
    //     }else {
    //         return false;
    //     }
    // }
    // isLastPrevSecond(): boolean {
    //     if(this.index<=1){
    //         return true;
    //     }else{
    //         return false
    //     }
    // }


}
