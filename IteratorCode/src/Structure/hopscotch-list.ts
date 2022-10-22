
import { Iterator } from "../Interfaces/iterator";
import { AbstractNode } from '../abstract-classes/abstract-node';
import { MainNode } from './main-node';
import { SecondNode } from './second-node';

export class HopscotchList implements Iterator<HopscotchList> {

    private firstNode: MainNode
    private currentNode: AbstractNode;
    private currentPrimary: MainNode;
    private currentSecondary: SecondNode | undefined;

    constructor( firstNode : MainNode){
        this.firstNode = firstNode;
        this.currentPrimary = firstNode;
        this.currentSecondary = firstNode.getSecondaryNode(0);
        this.currentNode = firstNode;

        const left = firstNode.getLeftSide();
        for(let i = 0; i < left.length; i++){
            if(left[i] !== undefined){
                this.currentNode = left[i]!;
                break;
            }
            this.currentNode = firstNode
        }

    }

    reset(): void {
        this.currentPrimary = this.firstNode;
        this.currentSecondary = this.firstNode.getSecondaryNode(0);
        this.currentNode = this.firstNode;

        const left = this.firstNode.getLeftSide();
        for(let i = 0; i < left.length; i++){
            if(left[i] !== undefined){
                this.currentNode = left[i]!;
                break;
            }
            this.currentNode = this.firstNode
        }
    }

    getCurrentNode(): AbstractNode{
        return this.currentNode;
    }

    next(): HopscotchList {
        if(this.hasNext()){
            const nodes = this.currentPrimary.getSecondaryNodeList()
            const indx = nodes.indexOf(this.currentNode as SecondNode)

            if(this.currentNode == this.currentPrimary){
                for(let i = 2; i < nodes.length; i++){
                    if(nodes[i] !== undefined){
                        this.currentNode = nodes[i]!;
                        break;
                    }
                }
                return this
            }

            if(indx === 1){
                const temp = this.currentPrimary
                for(let i = 0; i < this.currentPrimary.getRightSide().length; i++){

                    const node = this.currentPrimary.getRightSide()[i]
                    if(node !== undefined){
                        this.currentPrimary = node.getSecondMain()!;
                        break
                    }
                }
                this.currentNode = temp
            }
        
            else{

                for(let i = indx+1; i < nodes.length; i++){
                
                    if(nodes[i] !== undefined){
                        this.currentNode = nodes[i]!;
                        break;
                    }
                    else{
                        this.currentNode = this.currentPrimary;
                        break
                    }

                }

            }
        }

        

        return this; 
    }  

    hasNext(): boolean {
        
        const primaryLeft = this.currentPrimary.getLeftSide()
        const primaryRight = this.currentPrimary.getRightSide()

        if(this.currentNode instanceof MainNode){
            for(let i = 0; i < primaryRight.length; i++){
                if(primaryRight[i] !== undefined){
                    return true
                }
            }
        }

        if(primaryLeft.includes(this.currentNode as SecondNode)){
            return true
        }

        return false;
    }
}





