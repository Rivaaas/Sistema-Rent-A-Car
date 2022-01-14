import React from 'react'
import { Button, Card } from 'react-bootstrap';
import styled from 'styled-components';




const MenuCard = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3rem;
`;


const Margen = styled.div`
    display: flex;
    margin-top: 5rem;
`;

const Menu = () => {
    return (

        <MenuCard>

            <div className='Container'>
                <div className='row'>
                    <div className='col'>
                        <Card style={{ width: '18rem', height: '250px' }}>
                            <Card.Body>
                                <Card.Title>Catalogo</Card.Title>
                                <Card.Text>
                                    Podras encontrar un catalogo de todos los vehiculos.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                        <Card style={{ width: '18rem' , height: '250px'}}>
                            <Card.Body>
                                <Card.Title>Contrato</Card.Title>
                                <Card.Text>
                                    Generar un contrato desde 0
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                        <Card style={{ width: '18rem', height: '250px' }}>
                            <Card.Body>
                                <Card.Title>Clientes</Card.Title>
                                <Card.Text>
                                    Visualizar los clientes con arriendos activos.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

                <Margen>

                    <div className='row'>
                        <div className='col'>
                            <div className='col'>
                                <Card style={{ width: '18rem' , height: '250px'}}>
                                    <Card.Body>
                                        <Card.Title>Contratos Activos</Card.Title>
                                        <Card.Text>
                                            Podras ver todos los contratos que estan activos, en detalle.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='col'>
                                <Card style={{ width: '18rem', height: '250px' }}>
                                   
                                    <Card.Body>
                                        <Card.Title>Usuarios</Card.Title>
                                        <Card.Text>
                                            "VISTA SOLO PARA ADMIN" Agregar, Eliminar,Editar, O ver todos los
                                            usuarios que estan registrados en el sistema.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='col'>
                                <Card style={{ width: '18rem', height: '250px' }}>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>


                    </div>
                </Margen>


            </div>

        </MenuCard>

    )
}

export default Menu
