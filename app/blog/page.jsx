import Link from 'next/link'
import React from 'react'

const BlogDetails = () => {
  return < >
  

<div className="bg-black">
  <div className="max-w-2xl px-6 py-16 mx-auto space-y-12 ">
	<article className="space-y-8  text-gray-700">
		<div className="space-y-6">
			<h1 className="text-4xl text-[#b4abe5] font-bold md:tracki md:text-5xl">Suspendisse ut magna et ipsum sodales accumsan.</h1>
			<div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
				<div className="flex items-center md:space-x-2">
					<img src="https://source.unsplash.com/75x75/?portrait" alt="" className="w-15 h-18 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
					<p className="text-sm">Leroy Jenkins • July 19th, 2021</p>
				</div>
				<p className="flex-shrink-0 mt-3 text-sm md:mt-0">4 min read • 1,570 views</p>
			</div>
		</div>
		<div className="text-gray-200">
			<p>Insert the actual text content here...</p>
			<p>nulla magnam, voluptatibus nesciunt itaque nemo obcaecati.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita dolore error numquam id necessitatibus, vel quidem animi ea vitae libero, voluptatibus temporibus quos voluptatum deleniti assumenda minima atque, quo cumque?</p>

            <div class="max-w-4xl px-10  mx-auto text-2xl text-gray-700 mt-4 rounded bg-gray-100">


<div>
       <p class="mt-2 p-8">If you created a web application and wanted it to grow a user base reall quickly,the easiest way is to avoid bothering them with alot forms. No one likes filling up forms! A web form should and must only be used when necessary,in case a user doesnt have account with any of the social networks.That is the moment you want to implement social login on your application.</p>
</div>



   </div>

		</div>
	</article>
	<div>
		<div className="flex flex-wrap py-6 space-x-2 border-t border-dashed dark:border-gray-100">
			<a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900">#MambaUI</a>
			<a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-blue-600 dark:text-gray-300">#TailwindCSS</a>
			<a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-red-600 dark:text-gray-300">#Angular</a>
		</div>
		<div className="space-y-2">
			<h4 className="text-lg font-semibold">Related posts</h4>
			<ul className="ml-4 space-y-1 text-white list-disc">
				<li>
					<Link rel="noopener noreferrer" href="#" className="hover:underline">Nunc id magna mollis</Link>
				</li>
				<li>
					<Link rel="noopener noreferrer" href="#" className="hover:underline">Duis molestie, neque eget pretium lobortis</Link>
				</li>
				<li>
					<Link rel="noopener noreferrer" href="#" className="hover:underline">Mauris nec urna volutpat, aliquam lectus sit amet</Link>
				</li>
			</ul>
		</div>
	</div>
</div>



</div>

  
      
  
  </>
}

export default BlogDetails
