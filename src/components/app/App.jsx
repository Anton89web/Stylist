import { Routes, Route } from "react-router-dom";
import Header from "../header/header";
import Main from "../../pages/main/MainPage";
import AboutPage from "../../pages/about/AboutPage";
import Services from "../../pages/services/ServicesPage";
import Portfolio from "../../pages/portfolio/PortfolioPage";
import Blog from "../../pages/blog/BlogPage";
import Contacts from "../../pages/contacts/ContactsPage";
import Footer from "../footer/footer";
import Scrolltotop from "../scroll_to_top/ScrollToTop";


const App = ()=>{
  return(
  <>
    <Header/>
    <Scrolltotop/>
    <Routes>
      <Route path="" element={<Main/>}/>
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

