import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Footer from './Layout/Footer'
import Header from './Layout/Header'
import HomeScreen from "./Screen/HomeScreen"
export class Dasboard extends Component {
    render() {
        return (
            <div>
        
                <main className="py-5">
                    <Container>
                    <HomeScreen />
                    </Container>
                </main>
      
            </div>
        )
    }
}

export default Dasboard
