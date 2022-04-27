import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form';


const DataEntry = function () {

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (showForm) {
      console.log('Hello World')
      document.querySelector('#data-submitted').classList.remove('hide');
      document.querySelector('form').classList.add('hide');
    } else {      
      document.querySelector('#data-submitted').classList.add('hide');
      document.querySelector('form').classList.remove('hide');
      document.querySelector('form').reset();

    }
  }, [showForm])



  return (
    <>
      <div className="container">
        <h1>Enter Your Data</h1>
        <div className="form-container">
          <Form showForm={setShowForm} />
          <div class="hide" id="data-submitted">
            <p>Your data was submitted</p>
            <Link to="/view">View All Submissions</Link>
            <button onClick={() =>{
              setShowForm(false);
            }}>Submit Another Person</button>
          </div>
        </div>
      </div>
    </>
  )
}


export default DataEntry;