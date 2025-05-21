'use client'





import Footer from "@/components/demos/ui/footer";
import InstagramGallery from "@/components/demos/ui/instaGallery";

import Navbar from "@/components/demos/ui/navbar";




export default function Home() {
  return (
    <div >



      
      <section id="Home">
        <Navbar/>
        <InstagramGallery/>
        
      </section>
    
      
      
      <section>
        <Footer/>
      </section>
        
      </div>
  );
}