'use client'
import Navbar from "./nav";
import { TitleCard } from "./canvas"; 
import Image from 'next/image'

export default function Home() {
  return (
        <>
            <Navbar/>
            <div className="w-full absolute h-full top-0">
                <TitleCard/> 
            </div>
        </>

  )}
