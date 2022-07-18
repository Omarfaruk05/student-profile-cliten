import './App.css';
import Body from './components/Body/Body';
import { Routes, Route } from 'react-router-dom'
import StudentProfile from './components/StudentProfile/StudentProfile';
import Update from './components/Update/Update';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Body></Body>}></Route>
        <Route path="/:id" element={<StudentProfile></StudentProfile>}></Route>
        <Route path="/update/:id" element={<Update></Update>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
