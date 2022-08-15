import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Form from './components/Form'
import Signup from './components/Signup'
import Signin from './components/Signin'
import ForgotPassword from './components/ForgotPassword'
import Footer from './components/Footer'
function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/form" element={<Form />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/changePassword" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
