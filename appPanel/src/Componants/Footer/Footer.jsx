import React from 'react'
import logo2 from "../../assets/logo-paris-white.svg";
import logo1 from "../../assets/logo-parcours-revolution-white.svg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import plusloin from "../../assets/icon-book.svg"
import pedago from "../../assets/icon-cap.svg"
import imgappli from "../../assets/applicationfooter.png"
import playstore from "../../assets/google-play-fr.png"
import appstore from "../../assets/app-store.svg"

import "./footer.css"
const Footer = () => {
    const menu = [
        {
            id: "1",
            name: "Mentions légales",
            link: "/"
        },
        {
            id: "2",
            name: "Politique de confidentialité",
            link: "/personnages"
        },
        {
            id: "3",
            name: "Ville de Paris",
            link: "/nos-services"
        },

    ];
    return (

        <div className='footer'>
            <div className='container'>
                <div className='row'>

                    <div className='col'>
                        <div className='block md:flex '>
                            <div className='col'>
                                <div className='footer-box'>
                                    <div className='row'>
                                        <div className='col-lg-10 col-sm-12'>
                                            <img src={plusloin} loading="lazy" className="pb-2 w-6" />
                                            <span className='title-loin'>
                                                Pour aller plus loin
                                            </span>
                                            <p className='text-loin'>
                                                Loreum ipsum dolor sit amet Loreum ipsum dolor sit amet Loreum ipsum dolor sit amet Loreum ipsum dolor sit amet
                                            </p>
                                        </div>
                                        <div className='col arrow'>
                                            <HiOutlineArrowNarrowRight size={20} className='text-rouge_fonce' />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='col'>
                            <div className='footer-box'>
                                <div className='row'>

                                    <img src={pedago} loading="lazy" className="pb-2 w-16" />
                                    <span className='title-peda'>
                                        Ressources pédagogique
                                    </span>
                                    <p className='text-peda'>
                                        Prochainement Loreum ipsum dolor sit amet Loreum ipsum dolor sit amet Loreum ipsum dolor sit amet Loreum ipsum dolor sit amet
                                    </p>


                                </div>

                            </div>
                            </div>
                        </div>
                        <div className="  md:min-h-fit  left-[1000%]  hidden md:flex w-full  items-center ">
                            <ul className="  footer-link text-[11px] text-white gap-16 pt-12 pb-12">
                                <li>
                                    <a href="/Acceuil" className='cursor-pointer flex '>
                                        <img className="w-24 " src={logo2} alt="Logo Paris " title='' loading='lazy' />
                                        <div className='separator'></div>
                                        <img className="w-32 " src={logo1} alt=" Logo Parcours révolution" title='' loading='lazy' />
                                    </a></li>
                                {menu.map((menus) => (

                                    <li>
                                        <a key={menus.name} id={menus.name} className="footerlien" href={menus.link}>{menus.name}</a>
                                    </li>

                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='col app'>
                        <div className='row'>
                            <div className='col'>
                                <img src={imgappli} loading="lazy" alt="télécharger l'application" />
                            </div>

                            <div className='col'>
                                <div className='dl-app'>
                                    <p className='text-white'>Télécharger l'application !</p>
                                    <a href='#'>
                                        <img src={appstore} loading="lazy" alt="télécharger l'application sur l'app store" />
                                    </a>
                                    <a href='#'>
                                        <img src={playstore} loading="lazy" alt="télécharger l'application sur le google store" />
                                    </a>

                                </div>
                            </div>
                            <div className="  md:min-h-fit  left-[1000%]  block md:hidden w-full  items-center ">
                            <ul className=" text-[11px] text-white  pt-12 pb-12">
                                <li>
                                    <a href="/Acceuil" className='cursor-pointer flex '>
                                        <img className="w-24 " src={logo2} alt="Logo Paris " title='' loading='lazy' />
                                        <div className='separator'></div>
                                        <img className="w-32 " src={logo1} alt=" Logo Parcours révolution" title='' loading='lazy' />
                                    </a></li>
                                {menu.map((menus) => (

                                    <li>
                                        <a key={menus.name} id={menus.name} className="py-3" href={menus.link}>{menus.name}</a>
                                    </li>

                                ))}
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer