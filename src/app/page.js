'use client'

import { useRouter } from "next/navigation";
import {useState} from 'react'
import Button from "./component/button";

export default function Home() {

  const route  = useRouter()

  const [selectTicket, setSelectTicket] = useState('')
  const [ticketNumber, setTicketNumber] = useState('')

  

  
  const handleSubmit = (e) =>{ 
    e.preventDefault(); 

    const ticketDetails = { 
      selectTicket:document.querySelector('input[name="ticket"]:checked')?.value,  
      ticketNumber
    }

    localStorage.setItem('ticketDetails', JSON.stringify(ticketDetails))

    route.push('/attendee-details')

    console.log(localStorage.getItem('ticketDetails'))
  }
  
 


  return (
    <>
      

      <div className=" flex jusitfy-center align-center h-auto py-[40px] sm:border-2 sm:border-red-400 md:border-blue-400 lg:border-green-400">
        <div className="p-[24px] md:w-[78%] md:max-w-[570px] rounded-[12px] border-2 self-center bg-[#08252B] mx-auto w-[90%] sm:w-[75%] overflow-hidden border-[#0E464F]">
          <div className="border-b-2 relative flex flex-row flex-wrap justify-between mb-[2rem]  pb-3 border-[#0E464F] text-white">                
              <h2 className=" text-[24px] font-jeju text-center">
                  Ticket Selection
                </h2>
                <span className="font-roboto text-[1rem]">
                  Step 1/3
                </span>
                <span className="absolute -bottom-[.1rem] w-[70px] bg-[#24A0B5] h-[.1rem] left-0"></span>

              </div>

          <div>

              <div className="border-2 border-[#07373F] ticket_bg rounded-[24px] text-white overflow-hidden py-[16px] px-[24px]">
                <h1 className="font-roadRage text-[48px] text-center sm:text-[62px]">Techember Fest "25</h1>
                <div className="flex justify-center w-full"><p className="text-[1rem] text-center md:w-[300px] mb-6">Join us for an unforgettable experience at: [Event Name]! Secure your spot now. </p></div>
                
                
              
                    <small className="text-center font-roboto text-[1rem] block">
                    <ion-icon name="pin-sharp" className='text-red-500'></ion-icon>
                  [Event Location] <br/> March 15, 2025 | 7:00 PM
                  </small>
               

                </div>

                <span className="w-[100%] mt-[32px] bg-[#07373F] h-[.3rem] rounded-md block"></span>
                <form onSubmit={handleSubmit}>
              <div className="text-white mt-[32px] text-[1rem] font-[Roboto]">

                <h6 className="mb-2 font-normal text-[1rem]" >Select Ticket Type: </h6>
              
                    <div className="border-2 sm:flex-row sm:flex-wrap flex flex-col gap-[24px] border-[#07373F] font-[Roboto] p-[16px] rounded-[24px] bg-[#052228]">
                      
                        <label htmlFor="free" className={`p-[12px] sm:w-[180px] md:w-[145px] relative border-2 border-[#197686] hover:bg-[#197686] rounded-[12px] h-[110px] block ${selectTicket === 'free' ?  'event-checked': 'border-2 border-[#197686]'  }`}>
                          <input type="radio" className=" opacity-0 absolute top-0 left-0" id="free" name="ticket" value='free' onChange={(e)=>{setSelectTicket(e.target.value)}}/>
                          <span className="block font-semibold text-[24px] ">Free</span>
                           <small className="block font-normal text-[1rem]">Regular Access <br/> 20/25</small>  
                        </label>
                        
                      

                      
                        <label htmlFor="vip" className={`p-[12px] sm:w-[180px] md:w-[145px] relative border-2 border-[#197686] hover:bg-[#197686] rounded-[12px] h-[110px] block ${selectTicket === 'vip' ?  'event-checked': 'border-2 border-[#197686]' }`}>
                        <input type="radio" id="vip" className=" opacity-0 absolute top-0 left-0" name="ticket" value='vip' onChange={(e)=>{setSelectTicket(e.target.value)}}/>
                         <span className="block font-semibold text-[24px]">$150</span>
                          <small className="block font-normal text-[1rem]">VIP ACCESS  <br/>20/25</small>
                        </label>
                        
                      
                      
                        <label htmlFor="vvip" className={`p-[12px] sm:w-[180px] md:w-[145px] relative border-2 border-[#197686] hover:bg-[#197686] rounded-[12px] h-[110px] block ${selectTicket === 'vvip' ? 'event-checked' :  'border-2 border-[#197686]'}`}>
                        <input type="radio" className=" opacity-0 absolute top-0 left-0" id="vvip" name="ticket" value='vvip' onChange={(e)=>{setSelectTicket(e.target.value)}}/>
                          <span className="block font-semibold text-[24px]">$150</span>
                          <small className="block font-normal text-[1rem]">VVIP Access <br/> 20/25</small>
                        </label>
                        
                      
                    
                    </div>
              </div>


              <div className="py-5 text-white">

                <h6 className="mb-2">Number of Tickets:</h6>

                

                  <div>
                    
                      <select id="ticketNumber" className="border-2 border-[#07373F] p-[12px] bg-transparent w-full rounded-[12px]" value={ticketNumber} onChange={(e)=>setTicketNumber(e.target.value)}>
                        
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                      </select>
                      
                  </div>
                
                
              </div>
          
            <div className="flex flex-col md:flex-row gap-4 text-white justify-center">

              <Button
              
              children='Next'
              className='bg-[#24A0B5] '/>
              <Button
              
              children='Cancel'
              className='bg-transparent border-2 border-[#24A0B5] '/>
            </div>

            </form>
          </div>
    
        </div> 
        </div>
          </>
  );
}

