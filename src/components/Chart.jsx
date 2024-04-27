import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Chart() {
  const [inputvalue, setInputValue] = useState('');
  const [task, setTask] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDelete = (index) => {
    const updatedTasks = [...task];
    updatedTasks.splice(index, 1);
    setTask(updatedTasks);
  };

  const add = () => {
    if (inputvalue.trim() !== '') {
      setTask([...task, inputvalue]);
      setInputValue('');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '20px' }}>
        <h1 style={{ color: 'purple', textAlign: 'center', marginBottom: '20px' }}>Task Menu</h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
          <TextField id="standard-basic" label="Add Tasks" variant="filled" type="text" value={inputvalue} onChange={handleInputChange} />
          <Button color="success" onClick={add} variant="contained" style={{ marginLeft: '10px' }}>ADD</Button>
        </div>
        <div>
          {task.map((item, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
              <span style={{ color: 'blue', fontWeight: 'bold' }}>{index + 1}</span>
              <span style={{ flex: '1', marginLeft: '20px' }}>{item}</span>
              <Button color="error" variant="contained" onClick={() => handleDelete(index)} style={{ marginLeft: '10px', height: '30px', width: '30px' }}>Del</Button>
            </div>
          ))}
        </div>
      </div>

      <div className="human"></div>

      <style>
        {`
          .human {
            width: 100px;
            height: 150px;
            background-color: #ffb347;
            border-radius: 8px;
            position: relative;
            overflow: hidden;
            margin-bottom: 20px;
            animation: moveArms 1s infinite alternate, moveLegs 0.5s infinite alternate;
          }

          .human::after {
            content: '';
            position: absolute;
            width: 15px;
            height: 15px;
            background-color: #ffffff;
            border-radius: 50%;
            top: 30px;
            left: 42%;
            animation: blinkEyes 3s infinite alternate;
          }

          @keyframes moveArms {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(-30deg);
            }
          }

          @keyframes moveLegs {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(30deg);
            }
          }

          @keyframes blinkEyes {
            0%, 100% {
              height: 15px;
            }
            50% {
              height: 0px;
            }
          }
        `}
      </style>
    </div>
  );
}
