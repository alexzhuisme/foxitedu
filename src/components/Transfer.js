import fileTransfer from '../img/file-transfer.png';
import googleDrive from '../img/google-drive.svg';
import iCloud from '../img/icloud.svg';
import dropbox from '../img/dropbox.svg';


export default function Transfer () {
    return (
        <div className="bg-wave bg-cover bg-no-repeat bg-bottom w-full h-108 md:h-108 lg:h-720px overflow-hidden grid grid-auto md:grid-cols-2 md:gap-10 lg:gap-18">
            <div className="md:order-2 flex flex-col h-full lg:h-128 w-96 md:w-full md:text-left justify-around items-center md:items-start grid-cols-2">
                <div className="flex flex-col justify-center items-start">
                    <div className="text-3xl md:text-4xl text-center md:text-left lg:text-5xl w-88 lg:w-full mx-auto mt-5">
                        Seamless File Transfer
                    </div>
                    <div className="w-72 md:w-88 mt-5 text-lg mx-auto">
                        Send your lecture slides, readings, and resumes from laptop to mobile devices within seconds. 
                    </div>
                    <div className="flex justify-evenly items-center w-full mt-10">
                        <img src={googleDrive} alt="" className="w-12"/>
                        <img src={iCloud} alt="" className="w-12"/>
                        <img src={dropbox} alt="" className="w-12"/>
                    </div>
                </div>
            </div>
            <div className="md:order-1 w-full flex flex-col justify-center items-center md:items-end">
                <img src={fileTransfer} alt="" className="w-72 my-5 md:w-80 lg:w-96 md:z-20"/>
            </div>
            
        </div>
    )
}