import React, { useState } from "react";

const Covid = () => {
    const[Data, setData ]= useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch("https://data.covid19india.org/data.json")
            const actualData = await res.json();
            setData(actualData.statewise[0]);
        } catch (err) {

        }
    }

    useState(() => {
        getCovidData();
    }, []);
    // console.log(Data.deathslength)
    return (
        <>
            <div className="main_div flex flex-col bg-gray-800		items-center		 h-screen">
                <div className=" 	 	mt-2		flex flex-col items-center">
                    <h1 className="text_list text-center text-2xl	 drop-shadow-2xl  shadow-gray-400 font-bold	mt-10 animate-bounce	text-white">🔴 Live</h1>
                    <h2 className="text_list text-center text-5xl	font-medium drop-shadow-2xl  shadow-gray-400	mt-4	text-white" >Covid-19 CoronaVirus Tracker</h2>
                </div>


                <ol>
                <section className="place-content-around grid grid-cols-3 gap-16 " >
                    <li>
                        <div className="card  hover:cursor-pointer bg-gradient-to-b from-indigo-500 to-indigo-300 transition ease-out-in  delay-10  hover:-translate-y-1 hover:scale-110  duration-200  w-72 mt-9 rounded-xl  shadow-2xl shadow-black 	h-36 float-left" >
                            <div className="card-body text-center  space-y-3 > * + *	 items-center">
                                <h5 className="card-title text-3xl "><p className="font-medium mt-3 text-white">Country</p></h5>
                                <h6 className="card-subtitle font-medium text-white mb-2 drop-shadow-xl text-5xl">INDIA</h6>
                                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                
                            </div>
                        </div>

                        
                    </li>

                    <li>
                        <div className="card bg-gradient-to-b from-green-600 to-green-400 w-72 mt-9 transition ease-out-in  delay-10  hover:-translate-y-1 hover:scale-110  duration-200  rounded-xl shadow-2xl shadow-black hover:cursor-pointer	h-36 float-left" >
                            <div className="card-body text-center  space-y-3 > * + *	 items-center">
                                <h5 className="card-title text-3xl "><p className="font-semibold mt-3 text-white">Recovered</p></h5>
                                <h6 className="card-subtitle mb-2 font-medium text-white drop-shadow-xl text-5xl">{Data.recovered}</h6>
                                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                
                            </div>
                        </div>

                        
                    </li>


                    <li>
                        <div className="card  bg-gradient-to-b from-orange-600 to-orange-300 w-72 mt-9 transition ease-out-in  delay-10  hover:-translate-y-1 hover:scale-110  duration-200  rounded-xl shadow-2xl shadow-black hover:cursor-pointer	h-36 float-left" >
                            <div className="card-body text-center  space-y-3 > * + *	 items-center">
                                <h5 className="card-title text-3xl "><p className="font-semibold mt-3 text-white">Confirmed</p></h5>
                                <h6 className="card-subtitle mb-2 font-medium drop-shadow-xl text-white text-5xl">{Data.confirmed}</h6>
                                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                
                            </div>
                        </div>

                        
                    </li>


                    <li>
                        <div className="card bg-gradient-to-b from-red-600 to-red-400 w-72 mt-9 transition ease-out-in  delay-10  hover:-translate-y-1 hover:scale-110  duration-200 	h-36 rounded-xl shadow-2xl shadow-black hover:cursor-pointer float-left" >
                            <div className="card-body text-center  space-y-3 > * + *	 items-center">
                                <h5 className="card-title text-3xl "><p className="font-semibold mt-3 text-white">Deaths</p></h5>
                                <h6 className="card-subtitle mb-2 font-medium text-white drop-shadow-xl text-5xl">{Data.deaths}</h6>
                                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                
                            </div>
                        </div>

                        
                    </li>


                    <li>
                        <div className="card bg-gradient-to-t from-cyan-500 to-blue-500 w-72 transition ease-out-in  delay-10  hover:-translate-y-1 hover:scale-110  duration-200  mt-9 rounded-xl shadow-2xl shadow-black hover:cursor-pointer	h-36 float-left" >
                            <div className="card-body text-center  space-y-3 > * + *	 items-center">
                                <h5 className="card-title text-3xl "><p className="font-semibold drop-shadow-xl mt-3 text-white">Active</p></h5>
                                <h6 className="card-subtitle mb-2 font-medium text-white drop-shadow-xl text-5xl">{Data.active}</h6>
                                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                
                            </div>
                        </div>

                        
                    </li>


                    <li>
                        <div className="card bg-gradient-to-b from-amber-700 to-amber-400 rounded-xl transition ease-out-in  delay-10  hover:-translate-y-1 hover:scale-110  duration-200 w-72 mt-9 shadow-2xl shadow-black hover:cursor-pointer	h-36 float-left" >
                            <div className="card-body text-center  space-y-3 > * + *	 items-center">
                                <h5 className="card-title text-3xl "><p className="font-medium mt-3 text-white"><span>Last</span> Updated</p></h5>
                                <h6 className="card-subtitle  font-medium text-white drop-shadow-xl text-4xl">{Data.lastupdatedtime}</h6>
                                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                
                            </div>
                        </div>

                        
                    </li>
                    </section>
                    
                </ol>
            </div>

        </>
    );
};
export default Covid;