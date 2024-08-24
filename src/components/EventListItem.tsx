import clsx from 'clsx'
import { ReactNode } from 'react'

const EventListItem = ({
    children,
    highlight = false,
    fontColorLevel = 6
}:{
    children: ReactNode
    highlight?: boolean
    fontColorLevel?: number
}) => {


    const containerClass = {
        // 'bg-[#ABAB00]': highlight,
        'bg-[#ba8b00]': highlight,
        'opacity-100': fontColorLevel === 6,
        'opacity-80': fontColorLevel === 5,
        'opacity-60': fontColorLevel === 4,
        'opacity-40': fontColorLevel === 3,
        'opacity-20': fontColorLevel === 2,
        'opacity-0': fontColorLevel === 1,
    }

    return (
        <div className='flex justify-end'>
            <div className={clsx('py-[4px] px-[8px] text-2xl text-white', containerClass)}>
                {children}
            </div>
        </div>
    )
}

export default EventListItem