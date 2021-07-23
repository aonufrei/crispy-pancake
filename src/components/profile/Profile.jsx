import React from "react";
import styled from "styled-components";

import { Paper } from "../shared/Styles";
import { unit } from "../shared/constants";

const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
`;
// padding: 10px;
// padding-left: ${(props) => `calc((100% - ${props.width}) / 2)`};
// padding-right: ${(props) => `calc((100% - ${props.width}) / 2)`};

const PanelsContainer = styled.div`
    width: ${(props) => props.width}px;
    display: grid;
    grid-template-columns: 11fr 52fr;
    grid-column-gap: ${unit}px;
`;

const LeftContainer = styled.div`
    height: 100%;
    width: ${unit * 11}px;
    position: relative;
`;

const ProfileInfoContainer = styled.div`
    display: grid;
    grid-template-columns: 11fr 14fr;
    grid-template-rows: ${unit * 32}px;
    grid-column-gap: ${unit * 2}px;
`;

const NavigationContainer = styled.div`
    margin-top: 18px;
    position: sticky;
    top: ${unit * 8}px;
`;

const NavigationItem = styled.a`
    display: block;
    text-styling: none;
    text-decoration: none;
    color: blue;
    font-size: 20px;
    margin-bottom: ${unit * 2}px;
    position: sticky;
`;

const RightPanel = styled.div`
    display: inline-block;
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
            <PanelsContainer width={theme.width}>
                <LeftContainer>
                    <NavigationContainer>
                        <NavigationItem>Profile</NavigationItem>
                        <NavigationItem>Feeds</NavigationItem>
                        <NavigationItem>Friends</NavigationItem>
                        <NavigationItem>Settings</NavigationItem>
                    </NavigationContainer>
                </LeftContainer>
                <RightPanel>
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
                </RightPanel>
            </PanelsContainer>
        </ProfileContainer>
    );
};

export default Profile;
