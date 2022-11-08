import React from 'react'

import {Container, Row, Col} from 'reactstrap'
import ProductCard from '../product-card/ProductCard'
import { fastFoodProducts, riceMenuProducts, pizzaProducts, dessertProducts, CoffeeProducts } from '../../assets/fake-data/products'
import './menu-pack.css'


const MenuPack = () => {
  return <section>
        <Container>
           <Row>
            <Col lg='12' className='text-center mb-5'><h3>Our Menu Pack</h3></Col>
            <Col lg='12' className='text-center mb-4'>
                <button className="btn">Fast Food</button>
                <button className="btn">Rice Menu</button>
                <button className="btn">Pizza</button>
                <button className="btn">Desserts</button>
                <button className="btn">Coffee</button>
            </Col>

            {
                fastFoodProducts.map(item=>(
                        <Col lg='3' key={item.id}> <ProductCard item={item} /> </Col>
                ))

            
            }

           </Row>
        </Container>
  </section>
}

export default MenuPack