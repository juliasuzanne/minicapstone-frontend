import { Header } from "./Header";
import { Footer } from "./Footer";
import { Home } from "./Home";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header />
      <Signup />
      <Login />
      <LogoutLink />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
