import Header from './components/Header/Header';
import NavBar from './components/Header/NavBar';
import Footer from './components/Footer/Footer';
import AddDrugBtn from './components/OnlinePharmacy/AddDrugBtn';
import GetInquiry from './components/Inquiry/getInquiry'; // Update import statement
import ViewInquiries from './components/Inquiry/viewInquiries';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<GetInquiry />} />
          <Route path="/add" element={<ViewInquiries />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
