import { ChildAsFC } from './Child'

const Parent = () => {
    return <ChildAsFC color='red' onClick={() => console.log('clicked')}>
        asdlkja
    </ChildAsFC>
};

export default Parent;