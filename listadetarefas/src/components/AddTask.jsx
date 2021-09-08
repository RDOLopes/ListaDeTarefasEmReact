import React, { useState } from 'react';
import './AddTask.css'

import Button from './Button';

const AddTask = ({handleTaskAddition}) => {
   const [inputData, setInputData] = useState('');
   const handleInputChange = (e) => {
        setInputData(e.target.value);
   }

const handleTaskAddClick = () => {
    handleTaskAddition(inputData)
}

    return (  
        <div className="add-task-container">
            <input value={inputData} onChange={handleInputChange} className="add-task-input" type='text'/>

            <div className="add-task-button-container">
                <Button onClick={handleTaskAddClick}>Adicionar</Button>
            </div>
        </div>
    );
}
 
export default AddTask;