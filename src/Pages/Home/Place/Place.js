
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Place.css'

const Place = (props) => {
    
    const { _id, name, description, price, days, img, person } = props.place;



    return (
        // show all place data

        <CardGroup>


            <Card className="places" id="places">
                <div className="col">
                    <Card.Img variant="top" src={img} />
                    <div className="layer">
                        <Link className="h3" to={`/detail/${_id}`}>Book {name.toLowerCase()}</Link>
                    </div>
                </div>
                <Card.Body>
                    <Card.Title >
                        <h3>{name}</h3>

                    </Card.Title>

                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        <h5 className="price"><i class="fas fa-rupee-sign"></i> {price}</h5>

                    </Card.Text>


                </Card.Body>
                <Card.Footer className="footer">
                    <h4 className="mx-3 text-primary"><i class="far fa-user"></i> {person}</h4>
                    <h4 className="text-warning"><i class="fas fa-user-clock"></i> {days}</h4>
                </Card.Footer>

            </Card>
        </CardGroup>


    );
};

export default Place;
