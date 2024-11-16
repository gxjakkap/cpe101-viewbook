export default function Week3() {
    return (
        <section className="min-h-screen w-full bg-gradient-to-tr from-zinc-100 from-40% via-[#dbe9f7] via-50% to-zinc-100 to-70% text-slate-900 flex flex-col gap-y-8 pt-16 px-8 lg:p-20">
            <h1 className="text-4xl lg:text-[2.5rem] text-center lg:text-left redhat-medium scroll-mt-14" id="week3">
                Week 3: Computer Aided Design
            </h1>
            <div className="flex flex-col gap-y-8 lg:gap-y-4 items-center mx-auto lg:items-start py-2">
                <div className="flex flex-col-reverse w-full lg:flex-row gap-x-12 gap-y-4 lg:gap-y-0">
                    <div className="flex flex-col gap-y-2 lg:gap-y-4">
                        <img className="lg:max-h-[300px] object-contain" src="https://res.cloudinary.com/dynrld3nm/image/upload/cpe101viewbook/week3/IMG_0406-cropped_h5wx1u.jpg"/>
                    </div>
                    <p className="text-lg lg:text-xl text-left lg:pt-3 inter-regular lg:mt-6 max-w-screen-md">
                        &nbsp;&nbsp;&nbsp;&nbsp;Since we're "engineers", we should know how to design. This class taught us the basics of <span className="font-bold">Computer Aided Design (CAD)</span>, both 2D and 3D. Tools we used in this class was <span className="font-bold">AutoCAD</span> which would later proved to be useful for our midterm project.
                    </p>
                </div>
            </div>
        </section>
    )
}
