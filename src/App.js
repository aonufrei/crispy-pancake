import logo from "./logo.svg";
import Profile from "./components/profile/Profile";
import Header from "./components/header/Header";
import NavigationPanel from "./components/navigation/NavigationPanel";
import styled from "styled-components";
import { unit } from "./components/shared/constants";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";

const PageContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const MainLayout = styled.div`
    width: ${(props) => props.width}px;
    display: grid;
    grid-template-columns: 11fr 52fr;
    grid-column-gap: ${unit}px;
`;

const LeftLayout = styled.div`
    height: 100%;
    width: ${unit * 11}px;
    position: relative;
`;

const RightLayout = styled.div`
    display: inline-block;
`;

const theme = {
    width: 1152,
    unitSize: 18,
    primaryColor: "#DA0037",
    textColor: "white",
};

const directions = [
    {
        name: `Profile`,
        iconClass: `fas fa-user-circle`,
        path: "/profile",
        click: () => {
            console.log("Profile clicked");
        },
    },
    {
        name: `Feeds`,
        iconClass: `fas fa-rss`,
        path: "/feeds",
        click: () => {
            console.log("Feeds clicked");
        },
    },
    {
        name: `Friends`,
        iconClass: `fas fa-users`,
        path: "/friends",
        click: () => {
            console.log("Friends clicked");
        },
    },
    {
        name: `Settings`,
        iconClass: `fas fa-cog`,
        path: "/settings",
        click: () => {
            console.log("Settings clicked");
        },
    },
];

const profile = {
    name: "Mark Zuckerberg",
    status: "Cool man",
    image: "https://content.fortune.com/wp-content/uploads/2018/07/gettyimages-961697338.jpg",
    bio: [
        {
            definition: "Gender",
            values: ["Male"],
        },
        {
            definition: "Hobbies",
            values: ["Videogames", "Reading", "Swimming"],
        },
    ],
    statistics: [
        {
            count: 123,
            definition: "Friends",
        },
        {
            count: 20000,
            definition: "Posts",
        },
        {
            count: 4200000,
            definition: "Subscribers",
        },
    ],
};

function App() {
    return (
        <Router>
            <Header theme={theme} />
            <PageContainer>
                <MainLayout width={theme.width}>
                    <LeftLayout>
                        <NavigationPanel
                            theme={theme}
                            directions={directions}
                        />
                    </LeftLayout>
                    <RightLayout>
                        <Switch>
                            <Route path="/profile">
                                <Profile profileData={profile} theme={theme} />
                            </Route>
                            <Route path="/feeds">
                                <div>Feeds</div>
                            </Route>
                            <Route path="/friends">
                                <div>Friends</div>
                            </Route>
                            <Route path="/settings">
                                <div>Settings</div>
                            </Route>

                            <Route path="/asd">
                                <Redirect
                                    push
                                    to={{
                                        pathname: "/profile",
                                    }}
                                />
                            </Route>
                        </Switch>
                    </RightLayout>
                </MainLayout>
            </PageContainer>
        </Router>
    );
}

export default App;
