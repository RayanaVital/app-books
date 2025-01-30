import Logo from "../Logo";
import HeaderOptions from "../HeaderOptions";
import IconsOptions from "../IconsOptions"; 
import styled from 'styled-components';


const HeaderContainer = styled.header`
background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {
  return (
    <HeaderContainer>
        <Logo />
        <HeaderOptions />
        <IconsOptions />
    </HeaderContainer>
  );
}

export default Header;