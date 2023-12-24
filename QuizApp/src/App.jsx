import { useState } from 'react';
import './App.css'
import { sculptureList } from './data';

function App() {

  const [index, setindex] = useState(0);
  const [ShowMore, setShowMore] = useState(false);
  const click=()=>{
    setindex(index+1);
  }
  const back=()=>{
    setindex(index-1);
  }
  const change=()=>{
    setShowMore(!ShowMore);
  }
  // const handleMore=()=>{

  //   setShowMore(!ShowMore)
  // }
const scupture=sculptureList[index+1];


    return (
    <>
 {/* <div className='i justify-center grid-flow-col items-center bg-yellow-500 p-4  rounded-md shadow-md'>
  
<button onClick={click}  className='p-3  bg-white mb-6 text-black rounded-md'>Next</button>
    <button onClick={back} className='p-3 gap-9 mx-7 mb-6 bg-white text-black rounded-md'>Back</button>
   <h2>{scupture.name}</h2>
   <h2>{scupture.artist}</h2>
   <h3>({index+1} of {sculptureList.length})</h3>
   <button onClick={handleMore}>{ShowMore?'hide':'show'} More</button>
   <div className='flex mx-8 mt-3'>
   {ShowMore && <p className='text-black items-start justify-center'>{scupture.description}</p>}

<img src={scupture.url} className='rounded-md justify-center items-center mt-3'/>
   </div>
</div>   */}

<section className="relative rounded-md overflow-hidden py-28 px-4 bg-gray-900 md:px-8">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10"></div>
            <div className="max-w-xl mx-auto text-center relative">
                <div className="py-4">
                    <h2 className="text-3xl text-pink-500 font-semibold md:text-4xl">
                        Quiz App
                    </h2>
                    <h3 className="text-gray-300 leading-relaxed mt-1">
                    Test your knowledge on a variety of topics!
                    </h3>
                    <hr></hr>
                    <p className= "font-bold mt-5 text-gray-300 leading-relaxed">
                   {index+1} .{scupture.question}
                    </p>
                    <div className='mt-2'>
                      <div className='flex justify-evenly'>
                   <h2 onClick={change} className= { ShowMore?` bg-pink-500 cursor-pointer text-black p-3`:` bg-white cursor-pointer text-black p-3`}> {scupture.answers[0]}</h2>
                   <h2>{scupture.answers[1]}</h2>
                      </div>
                      <div className='mt-1 flex justify-evenly'>
                   <h2>{scupture.answers[2]}</h2>
                   <h2>{scupture.answers[3]}</h2>
                      </div>
                    </div>
                </div>
                <div className="mt-5 justify-evenly items-center justify-center gap-3 sm:flex">
                    <a 
                    onClick={back}
                        href="javascript:void()"
                        className="block w-full mt-2 py-2.5 px-8 text-gray-700 bg-white rounded-md duration-150 hover:bg-gray-100 sm:w-auto"
                    >
                       Previous
                    </a>
                    <a
                    onClick={click}
                        href="javascript:void()"
                        className="block w-full mt-2 py-2.5 px-8 text-gray-300 bg-gray-700 rounded-md duration-150 hover:bg-gray-800 sm:w-auto"
                    >
                        Next
                    </a>
                </div>
            </div>
        </section>
      
    </>
  )
}

export default App
