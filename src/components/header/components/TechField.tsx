import {
    AndroidIcon,
    AngularIcon,
    CSSIcon,
    DockerIcon,
    ExpressIcon,
    FirebaseIcon,
    GitIcon,
    JavaIcon,
    JsIcon,
    LinuxIcon,
    NodeIcon,
    PostgresqlIcon,
    ReactIcon,
    SpringIcon,
    SqlIcon,
    SupabaseIcon,
    TailwindIcon,
    TsIcon,
    ViteIcon,
    VueIcon,
} from '@/assets/icons'
import { useFinePointer } from '@/hooks/useFinePointer'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useReducedMotion,
    useSpring,
    useTransform,
    type MotionValue,
} from 'framer-motion'
import { memo, useEffect, type ComponentType, type SVGProps } from 'react'

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>

type Node = {
    Icon: SvgIcon
    x: number // % across the field
    y: number // % down the field
    size: number // rem
    opacity: number
    depth: number // 0 (background) → 1 (foreground), drives parallax strength
    drift: number // px of vertical float
    duration: number // seconds per float cycle
    delay: number // seconds before first cycle
    keep?: boolean // kept on mobile (curated subset)
}

const NODES: Node[] = [
    { Icon: JavaIcon, x: 6, y: 9, size: 5.6, opacity: 0.38, depth: 0.95, drift: 16, duration: 11, delay: 0, keep: true },
    { Icon: SpringIcon, x: 24, y: 4, size: 3.8, opacity: 0.22, depth: 0.55, drift: 12, duration: 9.5, delay: 0.6 },
    { Icon: TsIcon, x: 40, y: 12, size: 3.4, opacity: 0.26, depth: 0.7, drift: 10, duration: 10, delay: 1.2, keep: true },
    { Icon: AngularIcon, x: 60, y: 5, size: 3, opacity: 0.16, depth: 0.4, drift: 9, duration: 9, delay: 1.8 },
    { Icon: ReactIcon, x: 80, y: 10, size: 5.2, opacity: 0.34, depth: 0.9, drift: 14, duration: 12, delay: 0.4, keep: true },
    { Icon: VueIcon, x: 94, y: 22, size: 3, opacity: 0.18, depth: 0.5, drift: 9, duration: 8.5, delay: 2 },

    { Icon: JsIcon, x: 14, y: 28, size: 2.8, opacity: 0.14, depth: 0.35, drift: 8, duration: 9, delay: 1.1 },
    { Icon: CSSIcon, x: 70, y: 24, size: 2.6, opacity: 0.14, depth: 0.4, drift: 8, duration: 8, delay: 2.4 },
    { Icon: NodeIcon, x: 4, y: 48, size: 4.4, opacity: 0.22, depth: 0.75, drift: 13, duration: 10.5, delay: 0.3, keep: true },
    { Icon: ExpressIcon, x: 88, y: 46, size: 3.2, opacity: 0.18, depth: 0.5, drift: 10, duration: 9.5, delay: 1.6 },
    { Icon: SqlIcon, x: 38, y: 54, size: 2.4, opacity: 0.1, depth: 0.3, drift: 7, duration: 9, delay: 1.9 },
    { Icon: DockerIcon, x: 96, y: 64, size: 3.8, opacity: 0.22, depth: 0.65, drift: 12, duration: 10, delay: 0.9, keep: true },
    { Icon: GitIcon, x: 12, y: 66, size: 3.2, opacity: 0.18, depth: 0.55, drift: 10, duration: 9.5, delay: 1.4, keep: true },

    { Icon: PostgresqlIcon, x: 26, y: 84, size: 4.4, opacity: 0.26, depth: 0.85, drift: 13, duration: 11, delay: 0.2, keep: true },
    { Icon: SupabaseIcon, x: 44, y: 92, size: 3.4, opacity: 0.2, depth: 0.55, drift: 10, duration: 9, delay: 1 },
    { Icon: TailwindIcon, x: 60, y: 86, size: 4, opacity: 0.24, depth: 0.7, drift: 11, duration: 10, delay: 1.7, keep: true },
    { Icon: ViteIcon, x: 74, y: 78, size: 3.2, opacity: 0.18, depth: 0.5, drift: 9, duration: 8.5, delay: 0.7 },
    { Icon: FirebaseIcon, x: 86, y: 92, size: 3.4, opacity: 0.2, depth: 0.6, drift: 10, duration: 11, delay: 2.2 },
    { Icon: LinuxIcon, x: 6, y: 90, size: 3.8, opacity: 0.18, depth: 0.6, drift: 10, duration: 9, delay: 1.5, keep: true },
    { Icon: AndroidIcon, x: 50, y: 70, size: 2.8, opacity: 0.12, depth: 0.4, drift: 8, duration: 10, delay: 0.5 },
]

const PARALLAX_RANGE_PX = 36
const ADJACENCY_THRESHOLD = 24 // % Euclidean distance, per DESIGN.md spec
const SPOTLIGHT_RADIUS = 22 // % of viewport min dimension

type Edge = { a: number; b: number }

const buildEdges = (nodes: Node[]): Edge[] => {
    const out: Edge[] = []
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x
            const dy = nodes[i].y - nodes[j].y
            if (Math.hypot(dx, dy) < ADJACENCY_THRESHOLD) {
                out.push({ a: i, b: j })
            }
        }
    }
    return out
}

const FULL_EDGES = buildEdges(NODES)
const MOBILE_NODES = NODES.filter((n) => n.keep)
const MOBILE_EDGES = buildEdges(MOBILE_NODES)

