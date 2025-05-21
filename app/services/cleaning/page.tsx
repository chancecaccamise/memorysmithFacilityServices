'use client'




import CleaningContact from "@/components/demos/ui/cleaningContact";
import CleaningLanding from "@/components/demos/ui/cleaningLanding";
import Footer from "@/components/demos/ui/footer";

import Navbar from "@/components/demos/ui/navbar";





export default function Home() {
  return (
    <div >



        <Navbar/>
      <section id="Home">
        
        <CleaningLanding/>
        <CleaningContact/>
      </section>
    
      
      
      <section>
        <Footer/>
      </section>
        
      </div>
  );
}