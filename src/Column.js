import React from 'react';
import {Col, Toast, ToastHeader, ToastBody} from 'reactstrap';
import Task from "./Task";

function Column(props) {
    const {tasks, column, changeTaskStatus, deleteTask} = props


    return (
        <div>
            <Col>
                <div className="p-3 my-2 rounded">
                    <Toast>
                        <ToastHeader>
                            {column.title}
                        </ToastHeader>
                        <ToastBody>
                            {tasks.filter(el => el.status === column.status)
                                .sort((a, b) => b.priority - a.priority)
                                .map(el =>
                                    <Task
                                        task={el}
                                        changeTaskStatus={changeTaskStatus}
                                        deleteTask={deleteTask}
                                    />
                                )}
                        </ToastBody>
                    </Toast>
                </div>

            </Col>
        </div>
    );
}

export default Column;
