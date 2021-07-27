import React from "react";
import styled from "styled-components";

import { nanoid } from "nanoid";
import { Text, Paper } from "../../shared/Styles";
import { unit } from "../../shared/constants";

const ItemsContainer = styled(Paper)`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`;

const Item = styled(Text)`
    width: 100%;
    transition: 0.3s all;
    padding: ${unit}px;
    cursor: pointer;

    &:hover {
        background-color: #ccc;
    }
`;

const SelectedItem = styled(Item)`
    transform: scale(1.05);
    background-color: ${props => props.selectedColor};
    border-bottom: none;
    border-radius: ${unit}px;
    color: white;
    cursor: auto;

    &:hover {
        background-color: ${props => props.selectedColor};
    }
`;

const SelectionList = ({ theme, optionList }) => {
    const [options, setOptions] = React.useState(
        optionList.map((item, index) => ({
            index,
            ...item,
        }))
    );
    const [selected, setSelected] = React.useState(0);

    const onItemClicked = (index, callback) => {
        setSelected(index);
        callback(index);
    };

    const generateList = (options) => options.map((item, index) =>
        selected === index ? (
            <SelectedItem
                selectedColor={theme.primaryColor}
                key={nanoid()}
                onClick={() => item.onClick(index)}
            >
                {item.title}
            </SelectedItem>
        ) : (
            <Item
                key={nanoid()}
                onClick={() => onItemClicked(index, item.onClick)}
            >
                {item.title}
            </Item>
        )
    );

    return <ItemsContainer>{generateList(options)}</ItemsContainer>;
};

export default SelectionList;