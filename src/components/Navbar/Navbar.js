import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./Navbar.elements";
import { FaBars, FaTimes } from "react-icons/fa";

import { IconContext } from "react-icons";
import LogoRecy from "../Navbar/LogoRecy.png";



import Contacto from "../Contacto"
import Inicio from "../Inicio"
import Music from "../Music"
import Video from "../video"
import Galeria from "../galeria"
import Productos from "../Productos"

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (

    <Router>
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoContainer>
            <img style={{ width: 80, height: 80 }} src={LogoRecy} alt="Logo" />;
          </LogoContainer>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>
     
            <Menu open={showMobileMenu}> 
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div><Link style={{color: "white", textDecoration: "none"}} to="/">Home</Link></div>
              </MenuItemLink>
            </MenuItem>
 
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div><Link style={{color: "white", textDecoration: "none"}} to="/music">Music</Link></div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <Link style={{color: "white", textDecoration: "none"}} to="/video">Video</Link>
                  </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div><Link style={{color: "white", textDecoration: "none"}} to="/media">Media</Link></div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div><Link style={{color: "white", textDecoration: "none"}} to="/contact">Contact</Link></div>
              </MenuItemLink>
            </MenuItem>
          </Menu>

        </IconContext.Provider>
      </Wrapper>
    </Container>
    <Routes>
    <Route  path="/"  element={<Inicio />} />
    <Route  path="/music"  element={<Music />} />
    <Route  path="/video"  element={<Video />} />
    <Route  path="/media"  element={<Galeria />} />
    <Route  path="/contact"  element={<Contacto />} />
    <Route  path="/shop"  element={<Productos />} />
    </Routes>
    </Router>

  );
};

export default Navbar;
