import { useState } from "react"
import TestimonialBox from "./TestimonialBox"

function Testimonials() {
    const [data,setData] = useState([    
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            image: "profile-1.jpg",
            position: "Founder & CEO, Huddle",
            name: "Amjad"
        },
        {
            id: 2,
            desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            image: "profile-2.jpg",
            position: "Founder & CEO, Huddle",
            name: "Mohammed"
        },
        {
            id: 3,
            desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            image: "profile-3.jpg",
            position: "Founder & CEO, Huddle",
            name: "Masa"
        },
    ])
    return (
        <section className="pb-[350px]">
            <div className="container relative">
                <div className="absolute left-[20px] top-[-35px]">
                    <img src="/src/assets/images/bg-quotes.png"/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] relative z-10">
                    {data.map((item)=> (
                        <TestimonialBox key={item.id} desc={item.desc} image={item.image} position={item.position} name={item.name}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
