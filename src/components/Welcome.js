import Navbar from "./Navbar";
import welcome from "../img/Welcome.png";
import {isIOS} from "react-device-detect";

export default function Welcome(){
    console.log(isIOS)
    return (
        <div className="bg-welcome-base h-880px bg-welcome-pattern bg-right-bottom bg-contain md:bg-contain bg-no-repeat">
            <Navbar/>
            <div className="grid grid-auto md:grid-cols-2 h-5/6 sm:w-auto md:w-720px lg:w-1040px justify-center items-center mx-auto">
                <div className="flex flex-col justify-around items-center md:items-start md:h-auto text-blue-title h-4/6">
                    <p className="text-3xl md:text-6xl font-semibold">Foxit PDF Editor Mobile</p>
                    <p className="text-xl md:text-3xl font-semibold md:mt-10">Read and take notes on the go.</p>
                    <button className='bg-red-500 w-60 h-16 rounded-lg mx-auto mt-10 md:ml-0 md:mt-10'>
                        <a href={ isIOS ? 'https://apps.apple.com/us/app/foxit-pdf-editor/id507040546':'https://play.google.com/store/apps/details?id=com.foxit.mobile.pdf.lite&hl=en_US&gl=US'} target="_blank" rel="noreferrer" className="text-white">
                            Download now - it's free!
                        </a>
                    </button>
                </div>
                
                <div className='flex flex-col justify-center items-center md:items-start pl-0 md:pl-10 lg:pl-24'>
                    <img src={welcome} alt="" className="w-44 md:w-60 h-auto"/>
                </div>
            </div>
            
        </div>
    )
}