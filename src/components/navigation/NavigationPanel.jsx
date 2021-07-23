import React from "react";

import styled from "styled-components";
import { unit } from "../shared/constants";
import { nanoid } from "nanoid";

const NavigationContainer = styled.div`
    margin-top: ${unit}px;
    position: sticky;
    top: ${unit * 8}px;
`;

const NavigationItem = styled.a`
    display: block;
    text-styling: none;
    text-decoration: none;
    color: blue;
    font-size: 20px;
    margin-bottom: ${unit}px;
    position: sticky;
    transition: .3s all;
    padding: 10px;
    border-radius: 10px;

    &:hover {
        background-color: #ccc;
    }
`;

const NavigationPanel = ({ directions }) => {

    const navigationList = directions.map((direction) => (
        <NavigationItem onClick={direction.click}>
            {direction.name}
        </NavigationItem>
    ));

    return (
        <NavigationContainer>
           {navigationList}
        </NavigationContainer>
    );
};

export default NavigationPanel;
