import styled from "styled-components";

import { unit } from "./constants";

export const Paper = styled.div`
    border-radius: 10px;
    background-color: ${(props) => props.bcg || "white"};
    padding: ${unit}px;
`;

export const Text = styled.span`
    display: block;
    color: ${(props) => props.color || "black"};
    font-size: ${(props) => props.size || `${unit}px`};
    text-align: ${(props) => props.align || "left"};
    margin: ${props => props.margin || 0};
`;

export const Button = styled.div`
    border-radius: 10px;
    background-color: #ccc;
    padding: 10px;
    transition: 0.3s all;

    &:hover {
        background-color: #eee;
    }
`;

export const Divider = styled.div`
    height: 2px;
    width: 100%;
    background-color: #000000${props => Math.floor((props.alpha || 0.2) * 255).toString(16)};
    margin-top: ${props => unit * (props.marginFactor || 1)}px;
    margin-bottom: ${props => unit * (props.marginFactor || 1)}px;
`;
