
import profile from '../../images/perfil.svg'
import bag from '../../images/sacola.svg'
import styled from 'styled-components';

const icons = [profile, bag]
const Icon = styled.li`
    margin-right: 40px;
    width: 25px;
`
const Icons = styled.ul`
    display: flex;
    align-items: center;

`
function IconsOptions() {
  return (
    <Icons>
      {icons.map((icon) => <Icon><img className='icon' src={icon} alt='icon' /></Icon>)}
    </Icons>
  );
}

export default IconsOptions;