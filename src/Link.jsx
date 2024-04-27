function Link(props){
    

    return (
        <div>
            <label >Link karo</label>
            <h3>{props.name}</h3>
            <h1>{props.children}</h1>
        </div>
    )
}
export default Link