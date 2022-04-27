import React from 'react';
import Form from '../components/Form';

class DataEntry extends React.Component {
  render() {

    return (
      <>
        <div className="container">
          <h1>Enter Your Data</h1>
          <div className="form-container">
            <Form />
          </div>
        </div>
      </>
    )
  }
}

export default DataEntry;