
const Certificate = ()=>{
  const certificate = [
    {
      Name : "MEAN Development Certificate",
      Event : "Hackathon",
      From : "Darshan University",
      Date : "Dec 2023"
    },
    {
      Name : "UniversitySQL (Basic & Intermediate)",
      Event : "HackerRank",
      From : "",
      Date : "Dec 2023"
    },
    {
      Name : "Python for Data Science",
      Event : "NPTEL",
      From : "",
      Date : "OCT 2024"
    },
    {
      Name : "Web Development Internship Completion Certificate",
      Event : "Oasis Infobyte",
      From : "",
      Date : "OCT 2024"
    },
  ]
  return(
    <>
      {
        certificate.map((c)=>{
          return(
            <>
              <h5 className="my-2">{c.Name} - {c.Event} | {c.Date} {c.From != "" ? "| "+c.From : ""}</h5>
            </>
          )
        })
      }
    </>
  )
}

export default Certificate;