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
                                <Button className='buttonMenu' variant="primary">Entrar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                        <Card style={{ width: '18rem', height: '250px' }}>
                            <Card.Body>
                                <Card.Title>Contrato</Card.Title>
                                <Card.Text>
                                    Generar un contrato desde 0
                                </Card.Text>
                                <Button className='buttonMenu' variant="primary">Entrar</Button>
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
                                <div className='btn'>
                                    <Button className='buttonMenu' variant="primary">Entrar</Button>
                                </div>

                            </Card.Body>
                        </Card>
                    </div>
                </div>

                <Margen>

                    <div className='row'>
                        <div className='col'>
                            <div className='col'>
                                <Card style={{ width: '18rem', height: '250px' }}>
                                    <Card.Body>
                                        <Card.Title>Contratos Activos</Card.Title>
                                        <Card.Text>
                                            Podras ver todos los contratos que estan activos, en detalle.
                                        </Card.Text>
                                        <Button className='buttonMenu' variant="primary">Entrar</Button>
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
                                        <Button className='buttonMenu' variant="primary">Entrar</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='col'>
                                <Card style={{ width: '18rem', height: '250px' }}>
                                    <Card.Body>
                                        <Card.Title>Estadisticas</Card.Title>
                                        <Card.Text>
                                            Estadisticas de las ganancias, perdidas, etc.
                                        </Card.Text>
                                        <Button className='buttonMenu' variant="primary">Entrar</Button>
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
