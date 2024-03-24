import padthai from "../../assets/padthai.png"
import madsaman from "../../assets/madsaman.png"
import firerice from "../../assets/firerice.png"

    
function Menu(){
    
    return(
        <div className="container mx-auto h-[90vh]">
            <div className="text-center mb-[60px] mt-[70px]">
                <h1 className="text-[42px] leading-3 font-bold font-head text-[#ffffff]">
                    Menu
                </h1>
            </div>
            <div className="flex flex-row gap-10 justify-center">
                {/* -1- */}
                <div className="card card-compact w-96 shadow-xl bg-orange-200 ">
                    <figure>
                        <img src={padthai} alt="padthai" />
                        </figure>
                    <div className="card-body text-stone-500">
                        <h2 className="card-title">Padthai</h2>
                        <p>The original grandma&apos;s Padthai</p>
                        <div className="card-actions justify-end">
                        <button 
                        className="btn bg-red-400  text-stone-100 border-0"
                        onClick={() =>  window.location.href='/booking'}
                        >Book a Table</button>
                        </div>
                    </div>
                </div>
                {/* -2- */}
                <div className="card card-compact w-96  bg-orange-200  shadow-xl">
                    <figure className="pt-20">
                        <img src={madsaman} alt="moosate" />
                        </figure>
                    <div className="card-body  text-stone-500">
                        <h2 className="card-title ">Moo Sa Te</h2>
                        <p>Homemie grill pork with bean sauce</p>
                        <div className="card-actions justify-end">
                        <button 
                        className="btn bg-red-400  text-stone-100 border-0"
                        onClick={() =>  window.location.href='/booking'}
                        >Book a Table</button>
                        </div>
                    </div>
                </div>
                {/* -3- */}
                <div className="card card-compact w-96  bg-orange-200  shadow-xl">
                    <figure className="pt-20">
                        <img src={firerice} alt="firerice" />
                        </figure>
                    <div className="card-body  text-stone-500 ">
                        <h2 className="card-title">Fire rice</h2>
                        <p>Homemie grill pork with bean sauce</p>
                        <div className="card-actions justify-end">
                        <button 
                        className="btn bg-red-400  text-stone-100 border-0"
                        onClick={() =>  window.location.href='/booking'}
                        >Book a Table</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

    );

}

export default Menu;