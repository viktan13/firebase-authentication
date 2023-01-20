import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AuthDetails from "./components/AuthDetails";

function App() {
    return (
        <div style={{textAlign: 'center'}}>
            <SignIn/>
            <hr/>
            <SignUp />
            <hr/>
            <AuthDetails/>
        </div>
    );
}

export default App;
