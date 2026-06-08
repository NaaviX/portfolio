import { ReactNode } from 'react'
import { SectionHeader } from './SectionHeader'

interface SectionLayoutProps {
    children: ReactNode
    title: string
    subtitle?: string
}

export const SectionLayout = (props: SectionLayoutProps) => {
    const { children, title, subtitle } = props
    return (
        <div className='w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20'>
            <SectionHeader title={title} subtitle={subtitle} />
            {children}
        </div>
    )
}
