import './App.css';


function Header(props){
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
            <ul>
                {props.geners.map((gener) => (<li key={gener.id}>{gener.title}</li>))}
            </ul>
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

const geners = [
    "Adventure",
    "Biography",
    "Travel",
]

const generObjects = geners.map((gener, gener_id) => (
    {
        id : gener_id,
        title: gener
    }
));
console.log(generObjects);

function App() {
  return (
    <div className="App">
      <Header name="My Writings"/>
      <Main adjective="adventure" geners={generObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
