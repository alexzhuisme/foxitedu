import sign from "../img/Sign.png"

export default function Sign() {
    return (
        <div className="bg-orange-cardLight h-auto lg:h-screen grid grid-auto">

                <div className="text-3xl lg:text-4xl mt-5 mx-auto">
                    Fill and Sign
                </div>
                <div className="w-70 text-center mx-auto mt-5">
                    The paperless streak doesn’t have to stop here. Fill out forms and sign with your fingertips, printer-free.
                </div>
            <div className="h-full flex justify-center items-center">
                <img src={sign} alt="" className="w-72 my-5"/>
            </div>

        </div>
    )
}