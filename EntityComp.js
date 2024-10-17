import React, { useState } from 'react';

const EntityComponent = ({ matchesList }) => {
  // Define default labels
  const defaultLabels = ['Entity1'];

  // State to hold input values
  const [inputValues, setInputValues] = useState({});

  // Create labels array
  const labels = defaultLabels.map((label, index) => {
    return matchesList[index] || label;
  });

  // Add extra labels if matches exceed default labels
  if (matchesList.length > defaultLabels.length) {
    labels.push(...matchesList.slice(defaultLabels.length));
  }

  // Handle input change
  const handleInputChange = (index, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [`Entity${index + 1}`]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a mapping of labels and their corresponding input values
    const mappedData = labels.reduce((acc, label, index) => {
      acc[label] = inputValues[`Entity${index + 1}`] || '';
      return acc;
    }, {});

    // Extract only the values from mappedData
    const valuesList = Object.values(mappedData);

    // Log the matchedList and valuesList to the console
    console.log('Matched List:', matchesList);
    console.log('Values List:', valuesList);

    // You can handle the valuesList further as needed here
  };

  return (
    <div className="entity-component">
      <h2>List of Entities</h2>
      <form onSubmit={handleSubmit}>
        {labels.map((label, index) => (
          <div className="form-group" key={index}>
            <label htmlFor={`entity${index + 1}`}>{label}</label>
            <input
              type="text"
              id={`entity${index + 1}`}
              name={`entity${index + 1}`}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EntityComponent;
