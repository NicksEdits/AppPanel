import { useState } from 'react';
import FooterLP from '../../Componants/Footer/FooterLP';
import Navbar from '../../Componants/Navbar/Navbar';
import imgappli from "../../assets/application.png";
import { BiLogoFacebook } from "react-icons/bi";
import "./landingPage.css"


import imgsocial from "../../assets/hashtag-vertical-paris-revolution.svg";

function LandingPage() {

  return (
    <>
      <div className='landingpage'>
        <Navbar />
        {/* <div className='text-global bread'>
        <a className='lienBread' href='/'>Acceuil</a> {'>'} <a className='lienBread' href='#'> la basille &  le faubourg st antoine </a> {'>'} <a className='lienBread text-rouge' href='#' > la bastille</a> 
      </div> */}
        <div className='home-page'>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-12 col-lg-8'>
                <h1>
                  SUR LES TRACES DE LA RÉVOLUTION À PARIS
                </h1>
                <div class="row ">
                  <div class="col-sm-6 text-[17px]">
                    <p className='pb-3'>La Ville de Paris vous propose de parcourir le Paris de la Révolution française à travers les traces encore visibles et les nombreux symboles de cette période, tournant majeur dans l’histoire de France et de la capitale.</p>
                    <p className='pb-3'>Le Parcours Révolution vous emmènera à la découverte de 16 quartiers et plus de 120 lieux liés à cette époque fondatrice et aux grandes figures, célèbres ou parfois oubliées, qui en ont fait l’histoire.</p>
                    <p>Site en ligne prochainement</p>
                  </div>
                  <div class="col-sm-6 text-[17px] lp-english">
                    <p className='pb-3'>The City of Paris invites you to explore Paris of the French Revolution through the traces still visible and the many symbols of this period, a major turning point in the history of France and the capital.</p>
                    <p className='pb-3'>The Revolution route will take you to discover 16 districts and more than 120 places linked to this turbulent era and the great figures, famous or sometimes forgotten, which made their history.</p>
                    <p>Site online soone</p>
                  </div>
                  <div className='container-info '>
                    <p className='info'>
                      Soyez informé de la sortie de l'application
                    </p>
                    <label>
                      Votre adresse Email
                    </label>
                    <div className='flex justify-center'>

                      <input type="email" placeholder="exemple@fournisseur.fr" />
                      <button> Valider</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-xl-4 d-sm-flex d-lg-flex img-app'>
                <img src={imgappli} loading="lazy" alt="Image de l'application"/>
              </div>
            </div>

          </div>
        </div>
        <FooterLP />
        <div className='social'>
          <img src={imgsocial} loading="lazy" alt='Parcours révolution'/>
          <div className='separ'></div>
          <BiLogoFacebook size={20} />
        </div>
      </div>
    </>
  )
}

export default LandingPage
