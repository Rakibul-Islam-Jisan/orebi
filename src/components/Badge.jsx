import React from 'react'

const Badge = ({badgeText, className}) => {
  return (
    <div className={`bg-black absolute left-7 top-9  text-white font-bold px-5 py-3 w-[90px] text-center ${className}`}>
      {badgeText}
    </div>
  )
}

export default Badge
