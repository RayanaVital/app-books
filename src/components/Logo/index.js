import logo from '../../images/logo.svg';
import './style.css';

function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt='logomarca'></img>
            <p><strong>Books</strong>List</p>
        </div>
    );
}

export default Logo;