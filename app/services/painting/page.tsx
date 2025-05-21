'use client'




import Footer from "@/components/demos/ui/footer";


import Navbar from "@/components/demos/ui/navbar";
import PaintingContact from "@/components/demos/ui/paintingContact";
import PaintingLanding from "@/components/demos/ui/paintingLanding";





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