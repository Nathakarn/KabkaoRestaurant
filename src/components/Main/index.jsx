import tomyum from "../../assets/tomyum.png";

 function Main(){
    return(
        <div className="containar mx-auto max-w-[1344]">
            <div className="flex flex-col gap-0 p-5 py-6 min-h-screen h-auto justify-center md:p-0 lg:p-5 lg:items-center lg:flex-row lg:justify-center lg:gap-0 overflow-hidden">
                <section className="flex flex-col gap-5 ml-[30px] sm:items-center text-center lg:text-left lg:gap-5 lg:items-ceter" >
                    <h1 className="text-2xl leading-6 sm:w-4/5 md:text-5xl md:w-4/5 font-bold font-head text-[#ff854d] lg:text-6xl lg:left-1">
                        KOBKAO, The Flavor of Family.
                    </h1>
                    <p className="text-lg font-body text-[#533527]">
                    A cozy haven where every dish is seasoned with love and served with togetherness.
                    </p>
                </section>
                <img src={tomyum} alt="tomyum"
                className="w-[500px] h-auto object-cover relative sm:w-[500px] md:w-[600px] lg:w-[800px] "/>
                
            </div>

        </div>

    );
}

export default Main;