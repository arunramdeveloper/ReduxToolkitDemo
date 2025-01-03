import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { remove } from '../store/CartSlice';
import { useSelector, useDispatch } from 'react-redux'
export default function Cart() {
  const products = useSelector(state =>state.cart);
  const dispatch = useDispatch();

  const removeToCart = (id)=> {
       dispatch(remove(id));
  }
  const cards = products.map((product) => (
    <div className="col-md-3" style={{marginBottom:'20px', marginTop: '20px' }} >
      <Card key={product.id} className="h-100" >
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
         
        </Card.Body>
        <Card.Footer>
            <Button variant="primary" onClick={()=>removeToCart(product.id)}  >Remove item</Button>
        </Card.Footer>
      </Card>
    </div>
  ));


    return (
     <>
       <div className='row'>
             {cards}
       </div>
    </>
  )
}
