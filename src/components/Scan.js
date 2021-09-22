import scan from "../img/scan.png"

export default function Scan(){
    return (
        <div className="h-auto md:h-108 lg:h-720px bg-purple-base grid grid-auto md:grid-cols-2 gap-18">
            <div className="order-1 h-full w-auto flex flex-col justify-center items-center md:items-end">
                <div className="text-3xl w-70 lg:w-96 md:text-4xl lg:text-5xl mt-5">
                    Scan and Organize
                </div>
                <div className="w-70 lg:w-96 mt-5 text-lg">
                    Tired of heavy backpacks? Scan your learning materials, take them with you as PDF files, and submit assignments online easily.
                </div>
            </div>
            <div className="order-2 flex w-full justify-center md:justify-start items-center">
                <img src={scan} alt="" className="w-72 lg:w-560px my-5"/>
            </div>
        </div>
    )
}