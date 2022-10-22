

export abstract class AbstractNode {
    private data: number

    constructor(data: number){
        this.data = data;
    }

    getData(): number{
        return this.data;
    }

    setData(data: number){
        this.data = data;
    }
  
}