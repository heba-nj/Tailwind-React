function StayProductive() {
    return (
        <section className="pb-[150px]">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
                <div>
                    <img src="/src/assets/images/illustration-stay-productive.png" alt="stay-productive-img"/>
                </div>
                <div className="text-white">
                    <h3 className="font-medium text-[35px] leading-[50px]">
                        Stay Productive,
                        <br/>
                        Wherever You Are
                    </h3>
                    <div className="my-[15px] font-normal text-sm tracking-[0.8px]">
                        <p className="mb-[15px]">Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                    <a href="/"
                        className="text-primaryColor hover:text-[#42b8d1]
                        transition-colors duration-200 border-b-2 border-primaryColor
                        border-solid pb-[5px] flex items-center gap-[15px] w-fit">
                        See How Fylo Works
                        <img src="/src/assets/images/icon-arrow.svg"
                        alt="arrow-img"
                        className="w-[20px] h-[20px] object-contain animate-moveRight"/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default StayProductive
