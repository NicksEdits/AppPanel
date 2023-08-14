import React, { useState } from 'react'
import logo1 from "../../assets/logo-parcours-revolution.png"
import logo2 from "../../assets/logo-paris.svg"
import logo3 from "../../assets/logo-paris-white.svg";
import logo4 from "../../assets/logo-parcours-revolution-white.svg";
import img1 from  "../../assets/icon-pin.svg"
import img2 from  "../../assets/icon-phrygian-cap.svg"
import img3 from  "../../assets/icon-chronology.svg"

import "./navbar.css"
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [open, setOpen] = useState(false);


    const menu = [
        {
            id: "1",
            name: "Découvrir",
            text1: "16 quartiers, 121 points d'intérêt",
            img:img1,
            link: "/decouvrir"
        },
        {
            id: "2",
            name: "Personnages",
            text1: "Les figures de la Révolution",
            img:img2,
            link: "/personnages"
        },
        {
            id: "3",
            name: "Chronologie",
            text1: "Petit rappel temporel",
            img:img3,
            link: "/chronologie"
        },
        {
            id: "4",
            name: " À propos",
            
            link: "/a-propos"
        },
        {
            id: "5",
            name: " Télécharger l'App'",
            link: "/telecharger-lapp"
        },
    ];
    return (
        <header className='header'>
            <nav className="  boold  items-center   mx-auto">
                <div className='container'>
                    <div className='main-header  justify-between md:flex hidden'>
                        <a href="/Acceuil" className='cursor-pointer flex'>
                            <img className="w-24 " src={logo2} alt="" title='' loading='eager' />
                            <div className='separator'></div>
                            <img className="w-32 " src={logo1} alt="" title='' loading='eager' />
                        </a>

                        <div
                            className="nav-links duration-500 md:static absolute  md:min-h-fit  md:w-auto  w-full flex items-center px-5">
                            <ul className="  flex md:text-[11px]  xl:text-[13px]   md:flex-row  flex-col md:items-center md:gap-[2vw] gap-8">
                                {menu.map((menus) => (

                                    <li>
                                        <div className="">



                                        </div>
                                        <a key={menus.name} id={menus.name} className={`${menus.id == "5" ? "lienBtn" : "lien  "}`} href={menus.link}>{menus.name}</a>
                                    </li>

                                ))}
                            </ul>

                        </div>
                        <div className='selector inline-flex'>
                            <div class="dropdown">
                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Francais
                                </a>

                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item selected" href="#">francais</a></li>
                                    <li><a class="dropdown-item" href="#">English</a></li>
                                    <li><a class="dropdown-item" href="#">Deutch </a></li>
                                    <li><a class="dropdown-item" href="#">Spanish</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='main-header-mob mb-3 flex  justify-between md:hidden'>
                    <div className='flex text-white pt-2'>
                        <div onClick={() => { setOpen(!open); }}>
                            <RxHamburgerMenu size={30} className={`${open ? "hidden" : "cursor-pointer ml-2 inline-flex"}`} />
                            <RxCross2 size={30} className={`${open ? "ml-2 inline-flex cursor-pointer" : "hidden"}`} />
                        </div>

                    </div>
                    <div className='flex'>
                        <a href="/Acceuil" className='cursor-pointer flex'>
                            <img className="w-24 " src={logo3} alt="" title='' loading='eager' />
                            <div className='separator'></div>
                            <img className="w-32 " src={logo4} alt="" title='' loading='eager' />
                        </a>
                    </div>
                    <div className='flex text-white pt-2'>
                        f
                    </div>
                </div>
                <ul className={`md:hidden  duration-500 ${open ? "  w-full  anvanimmob selected   " : " w-full anvanimob"}`}>
                    {menu.slice(0,3).map((menus) => (
                        <li className='py-3 flex px-6'>
                            <img src={menus.img} className="img-menu"/>
                            <a key={menus.name} className={`text-global pl-3 text-[15px]`} href={menus.link}> <p className='font-bold'>{menus.name}</p> <p className='text-rouge_fonce'>{menus.text1}</p> </a>
                        </li>

                    ))}
                 <hr/>
                     {menu.slice(3,4).map((menus) => (
                    <li className='py-3 flex px-6'>
                            <a key={menus.name} className={`text-global pl-3 text-[19px]`} href={menus.link}> <p className='font-bold'>{menus.name}</p> <p className='text-rouge_fonce'>{menus.text1}</p> </a>
                        </li>
                     ))}
                     </ul>


            </nav>



        </header>
    )
}

export default Navbar