import styled from 'styled-components'

export const Paper = styled.div`
    border-radius: 10px;
    background-color: ${props => props.bcg || "white"};
    padding: 18px;
`