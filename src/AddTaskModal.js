import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button, Label, Input, Row, Col} from 'reactstrap';

function AddTaskModal(props) {
    const {addNewTask} = props
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [newTitle, setNewTitle] = useState('')
    const [newPriority, setNewPriority] = useState(0)
    const [newStatus, setNewStatus] = useState("todo")

    const addNewTaskToBoard = () => {
        addNewTask(newTitle, newPriority, newStatus)
        setIsModalOpen(false)
        setNewTitle('')
        setNewPriority(0)
        setNewStatus("todo")
    }

    return (
        <>
            <Button color="info" size="lg" onClick={() => setIsModalOpen(true)}>Add NEW TASK</Button>
            <Modal isOpen={isModalOpen}>
                <ModalHeader>Add new task</ModalHeader>
                <ModalBody>
                    <Label>New Title</Label>
                    <Input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>
                    <Row>
                        <Col>
                            <Label>Priority</Label>
                            <Input type="select" value={newPriority} onChange={e => setNewPriority(e.target.value)}>
                                <option value={0}>Low</option>
                                <option value={1}>Medium</option>
                                <option value={2}>High</option>
                            </Input>
                        </Col>

                        <Col>
                            <Label>Status</Label>
                            <Input type="select" value={newStatus} onChange={e => setNewStatus(e.target.value)}>
                                <option value={"todo"}>To do</option>
                                <option value={"progress"}>In progress</option>
                                <option value={"review"}>Need review</option>
                                <option value={"done"}>Done</option>
                            </Input>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={addNewTaskToBoard}>Add NEW</Button>
                    {' '}
                    <Button onClick={() => setIsModalOpen(false)}>Cancel </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default AddTaskModal;
