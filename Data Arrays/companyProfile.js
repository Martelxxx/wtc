import React, { useState } from 'react';
import CompanyProfileSelector from '../src/components/CompanyProfileSelector';

const companyProfile = [
    {
        Industry: "Technology",
        Products: "Electronics, Transportation, Software, Hardware, AI, Robotics, Telecommunications",
        StartingFunds: 1000000,
        CompanySize: 100,
        InitialLaborCost: 100,
    },
    {
        Industry: "Pharmaceutical",
        Products: "Medicine, Vaccines, Drugs",
        StartingFunds: 2000000,
        CompanySize: 200,
        InitialLaborCost: 200,
    },
    {
        Industry: "Transportation",
        Products: "Cars, Trucks, Buses, Planes, Boats, Bikes, Scooters, Skateboards, Rollerblades, Rockets",
        StartingFunds: 3000000,
        CompanySize: 300,
        InitialLaborCost: 300,
    },
    {
        Industry: "Weapons",
        Products: "Guns, Bombs, Missiles, Tanks, Fighter Jets, Warships, Drones",
        StartingFunds: 4000000,
        CompanySize: 400,
        InitialLaborCost: 400,
    } 
]

// Exporting the companyProfile array
export default companyProfile