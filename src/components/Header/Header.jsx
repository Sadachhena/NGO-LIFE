let Nav=[
    {
        name:"Home"
    },
    {
        name:"About"
    },
    {
        name:"Causes"
    },
    {
        name:"Volunteer"
    },
    {
        name:"Events"
    },
    {
        name:"Charity Mission"
    },
     {
        name:"Contact"
    },

]

export default function Header() {
  return (
    <header className="max-w-[1300px] mx-auto px-10 shadow-lg p-2">
      {/* {First div} */}
      <div></div>
      {/* {Second div} */}
      <div className="flex items-center justify-between">
     {/* {Logo} */}
     <div>
        <h2>Logo</h2>
     </div>
     {/* {NavLink} */}
     <div>
        <ul className="flex justify-center items-center gap-5 text-xl">
            {Nav.map((items,i)=>{
                return(
                    <li key={i}>
                     {items.name}
                    </li>
                )
            })}
        </ul>
     </div>
     {/* {DonoteButton} */}
     <div>
        <button className="bg-orange-400 text-xl rounded-lg">Donote</button>
     </div>
      </div>  
    </header>
  )
}
