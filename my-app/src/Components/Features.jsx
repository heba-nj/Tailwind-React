import { useState } from "react"
import FeatureBox from "../Components/FeatureBox"

function Features() {
    const [items,setItems] = useState([
        {
            icon: "icon-access-anywhere.svg",
            title: "Access Your Files ,Anywhere",
            desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        },
        {
            icon: "icon-any-file.svg",
            title: "Store Ant Type Of File",
            desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        },
        {
            icon: "icon-collaboration.svg",
            title: "Real-Time Collaboration",
            desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        },
        {
            icon: "icon-access-anywhere.svg",
            title: "Store Any Type Of File",
            desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        },
    ])
    return (
        <section className="pb-[150px]">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[865] mx-auto max-w-full">
                    {items.map((item)=> (
                        <FeatureBox key={item.title} title={item.title} icon={item.icon} desc={item.desc} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
