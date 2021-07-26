import React from "react";

import styled from "styled-components";

import { unit } from "../../shared/constants";
import { prepareNumber } from "../../shared/utils";

const ActionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: ${unit}px;
`;

const ActionImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${unit * 1.4}px;
    color: ${(props) => (props.state ? props.activeColor : "#ccc")};
    width: ${unit * 1.4}px;
    height: ${unit * 1.4}px;
    margin-right: ${unit / 2}px;
    cursor: pointer;
`;

const ActionNumber = styled.span`
    display: block;
    font-size: ${unit / 1.2}px;
`;

const Action = ({ theme, count, onClass, offClass, state, onChange }) => {
    const [active, setActive] = React.useState(state || false);

    React.useEffect(() => {
        onChange(active);
    }, [active]);

    return (
        <ActionContainer>
            <ActionImage
                activeColor={theme.primaryColor || 'red'}
                onClick={() => setActive(!active)}
                state={active}
                className={active ? onClass : offClass}
            />
            <ActionNumber>{prepareNumber(count)}</ActionNumber>
        </ActionContainer>
    );
};

export default Action;
