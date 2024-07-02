"use server"
export const getProjects=async()=>{
    const res=await fetch('http://localhost:5000/api/v1/projects',{
        cache:'force-cache'
    });
    const projects=await res.json();
    return projects;
}