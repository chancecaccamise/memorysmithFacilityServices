'use client'




import Footer from "@/components/demos/ui/footer";
import MovingHaulingContact from "@/components/demos/ui/movingHaulingContact";
import MovingHaulingLanding from "@/components/demos/ui/movingHaulingLanding";

import Navbar from "@/components/demos/ui/navbar";






export default function Home() {
  return (
    <div >



        <Navbar/>
      <section id="Home">
        
        <MovingHaulingLanding/>
        <MovingHaulingContact/>
      </section>
    
      
      
      <section>
        <Footer/>
      </section>
        
      </div>
  );
}