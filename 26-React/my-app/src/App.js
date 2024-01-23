import './App.css';


function Header(){
    return (
        <header>
            <h1>Study Books</h1>
        </header>
    )
}

function Main(){
    return (
        <main>
            <p>Best Books to learn and get knowledge.</p>
        </main>
    )
}

function Footer(){
    return(
        <footer>
            <p>CopyRight &copy; 2024</p>
        </footer>
    )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main/>
      <Footer />
    </div>
  );
}

export default App;
