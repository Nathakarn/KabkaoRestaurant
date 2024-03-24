import madsaman from "../../assets/madsaman.png"

function About(){
    return(
        <div className="container mx-auto max-w-[1344px]">
            <div className="flex flex-col gap=[44px] p-5 py-6 min-h-screen h-auto justify-center md:p-0 lg:p-10 lg:items-center lg:flex-row lg:justify-between lg:gap-5 overflow-hidden">
                <img 
                src={madsaman}
                alt="madsaman"
                className="w-[500px] h-auto object-cover relative sm:w-[500px] md:w-[600px] lg:w-[800px]"
                 />
                 <section className="flex flex-col gap-5 ml-[30px] sm:items-center text-center lg:text-left lg:gap-5 lg:items-start" >
                    <h1 className="text-2xl leading-6 sm:w-4/5 md:text-5xl md:w-4/5 font-bold font-head text-[#ff854d] lg:text-6xl lg:left-1">
                        About KOBKAO family
                    </h1>
                    <p className="text-lg font-body text-[#493227]">
                    From fresh,locally-sourced ingredients to a curated wind selection,
                    evert detail is crafted to elevate ypur dining experiance. Discover 
                    a symphony of tastes and textures at KABKAO.
                    Enjoy with family
                    </p>
                </section>
                
            </div>
        </div>

    );
}

export default About;