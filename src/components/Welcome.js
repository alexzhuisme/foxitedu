import Navbar from "./Navbar";
import welcome from "../img/Welcome.png";
import {isIOS} from "react-device-detect";

export default function Welcome(){
    console.log(isIOS)
    return (
        <div className="bg-welcome-base h-screen bg-welcome-pattern bg-right-bottom bg-50% bg-no-repeat">
            <Navbar/>
            <div className="grid grid-cols-2 h-full flex justify-center items-center">
                <div className="flex flex-col justify-around items-start pl-70 h-1/2 text-blue-title">
                    <p className="text-6xl font-semibold">Foxit PDF Editor Mobile</p>
                    <p className="text-3xl font-semibold">Read and take notes on the go.</p>
                    <button className='bg-red-500 w-60 h-16 rounded-lg'>
                        <a href={ isIOS ? 'https://www.google.com':'https://www.bing.com'} target="_blank" rel="noreferrer" className="text-white">
                            Download now - it's free!
                        </a>
                    </button>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={welcome} alt="" className="pl-56 h-108"/>
                </div>
            </div>
            
        </div>
    )
}