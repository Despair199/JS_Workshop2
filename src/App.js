import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function App() {
  return (
    <div className="App">
      <div className="NavBar1">
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </div>
      <div style={{display: 'flex', justifyContent:'center', marginBottom:'350px'}} className="Cards">
      <Card style={{ width: '18rem', backgroundColor:'#9F8C76' }}>
      <Card.Img variant="top" src="https://i0.wp.com/www.iconvsicon.com/wp-content/uploads/2021/05/Old-Movie-2021-featured.jpg?fit=1200%2C859&ssl=1" width={500} height={300}/>
      <Card.Body>
        <Card.Title>Old</Card.Title>
        <Card.Text>
        Old is a 2021 American horror thriller film written, directed, and produced by M. Night Shyamalan. It is based on the French-language Swiss graphic novel Sandcastle by Pierre Oscar Lévy and Frederik Peeters. The film features an ensemble cast consisting of Gael García Bernal, Vicky Krieps, Rufus Sewell, Alex Wolff, Thomasin McKenzie, Abbey Lee, Nikki Amuka-Bird, Ken Leung, Eliza Scanlen, Aaron Pierre, Embeth Davidtz, and Emun Elliott. The plot follows a group of people who find themselves aging rapidly on a secluded beach.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor:'#9F8C76' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP._HQBBA2knPXSCejRmDVuHAHaK-?pid=ImgDet&rs=1" width={500} height={300}/>
      <Card.Body>
        <Card.Title>Tau</Card.Title>
        <Card.Text>
        Tau is a 2018 science fiction thriller film directed by Federico D'Alessandro from a screenplay by Noga Landau. It stars Maika Monroe, Ed Skrein, and Gary Oldman. It was released on June 28, 2018, by Netflix.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor:'#9F8C76'  }}>
      <Card.Img variant="top" src="https://i2-prod.walesonline.co.uk/incoming/article27217941.ece/ALTERNATES/s1200c/0_FzHMhVMaMAAjKhW.jpg" width={500} height={300}/>
      <Card.Body>
        <Card.Title>DELETE</Card.Title>
        <Card.Text>
        Questions that challenge the dark side of the mind It is possible in the real world when there is a mysterious mobile phone that can press to remove people to disappear. Then fell into the hands of a group of people who have a complex relationship that each person hides secrets to bring everyone to meet unexpected stories that may change their lives without deleting. Who should stay? Who should be gone? And who is the referee?
        </Card.Text>
      </Card.Body>
    </Card>
      </div>

    </div>
  );
}

export default App;
