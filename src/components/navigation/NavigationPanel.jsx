import React from "react";

import styled from "styled-components";
import { unit } from "../shared/constants";
import { nanoid } from "nanoid";

const NavigationContainer = styled.div`
    margin-top: ${unit}px;
    position: sticky;
    top: ${unit * 8}px;
`;

const NavigationImage = styled.i`
    margin-right: ${unit}px;
`;

const NavigationItem = styled.a`
    display: block;
    text-decoration: none;
    color: ${(props) => props.theme.primaryColor || "blue"};
    font-size: 20px;
    margin-bottom: ${unit}px;
    position: sticky;
    transition: 0.3s all;
    padding: ${unit / 2}px;
    border-radius: 10px;

    &:hover {
        color: white;
        background-color: ${(props) => props.theme.primaryColor || "#ccc"};
    }
`;

const NavigationPanel = ({ directions, theme }) => {
    const navigationList = directions.map((direction) => (
        <NavigationItem key={nanoid()} theme={theme} onClick={direction.click}>
            <NavigationImage className={direction.iconClass} />
            {direction.name}
        </NavigationItem>
    ));

    return <NavigationContainer>{navigationList}</NavigationContainer>;
};

export default NavigationPanel;
