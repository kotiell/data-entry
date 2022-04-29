import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form';
import { useNavigate } from "react-router-dom";
import Background from '../images/web-background.png';


const DataEntry = function () {

  let navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (showForm) {

      navigate('/view');
      // console.log('Hello World')
      // document.querySelector('#data-submitted').classList.remove('hide');
      // document.querySelector('form').classList.add('hide');
    } else {
      // document.querySelector('#data-submitted').classList.add('hide');
      // document.querySelector('form').classList.remove('hide');
      // document.querySelector('form').reset();

    }
  }, [showForm, navigate])



  return (
    <div className="bg-contain bg-no-repeat bg-right-bottom" style={{ backgroundImage: `url(${Background})` }}>
      <div className="container">
        <h1 className="text-[26px] font-bold">Enter Your Information</h1>
        <div className="form-container">
          <Form showForm={setShowForm} />
          <div className="hide" id="data-submitted">
            <p>Your data was submitted</p>
            <Link to="/view">View All Submissions</Link>
            <button className="bg-brandColor" onClick={() => {
              setShowForm(false);
            }}>Submit Another Person</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default DataEntry;