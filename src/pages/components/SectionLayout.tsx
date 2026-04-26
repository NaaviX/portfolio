import { ReactNode } from 'react'
import { SectionHeader } from './SectionHeader'

interface SectionLayoutProps {
    children: ReactNode
    number: string
    title: string
    subtitle?: string
}

export const SectionLayout = (props: SectionLayoutProps) => {
    const { children, number, title, subtitle } = props
    return (
        <div className='w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20'>
            <SectionHeader
                number={number}
                title={title}
                subtitle={subtitle}
            />
            {children}
        </div>
    )
}
