import { useState, useEffect } from 'react';


const Form = () => {
  let savedSubmissions = [];
  if (localStorage.getItem('submissions')) {
    savedSubmissions = localStorage.getItem('submissions');
    savedSubmissions = JSON.parse(savedSubmissions);
  }
  const [entries, setEntries] = useState(savedSubmissions);

  const newSubmission = {
    name: '',
    gender: '',
    mStatus: '',
    dateOfBirth: '',
    favNumber: '',
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Get each input/select and add it to the object
    newSubmission.name = document.querySelector('input[name="name"]').value;
    newSubmission.gender = document.querySelector('select[name="gender"]').value;
    newSubmission.mStatus = document.querySelector('select[name="m-status"]').value;
    newSubmission.dateOfBirth = document.querySelector('input[name="date-of-birth"]').value;
    newSubmission.favNumber = document.querySelector('input[name="favorite-number"]').value;
    //this adds the new submission to the entries array
    setEntries([...entries, newSubmission]);
  }

  // watching for entries updates
  // once it is updated localStorage is also updated with the new array
  useEffect(() => {
    const submissions = localStorage.getItem("submissions");
    console.log( JSON.parse(submissions));
    console.log(entries);
    localStorage.setItem("submissions", JSON.stringify(entries))
  }, [entries])

  //localStorage.setItem("submissions",entries);
  return (
    <form className="form-display" onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Gender
        <select name="gender">
          <option>Choose</option>
          <option>Female</option>
          <option>Male</option>
          <option>Prefer not to say</option>
        </select>
      </label>
      <label>
        Martial Status
        <select name="m-status">
          <option>Status</option>
          <option>Married</option>
          <option>Single</option>
        </select>
      </label>
      <label>
        Date of Birth
        <input type="date" name="date-of-birth" />
      </label>
      <label>
        Favorite Number
        <input type="text" name="favorite-number" />
      </label>
      <button>Enter Data</button>
    </form>
  )
}

export default Form;