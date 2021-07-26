import React from "react";
import styled from "styled-components";

import { nanoid } from "nanoid";

import { Text } from "../../shared/Styles";

import {unit} from "../../shared/constants";

const ProfileAdditionalLayout = styled.div``;

const ProfileAdditionalItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: ${unit}px;
`;

const ProfileAdditionalCell = styled.div``;

const ProfileAdditional = ({ data }) => {
    const generateItems = (data) =>
        data.map((item) => (
            <ProfileAdditionalItem key={nanoid()}>
                <ProfileAdditionalCell>
                    <Text>{item.definition}</Text>
                </ProfileAdditionalCell>
                <ProfileAdditionalCell>
                    {item.values.map((it) => (
                        <Text margin={`0 0 ${unit/2}px 0`} key={nanoid()}>{it}</Text>
                    ))}
                </ProfileAdditionalCell>
            </ProfileAdditionalItem>
        ));

    return <ProfileAdditionalLayout>{generateItems(data)}</ProfileAdditionalLayout>;
};

export default ProfileAdditional;
