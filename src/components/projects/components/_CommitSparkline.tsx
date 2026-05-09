import { EASE_OUT_QUART } from '@/lib/motion'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useId, useMemo, useRef } from 'react'

interface CommitSparklineProps {
    weeks: number[]
    width?: number
    height?: number
    ariaLabel: string
}

export const CommitSparkline = ({
    weeks,
    width = 80,
    height = 18,
    ariaLabel,
}: CommitSparklineProps) => {
    const id = useId()
    const ref = useRef<SVGSVGElement>(null)
    const reduce = useReducedMotion() ?? false
    const inView = useInView(ref, { once: true, margin: '-20px' })

    const { line, area } = useMemo(() => {
        if (weeks.length === 0) return { line: '', area: '' }
        const max = Math.max(1, ...weeks)
        const stepX = width / Math.max(1, weeks.length - 1)
        const padY = 1.5
        const points = weeks.map((v, i) => {
            const x = i * stepX
            const y = height - padY - (v / max) * (height - padY * 2)
            return `${x.toFixed(2)},${y.toFixed(2)}`
        })
        const linePath = `M ${points.join(' L ')}`
        const areaPath = `${linePath} L ${width.toFixed(2)},${height} L 0,${height} Z`
        return { line: linePath, area: areaPath }
    }, [weeks, width, height])

    if (!line) return null

    const gradientId = `commit-spark-${id.replace(/:/g, '')}`

    return (
        <svg
            ref={ref}
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            role='img'
            aria-label={ariaLabel}
            className='text-primary overflow-visible flex-shrink-0'
        >
            <defs>
                <linearGradient id={gradientId} x1='0' x2='0' y1='0' y2='1'>
                    <stop
                        offset='0%'
                        stopColor='currentColor'
                        stopOpacity='0.22'
                    />
                    <stop
                        offset='100%'
                        stopColor='currentColor'
                        stopOpacity='0'
                    />
                </linearGradient>
            </defs>
            <motion.path
                d={area}
                fill={`url(#${gradientId})`}
                initial={reduce ? { opacity: 1 } : { opacity: 0 }}
                animate={inView ? { opacity: 1 } : undefined}
                transition={{ duration: 1.1, ease: EASE_OUT_QUART }}
            />
            <motion.path
                d={line}
                fill='none'
                stroke='currentColor'
                strokeWidth={1.25}
                strokeLinecap='round'
                strokeLinejoin='round'
                initial={
                    reduce
                        ? { pathLength: 1, opacity: 1 }
                        : { pathLength: 0, opacity: 0.55 }
                }
                animate={inView ? { pathLength: 1, opacity: 1 } : undefined}
                transition={{ duration: 1.4, ease: EASE_OUT_QUART }}
            />
        </svg>
    )
}
