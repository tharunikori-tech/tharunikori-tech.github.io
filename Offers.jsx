function Offers() {

  return (

    <div style={styles.container}>

      <h1 style={styles.heading}>
        Special Offers 🔥
      </h1>

      <h2>
        50% OFF On First Order
      </h2>

      <p>
        Free Delivery For New Customers
      </p>

      <button style={styles.button}>
        Order Now
      </button>

    </div>

  )

}

const styles = {

  container: {

    backgroundColor: "#ff6b00",

    color: "white",

    textAlign: "center",

    padding: "60px 20px"

  },

  heading: {

    fontSize:
      window.innerWidth <= 768
        ? "35px"
        : "50px"

  },

  button: {

    marginTop: "20px",

    padding: "15px 30px",

    border: "none",

    borderRadius: "10px",

    backgroundColor: "white",

    color: "#ff6b00",

    fontWeight: "bold",

    cursor: "pointer"

  }

}

export default Offers