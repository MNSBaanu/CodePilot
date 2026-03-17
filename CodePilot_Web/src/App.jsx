import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AnalysisStatus from './pages/AnalysisStatus';
import Findings from './pages/Findings';
import FindingDetail from './pages/FindingDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analysis/:analysisId" element={<AnalysisStatus />} />
        <Route path="/analysis/:analysisId/findings" element={<Findings />} />
        <Route path="/analysis/:analysisId/findings/:findingId" element={<FindingDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
