// Import useState Hook from React
// useState is used to create and manage state variables
import { useState } from "react"

// Import External CSS File
// All navbar styling is written inside Navbar.css
import "./Navbar.css"

// Navbar Functional Component
function Navbar() {

  // Create State Variable
  // menuOpen = stores menu status (true/false)
  // setMenuOpen = updates menuOpen value
  const [menuOpen, setMenuOpen] = useState(false)

  // Function Used For Smooth Scrolling
  // Receives section id as parameter
  const scrollToSection = (id) => {

    // Find HTML Element Using ID
    const section =
      document.getElementById(id)   

    // Check Whether Section Exists
    if (section) {

      // Smoothly Scroll To Selected Section
      section.scrollIntoView({

        behavior: "smooth"

      })

    }

    // Close Mobile Menu After Clicking Menu Item
    setMenuOpen(false)

  }

  // JSX UI Starts Here
  return (

    // Main Navbar Container
    <div className="navbar">

      {/* Website Logo */}

      <h1

        // Apply CSS Class
        className="logo"

        // When Logo Is Clicked
        // Scroll To Home Section
        onClick={() =>
          scrollToSection("Home")
        }

      >

        {/* Logo Text */}
        Foodie

      </h1>

      {/* Navigation Menu Container */}

      <div

        // Conditional Class
        // If menuOpen = true
        // Class becomes "menu active"
        // Otherwise only "menu"

        className={

          menuOpen
            ? "menu active"
            : "menu"

        }

      >

        {/* Home Menu */}

        <p

          onClick={() =>
            scrollToSection("Home")
          }

        >

          Home

        </p >

        {/* About Menu */}

        <p onClick={() => scrollToSection("menu")}>

          Menu

        </p>

        {/* Services Menu */}

        <p onClick={() => scrollToSection("Offers")}>

          Offers

        </p>

        <p onClick={() => scrollToSection("WhyChooseUs")}>

          WhyChooseUs

        </p>

        {/* Contact Menu */}

        <p onClick={() => scrollToSection("Reviews")}>

          Reviews

        </p>

      </div>

      {/* Mobile Menu Icon */}

      <div

        className="menuIcon"

        // Toggle Menu State
        // If true → false
        // If false → true

        onClick={() =>

          setMenuOpen(!menuOpen)

        }

      >

        {/* Hamburger Icon */}
        ☰

      </div>

    </div>

  )

}

// Export Component
// Allows App.jsx To Use Navbar Component
export default Navbar