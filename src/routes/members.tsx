const mem = [
    {
        name: 'Gunt Jakkaphat',
        id: '67070501056',
        img: 'https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/members/IMG_2924_dxobzs.jpg'
    },
    {
        name: 'Naan Thanakorn',
        id: '67070501061',
        img: 'https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/members/firefox_6WBLlt2Tij_cnqp8u.png'
    },
    {
        name: 'Ham Jirat',
        id: '66070501088',
        img: 'https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/members/firefox_W0rFxGP4kl_uj4zcg.png'
    },
    {
        name: 'Ball Natthapon',
        id: '63070507233',
        img: 'https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/members/firefox_9p8wYIfOg8_gy5ugj.png'
    }
]

export default function Members() {
    return (
        <section className="min-h-screen pb-4 lg:pb-0 w-full from-[#ECE9E6] to-white flex flex-col">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    className="w-full h-full object-cover"
                    src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/bg-g_y2msew.avif"
                    alt="Background"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-y-6 pt-16 px-8 lg:p-20">
                <h1 className="text-4xl lg:text-5xl text-center lg:text-left redhat-medium inline gap-x-3 items-center">
                    B01: Meet the team 👨‍👨‍👦‍👦
                </h1>
                <button 
                    className="absolute flex items-center justify-center top-15 right-24 w-12 h-12 rounded-md bg-transparent hover:bg-slate-500/10"
                    onClick={() => {
                        location.href = '/'
                    }}
                >
                    <svg width={36} height={36} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </button>
                <div className="inter-regular flex flex-col lg:mt-12 lg:flex-row gap-y-8 gap-x-20 xl:gap-x-32 items-center">
                    {mem.map((member, i) => (
                        <div className="flex flex-col gap-y-3 text-center mx-auto" key={i}>
                            <img src={member.img} className="max-h-[250px] rounded-md object-contain drop-shadow-xl" alt={`${member.name.split(" ")[0]}'s portrait`} />
                            <div className="flex flex-col">
                                <p className="text-xl inter-medium">{member.name}</p>
                                <p className="text-lg">{member.id}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
    

