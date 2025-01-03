import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/CartSlice";
import { getProducts } from "../store/ProductSlice";

export default function Product() {
  const dispatch = useDispatch();

  const {data:products, status}  = useSelector(state=>state.products)

  //const url = "https://fakestoreapi.com/products";
 // const [products, getProducts] = useState([]);

  useEffect(() => {
    dispatch(getProducts());
   
  }, []);
 // console.log(products);

 if(status === 'loading'){
    return <p>loading</p>
 }

 if(status === 'error'){
    return <p> something went wrong </p>
 }




  const addToCart = (product) =>{
    console.log("clicked add button")
      //dispatch an add action
      dispatch(add(product));

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
            <Button variant="primary" onClick={()=>addToCart(product)}  >Add to Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div>
      <div className="row">{cards}</div>
    </div>
  );
}
