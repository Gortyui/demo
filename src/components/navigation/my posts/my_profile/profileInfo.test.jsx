import TestRenderer from 'react-test-renderer';
import ProfileInfoHook from './profileInfoHook';
import ProfileStatus from './ProfileStatus';
test('true props',()=>{
let component=TestRenderer.create(<ProfileStatus 
    editMode={false} changetoInput={()=>{}}
    Status='test'
    changetoSpan={()=>{}} ChangeStatus={()=>{}} status={'test'}  />)
let componentex=component.root

expect(componentex.find((el)=>{
if(el.type==='span' && el.children[0]==='status:'){return true}
}).children[1]).toBe(componentex.props.Status)

})
//
