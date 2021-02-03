import React from "react";
import {Container, Col, Card, Button, Row} from "react-bootstrap";
import proj1 from "./images/Capture2.PNG";
import proj2 from "./images/Capture.PNG";
import proj3 from "./images/Capture30.png";
import proj4 from "./images/Capture4.PNG";
import proj5 from "./images/Capture18.PNG";
import proj6 from "./images/Capturex.PNG";
import Wrapper from "../../support/Wrapper/index"

function portfolio() {
  return (
    <div>
      <Container>
        <Col xs="auto">
          <Row>
          <h1 style={{ paddingTop: '1rem', paddingLeft: '1rem'}}>Samples from github</h1>
          </Row>
          <Row>
            <Wrapper>
          <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={proj1} style={{ paddingTop: '1rem', width: '285px', height: '200px'}} />
            <Card.Body>
              <Card.Title>Daily weather memes</Card.Title>
              <Card.Text>
                A group project webpage which returns weather for a searched area and returns results along with a matching Gif
              </Card.Text>
              <Button variant="primary">View on Github</Button>
            </Card.Body>
          </Card>
          </Wrapper>
          <Wrapper>
          <Card style={{ width: '18rem',  }}>
            <Card.Img variant="top" src={proj2} style={{ paddingTop: '1rem', width: '285px', height: '200px'}} />
            <Card.Body>
              <Card.Title>Insert later</Card.Title>
              <Card.Text>
                xxx
              </Card.Text>
              <Button variant="primary">View on Github</Button>
            </Card.Body>
          </Card>
          </Wrapper>
          <Wrapper>
          <Card style={{ width: '18rem',  }}>
            <Card.Img variant="top" src={proj3} style={{ paddingTop: '1rem', width: '285px', height: '200px'}} />
            <Card.Body>
              <Card.Title>Stock tracker</Card.Title>
              <Card.Text>
                A group project webpage which searches for stocks and returns the latest numbers/company news.
              </Card.Text>
              <Button variant="primary">View on Github</Button>
            </Card.Body>
          </Card>
          </Wrapper>
          </Row>
          <Row>
          <Wrapper>
          <Card style={{ width: '18rem',  }}>
            <Card.Img variant="top" src={proj4} style={{ paddingTop: '1rem', width: '285px', height: '200px'}} />
            <Card.Body>
              <Card.Title>MySQL workplace manager</Card.Title>
              <Card.Text>
                A CLI application which allows one to manage a workplace by adding and removing employees and their details from a database.
              </Card.Text>
              <Button variant="primary">View on Github</Button>
            </Card.Body>
          </Card>
          </Wrapper>
          <Wrapper>
          <Card style={{ width: '18rem',  }}>
            <Card.Img variant="top" src={proj5} style={{ paddingTop: '1rem', width: '285px', height: '200px'}} />
            <Card.Body>
              <Card.Title>Account tracker</Card.Title>
              <Card.Text>
                A webpage which can add and subtract numbers to show a current balance on a graph.
              </Card.Text>
              <Button variant="primary">View on Github</Button>
            </Card.Body>
          </Card>
          </Wrapper>
          <Wrapper>
          <Card style={{ width: '18rem',  }}>
            <Card.Img variant="top" src={proj6} style={{ paddingTop: '1rem', width: '285px', height: '200px'}} />
            <Card.Body>
              <Card.Title>Fitness Tracker</Card.Title>
              <Card.Text>
                A webpage which can keep track of a user's past workouts using a mongo database and schemas
              </Card.Text>
              <Button variant="primary">View on Github</Button>
            </Card.Body>
          </Card>
          </Wrapper>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default portfolio;