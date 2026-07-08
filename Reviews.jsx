function Reviews() {

  const reviews = [

    {
      name: "Uday",
      review: "Amazing food and quick delivery."
    },

    {
      name: "Ganesh",
      review: "Very tasty and fresh food."
    },

    {
      name: "Pradnya",
      review: "Best food ordering experience."
    }

  ]

  return (

    <div style={styles.container}>

      <h1 style={styles.heading}>
        Customer Reviews ⭐
      </h1>

      <div style={styles.reviewContainer}>

        {

          reviews.map((item) => (

            <div style={styles.card}>

              <h2>
                {item.name}
              </h2>

              <p>
                {item.review}
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

    backgroundColor: "#fff8f3",

    textAlign: "center"

  },

  heading: {

    color: "#ff6b00"

  },

  reviewContainer: {

    display: "flex",

    flexWrap: "wrap",

    justifyContent: "center",

    gap: "20px"

  },

  card: {

    width: "280px",

    padding: "20px",

    backgroundColor: "white",

    borderRadius: "15px",

    boxShadow: "0px 0px 10px gray"

  }

}

export default Reviews