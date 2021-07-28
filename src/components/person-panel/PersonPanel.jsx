import React from "react";

import styled from "styled-components";

import { Paper, Divider, Text } from "../shared/Styles";
import { unit } from "../shared/constants";

const PersonPanelLayout = styled(Paper)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    margin-bottom: ${unit}px;
`;

const UpperPanel = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${unit}px;
`;

const PersonInfo = styled.div`
    display: flex;
    justify-content: start;
`;

const PersonImage = styled.div`
    border-radius: 999px;
    width: ${unit * 5}px;
    height: ${unit * 5}px;
    background-color: #ccc;
    ${props => props.src && `background-image: url(${props.src});`}
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: ${unit * 2}px;
`;

const PersonDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
`;

const PersonName = styled(Text)`
    font-weight: bold;
`;

const PersonStatus = styled(Text)``;

const ActionPanel = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.div`
    border: none;
    background-color: transparent;
    padding: ${unit}px;
    font-weight: bold;
    transition: 0.3s all;
`;

const SendMessageBtn = styled(Button)`
    margin-right: auto;
    &:hover {
        border-radius: ${unit/2}px;
        background-color: ${(props) => props.hoverColor};
        color: white;
    }
`;

const MarkAsFriendBtn = styled(Button)`
    &:hover {
        border-radius: ${unit/2}px;
        background-color: ${(props) => props.hoverColor};
        color: white;
    }
`;

const OptionMessageBtn = styled(Button)`
    display: inline-block;
    height: ${unit}px;
    padding: ${unit}px;
    border-radius: ${unit / 2}px;

    &:hover {
        background-color: #ccc;
    }
`;

const PersonPanel = ({ theme, person }) => {
    return (
        <PersonPanelLayout>
            <UpperPanel>
                <PersonInfo>
                    <PersonImage src={person.image} />
                    <PersonDetails>
                        <PersonName size={`${unit * 1.2}px`}>
                            {person.name}
                        </PersonName>
                        <PersonStatus size={`${unit * 0.8}px`}>
                            {person.status}
                        </PersonStatus>
                    </PersonDetails>
                </PersonInfo>
                <OptionMessageBtn>ooo</OptionMessageBtn>
            </UpperPanel>
            <Divider marginFactor={0.5} />
            <ActionPanel>
                <SendMessageBtn hoverColor={theme.primaryColor}>
                    Send Message
                </SendMessageBtn>

                {!person.isFriend && (
                    <MarkAsFriendBtn hoverColor={theme.primaryColor}>
                        Make Friend
                    </MarkAsFriendBtn>
                )}
            </ActionPanel>
        </PersonPanelLayout>
    );
};

export default PersonPanel;
