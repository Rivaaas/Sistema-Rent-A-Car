import React from 'react'

import { Button, Card } from 'react-bootstrap';

import styled from 'styled-components';

import ImgCar from '../IMG/3.jpg'



const Cards = styled.div`
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
    display: flex;
    margin-top: 1rem;
   
`;

const Fila = styled.div`
    margin-top: 3rem;
    
`;

const Cars = () => {
    return (
        <>

            <Cards>
                <div className='row'>
                    <div className='col'>
                        <Card style={{ width: '17rem'}}>
                            <Card.Img variant="top" src={ImgCar} />
                            <Card.Body>
                                <Card.Title>{"AUTO"}</Card.Title>
                                <Card.Text>
                                    {"DescripcionDeAuto"}
                                </Card.Text>
                                <Button variant="primary">Precios</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                        <Card style={{ width: '17rem' }}>
                            <Card.Img variant="top" src={ImgCar} />
                            <Card.Body>
                                <Card.Title>{"AUTO"}</Card.Title>
                                <Card.Text>
                                    {"DescripcionDeAuto"}
                                </Card.Text>
                                <Button variant="primary">Precios</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                        <Card style={{ width: '17rem' }}>
                            <Card.Img variant="top" src={ImgCar} />
                            <Card.Body>
                                <Card.Title>{"AUTO"}</Card.Title>
                                <Card.Text>
                                    {"DescripcionDeAuto"}
                                </Card.Text>
                                <Button variant="primary">Precios</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                        <Card style={{ width: '17rem' }}>
                            <Card.Img variant="top" src={ImgCar} />
                            <Card.Body>
                                <Card.Title>{"AUTO"}</Card.Title>
                                <Card.Text>
                                    {"DescripcionDeAuto"}
                                </Card.Text>
                                <Button variant="primary">Precios</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <Fila>
                        <div className='row'>
                            <div className='col'>
                                <Card style={{ width: '17rem' }}>
                                    <Card.Img variant="top" src={ImgCar} />
                                    <Card.Body>
                                        <Card.Title>{"AUTO"}</Card.Title>
                                        <Card.Text>
                                            {"DescripcionDeAuto"}
                                        </Card.Text>
                                        <Button variant="primary">Precios</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='col'>
                                <Card style={{ width: '17rem' }}>
                                    <Card.Img variant="top" src={ImgCar} />
                                    <Card.Body>
                                        <Card.Title>{"AUTO"}</Card.Title>
                                        <Card.Text>
                                            {"DescripcionDeAuto"}
                                        </Card.Text>
                                        <Button variant="primary">Precios</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='col'>
                                <Card style={{ width: '17rem' }}>
                                    <Card.Img variant="top" src={ImgCar} />
                                    <Card.Body>
                                        <Card.Title>{"AUTO"}</Card.Title>
                                        <Card.Text>
                                            {"DescripcionDeAuto"}
                                        </Card.Text>
                                        <Button variant="primary">Precios</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='col'>
                                <Card style={{ width: '17rem' }}>
                                    <Card.Img variant="top" src={ImgCar} />
                                    <Card.Body>
                                        <Card.Title>{"AUTO"}</Card.Title>
                                        <Card.Text>
                                            {"DescripcionDeAuto"}
                                        </Card.Text>
                                        <Button variant="primary">Precios</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </Fila>
                </div>
            </Cards>
        </>
    )
}

export default Cars
