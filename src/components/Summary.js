import footer from "../img/footer.png";

export default function Summary(){
    return(
        <div className="relative h-50 md:h-108 lg:h-720px xl:h-880px bg-no-repeat bg-contain md:bg-cover bg-bottom justify-center flex items-start">
            <div className="z-10 flex flex-col justify-center items-center h-full xl:mt-0 md:text-4xl lg:text-5xl pb-12 md:pb-44 xl:pb-72">
                <div className="lg:mb-5"><span className="text-orange-foxit">Productivity</span> continues,</div>
                <div>no matter where you are.</div>
            </div>
            <img src={footer} alt="" className="absolute h-full z-0 bottom-0"/>
        </div>
    )
}