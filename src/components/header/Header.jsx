import React, {useRef} from "react"
import './Header.css'

import { Container } from 'reactstrap';

const navLinks = [
    {
        display: 'Home',
        url: '#'
    },
    {
        display: 'About',
        url: '#'
    },
    {
        display: 'Menu',
        url: '#'
    },
    {
        display: 'Recipes',
        url: '#'
    },
    {
        display: 'Contact',
        url: '#'
    }
]

const Header = () => {

        const menuRef = useRef()

        const menuToggle = ()=> menuRef.current.ClassList.toggle('active__menu')

  return (
       <header className="header">
            <Container>
                <div className="navigation">
                    <div className="logo">
                        <h2 className="d-flex align-items-center gap-1">
                            <span><i className="ri-restaurant-fill"></i></span>{""} Restaurant Menu Example 
                        </h2>

                    </div>
                    <div className="nav__menu"  ref={menuRef}>
                        <div className="nav__list__wrapper d-flex align-items-center gap-5">
                        <ul className="nav__list">
                            {
                                navLinks.map((item,index)=>(
                                    <li className="nav__item" key={index}><a href={item.url} onClick={menuToggle}>{item.display}</a></li>
                                   
                                ))
                            }

                           
                           

                        </ul>
                        <div className="menu__right">
                            <div className="custom__search">
                                <input type="text" placeholder='search item....' />
                                <span><i class="ri-search-line"></i>
                                </span>
                            </div>
                          </div>
                        </div>
                     </div>

                                <span className="cart__icon">
                                <i class="ri-shopping-basket-line"></i>    
                                <span className="badge">2</span>
                                </span>

                        
                            <div className="mobile__menu">
                                <span><i class="ri-menu-line" onClick={menuToggle}></i></span>
                            </div>

                </div>


            </Container>

       </header>
  )
}

export default Header