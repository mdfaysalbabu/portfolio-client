import { TBlog } from "@/types";

const BlogPage = async() => {
    const res=await fetch('http://localhost:5000/api/v1/blogs',{
        cache:'force-cache'
    });
    const blogs=await res.json();
    return (
        <div className="grid grid-cols-2 gap-10 min-h-screen py-32 mx-10">
            {
                blogs?.data?.map((item:TBlog)=>
                    <div
                //   change md:w-[450px] to md:w-[60vw] , px-8 py-6 to p-16, border-slate-700 to border-slate-800
                className="w-[90vw] max-w-full relative rounded-2xl border border-b-0
                 flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
                style={{
                  //   background:
                  //     "linear-gradient(180deg, var(--slate-800), var(--slate-900)", //remove this one
                  //   add these two
                  //   you can generate the color from here https://cssgradient.io/
                  background: "rgb(4,7,29)",
                  backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                }}
                // change to idx cuz we have the same name
                key={item?._id}
              >
                <blockquote>
                  <div
                    aria-hidden="true"
                    className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                  ></div>
                  {/* change text color, text-lg */}
                  <span className=" relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
                    {item.quote}
                  </span>
                  <div className="relative z-20 mt-6 flex flex-row items-center">
                    {/* add this div for the profile img */}
                    <div className="me-3">
                      <img className="w-10 h-10 rounded-full" src={item?.file} alt="profile" />
                    </div>
                    <span className="flex flex-col gap-1">
                      {/* change text color, font-normal to font-bold, text-xl */}
                      <span className="text-xl font-bold leading-[1.6] text-white">
                        {item?.authorName}
                      </span>
                      {/* change text color */}
                      <span className=" text-sm leading-[1.6] text-white-200 font-normal">
                        {item.title}
                      </span>
                    </span>
                  </div>
                </blockquote>
              </div>
                )
            }
        </div>
    );
};

export default BlogPage;