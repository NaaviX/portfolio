import { Header } from '@/components/header'
import { TechField } from '@/components/header/components/TechField'

export const HeaderSection = () => {
    return (
        <section aria-labelledby='hero-name' className='relative'>
            <TechField />
            <Header />
        </section>
    )
}
