import React from 'react'
import { useEffect } from 'react'
import Result from './Result'
import { motion } from "framer-motion"


const Results = ({results, openPopup}) => {
  useEffect(() => {
    console.log(results)
  }, [results])
  return (
    <motion.section
    layout transition={{ duration: 0.3 }} 
    className="h-full max-w-6xl  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-4 gap-8 content-center py-8 px-12">
        {results ? results.map(result => <Result key={result.imdbID} result={result} openPopup={openPopup} />) : null}
    </motion.section>
  )
}

export default Results