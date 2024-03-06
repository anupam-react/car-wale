import React from 'react'

const Select = ({options=[] , text="Location"}) => {
  return (
      <div>
          <p className='font-semibold'>{text}</p>
          <select
            id="countries"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #ECECEC",
            }}
            className="px-4 text-sm rounded-md block w-44 p-2.5"
          >
            <option selected disabled>
              Month
            </option>
            {options?.map((data, i) => (
              <option key={i} value={data?.value}>
                {data?.lable}
              </option>
            ))}
          </select>
        </div>
  )
}

export default Select
