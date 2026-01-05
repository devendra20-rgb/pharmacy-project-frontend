import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './app/pages/Home';
import SymptomChecker from './app/SymptomChecker';
import BMICalculator from './app/pages/BMICalculator';
import DrugInteractionChecker from './app/pages/DrugInteractionChecker';
import FindDoctor from './app/pages/FindDoctor';
import Login from './app/Login';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/symptom-checker" element={<SymptomChecker />} />
            <Route path="/tools/symptom-checker" element={<SymptomChecker />} />
            <Route path="/tools/bmi-calculator" element={<BMICalculator />} />
            <Route path="/tools/drug-interaction" element={<DrugInteractionChecker />} />
            <Route path="/find-doctor" element={<FindDoctor />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
