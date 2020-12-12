import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

export default function NavBar() {
    return (
        <header className="bg-gradient-to-r from-purple-500 via-blue-400 to-blue-500 ...">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact activeClassName="text-white" className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                        <a href="#home">
                            <img class="h-20 w-100" src="https://lh3.googleusercontent.com/proxy/7O_46lJx_kYbQrcRHL_F_FMq9g61-QUbOwOww3JInwHNpc-QgzDzT_sdXCICFZFZyQaC85WUJAvHf_pygttJqGEo0LrIAntBurvK1h0ymfk6xKDK1BZaFM7JNA" alt=""/>
                        </a>
                    </NavLink>

                    <NavLink to="/post" activeClassName="text-white bg-black" className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-gray-500">
                         Skills
                    </NavLink>

                    <NavLink to="/project" activeClassName="text-white bg-black"  className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-gray-500">
                         Projects
                    </NavLink>

                    <NavLink to="/about" activeClassName="text-white bg-black"  className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-gray-500">
                          About
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                   <SocialIcon 
                   url="https://twitter.com/Keliph1" 
                   className="mr-4" 
                   target="_blank" 
                   fgColor="#fff" 
                   style={{ height: 35, width: 35 }} />

                   <SocialIcon 
                   url="https://www.youtube.com/channel/UCBsx7aE1m5SrlWW46sNU-OA?view_as=subscriber" 
                   className="mr-4" 
                   target="_blank" 
                   fgColor="#fff" 
                   style={{ height: 35, width: 35 }} />

                   <SocialIcon 
                   url="https://github.com/Yusafzai" 
                   className="mr-4" 
                   target="_blank" 
                   fgColor="#fff" 
                   style={{ height: 35, width: 35 }} />
                   
                   <SocialIcon 
                   url="https://www.instagram.com/itsyusafzai/" 
                   className="mr-4" 
                   target="_blank" 
                   fgColor="#fff" 
                   style={{ height: 35, width: 35 }} />
                   
                   <SocialIcon 
                   url="https://www.linkedin.com/in/itsyusfzai/" 
                   className="mr-4" 
                   target="_blank" 
                   fgColor="#fff" 
                   style={{ height: 35, width: 35 }} />
                </div>
            </div>
        </header>
    );
}