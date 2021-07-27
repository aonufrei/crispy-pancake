import React from "react";
import styled from "styled-components";

import { Paper, Button, Text, Divider } from "../shared/Styles";
import { unit } from "../shared/constants";
import Statistics from "./statistics/Statistics";
import ProfileAdditional from "./additional/ProfileAdditional";

import Post from "../post/Post";

const ProfileContainer = styled.div``;

const ProfileInfoContainer = styled.div`
    display: grid;
    grid-template-columns: 11fr 14fr;
    grid-template-rows: ${unit * 32}px;
    grid-column-gap: ${unit * 2}px;
`;

const PanelContainer = styled.div`
    display: block;
    margin-bottom: ${unit * 1.5}px;
`;

const PostPanel = styled(Paper)`
    margin-bottom: ${unit}px;
`;

const ProfileImage = styled.div`
    background-color: #ccc;
    ${props => props.src && `background-image: url(${props.src});`}
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    width: 100%;
    height: 90%;
    margin-bottom: 5%;
`;

const ActionsPanel = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FollowButton = styled(Button)`
    text-align: center;
    flex-grow: 9;
    margin-right: ${unit}px;
`;

const OptionsButton = styled(Button)`
    text-align: center;
    flex-grow: 1;
`;

const ProfileInfo = styled(Paper)`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

const ProfileNamePanel = styled.div``;

const NameAndLastlySeen = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${unit}px;
`;

const Profile = ({ profileData, theme }) => {
    const generatePosts = () =>
        new Array(10)
            .fill(0)
            .map((_, i) => ({
                author: profileData.name,
                author_image: profileData.image,
                content: `content ${i}`,
                comments: `comments ${i}`,
            }))
            .map((data) => <Post theme={theme} data={data} />);

    return (
        <ProfileContainer>
            <PanelContainer>
                <ProfileInfoContainer>
                    <Paper>
                        <ProfileImage src={profileData.image} />
                        <ActionsPanel>
                            <FollowButton>Follow</FollowButton>
                            <OptionsButton>ooo</OptionsButton>
                        </ActionsPanel>
                    </Paper>
                    <ProfileInfo>
                        <div>
                            <ProfileNamePanel>
                                <NameAndLastlySeen>
                                    <Text size="24px">{profileData.name}</Text>
                                    <Text size="16px" align="right">
                                        Online
                                    </Text>
                                </NameAndLastlySeen>
                                <Text size="14px">{profileData.status}</Text>
                            </ProfileNamePanel>
                            <Divider />
                            <ProfileAdditional data={ profileData.bio } />
                        </div>
                        <div>
                            <Divider />

                            <Statistics
                                sData={profileData.statistics}
                            />
                            {/* 
                            <StatisticsPanel>
                                <StatisticsCell>123</StatisticsCell>
                                <StatisticsCell>123</StatisticsCell>
                                <StatisticsCell>123</StatisticsCell>
                            </StatisticsPanel> */}
                        </div>
                    </ProfileInfo>
                </ProfileInfoContainer>
            </PanelContainer>

            <PanelContainer>
                <PostPanel>143 posts</PostPanel>
                {generatePosts()}
            </PanelContainer>
        </ProfileContainer>
    );
};

export default Profile;
