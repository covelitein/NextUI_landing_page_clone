"use client"

import { Divider } from "@nextui-org/react"
import { Container } from "."

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='pt-10 bg-gradient-to-r from-[#a8da00] to-green-400 text-white'>
      <Container className='mb-8'>
        <main className='grid mf:grid-cols-5 md:grid-cols-2 grid-cols-1 mf:gap-5 md:gap-8 gap-10'>
          <div className='mf:col-span-2 px-2 py-3'>
            {/* logo */}
            <div className='flex items-end'>
              <h3 className='mb-4'>Tasknest</h3>
            </div>
            {/* logo end */}
            <p className=''>
              Lorem ipsum, dolor sit amet consectetur <br/> adipisicing elit. Obcaecati, quisquam.
            </p>
          </div>
          <div className=''>
            <h3 className='font-semibold mb-5 text-lg'>Column Title</h3>
            <div className='flex flex-col gap-4 px-2'>
              <p>Column-1</p>
              <p>Column-2</p>
              <p>Column-3</p>
              <p>Column-4</p>
              <p>Column-5</p>
              <p>Column-6</p>
            </div>
          </div>
          <div className=''>
            <h3 className='font-semibold mb-5 text-lg'>Column Title</h3>
            <div className='flex flex-col gap-4 px-2'>
              <p>Column-1</p>
              <p>Column-2</p>
              <p>Column-3</p>
              <p>Column-4</p>
              <p>Column-5</p>
              <p>Column-6</p>
            </div>
          </div>
          <div className=''>
            <h3 className='font-semibold mb-5 text-lg'>Column Title</h3>
            <div className='flex flex-col gap-4 px-2'>
              <p>Column-1</p>
              <p>Column-2</p>
              <p>Column-3</p>
              <p>Column-4</p>
              <p>Column-5</p>
              <p>Column-6</p>
            </div>
          </div>
        </main>
      </Container>
        <Divider className='bg-white'/>
        <p className='text-center py-5 max-sm:text-[14px]'>
          &copy; Tasknest all rights reserved {year}
        </p>
    </footer>
  )
}

export default Footer