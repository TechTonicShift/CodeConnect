import React from 'react'
import link from 'next/link';
import Link from 'next/link';
const categories=[{
    name:"RTeact",slug:"React"
},
{
    name:"RTeact",slug:"React"
}]
const Header = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-blue-400 py-8'>
         <div className='md:float-left block'>
            <Link href="/">
                <span className='cursor-pinter font-bold text-3xl text-white'>
                    GraphCMS
                </span>
            </Link>
         </div>
         <div className='hidden md:float-left md:contents'>
         {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
          ))}
         </div>
      </div>
    </div>
  )
}

export default Header