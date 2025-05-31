import React from 'react'
import { PrismaClient } from '../generated/prisma'
import Loading from './loading';

const City = async () => {
  const prisma = new PrismaClient();
  // const data = await prisma.LOC_City.findUnique({where:{CityID : 1}});
  const data = await prisma.lOC_City.findMany({include : {LOC_Country : true,LOC_State : true}});
  console.log(data);
  return (
    <>
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <td>CityName</td>
            <td>CityCode</td>
            <td>StateName</td>
            <td>CoutryName</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
        {
          data.map((d:any)=>(
            <tr key={d.CityID}>
              <td>
                {d.CityName}
              </td>
              <td>
                {d.CityCode}
              </td>
              <td>
                {d.LOC_State.StateName}
              </td>
              <td>
                {d.LOC_Country.CountryName}
              </td>
              <td>
                Edit/Delete
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </>
  )
}

export default City