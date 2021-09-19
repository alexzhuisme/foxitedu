import edit from "../img/edit.png";
import draw from "../img/draw.svg"
import pin from "../img/pin.svg"
import comment from "../img/comment.svg"


export default function Edit(){
    return (
        <div className="grid grid-auto h-screen justify-center items-center">
            <div className="w-80 flex justify-center items-center mx-auto">
                <img src={edit} alt="" className="w-auto"/>
            </div>
            <div className="flex flex-col justify-center items-start">
                <div className="text-4xl">
                    Edit with Flexibility
                </div>
                <div className="mt-5">
                    Make all kinds of edits with our versatile toolbox
                </div>
                <div>
                    <div className="bg-orange-card rounded-lg flex items-start space-x-4 h-16 w-88">
                        <img src={draw} alt="" className="w-7 my-auto ml-4"/>
                        <div className="flex flex-col justify-center items-start h-full">
                            <h3>Draw & Highlight</h3>
                            <p className="text-sm">Color code notes and textbook pages</p>
                        </div>
                    </div>

                    <div className="bg-orange-cardLight rounded-lg flex items-start space-x-4 h-16 mt-5 w-88">
                        <img src={pin} alt="" className="w-5 my-auto ml-4"/>
                        <div className="flex flex-col justify-center items-start h-full">
                            <h3>Pin</h3>
                            <p className="text-sm">Refer to other notes, videos, and audio files</p>
                        </div>
                    </div>

                    <div className="bg-orange-cardLight rounded-lg flex items-start space-x-4 h-16 mt-5 w-88">
                        <img src={comment} alt="" className="w-6 my-auto ml-4"/>
                        <div className="flex flex-col justify-center items-start h-full">
                            <h3>Comment</h3>
                            <p className="text-sm">Annotate with texts, callout boxes, underlines, and more</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}