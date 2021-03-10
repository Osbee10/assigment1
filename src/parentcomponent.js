import ChildComponent from './childcomponent'

function ParentComponent(){
    return(
        <div>
           <h1>Parent Component</h1> 
           
           <ChildComponent name={props.name} />
        </div> //instead of div you can use empty tags <> & </>
    )
}
export default ParentComponent