import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProducCard = () => {
  return (
    <div>

    <div>
      <h4 style={{fontFamily : "Sterling", textAlign : "center"}} >Collares Destacados</h4>
      <br />
    </div>

    <div style={{display: "grid", gridTemplateColumns: " repeat(4, 1fr)"}}>
     <Card style={{ width: '18rem', fontFamily : "Sterling" }}>
      <Card.Img variant="top" src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-solestependant-60572852_1023221_ED.jpg?defaultImage=NoImageAvailableInternal&fmt=webp" />
      <Card.Body>
        <Card.Title>Pendant</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem', fontFamily : "Sterling" }}>
      <Card.Img variant="top" src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-knotpendant-73017262_1056979_ED.jpg?defaultImage=NoImageAvailableInternal&fmt=webp" />
      <Card.Body>
        <Card.Title>Pendant</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', fontFamily : "Sterling" }}>
      <Card.Img variant="top" src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-solitaire-diamond-pendant-30420837_1036474_ED.jpg?defaultImage=NoImageAvailableInternal&fmt=webp" />
      <Card.Body>
        <Card.Title>Pendant</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', fontFamily : "Sterling" }}>
      <Card.Img variant="top" src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-hardwearlarge-double-link-pendant-63104345_999443_ED.jpg?defaultImage=NoImageAvailableInternal&fmt=webp" />
      <Card.Body>
        <Card.Title>Pendant</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    
  )
}

export default ProducCard
