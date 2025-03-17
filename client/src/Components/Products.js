import { Container, Row, Col, Button, Input, Table } from "reactstrap";
//import the useSelector from react-readux ***** 4.A
import { useSelector, useDispatch } from "react-redux";

const Products = () => {
  //Declare a variable to store the current value of the producs state from the Redux store (in inspact ) **** 4.B
  const productList = useSelector((state) => state.product.value);

  return (
    <Container>
      <p className="display-6">Shopping</p>
      <Row>
        <Col md={6}>
          {/*Use the array map method to display the values from the state */}
          <table className="table">
            <thead></thead>

            <tbody>
              {productList.map((prod) => (
                <tr key={id}>
                  <td>{prod.id}</td>
                  <td>{prod.title}</td>
                  <td>{prod.price}</td>
                  <td>{<img src={prod.images} className="img-big" />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
