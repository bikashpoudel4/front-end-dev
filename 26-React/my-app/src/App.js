import './App.css';


function Header(props){
    console.log(props);
    return (
        <header>
            <h1>{props.name}</h1>
        </header>
    )
}

function Main(props){
    return (
        <main>
            <p>Best Books to learn {props.adjective}.</p>
        </main>
    )
}

function Footer(props){
    return(
        <footer>
            <p>CopyRight &copy; {props.year}</p>
        </footer>
    )
}

function App() {
  return (
    <div className="App">
      <Header name="My Writings"/>
      <Main adjective="adventure"/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
