import React from 'react';
import Navbar from './components/Navigation/Navbar';
import Hero from './components/Hero';
import Challenge from './components/About/Challenge';
import DataVisualizer from './components/Insights/DataVisualizer';
import Approach from './components/Solutions/Approach';
import ScenarioTool from './components/Planner/ScenarioTool';
import Recommendations from './components/Policy/Recommendations';
import ContactForm from './components/Contact/ContactForm';
import Footer from './components/Footer/Footer';
import Chatbot from './components/Chat/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Challenge />
      <DataVisualizer />
      <Approach />
      <ScenarioTool />
      <Recommendations />
      <ContactForm />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;