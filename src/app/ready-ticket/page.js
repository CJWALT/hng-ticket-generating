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

                    <div className="border-b-2 mb-[2rem] flex flex-row justify-between  pb-3 border-[#24A0B5] text-white">
                        <h2>Ready</h2>
                        <span>Step 3/3</span>
                    </div>
                    <div className="text-center">

                        <h3 className="font-normal text-[24px]">Your Ticket is Booked</h3>
                        <small>You can download or Check your email for a copy</small>
                    
                    </div>
                    <div className="border-2 border-red-400 rounded-[24px] p-4 mt-12">
                        <div className="text-center">
                            <h4 className="font-normal text-[34px] font-[Road Rage]">Techember Fest "25</h4>
                            <p className=" font-normal text-[10px]">04 Rumens road, Ikoyi, Lagos</p>
                            <small className="text-[10px] font-normal">March 15, 2021 | 7.00pm</small>
                        </div>
                        {/* <Image src='./logo.png' alt='attendant' width={200} height={200}/> */}
                        <div>

                            <div className="flex flex-row flex-wrap border-2 border-red-400 w-full overflow-hidden">
                                <span className="block border-2 border-red-400 w-[50%]">
                                    <small className="block">Enter your name:</small>
                                    <small className="block">{attendeeDetails?.name}</small>
                                </span>
                                <span className="block border-2 border-red-400 w-[50%]">
                                    <small className="block">Enter your email*</small>
                                    <small className="block">{attendeeDetails?.email}</small>
                                </span>
                                <span className="block border-2 border-red-400 w-[50%]">
                                    <small className="block">Ticket Type:</small>
                                    <small className="block">{ticketDetails?.selectTicket}</small>
                                </span>
                                <span className="block border-2 border-red-400 w-[50%]">
                                    <small className="block">Ticket for:</small>
                                    <small className="block">{ticketDetails?.ticketNumber}</small>
                                </span>
                            </div>
                            <div>
                                <h6>
                                    Special Request? 
                                </h6>
                                <small>
                                    {attendeeDetails?.subject}
                                </small>
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
