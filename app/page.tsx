"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Slider from "@/components/ui/Slider";
import Image from 'next/image';


const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
      <Image 
        src="/LogoGROOVE.svg" 
        alt="Logotipo de Groove In Club" 
        width={400}  // Puedes ajustar el tamaño que desees, en este caso 48 * 4px
        height={400} 
        priority={true}  // Carga prioritaria si es necesario
        className="animate-pulse"
      />
    </div>
  );
};

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full app.container">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Slider />
        <RecentProjects />
        <Clients />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
