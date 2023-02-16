import axios from 'axios'
import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'



const AddProduct = ({ history }) => {


    // const [title, setTitle] = useState('')
    // const [price, setPrice] = useState(0)
    // const [description, setDescription] = useState('')
    // const [published, setPublished] = useState(true)
    const [image, setImage] = useState('')

    const addProductHandler = async (e) => {

        e.preventDefault()

        // const data = {
        //     title: title,
        //     price: price,
        //     description: description,
        //     published: published
        // }


        const formData = new FormData()

        formData.append('image', image)

        await axios.post('/api/products/addProduct', formData)
        history.push('/products')
    
    }



    return (
        <>
            <Container className='mt-5 p-2'>
                <h1>Add Product Image</h1>
                <hr />

                <Form onSubmit={addProductHandler} method="POST" encType='multipart/form-data'>

                <Form.Group controlId="fileName" className="mb-3">
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control
                        type="file"
                        name='image'
                        onChange={(e) => setImage(e.target.files[0])}
                        size="lg" />
                </Form.Group>

                  


                    <Button variant="primary" type="submit">
                        Add Product Image
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default AddProduct
