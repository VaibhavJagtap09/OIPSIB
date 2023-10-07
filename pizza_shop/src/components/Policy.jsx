import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Policy = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>Terms and policy</h1>
        <Row>
          <Col md={10}>
            <h6>
            Ordering and Payment:
            </h6>
            <p>
            All orders must be placed through our official website, mobile app, or in-person at our physical location.
Payment can be made using the provided online payment options or in cash upon delivery/pickup.
Prices are subject to change without notice.
            </p>
            <h6>
            Delivery:
            </h6>
            <p>
            We aim to deliver orders promptly within the specified delivery area. Delivery times may vary depending on demand.
Customers are responsible for providing accurate delivery details. We will not be held responsible for late or undelivered orders due to inaccurate information.
Delivery charges may apply and will be clearly communicated during the ordering process.    
            </p>
            <h6>
            Pickup:
            </h6>
            <p>
            Customers selecting the pickup option are responsible for collecting their orders at the specified pickup location and time. We are not responsible for orders left uncollected.
            </p>
            <h6>
            Order Changes and Cancellations:
            </h6>
            <p>
            Changes or cancellations to orders must be made at least  20 minutes before the scheduled delivery or pickup time.
Orders canceled after the specified time may incur charges.
            </p>
            <h6>
            Quality Assurance:
            </h6>
            <p>
            We take pride in the quality of our pizzas and ingredients. If you are dissatisfied with your order, please contact us immediately, and we will do our best to resolve the issue.
            </p>
            <h6>
            Allergies and Dietary Restrictions:
            </h6>
            <p>
            Customers with allergies or dietary restrictions are responsible for reviewing our menu and ingredient information to make informed choices. We cannot guarantee a completely allergen-free environment.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Policy;