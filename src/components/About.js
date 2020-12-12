import React from "react";
import tom from "../tom.jpg";


export default function About() {


  return (
    <main className="relative bg-black">
      <img
        src={tom}
        alt="tom background"
        className="absolute w-full"
      />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
         
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-green-300 mb-4">
              Hey there. I'm Gefahr a React Developer That is really hardworking and passionate about his work. I want to learn more and achieve more in my work field and I want to get hired as a full time Developer and show the company what i am capable of.
            </h1>
           
          </div>
        </section>
      </div>
    </main>
  );
}