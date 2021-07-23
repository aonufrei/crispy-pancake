import React from 'react'
import styled from 'styled-components'

const HeaderLayout = styled.header`
    margin-bottom: ${props => props.theme.unitSize * 4}px;
    padding: 10px;
    padding-left: ${(props) => (`calc((100% - ${props.theme.width}px) / 2)`)};
    padding-right:  ${(props) => (`calc((100% - ${props.theme.width}px) / 2)`)};
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.textColor};
`

const LinkLayout = styled.a`
    height: 100%;
    font-size: 20px;
    font-weight: bold;
`
// ${(props) => props.side || 0};

const HeaderContentContainer = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    alight-items: center;

`

const Header = ({width, theme}) => {

    return (
        <HeaderLayout theme={theme}>
            <HeaderContentContainer>
                <LinkLayout>Logo</LinkLayout>
                <LinkLayout>Name</LinkLayout>
            </HeaderContentContainer>
        </HeaderLayout>
    )
}

export default Header;