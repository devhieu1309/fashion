import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Section1 from "./sections/section1";
import Section2 from "./sections/section2";
import Section3 from "./sections/section3";
import Section4 from "./sections/section4";
import Section5 from "./sections/section5";

export default function HomePage(){
    return(
       <>
       <Header/>
       <Section1/>
       <Section2/>
       <Section3/>
       <Section4/>
       <Section5/>
       <Footer/>
       <div className="fixed left-5 z-50 bottom-16 space-y-4">
        <div className="bg-[#89C158] py-2 px-5 rounded-3xl w-max">Chat Zalo</div>
        <div className="bg-[#125C9E] py-2 px-5 rounded-3xl w-max">Chat Facebook</div>
        <div className="bg-[#21A342] py-2 px-5 rounded-3xl w-max">Hotline: 0999999999</div>
       </div>
       </>
    )
}