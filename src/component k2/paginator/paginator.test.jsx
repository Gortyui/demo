import TestRenderer from 'react-test-renderer';
import Paginator from './paginator';

test('spans count will be portion size',()=>{
    const component=TestRenderer.create(<Paginator changecurrentpage={()=>{}}
        totalItemsCount={3} pageSize={5} portion={5} currentpage={4} />)

        const rootComponent=component.root

        expect(rootComponent.findAllByType('span').length<=rootComponent.props.portion).toBe(true)
})

test('next button && prev will not show ',()=>{
    const component=TestRenderer.create(<Paginator changecurrentpage={()=>{}}
        totalItemsCount={20} pageSize={5} portion={4} currentpage={3} />)

        const rootComponent=component.root

        expect(rootComponent.findAllByType('button').length).toBe(0)
       
})


//paginator.test