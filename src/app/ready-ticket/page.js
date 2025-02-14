'use client'

import Image from "next/image"


import {useEffect, useState} from 'react'
import Button from "../component/button"


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

    
    
  return (
        <>
            <div className='flex jusitfy-center align-center h-auto py-[40px] sm:border-2 sm:border-red-400 md:border-blue-400 lg:border-green-400'>
           

                <div className="p-[24px] rounded-[12px] border-2 self-center bg-[#08252B] mx-auto w-[90%] sm:w-[75%] overflow-hidden border-[#0E464F] text-white">

                    <div className="relative border-b-2 mb-[2rem] flex flex-row justify-between  pb-3 border-[#0E464F] text-white">
                        <h2>Ready</h2>
                        <span>Step 3/3</span>

                        <span className="absolute block -bottom-[.1rem] w-[300px] bg-[#24A0B5] h-[.1rem] left-0"></span>
                    </div>
                    <div className="text-center mb-8">

                        <h3 className="font-normal text-[24px]">Your Ticket is Booked</h3>
                        <small >You can download or Check your email for a copy</small>
                    
                    </div>

                    <div className="p-[20px] relative curved_inward h-[600px]">
                        <div className="rounded-[24px] p-4 mt-[.2rem] border-2 border-[#71A7AF] ">
                        <div className="text-center">
                            <h4 className="font-normal text-[34px] font-roadRage">Techember Fest "25</h4>
                            <p className=" font-normal text-[10px]"> <ion-icon name="pin-sharp" className='text-red-500'></ion-icon>04 Rumens road, Ikoyi, Lagos</p>
                            <small className="text-[10px] font-normal"> <ion-icon name="calendar-number-sharp" className='text-red-500'></ion-icon> &nbsp; March 15, 2021 | 7.00pm</small>
                        </div>
                        <div className="flex justify-center my-[.5rem] h-[140px] overflow-hidden">
                        <Image src={`${attendeeDetails?.photo}`} alt='attendant' width={200} height={200} className="w-[70%] h-auto object-contain rounded-[24px] border-2 border-red"/>
                        </div>
                        
                        <div className=" rounded-md border-2 border-[#133D44] bg-[#08343C] p-2">

                            <div className="flex flex-row flex-wrap w-full border-b-2 border-[#12464E] my-1 overflow-hidden">
                                <span className="block py-[.3rem] pl-1  border-b-2 border-[#12464E] w-[50%] ">
                                    <small className="block text-[10px] text-[#FFFFFF] opacity-20 font-[Roboto] font-normal">Enter your name:</small>
                                    <small className="block font-bold text-[12px]">{attendeeDetails?.name}</small>
                                </span>
                                <span className="block  py-[.3rem] border-b-2 border-l-2 pl-2 border-[#12464E] w-[50%]">
                                    <small className="block text-[10px] text-[#FFFFFF] opacity-20 font-[Roboto] font-normal">Enter your email*</small>
                                    <small className="block font-bold text-[12px] truncate">{attendeeDetails?.email}</small>
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
                                <small className="font-[Roboto] text-[10px] break-words font-normal ">
                                    {attendeeDetails?.subject}
                                </small>
                            </div>
                        </div>
                    </div>
                        <div className="absolute bottom-2 left-0 w-full flex justify-center">
                            <img src="./barcode.png" alt="bar code"/>
                                            </div>

                    </div>

                    <div className="pt-4 flex gap-4 flex-col">
                            <Button 
                            children='Download Ticket'
                            className='bg-[#24A0B5]'/>
                            <Button children='Book AnotherTicket'
                            className='bg-transparent border-2 border-[#24A0B5]'/>

                        </div>
                    
                    
                

                </div>

            </div>
        </>
  )
}

export default ReadyTicket
