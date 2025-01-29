import './App.css';
import Logo from './components/Logo'
import HeaderOptions from './components/HeaderOptions';
import IconsOptions from './components/IconsOptions';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo />
        <HeaderOptions />
        <IconsOptions />
      </header>
    </div>
  );
}

export default App;
