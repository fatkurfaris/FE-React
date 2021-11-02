import { mockTugas } from "./MockData";
import TugasPage from "./pages/tugas/HomeTugas";

function App() {
  return (
    <TugasPage tugass={mockTugas}/>
  );
}

export default App;
