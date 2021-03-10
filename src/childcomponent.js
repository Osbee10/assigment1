function ChildComponent(){
    return(
        <div>
           <h1>Child Component</h1> 
           <h1>Name: {props.name}</h1>
           <h2>Gender:</h2>
           <h2>Age:</h2>
           <h2>Email</h2>
        </div>
    )
}
export default ChildComponent