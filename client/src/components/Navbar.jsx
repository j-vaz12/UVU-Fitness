import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";


const CustomNavbar = () => {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} to="/">
        <img src="https://i.imgur.com/ghMNBUT.png" className="mr-3 h-6 sm:h-9" alt="UVU Fitness Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">UVU-FITNESS</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button as={Link} to="/schedule">Schedule Now</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink as={Link} to="/" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} to="/about">
          About Me
        </NavbarLink>
        <NavbarLink as={Link} to="/testimonials">
          Testimonials
        </NavbarLink>
        <NavbarLink as={Link} to="/pricing">
          Pricing
        </NavbarLink>
        <NavbarLink as={Link} to="/contact">
          Socials and Contacts
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default CustomNavbar;
