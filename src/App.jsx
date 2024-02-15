import React, { useState } from 'react';
import Header from "./components/Header";
import News from "./components/News";
import { NewsProvider } from './context/NewsContext';
import Footer from './components/Footer';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <NewsProvider>
      <>
        <Header setSelectedCategory={setSelectedCategory} />
        <News selectedCategory={selectedCategory} />
        <Footer />
      </>
    </NewsProvider>
  );
}

export default App;
