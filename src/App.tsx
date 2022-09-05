import DataGridDemo from "./components/table";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DataGridDemo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
