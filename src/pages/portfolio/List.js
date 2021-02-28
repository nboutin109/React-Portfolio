import React from "react";
import { Container, Card, Button, Row } from "react-bootstrap";
import proj1 from "./images/Capture1.PNG";
import proj2 from "./images/notes.PNG";
import proj3 from "./images/Capture30.png";
import proj4 from "./images/Capture4.PNG";
import proj5 from "./images/Capture6.PNG";
import proj6 from "./images/Capture18.PNG";
import proj7 from "./images/Fitness.PNG";
import proj8 from "./images/Planner.PNG";
import proj9 from "./images/PWGEN.PNG";
import Wrapper from "../../support/Wrapper/index";

function portfolio() {
  return (
    <div>
      <Container>
        <Row>
          <h1 style={{ paddingTop: '1rem', paddingLeft: '1rem' }}>Samples from github</h1>
        </Row>
        <Row>
          <Wrapper>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={proj1} style={{ paddingTop: '1rem', width: '285px', height: '200px' }} />
              <Card.Body>
                <Card.Title>Javascript Quiz</Card.Title>
                <Card.Text>
                  A Javascript quiz with a timer that also keeps the users' score, made with jQuery.
              </Card.Text>
                <Button variant="primary" href='https://github.com/nboutin109/Javascript-knowledge-quiz' target="_blank" rel="noopener noreferrer">View code</Button>
                <Button variant="primary" style={{ float: 'right', backgroundColor: 'green' }} href='https://nboutin109.github.io/Javascript-knowledge-quiz/' target="_blank" rel="noopener noreferrer">Live site</Button>
              </Card.Body>
            </Card>
          </Wrapper>
          <Wrapper>
            <Card style={{ width: '18rem', }}>
              <Card.Img variant="top" src={proj2} style={{ paddingTop: '1rem', width: '285px', height: '200px' }} />
              <Card.Body>
                <Card.Title>Express note application</Card.Title>
                <Card.Text>
                  An application made with Node and Express which allows the user to take, delete, and save notes.
              </Card.Text>
                <Button variant="primary" href='https://github.com/nboutin109/Express-Notetaker' target="_blank" rel="noopener noreferrer">View code</Button>
                <Button variant="primary" style={{ float: 'right', backgroundColor: 'green' }} href='https://express-notetaker-app109.herokuapp.com/notes' target="_blank" rel="noopener noreferrer">Live site</Button>
              </Card.Body>
            </Card>
          </Wrapper>
          <Wrapper>
            <Card style={{ width: '18rem'}}>
              <Card.Img variant="top" src={proj3} style={{ paddingTop: '1rem', width: '285px', height: '200px' }} />
              <Card.Body>
                <Card.Title>Stock tracker</Card.Title>
                <Card.Text>
                  A webpage which can display stock information and news for searched companies using API calls.
              </Card.Text>
                <Button variant="primary" href= 'https://github.com/nboutin109/Stock-and-news-tracker' target="_blank" rel="noopener noreferrer">View code</Button>
                <Button variant="primary" style={{ float: 'right', backgroundColor: 'green' }} href=' https://stock-and-news-tracker.herokuapp.com/' target="_blank" rel="noopener noreferrer">Live site</Button>
              </Card.Body>
            </Card>
          </Wrapper>
        </Row>
        <Row>
          <Wrapper>
            <Card style={{ width: '18rem', }}>
              <Card.Img variant="top" src={proj4} style={{ paddingTop: '1rem', width: '285px', height: '200px' }} />
              <Card.Body>
                <Card.Title>MySQL workplace manager</Card.Title>
                <Card.Text>
                  A CLI application which allows one to manage a workplace by adding and removing employees and their details from a database.
              </Card.Text>
                <Button variant="primary" href='https://github.com/nboutin109/MySQL-employee-manager' target="_blank" rel="noopener noreferrer">View code</Button>
              </Card.Body>
            </Card>
          </Wrapper>
          <Wrapper>
            <Card style={{ width: '18rem', }}>
              <Card.Img variant="top" src={proj5} style={{ paddingTop: '1rem', width: '285px', height: '200px' }} />
              <Card.Body>
                <Card.Title>Weather forecast</Card.Title>
                <Card.Text>
                  A webpage which can show a 5-day forecast for a searched city using AJAX and information from outside websites.
              </Card.Text>
                <Button variant="primary" href='https://github.com/nboutin109/Weather-forecast-API' target="_blank">View code</Button>
                <Button variant="primary" style={{ float: 'right', backgroundColor: 'green' }} href='https://nboutin109.github.io/Weather-forecast-API/' target="_blank" rel="noopener noreferrer">Live site</Button>
              </Card.Body>
            </Card>
          </Wrapper>
          <Wrapper>
            <Card style={{ width: '18rem', }}>
              <Card.Img variant="top" src={proj6} style={{ paddingTop: '1rem', width: '285px', height: '200px' }} />
              <Card.Body>
                <Card.Title>Budget Tracker</Card.Title>
                <Card.Text>
                  A webpage app which keeps track of a user's inputted debits and credits on a graph, also caches data for offline use.
              </Card.Text>
                <Button variant="primary" href='https://github.com/nboutin109/Budget-tracker' target="_blank" rel="noopener noreferrer">View code</Button>
              </Card.Body>
            </Card>
          </Wrapper>
        </Row>
        <Row>
          <Wrapper>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={proj7} style={{ paddingTop: '1rem', width: '285px', height: '200px' }} />
              <Card.Body>
                <Card.Title>Fitness tracker</Card.Title>
                <Card.Text>
                  A fitness tracking app which allows the user to input their workouts and view past ones via a Mongo Database.
              </Card.Text>
                <Button variant="primary" href='https://github.com/nboutin109/Fitness-Tracker' target="_blank" rel="noopener noreferrer">View Code</Button>
              </Card.Body>
            </Card>
          </Wrapper>
          <Wrapper>
            <Card style={{ width: '18rem'}}>
              <Card.Img variant="top" src={proj8} style={{ paddingTop: '1rem', width: '285px', height: '200px' }} />
              <Card.Body>
                <Card.Title>Day planner app</Card.Title>
                <Card.Text>
                  A day planner application which allows events to be scheduled for working hours and keeps time.
              </Card.Text>
                <Button variant="primary" href='https://github.com/nboutin109/Day-planner' target="_blank" rel="noopener noreferrer">View code</Button>
                <Button variant="primary" style={{ float: 'right', backgroundColor: 'green' }} href='https://nboutin109.github.io/Day-planner/' target="_blank" rel="noopener noreferrer">Live site</Button>
              </Card.Body>
            </Card>
          </Wrapper>
          <Wrapper>
            <Card style={{ width: '18rem', }}>
              <Card.Img variant="top" src={proj9} style={{ paddingTop: '1rem', width: '285px', height: '200px' }} />
              <Card.Body>
                <Card.Title>Password Generator</Card.Title>
                <Card.Text>
                  A webpage which generates a password to the user's specification.
              </Card.Text>
                <Button variant="primary" href='https://github.com/nboutin109/Javascript-password-generator' target="_blank" rel="noopener noreferrer">View code</Button>
                <Button variant="primary" style={{ float: 'right', backgroundColor: 'green' }} href='https://nboutin109.github.io/Javascript-password-generator/' target="_blank" rel="noopener noreferrer">Live site</Button>
              </Card.Body>
            </Card>
          </Wrapper>
        </Row>
      </Container>
    </div>
  );
}

export default portfolio;