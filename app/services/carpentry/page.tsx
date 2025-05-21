'use client'




import CarpentryContact from "@/components/demos/ui/carpentryContact";
import CarpentryLanding from "@/components/demos/ui/carpentryLanding";
import Footer from "@/components/demos/ui/footer";

import Navbar from "@/components/demos/ui/navbar";





export default function Home() {
  return (
    <div >



        <Navbar/>
      <section id="Home">
        
        <CarpentryLanding/>
        <CarpentryContact/>
      </section>
    
      
      
      <section>
        <Footer/>
      </section>
        
      </div>
  );
}