import React, { useState, useEffect } from 'react'
import axios from 'axios';
import * as ReactBootStrap from "react-bootstrap";
import { Link } from 'react-router-dom'
import Button from '@restart/ui/esm/Button'
import './App.css';

function ProductList() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProductsData = async () => {
            const { data } = await axios.get('/api/products/allProducts')
            console.log(data)
            setProducts(data)
        }
        getProductsData()
    }, [])

    return (
      <div className="allcontent">
        <div className="instruction"> 
            <div>
              <h1>See All Your Data</h1>
              <h3>And, Please use this instruction To access backend</h3>
              <p>1. To Add Data to Database please use  
                    <Link to={'/addProduct'}>
                        <Button className='bt'>THIS TEXT</Button>
                    </Link> 
              </p>
              <p>2. To See All Database File please use  
                      <Link to={'/products'}>
                        <Button className='bt'>THIS TEXT</Button>
                    </Link> 
              </p>
            </div>
        </div>
        <ReactBootStrap.Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>File Size</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.size}</td>
                <td>{item.createdAt}</td>
              </tr>
            ))}
        </tbody>
      </ReactBootStrap.Table>
      </div>
    );
  }


export default ProductList


