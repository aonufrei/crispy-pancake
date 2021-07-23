import React from "react";
import styled from "styled-components";

import { Paper } from "../shared/Styles";
import { unit } from "../shared/constants";

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

const Post = styled(Paper)`
    margin-bottom: ${unit}px;
`;

const Profile = ({ profileData, theme }) => {
    return (
        <ProfileContainer>
            <PanelContainer>
                <ProfileInfoContainer>
                    <Paper>
                        <p>Hello</p>
                    </Paper>
                    <Paper>
                        <p>Hello</p>
                    </Paper>
                </ProfileInfoContainer>
            </PanelContainer>

            <PanelContainer>
                <PostPanel>143 posts</PostPanel>
                <Post>post2</Post>
                <Post>post3</Post>
                <Post>post4</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
                <Post>post5</Post>
            </PanelContainer>
        </ProfileContainer>
    );
};

export default Profile;
