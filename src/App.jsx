import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./components/Home"));
const Detail = lazy(() => import("./components/Detail"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="loader-container flex justify-center mt-28">
            <div className="bouncing-text">
              <div className="b">R</div>
              <div className="o">E</div>
              <div className="u">A</div>
              <div className="n">L</div>
              <div className="c">T</div>
              <div className="e">O</div>
              <div className="e">R</div>
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home itemsPerPage={8} />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
