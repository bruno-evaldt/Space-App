import styled from "styled-components";

const Titulo = styled .h2`
    color: #7b78E6;
    font-size: 34px;
    text-align: ${props => props.$alinhamento ? props.$alinhamento : 'left'};
`
export default Titulo