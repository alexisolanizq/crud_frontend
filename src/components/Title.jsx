import React from 'react'

const Title = ({title, className = ''}) => (
    <>
        <h2 className={`uppercase text-center text-xl lg:text-2xl font-black mb-3 ${className}`}>{title}</h2>
    </>
)

export default Title