import React from 'react';
import {Link} from 'react-router-dom';

// {
//   term: "20172018",
//   end_date: null,
//   district: "17",
//   chamber: "lower",
//   state: "ca",
//   party: "Democratic",
//   type: "member",
//   start_date: null
// },

const PoliticianDistrict = ({politician}) => {
  // Extract from role:
  let district = 'N/A';
  if (politician.roles) {
    const districtRole = politician.roles.filter(role => role.district).shift();
    if (districtRole) {
      district = districtRole.district;
    }
  }

  return <div>{district}</div>;
};

export default PoliticianDistrict;
