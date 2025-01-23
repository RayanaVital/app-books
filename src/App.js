import './App.css';
import logo from  './images/logo.svg'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='logo'>
          <img src={logo} alt='logomarca'></img>
          <p><strong>Books</strong>List</p>
        </div>
      </header>
    </div>
  );
}

export default App;
