import React from "react";

import styled from "styled-components";

import { Paper, Text } from "./Styles";

const SectionHeaderLayout = styled(Paper)`
    margin: ${(props) => props.margin || "0 0 0 0"};
`;

const SectionHeader = ({ margin, title = "" }) => {
    return (
        <SectionHeaderLayout margin={margin}>
            <Text>{title}</Text>
        </SectionHeaderLayout>
    );
};

export default SectionHeader;
