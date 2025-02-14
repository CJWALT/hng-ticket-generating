'use client'

import Image from "next/image"


import {useEffect, useState} from 'react'


const ReadyTicket = () => {

    const [ticketDetails, setTicketDetails] = useState(null)
    const [attendeeDetails, setAttendeeDetails] = useState(null)


    useEffect(()=>{ 
        
        const attendeeTicketDetails = localStorage.getItem( 'ticketDetails')

        const attendeeInfo = localStorage.getItem('attendeeDetails', )

        if(attendeeTicketDetails){ 
            setTicketDetails(JSON.parse(attendeeTicketDetails))
        }

        if(attendeeInfo){ 
            setAttendeeDetails(JSON.parse(attendeeInfo))
        }
        
    }, [])
    console.log(ticketDetails)
    console.log(attendeeDetails)
  return (
        <>
            <div className='flex jusitfy-center align-center h-auto py-[40px] sm:border-2 sm:border-red-400 md:border-blue-400 lg:border-green-400'>
                <div className="p-[24px] rounded-[12px] border-2 self-center bg-[#08252B] mx-auto w-[90%] sm:w-[75%] overflow-hidden border-[#0E464F] text-white">

                    <div className="relative border-b-2 mb-[2rem] flex flex-row justify-between  pb-3 border-[#0E464F] text-white">
                        <h2>Ready</h2>
                        <span>Step 3/3</span>

                        <span className="absolute -bottom-[.1rem] w-[70px] bg-[#24A0B5] h-[.1rem]"></span>
                    </div>
                    <div className="text-center mb-8">

                        <h3 className="font-normal text-[24px]">Your Ticket is Booked</h3>
                        <small >You can download or Check your email for a copy</small>
                    
                    </div>

                    <div className="p-[20px] border-2 border-red-400 curved_inward">
                        <div className="rounded-[24px] border-2 border-red-400 p-4 mt-12">
                        <div className="text-center">
                            <h4 className="font-normal text-[34px] font-[Road Rage]">Techember Fest "25</h4>
                            <p className=" font-normal text-[10px]">04 Rumens road, Ikoyi, Lagos</p>
                            <small className="text-[10px] font-normal">March 15, 2021 | 7.00pm</small>
                        </div>
                        <Image src='/logo.png' alt='attendant' width={200} height={200}/>
                        <div className=" rounded-md border-2 border-[#133D44] bg-[#08343C] p-2">

                            <div className="flex flex-row flex-wrap w-full border-b-2 border-[#12464E] my-1 overflow-hidden">
                                <span className="block py-[.3rem] pl-1  border-b-2 border-[#12464E] w-[50%] ">
                                    <small className="block text-[10px] text-[#FFFFFF] opacity-20 font-[Roboto] font-normal">Enter your name:</small>
                                    <small className="block font-bold text-[12px]">{attendeeDetails?.name}</small>
                                </span>
                                <span className="block  py-[.3rem] border-b-2 border-l-2 pl-2 border-[#12464E] w-[50%]">
                                    <small className="block text-[10px] text-[#FFFFFF] opacity-20 font-[Roboto] font-normal truncate">Enter your email*</small>
                                    <small className="block font-bold text-[12px]">{attendeeDetails?.email}</small>
                                </span>
                                <span className="block  py-[.3rem] pl-1  w-[50%]">
                                    <small className="block text-[10px] text-[#FFFFFF] opacity-20 font-[Roboto] font-normal">Ticket Type:</small>
                                    <small className="block text-[10px]">{ticketDetails?.selectTicket}</small>
                                </span>
                                <span className="block  py-[.3rem] border-l-2 pl-2 border-[#12464E] w-[50%]">
                                    <small className="block text-[10px] text-[#FFFFFF] opacity-20 font-[Roboto] font-normal">Ticket for:</small>
                                    <small className="block text-[10px]">{ticketDetails?.ticketNumber}</small>
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <h6 className="block text-[10px] text-[#FFFFFF] opacity-20 font-[Roboto] font-normal">
                                    Special Request? 
                                </h6>
                                <small className="font-[Roboto] text-[10px] font-normal ">
                                    {attendeeDetails?.subject}
                                </small>
                            </div>
                        </div>
                    </div>


                    </div>
                    
                    <div>

                    </div>
                

                </div>

            </div>
        </>
  )
}

export default ReadyTicket
