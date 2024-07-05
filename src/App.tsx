import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserForm from './components/Userform';
import SecondPage from './components/SecondPage';
import DepartmentList from './components/DepartmentList';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/departmentList" element={<DepartmentList />} />
      </Routes>
    </Router>
  );
};

export default App;
