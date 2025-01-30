import logo from '../../images/logo.svg';
import styled from 'styled-components';


const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    margin-right: 10px;
`
const LogoImage = styled.img`
    margin-right: 10px;
`
function Logo() {
    return (
        <LogoContainer>
            <LogoImage src={logo} alt='logomarca'/>
            <p><strong>Books</strong>List</p>
        </LogoContainer>
    );
}

export default Logo;