

export abstract class AbstractNode {
    constructor(
        protected data: Number
    ){}
    getData(): Number{
        return this.data;
    }
  
}