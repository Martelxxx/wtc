import React from 'react';

const CompanyWelcome = ({ companyName, profile, userName }) => {
  return (
    <div>
      <h1>Welcome to {companyName}, {userName}!</h1>
      <h2>Industry: {profile.Industry}</h2>
      <h3>Products: {profile.Products}</h3>
      <h3>Starting Funds: {Number(profile.StartingFunds).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h3>      
      <h3>Company Size: {profile.CompanySize} employees</h3>
      <h3>Initial Labor Cost: {Number(profile.InitialLaborCost).toLocaleString('en-US', { style: 'currency', currency: 'USD' })} per unit</h3>      
      <p>{`In the heart of Silicon Valley, ${companyName} was founded by a group of visionary engineers and entrepreneurs. 
            Their mission was to revolutionize the technology industry by developing cutting-edge products in electronics, transportation, software, hardware, AI, robotics, and telecommunications. 
            With a focus on innovation and sustainability, the team quickly attracted significant venture capital funding, allowing them to expand rapidly. 
            Today, ${companyName} is known for its groundbreaking advancements in AI and robotics, transforming industries and improving lives worldwide. 
            The company’s commitment to excellence and its dynamic work environment have attracted top talent from around the globe, making it a leader in tech innovation.`}</p>
    </div>
    
  );
};

export default CompanyWelcome;
