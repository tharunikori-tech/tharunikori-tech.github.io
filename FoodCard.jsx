// FoodCard Component
function FoodCard({ food }) {

  return (

    <div style={styles.card}>

      {/* Food Image */}

      <img
        src={food.image}
        alt={food.name}
        style={styles.image}
      />

      {/* Food Name */}

      <h2>
        {food.name}
      </h2>

      {/* Food Description */}

      <p>
        {food.description}
      </p>

      {/* Food Price */}

      <h3>
        {food.price}
      </h3>

      {/* Button */}

      <button style={styles.button}>
        Add To Cart
      </button>

    </div>
    

  )

}

const styles = {

  card: {

    width: "280px",

    padding: "20px",

    backgroundColor: "white",

    borderRadius: "15px",

    boxShadow: "0px 0px 10px gray",

    textAlign: "center",

    transition: "0.3s",

    cursor: "pointer"

  },

  image: {

    width: "100%",

    height: "220px",

    objectFit: "cover",

    borderRadius: "10px"

  },

  button: {

    backgroundColor: "#ff6b00",

    color: "white",

    border: "none",

    padding: "12px 20px",

    borderRadius: "10px",

    cursor: "pointer",

    marginTop: "10px"

  }

}

export default FoodCard