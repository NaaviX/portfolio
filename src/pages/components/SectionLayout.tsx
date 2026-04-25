import { ReactNode } from 'react'
import { SectionTitle } from './SectionTitle'

interface SectionLayoutProps {
    children: ReactNode
    title?: string
}

export const SectionLayout = (props: SectionLayoutProps) => {
    const { children, title } = props
    return (
        <div className='max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20'>
            <div className='flex flex-col items-center'>
                <SectionTitle text={title} />
                {children}
            </div>
        </div>
    )
}
