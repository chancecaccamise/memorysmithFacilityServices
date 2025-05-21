'use client'




import Footer from "@/components/demos/ui/footer";
import PaintingLanding from "@/components/demos/ui/lawncareLanding";

import Navbar from "@/components/demos/ui/navbar";
import PaintingContact from "@/components/demos/ui/paintingContact";





export default function Home() {
  return (
    <div >



        <Navbar/>
      <section id="Home">
        
        <PaintingLanding/>
        <PaintingContact/>
        
      </section>
    
      
      
      <section>
        <Footer/>
      </section>
        
      </div>
  );
}