import Link from "next/link";

const Home = ()=>{
  const Student_Data = {
    Name:"Krish Gohel",
    Sem:7,
    College :"Darshan University",
    Profession : ["Full Stack Developer","App Developer"],
    MobileNo : 9558566847,
    Email : "krishgohel173@gmail.com",
    LinkedIn : "https://www.linkedin.com/in/krish-gohel-44983a24b/",
    Github : "https://github.com/Gohelkrish173",
  }
  const SPI = [7.95,8.65,8.78,8.7,8.48,7.95]

  var sem = 0;
  return(
    <>
      <div>
        <h3>{Student_Data.Name}</h3>
        <div>
          {Student_Data.Profession.map((p,index)=>{return(<h6 key={index}>{index == 1 ? p : p+" | "}</h6>)})}
        </div>
        <h6>
            +91 {Student_Data.MobileNo} | 
            &nbsp;{Student_Data.Email} | 
            &nbsp;<Link href={Student_Data.LinkedIn}>LinkedIN</Link> | 
            &nbsp;<Link href={Student_Data.Github}>Github</Link>
        </h6>
      </div>

      <div className="mt-3">
        <h5>
          Semester Wise SPI's : -
        </h5>
        <h6>
          <ul>
            {SPI.map((e,index)=>{
              sem= sem +1;
              return <li key={index}>Sem - {sem} : {e}</li>
            })}
          </ul>
        </h6>
      </div>
    </>
  )
}

export default Home