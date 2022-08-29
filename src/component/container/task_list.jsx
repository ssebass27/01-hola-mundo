import React from 'react';
import { LEVELS } from '../../models/level.enum';
import {Task} from '../../models/task.class.js';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Deafult description', false, LEVELS.NORMAL)

    const changeState = (id) => {
        console.log('TODO: Cambiar el estado de una tarea')
    }
    return (
        <div>
            <h1>Your Tasks:</h1>
            {/* TODO: Aplicar un For/Map para renderizar un a lista */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    )
};




export default TaskListComponent;
