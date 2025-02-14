'use client'

import {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation'
import Button from '../component/button'

const AttendeeDetails = () => {
    

        const [photo, setPhoto] = useState(null)
        const [name, setName] = useState('')
        const [email, setEmail] = useState('')

        const [loading, setLoading] = useState(false)
        const [subject, setSubject] = useState('')

        const router = useRouter();


        const handlePhotoChange = async (e) =>{ 
            e.preventDefault();
                const file = e.target.files[0]
                if(!file)   return;

                setPhoto(URL.createObjectURL(file));

                const formData = new FormData(); 
                formData.append('file', file); 

                formData.append('upload_preset', 'attendeeimage' )
        
                setLoading(true);

                try{ 
                    const res = await fetch('https://api.cloudinary.com/v1_1/diw7yga8q/image/upload',{ 
                        method:'POST',
                        body:formData,
                    });

                    const data = await res.json();
                    console.log(data)
                    setPhoto(data.secure_url)
                }
                catch(err){ 
                    console.error('Upload failed:', err)
                }

                setLoading(false);


        }   

        const validateForm = () => {
            if (!name.trim()) return { valid: false, message: "Name is required" };
            if (!email.trim()) return { valid: false, message: "Email is required" };
            if (!/\S+@\S+\.\S+/.test(email)) return { valid: false, message: "Invalid email format" };
            if (!subject.trim()) return { valid: false, message: "Message is required" };
            return { valid: true };
          };

        const handleSubmit =(e)=>{ 
            e.preventDefault();


            const validateData = validateForm()
            
            // console.log(photo)
            
            if(!validateData.valid){ 
                alert(validateData.message)
                return;
            }
            const attendeeDetails = { 
                photo, 
                name, 
                email, 
                subject
            };

            localStorage.setItem('attendeeDetails', JSON.stringify(attendeeDetails));

            router.push('/ready-ticket')
        
            
        }

        
console.log(photo)
        
  return (
    <>      

        <div className='flex jusitfy-center align-center h-auto py-[40px] sm:border-2 sm:border-red-400 md:border-blue-400 lg:border-green-400'>

            <div className="p-[24px] text-white rounded-[12px] border-2 self-center bg-[#08252B] mx-auto w-[90%] sm:w-[75%] overflow-hidden border-[#0E464F]">
            <div className="border-b-2 mb-[2rem]  pb-3 border-[#0E464F] relative text-white">                
              <h2 className=" text-[24px]">
                  Attendee Details
                </h2>
                <span className="font-[roboto] text-[1rem]">
                  Step 2/3
                </span>
                <span className="absolute -bottom-[.1rem] w-[150px] bg-[#24A0B5] h-[.1rem] left-0"></span>
              </div>
                <div>
                    <form>

                    <div className='border-2 border-[#07373F] bg-[#24A0B] rounded-[24px] text-white overflow-hidden py-[16px] px-[24px]'>
                        <h5 className='mb-4 font-roboto text-[1rem]'>Upload Profile Photo</h5>

                        <div>

                            
                        <div className='border-2 border-[#24A0B5] rounded-[24px] flex flex-col justify-center h-[200px] w-[80%] mx-auto text-white overflow-hidden'>

                            {photo ? (
                                <img src={photo}
                                alt='uploaded preview'
                                className='w-full h-full object-cover'/>
                            ) : (
                            <label htmlFor='draganddrop' className='font-normal font-roboto text-[1rem] text-center'>Drag & drop or click to upload</label>
                            )}                                
                                <input type='file' accept='image/*' id='draganddrop' className='hidden' onChange={handlePhotoChange} />
                            </div>
                        </div>

                    </div>
                    <span className="w-[100%] mt-[32px] bg-[#07373F] h-[.3rem] rounded-md block"></span>
                                <div className='flex flex-col gap-4 mt-[32px] text-[#FAFAFA]'>
                                <div>
                            <label htmlFor='name' className='font-roboto font-normal text-[1rem]'>
                                Enter your name
                            </label>
                            <input type='text' id='name' value={name} onChange={(e)=>setName(e.target.value)} className='mt-2 h-[48px] w-full rounded-[14px] p-[12px] bg-transparent border-2 border-[#07373F]' required/>        
                        </div>
                        <div>
                            <label htmlFor='email' className='font-roboto font-normal text-[1rem]'>
                                Enter your email*
                            </label>
                            <input type='text' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='hello@avioflagos.io' className='mt-2 h-[48px] w-full rounded-[14px] p-[12px] pl-[30px] bg-transparent border-2 border-[#07373F]' required/>        
                        </div>
                        <div>
                            <label htmlFor='name' className='font-roboto font-normal text-[1rem]'>
                                About the Project
                            </label>
                            <textarea rows={3} columns={30} value={subject} placeholder='textarea' onChange={(e)=>setSubject(e.target.value)} className='mt-2 h-[127px] p-[12px] w-full rounded-[14px] bg-transparent border-2 border-[#07373F] resize-none' required/>
                        </div>
                        <div className='gap-4 flex flex-col'>
                            <Button 
                            className='bg-[#24A0B5]'
                            handleClick={handleSubmit}
                            children='Get My Free Ticket'/>
                        
                        <Button              
                            children='Back'
                            handleClick={()=>router.push('/')}
                            
                            className='bg-transparent border-2 border-[#24A0B5]'/>
                        </div>

                                </div>
                        
                        

                    </form>
                </div>
            </div>
        </div>

    </>
  )
}

export default AttendeeDetails;
