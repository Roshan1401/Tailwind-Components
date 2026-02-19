import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CalenderWidget from "./components/01-CalenderWidget/CalenderWidget";
import CashFlow from "./components//02-Cash-Flow-Card/CashFlow";
import Dashborard1 from "./components/03-Dashboard/Dashborard1";
import Layout from "./components/04-SlidingCoponents/Layout";
import Card from "./components/05-ProfileCard/Card";
import Navbar from "./components/06-LandigPage/Navbar";
import Hero from "./components/06-LandigPage/Hero";

function App() {
  return (
    <>
      {/* <div className="min-h-screen">
        <CalenderWidget />
        <CashFlow />
        <Dashborard1 />
      </div> */}

      {/* <div className="mx-auto flex h-screen max-w-5xl items-center justify-center bg-neutral-100">
        <Layout />
        <Card />
      </div> */}

      <div className="bg-background text-forground min-h-screen">
        {/* <ModeToggle /> */}
        <Navbar />
        <div>
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;
