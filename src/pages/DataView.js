import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EntriesContext } from '../EntriesContext';
import DataSectionTitle from '../components/Design/DataSectionTItle';
import Background from '../images/web-background.png';


const DataView = () => {
  const { entries, setEntries } = useContext(EntriesContext);

  /*
    FizzBuzz function
    pass a number to it and it return a string of fizz, buzz, or fizzbuzz
    if it isn't one of those three it returns it's original number
  */
  const fizzBuzz = (num) => {
    // start the output as the original number incase it doesn't meet one of the statements below
    let output = num;
    if (num % 3 === 0 || num % 5 === 0) {
      /*
        Now that we know it will be one of those, we set output to a blank string
        this is because of the option of it being fizzbuzz, we need to be able to 
        add the two strings together.
      */
      output = '';
      if (num % 3 === 0) {
        output += "Fizz";
      }
      if (num % 5 === 0) {
        output += "Buzz";
      }
    }
    return output;
  }


  entries.reverse();

  /*
    Set up a bunch of blank arrays to store the different array types.
    This allows us to display them in sections below.
  */
  let fizzArray = [];
  let buzzArray = [];
  let fizzBuzzArray = [];
  let numberArray = []

  // Sort the main array of entries into separate arrays for displaying below
  entries.forEach((item) => {
    item.favNumber = fizzBuzz(item.favNumber);
    if (item.favNumber === 'Fizz') {
      fizzArray.push(item);
    } else if (item.favNumber === 'Buzz') {
      buzzArray.push(item);
    } else if (item.favNumber === 'FizzBuzz') {
      fizzBuzzArray.push(item);
    } else {
      numberArray.push(item);
    }
  });


  /* 
    This is the information that handles deleting an object from the main array.
    I create a duplicate array based off the entires array in order to have access to the 
    original number instead of fizzbuzz. This allows us to keep the original data incase it's 
    needed later.
  */
  let deleteSubmissions = entries;
  const deleteData = (theId) => {
    const deleteIndex = entries.find((item) => item.id === theId);
    deleteSubmissions.splice(deleteIndex, 1)
    localStorage.setItem('submissions', JSON.stringify(deleteSubmissions))
    setEntries(deleteSubmissions);
  }
  // for formatting the birthday
  const dateOfBirthOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

  /*
    We use this function to display each array below. You pass in the array you need to display
    and it maps through it.
  */
  const displayContent = (theArray) => {
    return (
      <div className="grid gap-4 ">
        {theArray.map((item) => (
          <div
            key={item.id}
            className={`lg:flex submission-row shadow-md rounded-md p-4 mb-2`}>
            <div>
              <div className="text-2xl mb-3">{item.name}</div>
              <div className="flex md:block flex-col">
                <span>
                  <span className="font-medium">Gender:</span> {item.gender}<span className="invisible md:visible">&nbsp;|&nbsp;</span>
                </span>
                <span>
                  <span className="font-medium">Martial Status:</span> {item.mStatus}<span className="invisible md:visible">&nbsp;|&nbsp;</span>
                </span>
                <span>
                  <span className="font-medium">Date of Birth:</span> {new Date(item.dateOfBirth).toLocaleDateString('en-us', dateOfBirthOptions)}
                </span>
              </div>
            </div>
            <div>
              <span className="text-1xl font-medium md:block">Favorite Number<span className="visible md:invisible">:</span></span>
              <span className="md:text-3xl font-bold ml-1 md:ml-0">{item.favNumber}</span>
            </div>
            <div className="flex lg:justify-center py-2 mt-2 md:mt-0">
              <button onClick={
                (e) => {
                  deleteData(item.id);
                  e.target.parentNode.parentNode.style.display = "none";
                }
              } className="button outline px-2 py-1 shadow-sm hover:shadow-lg" text="Delete" >Delete</button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="px-3 bg-contain bg-no-repeat bg-right-bottom" style={{ backgroundImage: `url(${Background})` }}>
      <div className="container" >
        <h1 className="text-[42px] font-bold">View The Data</h1>
        {fizzArray.length > 0 ? <DataSectionTitle text="Fizz" /> : ''}
        {
          //display Fizz
          displayContent(fizzArray)
        }
        {buzzArray.length > 0 ? <DataSectionTitle text="Buzz" /> : ''}
        {
          //display Buzz
          displayContent(buzzArray)
        }
        {fizzBuzzArray.length > 0 ? <DataSectionTitle text="FizzBuzz" /> : ''}
        {
          //display Buzz
          displayContent(fizzBuzzArray)
        }
        {numberArray.length > 0 ? <DataSectionTitle text="Just Numbers" /> : ''}
        {
          //display Buzz
          displayContent(numberArray)
        }
        <Link to="/" className="text-white button p-4 shadow-md hover:shadow-lg bg-brandColor hover:bg-brandColorHover mt-6">Add Another Person</Link>

      </div>
    </div>
  )
}

export default DataView;