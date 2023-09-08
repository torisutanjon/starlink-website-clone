import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages";
import { NavContextProvider } from "./contexts";

function App() {
  return (
    <BrowserRouter>
      <NavContextProvider>
        <div className="absolute top-o left-0 h-screen w-screen">
          <Routes>
            <Route path="/" Component={LandingPage} />
          </Routes>
        </div>
      </NavContextProvider>
    </BrowserRouter>
  );
}

export default App;
