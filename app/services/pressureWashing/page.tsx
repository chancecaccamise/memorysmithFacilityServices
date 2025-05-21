'use client'

import Footer from "@/components/demos/ui/footer";
import Navbar from "@/components/demos/ui/navbar";
import PressureWashingContact from "@/components/demos/ui/pressureWashingContact";
import PressureWashingLanding from "@/components/demos/ui/pressureWashingLanding";



export default function Home() {
  return (
    <div >



        <Navbar/>
      <section id="Home">
        
        <PressureWashingLanding/>
        <PressureWashingContact/>
      </section>
    
      
      
      <section>
        <Footer/>
      </section>
        
      </div>
  );
}