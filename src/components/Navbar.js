import logo from '../img/foxit-logo.png';

export default function Navbar(){
  return (
    <div className="h-auto align-baseline text-orange-foxit bg-white font-semibold text-xl p-4">
      <div className="flex items-baseline justify-around w-44 lg:w-64">
        <img src={logo} alt="" className="w-24 lg:w-32 align-baseline inline"/>
        Education
      </div>
    </div>
  )
}