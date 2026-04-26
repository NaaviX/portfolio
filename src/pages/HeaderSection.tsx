import { Header } from '@/components/header'
import { TechField } from '@/components/header/components/TechField'

export const HeaderSection = () => {
    return (
        <div className='relative min-h-screen'>
            <TechField />
            <Header />
        </div>
    )
}
