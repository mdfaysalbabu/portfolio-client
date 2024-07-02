// Need to use the React-specific entry point to import createApi
import { baseApi } from '../baseApe'


// Define a service using a base URL and expected endpoints
export const blogsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => {
        return {
           url:"/blogs",
           method:"GET",
        }
      },
      providesTags:['blogs']
    }),
  
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetAllBlogsQuery} = blogsApi