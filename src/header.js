
function Header(props){


    return(
        <div className="container align-content-center d-flex p-2 justify-content " style={{color:'rgb(202,202,202)'}}>
        <div className="page-header">
            <h1>Memory Game</h1>
        </div>
        <div></div>
        <div className="container-sm d-flex ">
            <p className="me-3">Current Score: {props.score}</p>
            <p className="ms-3">Best Score: {props.bestScore}</p>
        </div>
        </div>


    )
}




export {Header}