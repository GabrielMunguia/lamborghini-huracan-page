import React from 'react'
import './Select.css'
export default function Select({ setSelectValue }) {
    const option = ['Engine', 'Transmission', 'Dimensions']
    const handleChange = (e) => {
        setSelectValue(e.target.value)
    }
    return (

        <div>
            <select onChange={handleChange}>

                {
                    option.map((op => {
                        return <option key={op} value={op} > {op} </option>
                    }))
                }



            </select>
        </div >
    )
}
