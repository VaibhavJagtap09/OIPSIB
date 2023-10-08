import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>PIZZA_SHOP</h1>
            <p>
            Craving the perfect pizza experience? Look no further! PIZZA_SHOP is your ticket to pizza paradise, where taste meets temptation. Our menu is a symphony of flavors, boasting an enticing array of pizzas that will tantalize your taste buds and leave you craving for more. Whether you're a fan of classic Margheritas, bold gourmet creations, or something in between, we've got the pizza that's sure to become your new obsession.</p><p>
            Our shop offers Easy Ordering, Speedy Delivery, Top-Notch Quality, Customer-Centric,Exclusive Deals etc.So, if you're ready to elevate your pizza game, look no further than PIZZA_SHOP. Join us today and discover why we're not just any pizza place – we're your new pizza obsession!
            </p>

            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    --- Contact Details ---
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>0123-456789</td>
                </tr>
                <tr>
                  <td>
                    <ImMobile />
                  </td>
                  <td>Call</td>
                  <td>1234567890</td>
                </tr>
                <tr>
                  <td>
                    <AiOutlineMail />
                  </td>
                  <td>Email</td>
                  <td>Help@urdomain.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="images/pizzashop.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;