import "./App.css";
import {Route, Routes} from "react-router-dom";

// import {BrowserRouter} from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Cart from "./component/Cart";
function App() {
    return (
        <div>
            <Header />

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/cart" element={<Cart />} />
            </Routes>
        </div>
    );
}

export default App;
