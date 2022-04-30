import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form';
import { useNavigate } from "react-router-dom";
import Background from '../images/web-background.png';


const DataEntry = function () {

  let navigate = useNavigate();
  /*
   was created to have the option to hide form in order to have a popup to continue or add another
   showForm indicates that the form has been submitted, it is now being used to know when to redirect the user 
   to the DataView component 
   */
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (showForm) {
      navigate('/view');
    }
  }, [showForm, navigate])



  return (
    <div className="bg-contain bg-no-repeat bg-right-bottom" style={{ backgroundImage: `url(${Background})` }}>
      <div className="container">
        <h1 className="text-[42px] font-bold mb-2">Enter The Information</h1>
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