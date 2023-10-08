'use client';

import { use, useRef, useState } from "react";
import Button from "./components/Button";
import Image from "next/image";

export default function Home() {
  const main = useRef<HTMLImageElement>(null);
  const services = useRef<HTMLVideoElement>(null);
  const servicesReverse = useRef<HTMLVideoElement>(null);

  const [firstLoad, setFirstLoad] = useState(true);
  const [mainScreen, setMainScreen] = useState(true);
  const [servicesScreen, setServicesScreen] = useState(-1);

  const toServices = () => {
    setMainScreen(false);
    setFirstLoad(false);
    setServicesScreen(1);
    if (services.current) services.current.play();
  };

  const fromServices = () => {
    setMainScreen(true);
    setServicesScreen(0);
    if (servicesReverse.current) servicesReverse.current.play();
  };
  
  
  return (
    <main className="">
      <div className="flex flex-col items-center justify-start max-h-screen h-screen w-screen m-auto">

        <div className="my-6 md:my-12 text-6xl md:text-7xl">
          Menendez Law
        </div>

        <div className="h-full max-w-full relative object-contain aspect-[4/3]">
          <Image src="/officeSimple.jpg" alt="3d model of office" fill ref={main} style={{display: firstLoad ? "block": "none"}}/>

          <video src="/services.mp4" className="absolute" autoPlay muted ref={services} style={{display: servicesScreen === 1 ? "block": "none"}}></video>
          <video src="/servicesReverse.mp4" className="absolute" autoPlay muted ref={servicesReverse} style={{display: servicesScreen === 0 ? "block": "none"}}></video>
          <div 
            className={`relative left-[10rem] top-32 z-10 h-1/2 w-1/4
            ${firstLoad && "opacity-0"} ${servicesScreen === 1 && "transition-opacity delay-700 duration-700 opacity-100"} ${mainScreen && "transition-opacity duraiton-700 opacity-0"}`}
          >
            <ul className="list-disc text-3xl">
              <li className="mb-10">Refugee Claims</li>
              <li className="mb-10">Visitor Visa Extensions</li>
              <li className="mb-10">Humanitarian & Compassionate Ground Applications</li>
            </ul>

          </div>

        </div>

        <div className="mt-6 md:mt-8 lg:mt-12 lg:mb-8">
          
          {/* MAIN SCREEN */}
          <div className="flex-row justify-between w-screen lg:w-[60vw]" style={{display: mainScreen ? "flex": "none"}}>
            

              <Button onClick={toServices}> <p>Services</p> </Button>
              <Button> <p>About Us</p> </Button>
              <Button> <p>Location</p> </Button>
              <Button> <p>Contact</p> </Button>


          </div>

          {/* SERVICES SCREEN */}

          <div className={`${servicesScreen === 1 ? "block": "hidden"}`}>
            <Button onClick={fromServices}> <p>Back</p> </Button>
          </div>

        </div>

      </div>

    </main>
  )
}
