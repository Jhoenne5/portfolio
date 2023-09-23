import Image from "next/image"


export const Services = () => {
  return (
      <div>
         <div className="mx-auto">
         <h2 className="text-4xl">What I can offer</h2>
         </div>

         <div className="my-10 flex gap-15 py-2">
       
       <div>
     
       </div>     
  <div className="flex flex-col sm:flex-row">

  <div class="rounded overflow-hidden shadow-lg basis-1/3  transform transition-transform duration-300 ">

 <div class="px-6 py-4 basis-1/3">
   <div class="font-bold text-xl mb-2">Web Development Services</div>
   <p class="text-gray-700 text-base">
           Create responsive and visually appealing websites using HTML, CSS, and JavaScript.
          Develop custom web applications using the MERN stack (MongoDB, Express, React, Node.js).
          Build static websites with Next.js for improved performance.
          Customize WordPress websites to meet specific client requirements.
   </p>
 </div>
 <div class="px-6 pt-4 pb- 2">
   <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Next.js</span>
   <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MERN stack</span>
   <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">WordPress </span>
 </div>
</div>



<div class="max-w-sm rounded overflow-hidden shadow-lg basis-1/3">
<div class="px-6 py-4">
 <div class="font-bold text-xl mb-2">Front-End Development</div>
 <p class="text-gray-700 text-base">
 Design and implement user interfaces (UI) using HTML, CSS, and JavaScript.
          Develop interactive web applications with React.js.
          Utilize Tailwind CSS for efficient and modern styling.
 </p>
</div>
<div class="px-6 pt-4 pb-2">
 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React.js</span>
 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>
 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> Tailwind CSS</span>
</div>
</div>



<div class="max-w-sm rounded overflow-hidden shadow-lg basis-1/3">
<div class="px-6 py-4">
 <div class="font-bold text-xl mb-2">Back-End Development</div>
 <p class="text-gray-700 text-base">
           Build server-side logic using Node.js and Express.js.
          Implement authentication and security using JWT (JSON Web Tokens).
 </p>
</div>
<div class="px-6 pt-4 pb-2">
 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Node.js </span>
 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Express.js.</span>
 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JWT</span>
</div>
</div>



<div class="max-w-sm rounded overflow-hidden shadow-lg basis-1/3">
<div class="px-6 py-4">
 <div class="font-bold text-xl mb-2">Database Development</div>
 <p class="text-gray-700 text-base">
    Design and manage databases using MongoDB.
    Create efficient database schemas and perform CRUD operations.
 </p>
</div>
<div class="px-6 pt-4 pb-2">
 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MongoDB</span>
 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CRUD </span>
</div>
</div>



  </div>
   </div>
      </div>
  )
}