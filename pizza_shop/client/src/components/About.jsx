import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";


const About = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>Who we are</h1>
        <p>
        At PIZZA_SHOP, we've redefined the art of pizza-making. Our passion for crafting exceptional pizzas using only the finest ingredients is matched only by our commitment to customer satisfaction. From traditional classics to avant-garde creations, each pizza is a symphony of flavors that tantalizes your taste buds. With quick, reliable delivery and a dedicated team, we ensure that every slice arrives piping hot, ready to be savored. Join us on a journey where every pizza tells a story, and every bite is an adventure. Welcome to PIZZA_SHOP - where pizza isn't just food; it's an experience.
        </p>
        <h1>Our Speciality</h1>
        <Row>
          <Col md={6}>
            <p> <b>Signature Pizzas:</b>
             Highlight a selection of signature pizzas that are unique to your shop. These could be inspired by local flavors, international cuisines, or creative combinations that set your shop apart.
            </p>
            <p><b>Fresh and Local Ingredients:</b>
             Emphasize your commitment to using fresh, locally-sourced ingredients. Mention specific local farms or suppliers you work with to showcase the quality and freshness of your pizzas.
            </p>
            <p><b>Customization:</b>
             Offer a wide range of customizable options, allowing customers to build their own pizzas with a variety of crusts, sauces, and toppings. This personalization sets you apart and caters to diverse tastes.
            </p>
          </Col>
          <Col md={6}>
            <p>
            <b>Health-Conscious Choices:</b> Cater to health-conscious customers with options like cauliflower crusts, vegan cheeses, and a variety of vegetable toppings. Mention any health benefits of these choices.
            </p>
            <p><b>Delivery and Online Ordering:</b>
             Highlight the convenience of your online ordering system and prompt delivery service. Offer exclusive discounts for online orders to incentivize customers to order through your website or app.
            </p>
            <p><b>Customer Reviews:</b>
             Showcase positive reviews and testimonials from satisfied customers on your website or social media. This social proof can build trust and encourage new customers to try your pizzas.
            </p>
          </Col>
        </Row>
        <Row>
          <h1>Our Chef</h1>
          <Col md={3}>
            <div className="image-container">
                <Image
                    src="images/shef1.jpg"
                    style={{ width: "40%", height: "40%" }}
                />
             </div>
            <h4>Gourmet Maestro - Chef Alessandro</h4>
            Meet Chef Alessandro, our culinary visionary. With a background in Michelin-starred restaurants, he brings an artistic touch to every dish. His gourmet pizzas are crafted with a blend of exotic ingredients and traditional flavors, resulting in a symphony of taste that's simply divine.
          </Col>
          <Col md={3}>
            <Image
              src="images/shef2.jpg"
              style={{ width: "40%", height: "40%" }}
            />
            <h4>The Pizza Perfectionist - Chef Mia</h4>
            Chef Mia's obsession with perfection shines through in every pizza she creates. Her meticulous attention to detail and dedication to using the freshest, locally-sourced ingredients ensures that each pizza is a masterpiece. Expect a slice of pizza heaven in every bite.
          </Col>
          <Col md={3}>
          <Image
              src="images/shef3.jpg"
              style={{ width: "40%", height: "40%" }}
            />
            <h4>Flavor Alchemist - Chef Santiago</h4>
            Chef Santiago is a true flavor magician. His passion for experimenting with unique combinations and international influences is what sets his pizzas apart. From bold, spicy creations to harmonious vegetarian delights, Chef Santiago's pizzas are a voyage of culinary discovery.
          </Col>
          <Col md={3}>
          <Image
              src="images/shef4.jpg"
              style={{ width: "40%", height: "40%" }}
            />
            <h4>The Traditionalist - Nonna Gina</h4>
            Nonna Gina, our beloved grandmotherly figure, is the heart and soul of our pizzeria. Her time-honored family recipes have been passed down for generations. With a dash of nostalgia and a whole lot of love, she creates classic, rustic pizzas that warm your heart and fill your belly.
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;