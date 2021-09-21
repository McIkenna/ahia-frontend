import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'
import products from "../DummyData/Product"
import ProductCard from '../Layout/ProductCard'
 
export class HomeScreen extends Component {
    render() {
        return (
            <div>
                <h1>Latest Products</h1>
                <Row>
                {products.map(product=>(
                    <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                    <ProductCard product={product}/>
                    </Col>
                ))}
                </Row>
                
            </div>
        )
    }
}

export default HomeScreen
