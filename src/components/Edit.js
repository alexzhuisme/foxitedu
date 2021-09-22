import edit from "../img/edit.png";
import draw from "../img/draw.svg"
import pin from "../img/pin.svg"
import comment from "../img/comment.svg"


export default function Edit(){
    return (
        <div className="grid grid-auto md:grid-cols-2 h-auto md:h-560px lg:h-720px justify-center items-center md:gap-5 lg:gap-18">
            <div className="order-2 md:order-1 w-full flex flex-col justify-center items-center md:items-end mx-auto my-5 sm:my-0">
                <img src={edit} alt="" className="w-64 lg:w-96"/>
            </div>
            <div className="order-1 md:order-2 flex flex-col justify-center md:justify-end items-center lg:items-start mt-10 sm:mt-0">
                <div className="text-3xl md:text-4xl lg:text-5xl">
                    Edit with Flexibility
                </div>
                <div className="mt-5 w-70 lg:w-108 text-lg">
                    Make all kinds of edits with our versatile toolbox
                </div>
                <div className="bg-orange-card rounded-lg flex items-start space-x-4 h-16 w-80 lg:w-88 mt-5">
                    <img src={draw} alt="" className="w-7 my-auto ml-4"/>
                    <div className="flex flex-col justify-center items-start h-full">
                        <h3>Draw & Highlight</h3>
                        <p className="text-sm">Color code notes and textbook pages</p>
                    </div>
                </div>

                <div className="bg-orange-cardLight rounded-lg flex items-start space-x-4 h-16 mt-5 w-80 lg:w-88">
                    <img src={pin} alt="" className="w-5 my-auto ml-4"/>
                    <div className="flex flex-col justify-center items-start h-full">
                        <h3>Pin</h3>
                        <p className="text-sm">Refer to other notes, videos, and audio files</p>
                    </div>
                </div>

                <div className="bg-orange-cardLight rounded-lg flex items-start space-x-4 h-16 mt-5 w-80 lg:w-88">
                    <img src={comment} alt="" className="w-6 my-auto ml-4"/>
                    <div className="flex flex-col justify-center items-start h-full">
                        <h3>Comment</h3>
                        <p className="text-sm">Annotate with texts, callout boxes, underlines, and more</p>
                    </div>
                </div>
            </div>
        </div>
    )
}