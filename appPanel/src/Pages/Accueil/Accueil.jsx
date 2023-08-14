import React from 'react'
import Navbar from '../../Componants/Navbar/Navbar'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";


import { BiLogoFacebook } from "react-icons/bi";

import "./acceuil.css"
import imgsocial from "../../assets/hashtag-vertical-paris-revolution.svg";

import Footer from '../../Componants/Footer/Footer';
const Accueil = () => {
    return (<>
        <Navbar />
        <div className='body-card'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-12 col-lg-8'>
                        <h1>
                            SUR LES TRACES DE LA RÉVOLUTION À PARIS
                        </h1>
                        <div class="row ">
                            <div class="col-sm-6 text-[17px]">
                                <p className='pb-3'>La Ville de Paris vous propose de parcourir le Paris de la Révolution française à travers les traces encore visibles et les nombreux symboles de cette période, tournant majeur dans l’histoire de France et de la capitale.</p>
                                <a href='#' className='hidden text-rouge_fonce md:inline-flex'><p>En savoir plus</p> <HiOutlineArrowNarrowRight size={20} className='pt-1 block align-middle' /></a>
                            </div>
                            <div class="col-sm-6 text-[17px] ">
                                <p className='pb-3'>Le Parcours Révolution vous emmènera à la découverte de 16 quartiers et plus de 120 lieux liés à cette époque fondatrice et aux grandes figures, célèbres ou parfois oubliées, qui en ont fait l’histoire.</p>
                            </div>
                            <a href='#' className='text-rouge_fonce inline-flex md:hidden'><p>En savoir plus</p> <HiOutlineArrowNarrowRight size={20} className='pt-1 block align-middle' /></a>
                        </div>

                    </div>

                    <div className=' col-lg-4 col-xl-4 d-sm-flex d-lg-flex img-ap'>
                        <div className='card-recherche hidden md:block'>
                            <h4>Recherche</h4>
                            <hr />
                            <div className="form-groupe-search">
                                <label for="search"> Que recherchez vous ?</label>
                                <input id="search" type="text" placeholder='Thématique, lieu, événements...' />
                            </div>
                            <div className="form-groupe-search">
                                <label for="hist"> pesonnage historique</label>
                                <input type="text" id="hist" placeholder='Olympes de Gouges, Robespierre...' />
                            </div>
                            <div className="form-groupe-search">
                                <label> periode</label>
                                <div class="dates">

                                    <div class="checkboite">
                                        <label for="1789">
                                            <input type="checkbox" value="1789" id="1789" />
                                            <span>1789</span>
                                        </label>
                                    </div>
                                    <div class="checkboite">
                                        <label for="1790">
                                            <input type="checkbox" value="1790" id="1790" />
                                            <span>1790</span>
                                        </label>
                                    </div>
                                    <div class="checkboite">
                                        <label for="1791">
                                            <input type="checkbox" value="1791" id="1791" />
                                            <span>1791</span>
                                        </label>
                                    </div>
                                    <div class="checkboite">
                                        <label for="1792">
                                            <input type="checkbox" value="1792" id="1792" />
                                            <span>1792</span>
                                        </label>
                                    </div>
                                    <div class="checkboite">
                                        <label for="1793">
                                            <input type="checkbox" value="1793" id="1793" />
                                            <span>1793</span>
                                        </label>
                                    </div>
                                    <div class="checkboite">
                                        <label for="1794">
                                            <input type="checkbox" value="1794" id="1794" />
                                            <span>1794</span>
                                        </label>
                                    </div>
                                    <div class="checkboite">
                                        <label for="1795">
                                            <input type="checkbox" value="1795" id="1795" />
                                            <span>1795</span>
                                        </label>
                                    </div>

                                    <div class="checkboite">
                                        <label for="1799">
                                            <input type="checkbox" value="1799" id="1799" />
                                            <span>1799</span>
                                        </label>
                                    </div>

                                </div>
                            </div>
                            <div className='form-groupe-search'>
                                <button>Rechercher</button>
                            </div>

                        </div>
                    </div>


                </div>
                
                <div className='sectionmap '>
                    <div className='map-discover '>
                        <h2>
                            Découvrir
                        </h2>
                        <span className='text-rouge_fonce'>
                            16 quartiers, 121 points d'intérêt
                        </span>
                        <div className='map'>
                            <iframe className='map pt-3' width="110%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Quartier%20Bastille+(Bastille)&amp;t=p&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            </iframe>
                        </div>
                    </div>
                </div>
                <div className='card-body'>
                    <div className='card-content '>
                        <div className='flex justify-between'>
                            <div>
                                <h2>
                                    Quartiers
                                </h2>
                                <span className='text-rouge_fonce'>
                                    Loreum ipsum dolor sit amet
                                </span>
                            </div>
                            <div className='links'>
                                <div className=''>
                                    <a href="#" className='hidden md:flex text-rouge_fonce text-[12px]'>
                                        Voir tous les quartiers <HiOutlineArrowNarrowRight size={20} className=' flex' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='block md:flex justify-between'>
                            <div className='card-i'>
                                <div className='card-item'>
                                    <span className='text-rouge_fonce uppercase text-[10px]'>
                                        11 points d'intérêt
                                    </span>
                                    <h5 >
                                        la bastille &  le faubourg st antoine
                                    </h5>
                                </div>
                            </div>
                            <div className='card-i'>
                                <div className='card-item'>
                                    <span className='text-rouge_fonce uppercase text-[10px]'>
                                        11 points d'intérêt
                                    </span>
                                    <h5 >
                                        la bastille &  le faubourg st antoine
                                    </h5>
                                </div>
                            </div>
                            <div className='card-i'>
                                <div className='card-item'>
                                    <span className='text-rouge_fonce uppercase text-[10px]'>
                                        11 points d'intérêt
                                    </span>
                                    <h5 >
                                        la bastille &  le faubourg st antoine
                                    </h5>
                                </div>
                            </div>

                        </div>
                        <div className=''>
                                    <a href="#" className='flex md:hidden text-rouge_fonce py-6 text-[12px]'>
                                        Voir tous les quartiers <HiOutlineArrowNarrowRight size={20} className=' flex' />
                                    </a>
                                </div>
                    </div>
                    <div className='card-content '>
                        <div className='flex justify-between'>
                            <div>
                                <h2>
                                    Personnages
                                </h2>
                                <span className='text-rouge_fonce'>
                                    Loreum ipsum dolor sit amet
                                </span>
                            </div>
                            <div className='links'>
                                <div className=''>
                                    <a href="#" className=' hidden md:flex text-rouge_fonce text-[12px]'>
                                        Voir tous les personnages <HiOutlineArrowNarrowRight size={20} className=' flex' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='block md:flex justify-between'>
                            <div className='card-i'>
                                <div className='card-item-perso'>
                                    <span className='text-rouge_fonce uppercase text-[10px]'>
                                        11 points d'intérêt
                                    </span>
                                    <h5 >
                                        la bastille &  le faubourg st antoine
                                    </h5>
                                </div>
                            </div>
                            <div className='card-i'>
                                <div className='card-item-perso'>
                                    <span className='text-rouge_fonce uppercase text-[10px]'>
                                        11 points d'intérêt
                                    </span>
                                    <h5 >
                                        la bastille &  le faubourg st antoine
                                    </h5>
                                </div>
                            </div>
                            <div className='card-i'>
                                <div className='card-item-perso'>
                                    <span className='text-rouge_fonce uppercase text-[10px]'>
                                        11 points d'intérêt
                                    </span>
                                    <h5 >
                                        la bastille &  le faubourg st antoine
                                    </h5>
                                </div>
                            </div>

                        </div>
                        <div className=''>
                            <a href="#" className=' flex md:hidden text-rouge_fonce py-6 text-[12px]'>
                                Voir tous les personnages <HiOutlineArrowNarrowRight size={20} className=' flex' />
                            </a>
                        </div>
                    </div>
                    <div className='card-content  pb-6'>

                        <div className='flex justify-between'>
                            <div>
                                <h2>
                                    Le Bulletin Citoyen de Parcour Révolution
                                </h2>
                                <span className='text-rouge_fonce'>
                                    Actualités & informations
                                </span>
                            </div>
                            <div className='links'>
                                <div className=''>
                                    <a href="#" className=' hidden md:flex text-rouge_fonce text-[12px]'>
                                        Voir toute l'actualité <HiOutlineArrowNarrowRight size={20} className=' flex' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='block md:flex justify-between'>

                                <div className='card-i'>
                                    <div className='col'>
                                        <div className='card-item-bul'>
                                            <h5 >
                                                Titre d'acualtié sur une ou deux lignes, soyons bref !
                                            </h5>
                                            <span className='  text-[10px]'>
                                                Loreum ipsum dolor sit amet Loreum ipsum dolor sit amet Loreum ipsum dolor sit amet Loreum ipsum dolor sit amet
                                            </span>
                                            <span className=' uppercase text-[10px]'>
                                                publié le 6 mai 2020
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className='card-i'>
                                    <div className='col'>
                                        <div className='card-item-bul'>
                                            <h5 >
                                                Titre d'acualtié sur une ou deux lignes, soyons bref !
                                            </h5>
                                            <span className='  text-[10px]'>
                                                Loreum ipsum dolor sit amet Loreum ipsum dolor sit amet Loreum ipsum dolor sit amet Loreum ipsum dolor sit amet
                                            </span>
                                            <span className=' uppercase text-[10px]'>
                                                publié le 6 mai 2020
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className='card-i'>
                                    <div className='col'>
                                        <div className='card-item-bul'>
                                            <h5 >
                                                Titre d'acualtié sur une ou deux lignes, soyons bref !
                                            </h5>
                                            <span className='  text-[10px]'>
                                                Loreum ipsum dolor sit amet Loreum ipsum dolor sit amet Loreum ipsum dolor sit amet Loreum ipsum dolor sit amet
                                            </span>
                                            <span className=' uppercase text-[10px]'>
                                                publié le 6 mai 2020
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                

                            </div>
                            <div className=''>
                                    <a href="#" className=' flex md:hidden py-6 text-rouge_fonce text-[12px]'>
                                        Voir toute l'actualité <HiOutlineArrowNarrowRight size={20} className=' flex' />
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
            <div className='social hidden md:flex'>
                <img src={imgsocial} loading="lazy" alt='Parcours révolution' />
                <div className='separ'></div>
                <a href='#'><BiLogoFacebook size={20} /></a>
                <a href='#'><AiFillYoutube size={20} /></a>
                <a href='#'><AiOutlineInstagram size={20} /></a>
            </div>
        </div>

    </>

    )
}

export default Accueil