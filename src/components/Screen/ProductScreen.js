import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {Row, Col, ListGroup, Button, Card} from 'react-bootstrap'
import Rating from "../Layout/Rating"
import products from "../DummyData/Product"

export class ProductScreen extends Component {
    

    render() {
       const getProduct =({match})=> {
            const product = products.map((p) => p.id == match.params.id);
                 
            console.log(this.product);
        }
   
        return (
            <div>
                {getProduct}
            
            </div>
        )
    }
}

export default ProductScreen
