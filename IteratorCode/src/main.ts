
import { HopscotchList } from './Structure/hopscotch-list';
import { MainNode } from './Structure/main-node';
import { SecondNode } from './Structure/second-node';


function main(){
    
    const priamryNode1 = new MainNode(3, []);
    const priamryNode2 = new MainNode(6, []);
    const primaryNode3 = new MainNode(8, []);

    const secondaryNode1 = new SecondNode(1);
    const secondaryNode2 = new SecondNode(2);
    const secondaryNode3 = new SecondNode(4);
    const secondaryNode4 = new SecondNode(5);
    const secondaryNode5 = new SecondNode(7);
    const secondaryNode6 = new SecondNode(9);

    priamryNode1.setSecondaryNodes(
        [secondaryNode1, secondaryNode2, secondaryNode3, secondaryNode4]
    );

    priamryNode2.setSecondaryNodes(
        [secondaryNode3, secondaryNode4, secondaryNode5, undefined]
    );

    primaryNode3.setSecondaryNodes(
        [secondaryNode5, undefined, undefined, secondaryNode6]
    );

    secondaryNode1.setFirstMain(undefined).setSecondMain(priamryNode1);
    secondaryNode2.setFirstMain(undefined).setSecondMain(priamryNode1);
    secondaryNode3.setFirstMain(priamryNode1).setSecondMain(priamryNode2);
    secondaryNode4.setFirstMain(priamryNode1).setSecondMain(priamryNode2);
    secondaryNode5.setFirstMain(priamryNode2).setSecondMain(primaryNode3);
    secondaryNode6.setFirstMain(primaryNode3).setSecondMain(undefined);


    const list = new HopscotchList(priamryNode1);

    for(let i = 0; i < 9; i++){
        console.log(list.getCurrentNode().getData());
        list.next();
    }
}


main()