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
            <div>
                <div className="text-white">

                    <div>
                        <h2>Ready</h2>
                        <span>Step 3/3</span>
                    </div>
                    <div>

                        <h3>Your Ticket is Booked</h3>
                        <small>Check your email for a copy</small>
                    
                    </div>
                    <div>
                        <div>
                            <h4>Techember Fest "25</h4>
                            <p>04 Rumens road, Ikoyi, Lagos</p>
                            <small>March 15, 2021 | 7.00pm</small>
                        </div>
                        {/* <Image src='./logo.png' alt='attendant' width={200} height={200}/> */}
                        <div>

                            <div>
                                <span>
                                    <small>Enter your name</small>
                                    <small>{attendeeDetails?.name}</small>
                                </span>
                                <span>
                                    <small>Enter your email*</small>
                                    <small>{attendeeDetails?.email}</small>
                                </span>
                                <span>
                                    <small>Ticket Type:</small>
                                    <small>{ticketDetails?.selectTicket}</small>
                                </span>
                                <span>
                                    <small>Ticket for:</small>
                                    <small>{ticketDetails?.ticketNumber}</small>
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
