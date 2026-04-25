import { HeaderContent } from './components/HeaderContent'
import { HeaderTitle } from './components/HeaderTitle'
import { ScrollIndicator } from './components/ScrollIndicator'

export const Header = () => {
    return (
        <div className='relative'>
            <div className='max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20'>
                <div className='min-h-dvh py-[14dvh] flex flex-col justify-center gap-10 md:gap-14'>
                    <HeaderTitle />
                    <HeaderContent />
                </div>
            </div>
            <ScrollIndicator />
        </div>
    )
}
