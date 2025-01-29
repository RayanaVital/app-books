
import profile from '../../images/perfil.svg'
import bag from '../../images/sacola.svg'
import './style.css';
const icons = [profile, bag]


function IconsOptions() {
  return (
    <ul className='icons'>
    {icons.map((icon) => <li className='icons'><img className='icon' src={icon} alt = 'icon'/></li>)}
  </ul>
  );
}

export default IconsOptions;