import React from "react";

import styled from "styled-components";

import { nanoid } from "nanoid";

import { prepareNumber } from "../../shared/utils";

const StatisticsLayout = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const StatisticsItem = styled.div`
    padding: 20px;
`;

const Upper = styled.span`
    display: block;
    text-align: center;
    font-size: 24px;
`;
const Lower = styled.span`
    display: block;
    text-align: center;
    font-size: 16px;
`;

const Statistics = ({ sData }) => {

    const generateItems = (data) =>
        data.map((item) => (
            <StatisticsItem key={nanoid()}>
                <Upper>{prepareNumber(item.count)}</Upper>
                <Lower>{item.definition}</Lower>
            </StatisticsItem>
        ));

    return <StatisticsLayout>{generateItems(sData)}</StatisticsLayout>;
};

export default Statistics;
