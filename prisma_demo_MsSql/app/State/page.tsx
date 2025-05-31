import { PrismaClient } from "../generated/prisma"

const State =async ()=>{
  const prisma = new PrismaClient;
  const data = await prisma.lOC_State.findMany({include : {LOC_Country : true}});
  return(
    <>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <td>StateName</td>
            <td>StateCode</td>
            <td>CountryName</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((d:any)=>(
              <tr key={d.StateID}>
                <td>{d.StateName}</td>
                <td>{d.StateCode}</td>
                <td>{d.LOC_Country.CountryName}</td>
                <td>Edit/Delete</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
}

export default State