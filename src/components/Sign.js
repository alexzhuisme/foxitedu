import sign from "../img/Sign.png"

export default function Sign() {
    return (
        <div className="bg-orange-cardLight h-auto md:h-560px lg:h-720px grid grid-auto md:grid-cols-2 md:gap-10 lg:gap-18">
            <div className="order-1 h-full w-auto flex flex-col justify-center items-center md:items-end">
                <div className="text-3xl md:text-4xl lg:text-5xl mt-5 lg:w-96 md:mr-20 lg:mr-0">
                    Fill and Sign
                </div>
                <div className="w-70 lg:w-96 text-left text-lg mx-auto md:mr-0 mt-5">
                    The paperless streak doesn’t have to stop here. Fill out forms and sign with your fingertips, printer-free.
                </div>
            </div>
                
            <div className="order-2 h-full flex flex-col justify-center items-center md:items-start">
                <img src={sign} alt="" className="w-72 lg:w-108 my-5"/>
            </div>

        </div>
    )
}