import React from 'react'

function Popup({ selected, closePopup }) {
	return (
		<section className="fixed flex items-center justify-center top-0 left-0 w-screen bg-gradient-to-tr from-[#4f1d1d] to-[#33050d] overflow-y-scroll h-screen font-geologica ease-in">
			<div className="flex justify-center items-center flex-col w-full max-w-[960px] m-auto p-[25px] text-white text-center">
				<h2 className="text-4xl font-bold">{ selected.Title } <span>({ selected.Year })</span></h2>
				<p className="text-xl mt-2 text-white">Rating: {selected.imdbRating}</p>
				<div className="flex flex-col items-center justify-center">
					<img src={selected.Poster}  className="my-8"/>
					<p className="text-md text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] to-[rgb(255,0,0)]">{selected.Plot}</p>
				</div>
				<button className="py-4 px-8 mt-8 rounded-full bg-black hover:bg-[#4f1d1d] duration-200" onClick={closePopup}>Close</button>
			</div>
		</section>
	)
}

export default Popup