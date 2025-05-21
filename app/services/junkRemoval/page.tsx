'use client'




import Footer from "@/components/demos/ui/footer";
import JunkRemovalContact from "@/components/demos/ui/junkRemovalContact";
import JunkRemovalLanding from "@/components/demos/ui/junkRemovalLanding";

import Navbar from "@/components/demos/ui/navbar";




export default function Home() {
  return (
    <div >



        <Navbar/>
      <section id="Home">
        
        <JunkRemovalLanding/>
        <JunkRemovalContact/>
      </section>
    
      
      
      <section>
        <Footer/>
      </section>
        
      </div>
  );
}