import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EntriesContext } from '../EntriesContext';
import DataSectionTitle from '../components/Design/DataSectionTItle';
import Background from '../images/web-background.png';


const DataView = () => {
  const { entries, setEntries } = useContext(EntriesContext);

  const fizzBuzz = (num) => {
    let output = num;
    if (num % 3 === 0 || num % 5 === 0) {
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

  let deleteSubmissions = entries;

  entries.reverse();

  let fizzArray = [];
  let buzzArray = [];
  let fizzBuzzArray = [];
  let numberArray = []

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

  const deleteData = (theId) => {
    const deleteIndex = entries.find((item) => item.id === theId);
    deleteSubmissions.splice(deleteIndex, 1)
    localStorage.setItem('submissions', JSON.stringify(deleteSubmissions))
    setEntries(deleteSubmissions);
  }

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
                  <span className="font-medium">Date of Birth:</span> {item.dateOfBirth}<span className="invisible md:visible">&nbsp;|&nbsp;</span>
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
        <Link to="/" className="button p-4 shadow-md hover:shadow-lg bg-brandColor hover:bg-brandColorHover mt-6">Add Another Person</Link>

      </div>
    </div>
  )
}

export default DataView;