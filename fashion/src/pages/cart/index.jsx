import Header from "../home/sections/Header";
import Footer from "../home/sections/Footer";
import Section1 from "./sections/section1";

export default function CartPage(){
    return(
       <>
       <Header/>
       <Section1/>
       <Footer/>
       <div className="fixed left-5 z-50 bottom-16 space-y-4">
        <div className="bg-[#89C158] py-2 px-5 rounded-3xl w-max">Chat Zalo</div>
        <div className="bg-[#125C9E] py-2 px-5 rounded-3xl w-max">Chat Facebook</div>
        <div className="bg-[#21A342] py-2 px-5 rounded-3xl w-max">Hotline: 0999999999</div>
       </div>
       </>
    )
}