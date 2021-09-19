import Navbar from "./Navbar";
import welcome from "../img/Welcome.png";
import {isIOS} from "react-device-detect";

export default function Welcome(){
    console.log(isIOS)
    return (
        <div className="bg-welcome-base h-screen bg-welcome-pattern bg-right-bottom bg-contain lg:bg-50% bg-no-repeat">
            <Navbar/>
            <div className="grid grid-auto h-5/6 flex justify-center items-center ">
                <div className="flex flex-col justify-around items-start lg:pl-70 h-auto text-blue-title h-4/6">
                    <p className="text-3xl lg:text-6xl font-semibold mx-auto">Foxit PDF Editor Mobile</p>
                    <p className="text-xl lg:text-3xl font-semibold mx-auto">Read and take notes on the go.</p>
                    <button className='bg-red-500 w-60 h-16 rounded-lg mx-auto mt-10'>
                        <a href={ isIOS ? 'https://www.google.com':'https://www.bing.com'} target="_blank" rel="noreferrer" className="text-white">
                            Download now - it's free!
                        </a>
                    </button>
                </div>
                
                <div className='flex justify-center items-center'>
                    <img src={welcome} alt="" className="w-44 lg:w-96 lg:pl-56 sm:h-auto lg:h-108"/>
                </div>
            </div>
            
        </div>
    )
}