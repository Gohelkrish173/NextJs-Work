import { PrismaClient } from "../generated/prisma";

const Country = async ()=>{
  const prisma = new PrismaClient();
  const data = await prisma.lOC_Country.findMany();
  return(
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <td>Country Name</td>
          <td>Country Code</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {
          data.map((d)=>(
            <tr key={d.CountryID}>
              <td>{d.CountryName}</td>
              <td>{d.CountryCode}</td>
              <td>Edit/Delete</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default Country;