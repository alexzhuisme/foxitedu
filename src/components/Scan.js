import scan from "../img/scan.png"

export default function Scan(){
    return (
        <div className="h-screen bg-purple-base grid grid-auto">
            <div className="h-full w-auto flex flex-col justify-center items-center">
                <div className="text-4xl w-full flex justify-center items-center">
                    Scan and Organize
                </div>
                <div className="flex justify-center items-center w-80 mt-5">
                    Tired of heavy backpacks? Scan your learning materials, take them with you as PDF files, and submit assignments online easily.
                </div>
            </div>
            <div className="w-auto flex justify-center items-center">
                <img src={scan} alt="" className="w-full"/>
            </div>
        </div>
    )
}