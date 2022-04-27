import React from 'react';

class DataView extends React.Component {
  render() {


    let savedSubmissions = [];
    let parsedSubmissions = [];
    savedSubmissions = localStorage.getItem('submissions');
    parsedSubmissions = JSON.parse(savedSubmissions);

    console.log(parsedSubmissions.reverse());

    return (
      <div className="container">

        {
          parsedSubmissions.map((item) => {
            return (
              <div className="submission-row">
                <div>
                  <div>{item.name}</div>
                  <div>Gender: {item.gender} | Martial Status: {item.mStatus} |Date of Birth: {item.dateOfBirth}</div>
                </div>
                <div>
                  <h3 className="fav-num-title">Favorite Number</h3>
                  {item.favNumber}
                </div>
              </div>
            );

          })
        }

      </div>
    )
  }
}

export default DataView;