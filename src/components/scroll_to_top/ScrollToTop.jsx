
import { useEffect } from 'react'
import { useLocation} from "react-router-dom";

export default function Scrolltotop () {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector("body").style.overflow="";
    }, [pathname])
  return null
}