'use client';

import { useRef, useState } from "react";
import Button from "./components/Button";
import Image from "next/image";
import BackButton from "./components/BackButton";
import { MdCheck } from "react-icons/md";

export default function Home() {
  const main = useRef<HTMLImageElement>(null);
  const services = useRef<HTMLVideoElement>(null);
  const servicesReverse = useRef<HTMLVideoElement>(null);
  const location = useRef<HTMLVideoElement>(null);
  const locationReverse = useRef<HTMLVideoElement>(null);
  const aboutus = useRef<HTMLVideoElement>(null);
  const aboutusReverse = useRef<HTMLVideoElement>(null);

  const [mainScreen, setMainScreen] = useState(true);
  const [mainz, setMainz] = useState(50);

  const [servicesScreen, setServicesScreen] = useState(-1);
  const [toServicesOpacity, setToServicesOpacity] = useState(0);
  const [fromServicesOpacity, setFromServicesOpacity] = useState(0);
  const [servicesDisplay, setServicesDisplay] = useState("none");

  const [locationScreen, setLocationScreen] = useState(-1);
  const [toLocationOpacity, setToLocationOpacity] = useState(0);
  const [fromLocationOpacity, setFromLocationOpacity] = useState(0);
  const [locationDisplay, setLocationDisplay] = useState("none");

  const [aboutusScreen, setAboutusScreen] = useState(-1);
  const [toAboutusOpacity, setToAboutusOpacity] = useState(0);
  const [fromAboutusOpacity, setFromAboutusOpacity] = useState(0);
  const [aboutusDisplay, setAboutusDisplay] = useState("none");

  const toServices = () => {
    setMainScreen(false);
    setMainz(-50);
    setServicesScreen(1);
    setToServicesOpacity(1);
    if (services.current) services.current.play();
  };
  const fromServices = () => {
    setMainScreen(true);
    setServicesScreen(0);
    setToServicesOpacity(0);
    setFromServicesOpacity(1);
    if (servicesReverse.current) servicesReverse.current.play();
  };

  const toLocation = () => {
    setMainScreen(false);
    setMainz(-50);
    setLocationScreen(1);
    setToLocationOpacity(1);
    if (location.current) location.current.play();
  };
  const fromLocation = () => {
    setMainScreen(true);
    setLocationScreen(0);
    setToLocationOpacity(0);
    setFromLocationOpacity(1);
    if (locationReverse.current) locationReverse.current.play();
  };

  const toAboutus = () => {
    setMainScreen(false);
    setMainz(-50);
    setAboutusScreen(1);
    setToAboutusOpacity(1);
    if (aboutus.current) aboutus.current.play();
  };
  const fromAboutus = () => {
    setMainScreen(true);
    setAboutusScreen(0);
    setToAboutusOpacity(0);
    setFromAboutusOpacity(1);
    if (aboutusReverse.current) aboutusReverse.current.play();
  };
  
  return (
    <main>
      <div className="flex flex-col items-center justify-start h-screen w-screen m-auto">
        
        {/* TITLE */}
        <div className="my-6 md:my-12 text-6xl md:text-7xl">
          Menendez Law
        </div>

        {/* CONTENT */}
        <div className="h-full max-w-screen xl:max-w-[75vw] relative object-contain aspect-[4_/_3]">
          
          {/* MAIN SCREEN ON FIRST LOAD */}
          <Image src="/officeSimple.jpg" alt="3d model of office" fill ref={main} className="aspect-[4_/_3]" priority style={{zIndex: mainz}}/>

          {/* SERVICES CONTENT */}
          <video src="/services.mp4" className="absolute" muted ref={services} style={{opacity: toServicesOpacity}} onPlay={() => setServicesDisplay("block")}></video>
          <video src="/servicesReverse.mp4" className="absolute" muted ref={servicesReverse} style={{opacity: fromServicesOpacity}} onEnded={() => {setFromServicesOpacity(0); setServicesDisplay("none"); setMainz(50);}}></video>
          
          <div className={`absolute left-[17%] top-[15%] h-[50%] w-[25%] z-10  ${servicesScreen === 1 && "animate-inContent"} ${servicesScreen !== 1 && "animate-outContent"}`}
            style={{display: servicesDisplay}}
          >
            <ul className="list-disc text-xl sm:text-2xl md:text-3xl">
              <li className="mb-10">Refugee Claims</li>
              <li className="mb-10">Visitor Visa Extensions</li>
              <li>Humanitarian & Compassionate Ground Applications</li>
            </ul>
          </div>

          {/* LOCATION CONTENT */}
          <video src="/location.mp4" className="absolute" muted ref={location} style={{opacity: toLocationOpacity}} onPlay={() => setLocationDisplay("block")}></video>
          <video src="/locationReverse.mp4" className="absolute" muted ref={locationReverse} style={{opacity: fromLocationOpacity}} onEnded={() => {setFromLocationOpacity(0); setLocationDisplay("none"); setMainz(50);}}></video>
          
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.0791013428743!2d-75.69703852341675!3d45.42790677107342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce052c0ccce04d%3A0xfcb93cdfcca207c3!2sMenendez%20Law%20Refugee%20and%20Immigration!5e0!3m2!1sen!2sca!4v1694661097560!5m2!1sen!2sca" 
            className={`absolute w-full h-full z-20 ${locationScreen === 1 && "animate-inMap"} ${locationScreen !== 1 && "animate-outMap"}`}
            loading="lazy" 
            style={{display: locationDisplay}}
          />

          {/* ABOUT US CONTENT */}
          <video src="/aboutus.mp4" className="absolute" muted ref={aboutus} style={{opacity: toAboutusOpacity}} onPlay={() => setAboutusDisplay("block")}></video>
          <video src="/aboutusReverse.mp4" className="absolute" muted ref={aboutusReverse} style={{opacity: fromAboutusOpacity}} onEnded={() => {setFromAboutusOpacity(0); setAboutusDisplay("none"); setMainz(50);}}></video>
          
          <div className={`absolute z-20 top-[14%] left-[17%] h-[35%] w-[66%] ${aboutusScreen === 1 && "animate-inContent"} ${aboutusScreen !== 1 && "animate-outContent"}`}
            style={{display: aboutusDisplay}}
          >
            <div className="flex flex-row justify-between h-full w-full">
              
              <div className="bg-secondary text-secondary-content m-0 p-6 h-full w-[49%]">
                <p className="text-xl md:text-2xl mb-[5%]">Hours</p>
                <hr />
                <div className="flex flex-row text-sm md:text-lg justify-between my-[6%]">
                  <p>Monday - Friday</p>
                  <p>9 am - 5 pm</p>
                </div>
                <hr />
                <div className="flex flex-row text-sm md:text-lg justify-between my-[6%]">
                  <p>Sunday - Saturday</p>
                  <p>Closed</p>
                </div>
                <hr />
              </div>

              <div className="bg-secondary text-secondary-content m-0 py-6 h-full w-[49%] flex flex-row justify-start text-sm lg:text-lg">
                <div className="flex flex-col justify-between ml-[10%]">
                  <MdCheck className="w-[30%] h-[30%]"/>
                  <MdCheck className="w-[30%] h-[30%]"/>
                  <MdCheck className="w-[30%] h-[30%]"/>
                </div>
                <div className="flex flex-col justify-between">
                  <p className="mt-[6%]">Language assistance</p>
                  <p>Wheelchair-accessible parking lot</p>
                  <p className="mb-[6%]">Washroom</p>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="m-6 md:m-8 lg:mt-12 lg:mb-8">
          
          {/* MAIN SCREEN */}
          <div className="flex-row justify-between gap-4 mx-8 w-[95vw] lg:w-[70vw]" style={{display: mainScreen ? "flex": "none"}}>
            <Button onClick={toServices}> Services </Button>
            <Button onClick={toLocation}> Location </Button>
            <Button onClick={toAboutus}> About Us </Button>
            <Button> Contact </Button>
          </div>

          {/* SERVICES SCREEN */}
          <div className={`${servicesScreen === 1 ? "block": "hidden"}`}>
            <BackButton onClick={fromServices}> Back </BackButton>
          </div>

          {/* LOCATION SCREEN */}
          <div className={`${locationScreen === 1 ? "block": "hidden"}`}>
            <BackButton onClick={fromLocation}> Back </BackButton>
          </div>

          {/* ABOUT US SCREEN */}
          <div className={`${aboutusScreen === 1 ? "block": "hidden"}`}>
            <BackButton onClick={fromAboutus}> Back </BackButton>
          </div>

        </div>

      </div>

    </main>
  )
}
