import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Menu from "@/components/sections/Menu";
import DailyMenu from "@/components/sections/DailyMenu";
import Promotions from "@/components/sections/Promotions";
import Gallery from "@/components/sections/Gallery";
import Booking from "@/components/sections/Booking";
import BuffetMenu from "@/components/sections/BuffetMenu";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col w-full selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <Menu />
        <DailyMenu />
        <BuffetMenu />
        <Promotions />
        <Gallery />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
