import React from 'react'

const Loader = () => (
    <div className='my-6 h-[380px] flex items-center justify-center'>
        <div className="lds-ripple"><div></div><div></div></div>
        <p className='text-indigo-700 mt-3 uppercase font-semibold'>Cargando</p>
    </div>
)

export default Loader