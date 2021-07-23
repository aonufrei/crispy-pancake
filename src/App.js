import logo from "./logo.svg";
import Profile from "./components/profile/Profile";
import Header from "./components/header/Header";

const PAGE_SIZE = "1152px";

const theme = {
    width: 1152,
    unitSize: 18,
    primaryColor: "#DA0037",
    textColor: "white",
};

function App() {
    return (
        <div>
            <Header theme={theme} />
            <Profile
                profileData={{
                    name: "Artem Onufrei",
                }}
                theme={theme}
            />
        </div>
    );
}

export default App;
