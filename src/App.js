import logo from "./logo.svg";
import Profile from "./components/profile/Profile";
import Header from "./components/header/Header";
import NavigationPanel from "./components/navigation/NavigationPanel";
import styled from "styled-components";
import { unit } from "./components/shared/constants";

const PAGE_SIZE = "1152px";

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
        click: () => {
            console.log("Profile clicked");
        },
    },
    {
        name: `Feeds`,
        iconClass: `fas fa-rss`,
        click: () => {
            console.log("Feeds clicked");
        },
    },
    {
        name: `Friends`,
        iconClass: `fas fa-users`,
        click: () => {
            console.log("Friends clicked");
        },
    },
    {
        name: `Settings`,
        iconClass: `fas fa-cog`,
        click: () => {
            console.log("Settings clicked");
        },
    },
];

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

function App() {
    return (
        <div>
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
                        <Profile
                            profileData={{
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
                                        values: [
                                            "Videogames",
                                            "Reading",
                                            "Swimming",
                                        ],
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
                                ]
                            }}
                            theme={theme}
                        />
                    </RightLayout>
                </MainLayout>
            </PageContainer>
        </div>
    );
}

export default App;
