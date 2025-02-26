import { useState } from "react";
import Header from './../components/header/index.jsx'
import Hero from './../components/hero/index.jsx'
import NavNews from './../components/navNews/index.jsx'
import SmallNewsGrid from '../components/smallNewsGrid/index.jsx'
import Footer from './../components/footer/index.jsx'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  return (
    <>
      <Header />
      <Hero />
      <NavNews setSelectedCategory={setSelectedCategory}/>
      <SmallNewsGrid categoria={selectedCategory}/>
      <Footer />
    </>
  )
}