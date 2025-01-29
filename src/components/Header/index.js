import Logo from "../Logo";
import HeaderOptions from "../HeaderOptions";
import IconsOptions from "../IconsOptions"; 
import './style.css';



function Header() {
  return (
    <header className='App-header'>
        <Logo />
        <HeaderOptions />
        <IconsOptions />
      </header>
  );
}

export default Header;