import React from "react";

import styled from "styled-components";

import { nanoid } from "nanoid";

import { BaseLayout, RightPanel, Paper, Text } from "../shared/Styles";
import SectionHeader from "../shared/SectionHeader";
import { unit } from "../shared/constants";
import Post from "../post/Post";
import SelectionList from "../selection-list/SelectionList";

const FeedsLayout = styled.div`
    width: 100%;
`;

const Feeds = ({ theme, feedsList }) => {
    const generatePosts = () =>
        new Array(10)
            .fill(0)
            .map((_, i) => ({
                author: "User",
                author_image:
                    "https://content.fortune.com/wp-content/uploads/2018/07/gettyimages-961697338.jpg",
                content: `content ${i}`,
                comments: `comments ${i}`,
            }))
            .map((data) => <Post key={nanoid()} theme={theme} data={data} />);
    return (
        <BaseLayout left={52} right={11}>
            <FeedsLayout>
                <SectionHeader title="Feeds" margin={`0px 0px ${unit}px 0px`} />
                {generatePosts()}
            </FeedsLayout>
            <RightPanel>
                <SelectionList
                    theme={theme}
                    optionList={[
                        {
                            title: "All",
                            onClick: (index) =>
                                console.log(`${index} clicked; All`),
                        },
                        {
                            title: "Your friends",
                            onClick: (index) =>
                                console.log(`${index} clicked; Friends`),
                        },
                        {
                            title: "Your subscribers",
                            onClick: (index) =>
                                console.log(`${index} clicked; Subscribers`),
                        },
                    ]}
                />
            </RightPanel>
        </BaseLayout>
    );
};

export default Feeds;
