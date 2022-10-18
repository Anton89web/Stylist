import { Routes, Route } from "react-router-dom";
import Header from "../header/Header";
import Main from "../../pages/main/MainPage";
import AboutPage from "../../pages/about/AboutPage";
import Services from "../../pages/services/ServicesPage";
import Portfolio from "../../pages/portfolio/PortfolioPage";
import Blog from "../../pages/blog/BlogPage";
import Contacts from "../../pages/contacts/ContactsPage";
import Footer from "../footer/Footer";


const App = ()=>{
  return(
  <>
    <Header/>
    <Routes>
      <Route path="main" element={<Main/>}/>
      <Route path="about" element={<AboutPage/>}/>
      <Route path="services" element={<Services/>}/>
      <Route path="portfolio" element={<Portfolio/>}/>
      <Route path="blog" element={<Blog/>}/>
      <Route path="contacts" element={<Contacts/>}/>
    </Routes>
    <Footer/>
  </>
  )
}

export default App;

