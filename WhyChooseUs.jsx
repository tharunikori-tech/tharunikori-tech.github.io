function WhyChooseUs() {

  const features = [

    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "Quick delivery at your doorstep."
    },

    {
      icon: "🍕",
      title: "Fresh Food",
      description: "Prepared with fresh ingredients."
    },

    {
      icon: "⭐",
      title: "Best Quality",
      description: "Premium taste and hygiene."
    },

    {
      icon: "📞",
      title: "24/7 Support",
      description: "Customer support anytime."
    }

  ]

  return (

    <div style={styles.container}>

      <h1 style={styles.heading}>
        Why Choose Foodie? 🍔
      </h1>

      <p style={styles.text}>
        We provide the best food experience with quality and fast delivery.
      </p>

      <div style={styles.cardContainer}>

        {
          features.map((item) => (

            <div style={styles.card}>

              <h1 style={styles.icon}>
                {item.icon}
              </h1>

              <h2>
                {item.title}
              </h2>

              <p>
                {item.description}
              </p>

            </div>

          ))
        }

      </div>

    </div>

  )

}

const styles = {

  container: {
    padding: "60px 20px",
    textAlign: "center",
    backgroundColor: "#ffffff"
  },

  heading: {
    fontSize: window.innerWidth <= 768 ? "35px" : "50px",
    color: "#ff6b00"
  },

  text: {
    color: "gray",
    marginBottom: "40px",
    fontSize: "18px"
  },

  cardContainer: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap"
  },

  card: {
    width: "250px",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0px 0px 10px gray",
    backgroundColor: "#fff8f3"
  },

  icon: {
    fontSize: "50px"
  }

}

export default WhyChooseUs