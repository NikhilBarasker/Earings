import React from 'react'
import { top1, top2, top3, ear1, ear2, ear3 } from './data'
import { Link } from 'react-router-dom'

const Featured = () => {
  return (
    <div style={{backgroundColor:''}}>
      <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    {/* <header className="text-center">
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">New Collection</h2>

      <p className="mx-auto mt-4 max-w-md text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
        dicta incidunt est ipsam, officia dolor fugit natus?
      </p>
    </header> */}

    <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
      <li>
        <Link className="group relative block">
          <img
            src={ear2}
            alt=""
            className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 h-[250px]"
          />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-white">JHUMKAS</h3>

            <span
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Shop Now
            </span>
          </div>
        </Link>
      </li>

      <li>
        <Link className="group relative block">
          <img
            src={ear1}
            alt=""
            className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 h-[250px]"
          />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-white">Chandelier earrings</h3>

            <span
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Shop Now
            </span>
          </div>
        </Link>
      </li>

      <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <Link className="group relative block">
          <img
            src={ear3}
            alt=""
            className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 h-[515px]"
          />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-white">Full Jwellery Set</h3>

            <span
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Shop Now
            </span>
          </div>
        </Link>
      </li>
    </ul>
  </div>
      </section>
    </div>
  )
}

export default Featured
