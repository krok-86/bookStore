import styled from "styled-components";

const StyledSheet = styled.h1`
background: white;
min-width: 1438px;
`
const Styled = ({children}) => {
    return <StyledSheet>
     {children}
    </StyledSheet>
};

export default Styled;