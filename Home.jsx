function Home() {

  return (

    <div

      // Main Container Styles

      style={{

        // Align all text to center
        textAlign: "center",

        // Top-Bottom = 120px
        // Left-Right = 20px
        padding: "120px 20px",

        // Light orange background color
        backgroundColor: "#fff8f3"

      }}

    >

      <h1

        style={{

          // Large text size
          fontSize:
            window.innerWidth <= 768 ? "35px" : "60px", // Desktop

          // Orange text color
          color: "#ff6b00",

          // Space below heading
          marginBottom: "20px"

        }}

      >

        Fresh Food, Fast Delivery 🚀

      </h1>

      <p

        style={{

          // Font size changes based on screen size
          fontSize:
            window.innerWidth <= 768
              ? "16px" // Mobile
              : "22px", // Desktop

          // Text color
          color: "gray",

          // Maximum width of paragraph
          maxWidth: "700px",

          // Centers paragraph horizontally
          margin: "auto",

          // Space between lines
          lineHeight:
            window.innerWidth <= 768
              ? "28px"
              : "35px",

          // Space below paragraph
          marginBottom: "30px"

        }}

      >

        Discover mouth-watering dishes prepared with fresh ingredients and delivered
        straight to your doorstep with love and care.

      </p>

      <button

        style={{

          // Button background color
          backgroundColor: "#ff6b00",

          // Text color
          color: "white",

          // Removes default border
          border: "none",

          // Internal spacing
          padding: "15px 35px",

          // Rounded corners
          borderRadius: "10px",

          // Hand cursor on hover
          cursor: "pointer",

          // Text size
          fontSize: "18px",

          // Bold text
          fontWeight: "bold",

          // Mobile button width
          width:
            window.innerWidth <= 768
              ? "250px"
              : "auto"

        }}

      >

        Order Now

      </button>

    </div>

  )

}

export default Home