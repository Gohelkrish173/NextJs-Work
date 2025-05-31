import { Socket } from "dgram";

const Skill = ()=>{
  const skills = [
    { Technical : {
        language : ["Java","Paython","SQL"],
        FrontEnd : ["HTML","CSS", "JavaScript", "ReactJS", "Flutter","NextJs"],
        BackEnd : ["NodeJS", "ExpressJS", "ASP.NET"],
        Databases : ["MS Sql","Mongo DB"],
        Fundamentals : ["DSA","OOP"]
      }
    },
    { Soft : [
      "Problem-Solving",
      "Team Collaboration",
      "Focus & Discipline"
    ]}
  ]

  return(
    <>
      <h4 className="my-2">Technical Skill :- </h4>
      <h6>
        <ul>
          <li className="mb-1">Language : {skills[0].Technical?.language.map((e)=>e+", ")}</li>
          <li className="mb-1">Fornt-End : {skills[0].Technical?.FrontEnd.map((e)=>e+", ")}</li>
          <li className="mb-1">Back-End : {skills[0].Technical?.BackEnd.map((e)=>e+", ")}</li>
          <li className="mb-1">Database : {skills[0].Technical?.Databases.map((e)=>e+", ")}</li>
          <li className="mb-1">Fundamental : {skills[0].Technical?.Fundamentals.map((e)=>e+", ")}</li>
        </ul>
      </h6>

      <br/>

      <h4 className="my-2">Soft Skills :- </h4>
      <h6>
        <ul>
          {skills[1].Soft?.map((s,index)=><li key={index}>{s}</li>)}
        </ul>
      </h6>
    </>
  );
}

export default Skill