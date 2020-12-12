import React from "react";
import image from "../white.jpg";


export default function Home() {
    return (
        <main>
            <img src={image} alt="sngpl" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-gray-200 font-bold cursive leading-none lg:leading-snug home-name">Hej, I am Gefahr</h1>
            </section>
        </main>
    )
}