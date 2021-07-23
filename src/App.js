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
        click: () => {
            console.log("Profile clicked");
        },
    },
    {
        name: `Feeds`,
        click: () => {
            console.log("Feeds clicked");
        },
    },
    {
        name: `Friends`,
        click: () => {
            console.log("Friends clicked");
        },
    },
    {
        name: `Settings`,
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
                        <NavigationPanel directions={directions} />
                    </LeftLayout>
                    <RightLayout>
                        <Profile
                            profileData={{
                                name: "Artem Onufrei",
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
