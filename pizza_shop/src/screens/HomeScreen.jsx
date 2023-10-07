import React from "react";
import AllPizza from "../pizza-data";
import { Container, Row, Col } from "react-bootstrap";
import Pizza from "../components/Pizza";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllPizzas } from "../actions/pizzaAction";
// import Loader from "../components/Loader";
// import Error from "../components/Error";
// import Filters from "../components/Filters";


const HomeScreen = () => {
  return (
    <>
    <Container>
      <Row>
        {AllPizza. map((pizza) =>(
          <Col md={4}>
            <Pizza pizza={pizza}></Pizza>
          </Col>

        ))}
      </Row>
    </Container>
    </>
  )
};
export default HomeScreen;
