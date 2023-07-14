import React from 'react'
import { motion } from 'framer-motion'

const Result = ({ result, openPopup }) => {
  return (
    <motion.div 
    layout transition={{ duration: 0.3 }}
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0.5 }}
    onClick={() => openPopup(result.imdbID)} className="h-[500px] w-[300px] font-geologica text-center hover:scale-105 duration-300">
        <img src={result.Poster} alt="" className="h-[400px] w-[300px]" />
        <div className="bg-white w-[300px] h-[100px] flex justify-center items-center rounded-b-xl py-1 cursor-pointer">
            <h1 className="text-2xl font-bold">{result.Title}</h1>
        </div>      
    </motion.div>
  )
}

export default Result