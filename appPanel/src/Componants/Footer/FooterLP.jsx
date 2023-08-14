import React from 'react'
import "./footer.css"
const FooterLP = () => {
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

    <div className='footer-LP'>
      <div className='container'>
        <div
          className="  md:min-h-fit  left-[1000%]   w-full flex items-center ">
          <ul className="  flex text-[11px] text-white    gap-2   pt-24 pb-12">
            {menu.map((menus) => (

              <li>
                <a key={menus.name} id={menus.name} className="footerlien" href={menus.link}>{menus.name}</a>
              </li>

            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FooterLP