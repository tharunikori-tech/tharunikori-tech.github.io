// Import Swiper Main Component
// Swiper is used to create image sliders

import {
  Swiper,
  SwiperSlide
} from "swiper/react"

// Import Autoplay Module
// Automatically changes slides

import {
  Autoplay
} from "swiper/modules"

// Import Swiper CSS
// Gives default slider styling

import "swiper/css"

// CarouselSlider Component

function CarouselSlider() {

  return (

    // Main Slider

    <Swiper

      // Enable Autoplay Module
      modules={[Autoplay]}

      // Slider Settings
      autoplay={{

        // Change slide every 3 seconds
        delay: 3000,

        // Continue autoplay even after user interaction
        disableOnInteraction: false

      }}

      // Infinite Loop
      loop={true}

      // No Space Between Slides
      spaceBetween={0}

      // Show One Slide At A Time
      slidesPerView={1}

    >

      {/* ==========================
          SLIDE 1
      ========================== */}

      <SwiperSlide>

        <div style={styles.slideContainer}>

          <img

            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"

            alt="food"

            style={styles.image}

          />

          {/* Text Overlay */}

          <div style={styles.overlay}>

            <h1 style={styles.heading}>
              Delicious Food
            </h1>

            <p style={styles.text}>
              Taste the best dishes
            </p>

          </div>

        </div>

      </SwiperSlide>

      {/* ==========================
          SLIDE 2
      ========================== */}

      <SwiperSlide>

        <div style={styles.slideContainer}>

          <img

            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"

            alt="burger"

            style={styles.image}

          />

          <div style={styles.overlay}>

            <h1 style={styles.heading}>
              Fresh Burgers
            </h1>

            <p style={styles.text}>
              Hot and crispy burgers
            </p>

          </div>

        </div>

      </SwiperSlide>

      {/* ==========================
          SLIDE 3
      ========================== */}

      <SwiperSlide>

        <div style={styles.slideContainer}>

          <img

            src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"

            alt="pizza"

            style={styles.image}

          />

          <div style={styles.overlay}>

            <h1 style={styles.heading}>
              Yummy Pizza
            </h1>

            <p style={styles.text}>
              Cheesy and tasty pizza
            </p>

          </div>

        </div>

      </SwiperSlide>

    </Swiper>

  )

}

// Inline CSS Styles

const styles = {

  // Parent Container
  slideContainer: {

    position: "relative"

  },

  // Image Styling
  image: {

    width: "100%",

    height:
      window.innerWidth <= 768
        ? "350px"
        : "700px",

    objectFit: "cover"

  },

  // Overlay Box
  overlay: {

    position: "absolute",

    top: "50%",

    left: "50%",

    transform: "translate(-50%, -50%)",

    color: "white",

    textAlign: "center",

    backgroundColor:
      "rgba(0,0,0,0.5)",

    padding: "20px",

    borderRadius: "15px"

  },

  // Main Heading
  heading: {

    fontSize:
      window.innerWidth <= 768
        ? "28px"
        : "50px",

    marginBottom: "10px"

  },

  // Paragraph
  text: {

    fontSize:
      window.innerWidth <= 768
        ? "14px"
        : "22px"

  }

}

// Export Component

export default CarouselSlider