export default(text, color) =>{
    const style = {
        position: "absolute",
        top: "60px",
        right: "-5px",
        paddingRight: "100px"
    }

    return(
        <div className="alert alert-primary" style={style} role="alert">
            {text}
        </div>
    )
}