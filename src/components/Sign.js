import sign from "../img/Sign.png"

export default function Sign() {
    return (
        <div className="bg-orange-cardLight h-screen grid grid-auto">
            <div className="h-full flex flex-col justify-center items-center">
                <div className="text-4xl">
                    Fill and Sign
                </div>
                <div className="w-80">
                    The paperless streak doesn’t have to stop here. Fill out forms and sign with your fingertips, printer-free.
                </div>
            </div>
            <div className="h-full flex justify-center items-center">
                <img src={sign} alt="" className="w-108"/>
            </div>

        </div>
    )
}