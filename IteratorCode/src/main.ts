import { HopscotchList } from './Structure/Hopscotch';
import { MainNode } from './Structure/MainNode';
import { SecondNode } from './Structure/secondNode';


const createList = () =>{
    //Seconds Nodes from first main node
    
    const first: MainNode  = new MainNode(1,[second1,second2,second3,second4]);

    const second1 : SecondNode = new SecondNode(1,undefined,undefined);
    const second2 : SecondNode = new SecondNode(2,undefined,undefined);
    const second3 : SecondNode = new SecondNode(3,undefined,undefined);
    const second4 : SecondNode = new SecondNode(4,undefined,undefined);

    
    //Seconds Nodes from second main node
    const second : MainNode = new MainNode(2,[second5,second6,second7,second8]);

    const second5 : SecondNode = new SecondNode(5,undefined,undefined);
    const second6 : SecondNode = new SecondNode(6,undefined,undefined);
    const second7 : SecondNode = new SecondNode(7,undefined,undefined);
    const second8 : SecondNode = new SecondNode(8,undefined,undefined);


    //Seconds Nodes from third main node
    const third : MainNode = new MainNode(3,[second9,second10,second11,second12]);

    const second9 : SecondNode = new SecondNode(9,undefined,undefined);
    const second10 : SecondNode = new SecondNode(10,undefined,undefined);
    const second11 : SecondNode = new SecondNode(11,undefined,undefined);
    const second12 : SecondNode = new SecondNode(12,undefined,undefined);
    
    //Seconds Nodes from fourth main node
    const fourth : MainNode = new MainNode(4,[second13,second14,second15,second16]);

    const second13 : SecondNode = new SecondNode(13,undefined,undefined);
    const second14 : SecondNode = new SecondNode(14,undefined,undefined);
    const second15 : SecondNode = new SecondNode(15,undefined,undefined);
    const second16 : SecondNode = new SecondNode(16,undefined,undefined);

    //Seconds Nodes from fifth main node
    const fifth : MainNode = new MainNode(5,[second17,second18,second19,second20]);
    
    const second17 : SecondNode = new SecondNode(17,undefined,undefined);
    const second18 : SecondNode = new SecondNode(18,undefined,undefined);
    const second19 : SecondNode = new SecondNode(19,undefined,undefined);
    const second20 : SecondNode = new SecondNode(20,undefined,undefined);

  
    HopscotchList list = new HopscotchList();


}