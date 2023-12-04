/** @format */

import React, { useState } from "react";
import "./App.css";
import SearchComponent from "./components/SearchComponent";
import ShowCourseComponent from "./components/ShowCourseComponent";
import UserCartComponent from "./components/UserCartComponent";
import DisplayCheckoutPayment from "./components/DisplayCheckoutPayment";
import tshirt from "./tshirt.jpg";
import bag from "./bag.jpg";
import hoodie from "./hoodie.jpg";

import sunglasses from "./sunglasses.jpg";
import watch from "./watch.jpg";
import cap from "./cap.jpg";
import Footer from "./components/Footer";


function App() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "T-shirt",
      price: 49,
      image:
        tshirt,
    },
    {
      id: 2,
      name: "Bag",
      price: 69,
      image:bag,
    },
    {
      id: 3,
      name: "Hoodie",
      price: 99,
      image:hoodie,
    },
    {
      id: 4,
      name: "Watch",
      price: 30,
      image: watch,
    },
    {
      id: 5,
      name: "Sunglasses",
      price: 79,
      image: sunglasses,
    },
    {
      id: 6,
      name: "Cap",
      price: 19,
      image: cap,
    },
  ]);

  const [cartCourses, setCartCourses] = useState([]);
  const [searchCourse, setSearchCourse] = useState("");
  const [isClicked, setIsClicked] = useState(false);


  const addCourseToCartFunction = (GFGcourse) => {
    const alreadyCourses = cartCourses.find(
      (item) => item.product.id === GFGcourse.id
    );
    if (alreadyCourses) {
      const latestCartUpdate = cartCourses.map((item) =>
        item.product.id === GFGcourse.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
      setCartCourses(latestCartUpdate);
    } else {
      setCartCourses([...cartCourses, { product: GFGcourse, quantity: 1 }]);
    }
  };

  const deleteCourseFromCartFunction = (GFGCourse) => {
    const updatedCart = cartCourses.filter(
      (item) => item.product.id !== GFGCourse.id
    );
    setCartCourses(updatedCart);
  };

  const totalAmountCalculationFunction = () => {
    console.log("Hi" + cartCourses.length);
    return cartCourses.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };
  const proceedToPayment = () => { console.log("Test"); return setIsClicked(true) };
  const courseSearchUserFunction = (event) => {
    setSearchCourse(event.target.value);
  };

  const filterCourseFunction = courses.filter((course) =>
    course.name.toLowerCase().includes(searchCourse.toLowerCase())
  );

  return (
    <div className="App">
      <SearchComponent
        searchCourse={searchCourse}
        courseSearchUserFunction={courseSearchUserFunction}
      />
      <main className="App-main">
        <ShowCourseComponent
          courses={courses}
          filterCourseFunction={filterCourseFunction}
          addCourseToCartFunction={addCourseToCartFunction}
        />

        <UserCartComponent
          cartCourses={cartCourses}
          deleteCourseFromCartFunction={deleteCourseFromCartFunction}
          totalAmountCalculationFunction={totalAmountCalculationFunction}
          setCartCourses={setCartCourses}
          proceedToPayment={proceedToPayment}
        />
        <DisplayCheckoutPayment
          cartCourses={cartCourses}
          deleteCourseFromCartFunction={deleteCourseFromCartFunction}
          totalAmountCalculationFunction={totalAmountCalculationFunction}
          setCartCourses={setCartCourses}
          proceedToPayment={proceedToPayment}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
        />
        <Footer />
      </main>
    </div>
  );
}

export default App;
