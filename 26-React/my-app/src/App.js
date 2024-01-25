import "./App.css";


function SecretComponent(){
    return(
        <h1>Information for Authorized Users Only.</h1>
    )
}

function RegularComponent(){
    return (
        <h1>Regular Info which everyone can see.</h1>
    )
}

function App(props) {
    return(
        <>
        {props.authorized ? <SecretComponent/> : <RegularComponent/>}
        </>
    )
}

export default App;
