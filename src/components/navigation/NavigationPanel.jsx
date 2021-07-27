import React from "react";

import styled from "styled-components";
import { unit } from "../shared/constants";
import { nanoid } from "nanoid";

import { Link } from "react-router-dom";

const NavigationContainer = styled.div`
    margin-top: ${unit}px;
    position: sticky;
    top: ${unit * 8}px;
`;

const NavigationImage = styled.i`
    margin-right: ${unit}px;
`;

const NavigationItem = styled.div`
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
        <Link
            key={nanoid()}
            to={direction.path}
            style={{ textDecoration: "none" }}
        >
            <NavigationItem theme={theme} onClick={direction.click}>
                <NavigationImage className={direction.iconClass} />
                {direction.name}
            </NavigationItem>
        </Link>
    ));

    return <NavigationContainer>{navigationList}</NavigationContainer>;
};

export default NavigationPanel;
