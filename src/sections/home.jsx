import React from 'react';
import { Navbar } from '../components/navbar';
import heroimage from '../assets/hero.svg';
import { Button } from '../components/ui/button';
import eventsimg from '../assets/events.svg'
import eventdate from '../assets/dateevents.svg'
import locationimg from '../icons/location.svg'
import Countdown from 'react-countdown';
import { Card } from '@/components/cardcomponent';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import successimg from '../assets/successstory.svg'
import newsimg from '../assets/newspic.svg'
import { NewsCard } from '@/components/NewsCard';
//import footer from '../assets/Footer.svg'
import { Footer } from '@/components/footer';

function Home() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <section className='hero'>
                <Navbar />
            </section>

            { /* HERO SECTION */}

            <section className='herosection'>
                <div
                    style={{
                        backgroundImage: `url(${heroimage})`,
                        backgroundSize: "cover",
                        height: "100vh",
                        width: "100%",
                        color: "white"
                    }}
                >
                    <h1 className="text-5xl flex flex-col items-center font-[Montserrat]">
                        <span className="text-center font-bold mt-[50vh] mb-5">WELCOME TO</span>
                        <span className="text-center font-normal">SKYLINE UNIVERSITY</span>
                    </h1>
                    <Button className="flex justify-center bg-[#F7CA18] text-white border-none rounded-none mr-auto ml-auto mt-24 w-[10rem] font-bold text-[1rem]">Read Story</Button>
                </div>
            </section>

            { /* UPCOMMING EVENTS */}
            <section className='upcoming-event mt-14'>
                <div className='flex flex-col md:flex-row justify-center bg-[#FAF9F9]'>
                    <img src={eventsimg} alt="Event" className='w-full md:w-auto' />
                    <div className='flex flex-col items-start pl-4 md:pl-16'>
                        <h2 className='text-lg text-gray-500'>Upcoming Event</h2>
                        <h1 className='font-[Montserrat] font-bold text-2xl mt-2'>
                            <span>Annual meetup and </span>
                            <br />
                            <span>scholarship presentation</span>
                        </h1>
                        <div className='flex items-center mt-4'>
                            <img src={locationimg} alt="Location" className='mr-2' />
                            <p className='font-thin'>363 Lorem Ipsum Avenue Irmo, SC 29063</p>
                        </div>

                        <div className='flex flex-col md:flex-row items-stretch mt-20 align-middle'>
                            <Countdown className='font-[Montserrat] text-[30px] md:text-[50px] mr-0 md:mr-14' date={Date.now() + 500000 * 500} />
                            <Button className="mt-5 ml-0 md:ml-10 bg-[#F7CA18] text-white rounded-none px-10 md:px-16">Join Now</Button>
                        </div>
                    </div>

                    <img src={eventdate} alt='Event Date' className=' self-center ml-4' />
                </div>
            </section>



            {/* ***  */}

            <section className='mt-28 flex justify-center'>
                <div className='w-4/5'>
                    <div className='flex flex-col'>
                        <div className="flex flex-row justify-between">
                            <div>
                                <h1>
                                    <span className="text-xl font-normal">Why people Love Skyline</span>
                                    <br />
                                    <span className="text-4xl font-bold">Success Stories</span>
                                </h1>
                            </div>
                            <div>
                                <Button className=" bg-[#F7CA18] text-white rounded-none">VIEW ALL SUCCESS STORIES</Button>
                            </div>
                        </div >


                        <div className=' flex justify-center mt-5'>
                            <div className=' container'>
                                <Slider {...settings} className=' flex justify-center'>
                                    <div>
                                        <Card image={successimg} heading="Objectives Should Be Stated Clearly " para="“Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc.    “Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.    Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica.... Read More " />
                                    </div>
                                    <div>
                                        <Card image={successimg} heading="Objectives Should Be Stated Clearly " para="“Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc.    “Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.    Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica.... Read More " />
                                    </div>
                                    <div>
                                        <Card image={successimg} heading="Objectives Should Be Stated Clearly " para="“Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc.    “Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.    Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica.... Read More " />
                                    </div>
                                    <div>
                                        <Card image={successimg} heading="Objectives Should Be Stated Clearly " para="“Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc.    “Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.    Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica.... Read More " />
                                    </div>
                                    <div>
                                        <Card image={successimg} heading="Objectives Should Be Stated Clearly " para="“Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc.    “Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.    Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica.... Read More " />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            { /* HALL OF FAME    */}
            <section className=' mt-28 flex justify-center' >

                <div className='w-4/5'>
                    <div className="flex flex-row justify-between">
                        <div>
                            <h1>
                                <span className="text-xl font-normal"> Hall of Fame </span>
                                <br />
                                <span className="text-4xl font-bold"> Our Gallery </span>
                            </h1>
                        </div>
                        <div>
                            <Button className=" bg-[#F7CA18] text-white px-6 rounded-none"> View All </Button>
                        </div>
                    </div >

                    <div className=' grid grid-cols-4 gap-1 mt-9'>

                        <div>
                            <img src={successimg} />
                        </div>
                        <div>
                            <img src={successimg} />
                        </div>
                        <div>
                            <img src={successimg} />
                        </div>
                        <div>
                            <img src={successimg} />
                        </div>
                        <div>
                            <img src={successimg} />
                        </div>
                        <div>
                            <img src={successimg} />
                        </div>
                        <div>
                            <img src={successimg} />
                        </div>
                        <div>
                            <img src={successimg} />
                        </div>

                    </div>
                </div>

            </section>


            { /** LATEST NEWS SECTION */}


            <section className=' mb-36'>

                <div className=' mt-20 mb-10'>

                    <div className='grid lg:grid-cols-3 md:grid-cols-2'>
                        { }
                        <div className=' md:mb-3 flex flex-col justify-center flex-wrap content-center'>
                            <h1 className=' text-xl font-bold mb-4 ml-8'> Latest News </h1>
                            <div className=' max-h-96 overflow-y-auto'>
                                <div className=' grid grid-cols-1'>
                                    <div className=' mb-11 flex justify-center'>
                                        <NewsCard />
                                    </div>

                                    <div className=' mb-11 flex justify-center'>
                                        <NewsCard />
                                    </div>

                                    <div className=' mb-11 flex justify-center'>
                                        <NewsCard />
                                    </div>

                                    <div className=' mb-11 flex justify-center'>
                                        <NewsCard />
                                    </div>


                                </div>
                            </div>
                            <Button className = " bg-[#E9E9E9] text-black rounded-none hover:text-white w-[90%]" > Show More </Button>
                        </div>

                        <div className=' md:mb-3 flex flex-col justify-center flex-wrap content-center'>
                            <h1 className=' text-xl font-bold mb-4 ml-8'> Career Opportuinity </h1>
                            <div className=' max-h-96 overflow-y-auto'>
                                <div className=' grid grid-cols-1'>

                                    <div className=' mb-11 flex justify-center'>
                                        <NewsCard />
                                    </div>

                                    <div className=' mb-11 flex justify-center'>
                                        <NewsCard />
                                    </div>

                                    <div className=' mb-11 flex justify-center'>
                                        <NewsCard />
                                    </div>

                                    <div className=' mb-11 flex justify-center'>
                                        <NewsCard />
                                    </div>


                                </div>
                            </div>
                            <Button className = " bg-[#E9E9E9] text-black rounded-none hover:text-white w-[90%]" > Show More </Button>

                        </div>

                        <div className=' md:mb-3 flex flex-col justify-center flex-wrap content-center'>
                            <h1 className=' text-xl font-bold mb-4 ml-8'> Event Calender </h1>
                            <div className=' max-h-96 overflow-y-auto'>
                                <div className=' grid grid-cols-1'>

                                    <div className=' mb-11 flex justify-center'>
                                        <NewsCard />
                                    </div>

                                    <div className=' mb-11 flex justify-center'>
                                        <NewsCard />
                                    </div>

                                    <div className=' mb-11 flex justify-center'>
                                        <NewsCard />
                                    </div>

                                    <div className=' mb-11 flex justify-center'>
                                        <NewsCard />
                                    </div>


                                </div>
                            </div>
                            <Button className = " bg-[#E9E9E9] text-black rounded-none hover:text-white w-[90%]" > Show More </Button>

                        </div>

                    </div>

                </div>

            </section>


            <section >

                <div className=' flex justify-center align-middle max-h-[30rem]' style={{
                    backgroundImage: `url(${heroimage})`,
                    backgroundSize: "cover",
                    height: "100vh",
                    width: "100%",

                }}>
                    <div className='flex flex-col bg-[#1A265CF0] items-center justify-center w-full text-center p-4'>
                        <h1 className='text-white mb-4 font-normal font-[Monserrat] text-3xl'>Don’t Miss Awesome Story From Our Skyline</h1>
                        <p className='text-white mb-4'>Duis autem vel eum iriure dolor in hendrerit in vulputate.</p>
                        <input
                            type='text'
                            placeholder='Enter your Email'
                            className='mb-4 p-2 w-3/4 max-w-md '
                        />
                        <Button className=' bg-[#F7CA18] rounded-none mt-3'>SUBSCRIBE</Button>
                    </div>

                </div>
            </section>


            { /**  Footer  */}
            <section >

                <Footer />
            </section>

            <div className=' bg-[#1A265C] h-12 max-w-screen static'></div>

        </>
    );
}

export default Home;
