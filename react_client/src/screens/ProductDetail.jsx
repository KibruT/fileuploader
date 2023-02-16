import React, { useEffect, useState } from 'react'
import {Card, Button, Container, Row, Col} from 'react-bootstrap'
import { useHistory, useParams } from 'react-router'
import axios from 'axios'


const ProductDetail = () => {

    const { id } = useParams()
    const history = useHistory()
    const [productImage, setProductImage] = useState('')
    useEffect(() => {

        const getSingleProductData = async () => {
            const { data } = await axios.get(`/api/products/getProductReviews/${id}`)
            console.log(data)
            setProductImage(data.image)
        }
        getSingleProductData()

    },[id])

    // handling Delete
    const handleDelete = async (id) => {
        await axios.delete(`/api/products/${id}`)
        history.push('/products')
    }

    return (
        <>
        <Container className="mt-10 p-4">
        <h1 className="text-center">Image Preview</h1>
        <hr />

        <Row>
            <Col md={8} lg={8} sm={8}>
                <Card className='shadow-lg m-3 p-2 rounded'>
                        <Card.Img src={`http://localhost:3000/${productImage}`} fluid />
                        <Card.Body>
                             <Button className="btn btn-danger m-2" onClick={() => handleDelete(id)}>Delete</Button> 
                        </Card.Body>        
                </Card>
            </Col>
        </Row>
        </Container>

        </>
    )
}

export default ProductDetail
