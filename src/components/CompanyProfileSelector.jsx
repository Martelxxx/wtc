import React, { useState } from 'react';
import companyProfiles from '../../Data Arrays/companyProfile.js';
import './CompanyProfileSelectorStyle.css';
import CompanyWelcome from './CompanyWelcome.jsx';

const CompanyProfileSelector = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [newCompanyName, setNewCompanyName] = useState('');
  const [userName, setUserName] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);

  const handleProfileSelect = (index) => {
    setSelectedProfile(index); // set selectedProfile to index
  };

  const handleInputChange = (event) => {
    setNewCompanyName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here, like saving the new company name
    setShowWelcome(true);
  };

  function camelCaseToTitleCase(text) {
    const result = text.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  return (
    <div className='container'>
      {showWelcome && selectedProfile !== null ? (
        <CompanyWelcome 
          companyName={newCompanyName}
          profile={companyProfiles[selectedProfile]}
          userName={userName}
        />
      ) : (
        <>
    <h1>Build It But Will They Come?</h1>
    <h2>Select a Company Profile</h2>
    <div className="industry-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {companyProfiles.map((profile, index) => (
        <div className={`industries industry-${index}`} key={index} style={{ margin: '10px', padding: '10px', border: '1px solid black' }}>
          <button onClick={() => handleProfileSelect(index)}>
            {profile.Industry}
          </button>
          {selectedProfile === index && (
              <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Your name" value={userName} onChange={(e) => setUserName(e.target.value)} />
                <input type="text" placeholder="Desired name of the company" value={newCompanyName} onChange={(e) => setNewCompanyName(e.target.value)} />
                <button type="submit">Submit</button>
              </form>
            )}
          {Object.entries(profile).map(([key, value]) => (
            <div key={key}>
            {camelCaseToTitleCase(key)}: 
              {key === 'StartingFunds' ? `$${Number(value).toLocaleString()}` :     
               key === 'InitialLaborCost' ? `$${Number(value).toLocaleString()} per unit` : 
              Array.isArray(value) ? value.join(', ') : value}
        </div>
          ))}
        </div>
      ))}
    </div>
    </>
      )}
  </div>
  );
}

export default CompanyProfileSelector;
