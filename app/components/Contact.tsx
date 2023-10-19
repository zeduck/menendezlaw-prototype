'use client';

import ContactForm from "./ContactForm";

export default function Contact() {

  return (
    <div className="hero-content flex flex-row justify-between items-stretch w-full text-white">

      <div className="hero-content flex-col w-full items-stretch flex-[1] p-0 justify-start">
        <div>
          <h1 className="text-[4vh] font-bold text-left mb-[75%]"> Contact </h1>
        </div>

        <div className="card w-auto bg-secondary-focus text-secondary-content shadow-xl">
          <div className="card-body">
            <h2 className="card-title mb-[1vh] text-[2vh]">Contact</h2>
            <div className="flex flex-col justify-evenly gap-2">
              <a className="link link-hover text-secondary-content text-[1.5vh]">example@email.com</a> 
              <a className="link link-hover text-secondary-content text-[1.5vh]">+1 613 860 8998</a>

            </div>
          </div>
        </div>
      </div>

      <ContactForm/>

    </div>
    
  );
}
