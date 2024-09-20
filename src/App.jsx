import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import JobDescriptionAnalyzer from "./resume/JobDescriptionAnalyzer";
import ATSScore from "./resume/ATSScore";
import InputForm from "./resume/InputForm";
import ResumePreview from "./resume/ResumePreview";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/jobdesc" element={<JobDescriptionAnalyzer />} />
          <Route path="/ats" element={<ATSScore />} />
          <Route path="/resume-build" element={<InputForm />} />
          <Route path="/resume-preview" element={<ResumePreview />} />

          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
