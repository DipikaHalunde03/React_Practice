import React from "react";

function Card({username,designation,location="default value "})
{
    //console.log("props",props);
    console.log(username);
    return(
        <>
       
        <div>
              <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 max-w-sm mx-auto" >
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/27425922/pexels-photo-27425922/free-photo-of-a-close-up-of-a-red-and-green-bush-with-berries.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512">
</img>
<div className="pt-6 md:p-8 text-center md:text-left space-y-4">
  <blockquote>
    <p className="text-lg font-medium">
      “Tailwind CSS is the only framework that I've seen scale
      on large teams. It’s easy to customize, adapts to any design,
      and the build size is tiny.”
    </p>
  </blockquote>
  <figcaption className="font-medium">
    <div className="text-sky-500 dark:text-sky-400">
        <h2>
        {username}
            </h2>
      
    </div>
    <div className="text-slate-700 dark:text-slate-500">
    <h2>
        {designation}
            </h2>
    </div>
    <div className="text-slate-700 dark:text-slate-500">
    <h2>
        {location || "visite me "}
            </h2>
    </div>
  </figcaption>
</div>
</figure> 

        </div>

        </>
    );

}
export default Card