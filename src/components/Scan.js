import scan from "../img/scan.png"

export default function Scan(){
    return (
        <div className="h-auto lg:h-screen bg-purple-base grid grid-auto">
            <div className="h-full w-auto flex flex-col justify-center items-center">
                <div className="text-3xl lg:text-4xl mt-5 w-full flex justify-center items-center">
                    Scan and Organize
                </div>
                <div className="flex justify-center items-center w-72 mt-5">
                    Tired of heavy backpacks? Scan your learning materials, take them with you as PDF files, and submit assignments online easily.
                </div>
            </div>
            <div className="h-full w-full flex justify-center items-center">
                <img src={scan} alt="" className="w-72  my-5"/>
            </div>
        </div>
    )
}