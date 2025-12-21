import { ReactNode } from 'react'
import { SectionTitle } from './SectionTitle'

interface SectionLayoutProps {
    children: ReactNode
    title?: string
}

export const SectionLayout = (props: SectionLayoutProps) => {
    const { children, title } = props
    return (
        <div className='max-w-7xl mx-auto px-4'>
            <div className='flex flex-col items-center'>
                <SectionTitle text={title} />
                {children}
            </div>
        </div>
    )
}
