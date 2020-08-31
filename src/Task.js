import React from 'react';
import {Col, Card, CardBody, Button, CardText, Alert} from 'reactstrap';

function Task(props) {
    const {task, changeTaskStatus, deleteTask} = props

    const alertColors = ['success', 'warning', 'danger'];

    return (
        <div>
            <Col>
                {<Card>
                    <CardBody>
                        <CardText><h5 className="text-info">{task.name}</h5></CardText>
                        <Alert color={alertColors[task.priority]}><h6>Priority</h6>

                            {task.priority !== 2 ?
                                <Button size='sm' outline color="secondary"
                                        onClick={() => changeTaskStatus(task.id, 'up')}>↑</Button>
                                :
                                <Button size='sm' outline color="secondary" disabled>↑</Button>
                            }
                            {' '}

                            {task.priority !== 0 ?
                                <Button size='sm' outline color="secondary"
                                        onClick={() => changeTaskStatus(task.id, 'down')}>↓</Button>
                                :
                                <Button size='sm' outline color="secondary" disabled>↓</Button>
                            }

                        </Alert>
                    </CardBody>
                    <Button size='sm' onClick={() => deleteTask(task.id)}>Delete</Button>
                    <CardBody>

                        {task.status !== 'todo' ?
                            <Button onClick={() => changeTaskStatus(task.id, 'left')}>←</Button>
                            :
                            <Button disabled>←</Button>

                        }
                        <span> </span>
                        {task.status !== 'done' ?
                            <Button onClick={() => changeTaskStatus(task.id, 'right')}>→</Button>
                            :
                            <Button disabled>→</Button>

                        }
                    </CardBody>
                </Card>}
            </Col>
        </div>
    );
}

export default Task;
