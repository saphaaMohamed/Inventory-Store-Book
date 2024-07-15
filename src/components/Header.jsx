import {Link}  from "react-router-dom";

const Header = () => {
  return (
    <div>
    <div className="flex  justify-around items-center mt-2 ">
      <div className="Logo">
       <img className="h-[50px] w-[50px] " src="/public/Logo/logo.png" alt="logo" />
      </div>
      <div className="middle "> 
        <ul className="flex gap-10 text-sky-700 text-lg" >
            <li>
                <Link to="/">Home</Link>
                </li>
            <li>
                <Link to="/About">About</Link>
                </li>
            <li> <Link to="/Shop">Shop</Link></li>
            <li>
              <Link to="/ContectUs">Contact</Link>
            </li>
        </ul>
      </div>
      <div className="right text-lg">
      <img src="/src/assets/myteam/one (1).jpg" className="w-[50px] h-[50px] rounded-full object-cover cursor-pointer" alt="" />
        </div>
    </div>
    </div>
  )
}

export default Header