type TechIconProps = {
    node: Node
    px: MotionValue<number> | null
    py: MotionValue<number> | null
    reduce: boolean
}

// Per-icon float keyframes are intentionally driven by CSS rather than
// framer-motion: 20 infinite JS-driven loops were the largest mobile cost.
// CSS animation runs on the compositor and stays off the JS thread.
const TechIcon = memo(({ node, px, py, reduce }: TechIconProps) => {
    const hasParallax = px !== null && py !== null
    // Hooks must run unconditionally; fall back to inert motion values when
    // parallax is disabled. The fallback values never update, so the
    // transforms stay at 0 with no per-frame work.
    const fallbackX = useMotionValue(0)
    const fallbackY = useMotionValue(0)
    const tx = useTransform(
        px ?? fallbackX,
        (v) => v * PARALLAX_RANGE_PX * node.depth
    )
    const ty = useTransform(
        py ?? fallbackY,
        (v) => v * PARALLAX_RANGE_PX * node.depth
    )
    const { Icon, x, y, size, opacity, drift, duration, delay } = node

    const baseStyle = {
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}rem`,
        height: `${size}rem`,
        opacity,
        ['--drift' as string]: `${drift}px`,
        ['--drift-rev' as string]: `${drift * 0.6}px`,
        animation: reduce
            ? undefined
            : `tech-float ${duration}s ease-in-out ${delay}s infinite`,
    } as const

    if (!hasParallax) {
        return (
            <div className='absolute' style={baseStyle}>
                <Icon className='w-full h-full' style={{ display: 'block' }} />
            </div>
        )
    }

    return (
        <motion.div
            className='absolute'
            style={{ ...baseStyle, x: tx, y: ty }}
        >
            <Icon className='w-full h-full' style={{ display: 'block' }} />
        </motion.div>
    )
})
TechIcon.displayName = 'TechIcon'

const EdgeMesh = ({
    variant,
    nodes,
    edges,
}: {
    variant: 'base' | 'spotlight'
    nodes: Node[]
    edges: Edge[]
}) => {
    const isBase = variant === 'base'
    return (
        <svg
            className='absolute inset-0 h-full w-full'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            aria-hidden
        >
            {!isBase && (
                <defs>
                    <linearGradient
                        id='edge-spotlight'
                        x1='0'
                        y1='0'
                        x2='1'
                        y2='1'
                    >
                        <stop offset='0%' stopColor='#00a2c7' />
                        <stop offset='50%' stopColor='#4ccce6' />
                        <stop offset='100%' stopColor='#00a2c7' />
                    </linearGradient>
                </defs>
            )}
            {edges.map(({ a, b }, i) => {
                const A = nodes[a]
                const B = nodes[b]
                return (
                    <line
                        key={i}
                        x1={A.x}
                        y1={A.y}
                        x2={B.x}
                        y2={B.y}
                        stroke={isBase ? '#00a2c7' : 'url(#edge-spotlight)'}
                        strokeOpacity={isBase ? 0.06 : 0.55}
                        strokeWidth={isBase ? 0.12 : 0.22}
                        strokeLinecap='round'
                        vectorEffect='non-scaling-stroke'
                    />
                )
            })}
        </svg>
    )
}

export const TechField = () => {
    const reduce = useReducedMotion() ?? false
    const finePointer = useFinePointer()
    const isCompact = useMediaQuery('(max-width: 767px)')

    const nodes = isCompact ? MOBILE_NODES : NODES
    const edges = isCompact ? MOBILE_EDGES : FULL_EDGES

    const mx = useMotionValue(0)
    const my = useMotionValue(0)
    const sx = useSpring(mx, { damping: 28, stiffness: 70, mass: 0.8 })
    const sy = useSpring(my, { damping: 28, stiffness: 70, mass: 0.8 })

    const spotX = useTransform(sx, (v) => (v + 0.5) * 100)
    const spotY = useTransform(sy, (v) => (v + 0.5) * 100)
    const spotlightMask = useMotionTemplate`radial-gradient(circle ${SPOTLIGHT_RADIUS}vmin at ${spotX}% ${spotY}%, #000 30%, rgba(0,0,0,0.4) 65%, transparent 100%)`

    const enableCursor = finePointer && !reduce

    useEffect(() => {
        if (!enableCursor) return
        const onMove = (e: PointerEvent) => {
            mx.set(e.clientX / window.innerWidth - 0.5)
            my.set(e.clientY / window.innerHeight - 0.5)
        }
        window.addEventListener('pointermove', onMove, { passive: true })
        return () => window.removeEventListener('pointermove', onMove)
    }, [mx, my, enableCursor])

    return (
        <div
            aria-hidden
            className='pointer-events-none absolute inset-0 overflow-hidden'
            style={{ filter: 'saturate(0.85)' }}
        >
            <EdgeMesh variant='base' nodes={nodes} edges={edges} />

            {enableCursor && (
                <motion.div
                    className='absolute inset-0'
                    style={{
                        maskImage: spotlightMask,
                        WebkitMaskImage: spotlightMask,
                    }}
                >
                    <EdgeMesh variant='spotlight' nodes={nodes} edges={edges} />
                </motion.div>
            )}

            {nodes.map((node, i) => (
                <TechIcon
                    key={i}
                    node={node}
                    px={enableCursor ? sx : null}
                    py={enableCursor ? sy : null}
                    reduce={reduce}
                />
            ))}
        </div>
    )
}
