import  Link  from 'next/link'
import {Inter} from 'next/font/google'
const inter = Inter({
    weight: ['100' ,'400'],
    subsets: ["latin"],
})

export default function Navbar(){
    return(
        <div className={`flex flex-row max-w-fit max-h-fit pb-2 pr-2 mb-2 sticky z-20 gap-1 align-center border-b-[1px] border-r-[1px] border-purple-400/0 bg-[25222f]
 rounded-r ${inter.className} antialiased`}>
            <Link href="/" className="">
                <div className="flex justify-center h-[6vh] w-[6vh] rounded-[50%] bg-[#ef9f9f]/80 hover:bg-[#ffafaf] items-center mt-1 ml-2 transition-color">

                </div>
            </Link>
            <div className="flex flex-row bg-black/20 pl-0 rounded-l">
                <Link href="about" className="h-full w-[7vw] flex items-center justify-center text-center 
                    transition-colors hover:bg-[#afffaf]/20 text-[2.4vh] border-t-2 border-[#ffffff] hover:border-[#afffaf]">
                    Info 
                </Link>
            </div>
            <div className="flex flex-row bg-black/20 p-0 rounded-l">
                <Link href="projects" className="h-full w-[7vw] flex items-center justify-center text-center 
                    transition-colors hover:bg-[#f5d038]/20 text-[2.4vh] border-t-2 border-[#ffffff] hover:border-[#f5d038]">
                    Works
                </Link>
            </div>
        </div>
    )
}
function wip(){

    return(
        <div className="flex flex-row justify-between gap-2 ">
            <div className="flex flex-row flex-grow-[] justify-between bg-[#352e48]/80 rounded-2xl h-full gap-2">
                <Link href="about" className="h-full w-[9vw] rounded-2xl flex align-center justify-center text-center 
                    bg-[#ff0000]/10 hover:bg-[#bb7777] text-[3.4vh]">
                    Blog
                </Link>
                <Link href="about" className="h-full w-[9vw] rounded-2xl flex align-center justify-center text-center bg-[#111111]/50 text-[3.4vh]">
                    text
                </Link>
                <Link href="about" className="h-full w-[9vw] rounded-2xl flex align-center justify-center text-center bg-[#111111]/50 text-[3.4vh]">
                    text
                </Link>
            </div>
            <div></div>
        </div>
    )
}
