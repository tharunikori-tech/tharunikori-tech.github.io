import Navbar from './components/Navbar'
import Home from './pages/Home'
import CarouselSlider from './components/CarouselSlider'
import FoodCard from './components/foodCard'
import Offers from './components/offers'
import Reviews from './components/reviews'
import Footer from './components/Footer'
import WhyChooseUs from './components/WhyChooseUs'
function App(){
  const foods = [

    {
      id: 1,
      name: "Pizza",
      description: "Cheesy Pizza",
      price: "₹299",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
    },

    {
      id: 2,
      name: "Burger",
      description: "Crispy Burger",
      price: "₹199",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    },

    {
      id: 3,
      name: "Biryani",
      description: "Chicken Biryani",
      price: "₹349",
      image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a"
    },

    {
      id: 4,
      name: "Pasta",
      description: "White Sauce Pasta",
      price: "₹279",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9"
    },

    {
      id: 5,
      name: "Ice Cream",
      description: "Chocolate Ice Cream",
      price: "₹129",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb"
    }

  ]
  return(
    <>
    <Navbar />
    <div style={{marginTop:"55px"}}>
    <CarouselSlider/>

    <div id="Home">
      <Home />
    </div>
    <div id="menu" style={styles.foodSection}>
      <h1 style={styles.heading}>

                  Explore Our Delicious Menu 🍽️

                </h1>
      <div  style={styles.foodContainer}>

          {

            foods.map((food) => (

              <FoodCard

                key={food.id}

                food={food}

              />

            ))

          }

        </div>

    </div>
    

        <div id="Offers">
          <Offers />
        </div>

        <div id="WhyChooseUs">
          <WhyChooseUs />
        </div>

        <div id="Reviews">
          <Reviews />
        </div>

        <div id="Footer">
          <Footer />
        </div>
        
    </div>
    
  </>
  );
}
const styles = {

  foodContainer: {

    display: "flex",

    flexWrap: "wrap",

    justifyContent: "center",

    gap: "20px",

    padding: "50px 20px",

    backgroundColor: "#fff8f3"

  },
  foodSection: {

    padding: "50px 20px",

    backgroundColor: "#fff8f3",

    textAlign: "center"

  },
heading: {

  fontSize:
      window.innerWidth <= 768
        ? "30px"
        : "50px",
   
    color: "#ff6b00",

    marginBottom: "40px"

  }

}
export default App;