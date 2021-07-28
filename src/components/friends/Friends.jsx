import React from "react";
import styled from "styled-components";

import { nanoid } from "nanoid";

import { BaseLayout, RightPanel, Paper, Text } from "../shared/Styles";
import SectionHeader from "../shared/SectionHeader";
import { unit } from "../shared/constants";
import SelectionList from "../selection-list/SelectionList";
import PersonPanel from "../person-panel/PersonPanel";

const FriendsLayout = styled.div``;

const Friends = ({ theme }) => {
    const [personList, setPersonList] = React.useState([
        {
            name: "Artem Onufrei 1",
            status: "Online",
            image: "https://content.fortune.com/wp-content/uploads/2018/07/gettyimages-961697338.jpg",
            isFriend: true,
        },
        {
            name: "Artem Onufrei 2",
            status: "Seen recently",
            image: "https://content.fortune.com/wp-content/uploads/2018/07/gettyimages-961697338.jpg",
        },
        {
            name: "Artem Onufrei 3",
            status: "Seen in 5 minutes",
            image: "https://content.fortune.com/wp-content/uploads/2018/07/gettyimages-961697338.jpg",
            isFriend: true,
        },
        {
            name: "Artem Onufrei 4",
            status: "Seen 10 days ago",
            image: "https://content.fortune.com/wp-content/uploads/2018/07/gettyimages-961697338.jpg",
        },
    ]);

    const generatePeople = (list) =>
        list.map((it) => <PersonPanel theme={theme} person={it} />);

    return (
        <BaseLayout left={52} right={11}>
            <FriendsLayout>
                <SectionHeader
                    title="Friends"
                    margin={`0px 0px ${unit}px 0px`}
                />

                {generatePeople(personList)}
            </FriendsLayout>
            <RightPanel>
                <SelectionList
                    theme={theme}
                    optionList={[
                        {
                            title: "All",
                            onClick: (index) =>
                                console.log(`${index} clicked; Friends`),
                        },
                        {
                            title: "Your Friends",
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

export default Friends;
