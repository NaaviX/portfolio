import { MouseEventHandler, RefObject, useState } from 'react'

export const useMagneticButton = (ref: RefObject<HTMLElement>) => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const handleMouse: MouseEventHandler = (e) => {
        const { clientX, clientY } = e
        const { height, width, left, top } =
            ref.current!.getBoundingClientRect()
        const middleX = clientX - (left + width / 2)
        const middleY = clientY - (top + height / 2)
        setPosition({ x: middleX, y: middleY })
    }

    const reset = () => {
        setPosition({ x: 0, y: 0 })
    }

    const { x, y } = position

    return {
        handleMouse,
        reset,
        x,
        y,
    }
}
