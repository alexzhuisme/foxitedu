import waveGray from '../img/wave-gray.svg';
import wavePurple from '../img/wave-purple.svg';
import fileTransfer from '../img/file-transfer.png';
import googleDrive from '../img/google-drive.svg';
import iCloud from '../img/icloud.svg';
import dropbox from '../img/dropbox.svg';

export default function Transfer () {
    return (
        <div className="lg:relative h-auto lg:h-screen grid grid-auto overflow-hidden">
            <div className="flex flex-col h-full lg:h-128 w-96 lg:text-left justify-around items-center">
                <div className="flex flex-col justify-center items-center">
                    <div className="text-3xl lg:text-4xl w-full mx-auto mt-5">
                        Seamless File Transfer
                    </div>
                    <div className="w-70 mt-5">
                        Send your lecture slides, readings, and resumes from laptop to mobile devices within seconds. 
                    </div>
                    <div className="flex justify-around items-center w-80 mt-10">
                        <img src={googleDrive} alt="" className="w-12"/>
                        <img src={iCloud} alt="" className="w-12"/>
                        <img src={dropbox} alt="" className="w-12"/>
                    </div>
                </div>
                <img src={fileTransfer} alt="" className="w-80 my-5 lg:w-4/12 lg:absolute lg:right-2/4 lg:bottom-44 lg:z-20"/>
            </div>
            
            {/* <img src={waveGray} alt="" className="w-full absolute bottom-6 z-0"/> */}
            {/* <img src={fileTransfer} alt="" className="w-4/12 lg:absolute lg:right-2/4 lg:bottom-44 lg:z-20"/> */}
            {/* <img src={wavePurple} alt="" className="w-full absolute -bottom-16 z-40"/> */}

            
        </div>
    )
}