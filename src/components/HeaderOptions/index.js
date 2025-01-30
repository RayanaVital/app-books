import styled from "styled-components";

const textOptions = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS']
const Option = styled.li`
    min-width: 120px;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 100%;
    padding: 5px;
    cursor: pointer;

   
`
const Options = styled.ul`
    display: flex;
   
`
function HeaderOptions() {
    return (
        <Options>
            {textOptions.map((text) => <Option><p>{text}</p></Option>)}
        </Options>
    );
}

export default HeaderOptions;