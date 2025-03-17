import Logo from "../Logo";
import HeaderOptions from "../HeaderOptions";
import IconsOptions from "../IconsOptions";
import styled from 'styled-components';
import { Link } from "react-router-dom";


const HeaderContainer = styled.header`
background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <HeaderOptions />
      <IconsOptions />
    </HeaderContainer>
  );
}

export default Header;