import React, { useState } from "react"
import './App.css';

function App() {

  const [isTrue, setIsTrue] = useState(false)

  const tableData = [
    {
      highQualification : {
        personName: "Ganesh",
        personQualification: [
          {
            qualification: "B.Tech",
            percentage: 75,
            branch: "EEE"
          }
        ]
      },
      otherQualification: [
       {
         qualification: "Diploma",
         percentage: 84,
         branch: "EEE"
       },
       {
        qualification: "10th Class",
        percentage: 55,
        branch: "Standard"
      }
      ]
    },
    {
      highQualification : {
        personName: "Venkat",
        personQualification: [
          {
            qualification: "M.Tech",
            percentage: 70,
            branch: "Mech"
          },
          {
            qualification: "B.Tech",
            percentage: 70,
            branch: "Mech"
          }
        ]
      },
      otherQualification: [
       {
         qualification: "Diploma",
         percentage: 87,
         branch: "Mech"
       },
       {
        qualification: "10th Class",
        percentage: 80,
        branch: "Standard"
      }
      ]
    }
  ]



  return (
    <div className="App">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Qualification</th>
            <th>Branch</th>
            <th>Percentage</th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((person, rowIndex) =>(

            // In every single row, we have to gave unique key to the React fragments instead of <></>

            <React.Fragment key={rowIndex}>
              {person.highQualification.personQualification.map((detail, detailIndex) =>(
                <tr key={`${rowIndex}-${detailIndex}`}>
                  
                  {detailIndex === 0 &&
                    <>
                      <td rowSpan={person.highQualification.personQualification.length}>
                        <button onClick={() => setIsTrue(!isTrue)}>+</button>
                      </td>
                      <td rowSpan={person.highQualification.personQualification.length}>{person.highQualification.personName}</td>
                    </>
                  } 

                  <td>{detail.qualification}</td>
                  <td>{detail.branch}</td>
                  <td>{detail.percentage}</td>
                </tr>
              ))}
              {isTrue && person.otherQualification.map((detail, detailIndex) =>(
                <tr key={`${rowIndex}-${detailIndex}`}>

                  {detailIndex === 0 &&
                    <>
                      <td rowSpan={person.otherQualification.length}></td>
                      <td rowSpan={person.otherQualification.length}></td>
                    </>
                  }

                  <td>{detail.qualification}</td>
                  <td>{detail.branch}</td>
                  <td>{detail.percentage}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default App;
