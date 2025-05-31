
const Project = ()=>{
  const projects = [
    {
      sem : 4,
      year : 2,
      title : "Movie Ticket Management System",
      tech_stack : ["MERN (MongoDB, Express, React, Node.js)", "JWT", "bcryptJS"],
      describtion : "Developed a fully responsive and scalable movie ticket booking website. \n Implemented secure authentication (JWT & bcrypt) for users and admins. \n Designed an efficient search, scheduling and booking system."
    },
    {
      sem : 6,
      year : 3,
      title : "Tailor Management System",
      tech_stack : ["Flutter"," DOTNET Web API", "MS SQL"],
      describtion : "Developed a multi-shop Tailor Management System for mobile and tablet devices. Allows shopkeepers toregister accounts and manage their customers efficiently.\nFeatures include adding customer measurements, taking orders, generating bills, and data analysis.\nImplemented secure Jwt authentication and role-based access for shopkeepers.\nProvides insights and analytics on orders, revenue, and customer preferences."
    }
  ]
  var count = 0;

  return(
      <div className="my-2">
        {
          projects.map((p)=>{
            count++;
            return(
              <>
                <h2>Project-{count}</h2>
                <div className="d-flex">
                  <h3>{p.title} &nbsp;</h3>
                  <h5 className="align-self-center"> | Sem : {p.sem} | Year : {p.year} </h5>
                </div>
                <div className="ps-3">
                  <ul>
                    <li>Tech Stack : {p.tech_stack.map((t)=>(t+", "))}</li>
                    <li>{p.describtion} </li>
                  </ul>
                </div>
              </>
            )
          })
        } 
      </div>
  );
}

export default Project