"use server"
export const getProjects=async()=>{
    const res=await fetch('https://portfolio-backend-two-snowy.vercel.app/api/v1/projects',{
        cache:'force-cache'
    });
    const projects=await res.json();
    return projects;
}