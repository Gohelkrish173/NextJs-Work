
const Education = ()=>{
  const Edu = [
    {
      Name : "Darshan University",
      Course : "B.Tech",
      Branch : "CSE",
      Percentage : 78.3,
      Year : "2022-2026",
    },
    {
      Name : "Shakti Gujarati Medium School",
      Course : "HSC",
      Branch : "GSEB",
      Percentage : 68.92,
      Year : "2022",
    },
    {
      Name : "Maruti Mother Land School",
      Course : "SSC",
      Branch : "GSEB",
      Percentage : 75.67,
      Year : "2020",
    }
  ]

  return(
    <>
      {
        Edu.map((e)=>{
          return (
            <>
              <h4>{e.Name} - {e.Year}</h4>
              <h5 className="mb-3">{e.Course} | {e.Branch} - Percentage : {e.Percentage}%</h5>
            </>
          )
        })
      }
    </>
  )
}

export default Education;