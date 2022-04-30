import { useEffect, useContext } from 'react';
import uuid from 'react-uuid';
import { EntriesContext } from '../EntriesContext';


const Form = (props) => {
  // here we set the initial entries value using useContext
  // useContext makes it so the entries data is shared with DataView, DataEntry, and the Form component
  const { entries, setEntries } = useContext(EntriesContext);

  // create a new object for the submission
  const newSubmission = {
    id: uuid(),
    name: '',
    gender: '',
    mStatus: '',
    dateOfBirth: '',
    favNumber: '',
  };

  // this function is called when the form is submitted.
  // it gets the value for all the fields and adds them to the object
  // then the object is added to the other arrays
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
    props.showForm(true)
  }

  // watching for entries updates
  // once it is updated localStorage is also updated with the new array
  useEffect(() => {
    localStorage.setItem("submissions", JSON.stringify(entries));
  }, [entries])


  return (
    <form className="form-display" onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input type="text" name="name" required />
      </label>
      <label>
        <span>Gender</span>
        <select name="gender" required>
          <option value="">Choose</option>
          <option>Female</option>
          <option>Male</option>
          <option>Prefer not to say</option>
        </select>
      </label>
      <label>
        <span>Martial Status</span>
        <select name="m-status" required>
          <option value="">Status</option>
          <option>Married</option>
          <option>Single</option>
        </select>
      </label>
      <label>
        <span>Date of Birth</span>
        <input type="date" name="date-of-birth" required />
      </label>
      <label>
        <span>Favorite Number</span>
        <input type="number" name="favorite-number" required />
      </label>
      <div>
        <button className="bg-brandColor hover:bg-brandColorHover button px-4 py-3 shadow-md hover:shadow-lg text-white ">Enter The Data</button>
      </div>
    </form>
  )
}

export default Form;