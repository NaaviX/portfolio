import '@fontsource/space-grotesk/400.css'
import { HeaderContent } from './components/HeaderContent'
import { HeaderTitle } from './components/HeaderTitle'
import { ScrollIndicator } from './components/ScrollIndicator'

export const Header = () => {
    return (
        <div className='relative'>
            <div className='max-w-4xl mx-auto px-4 text-center'>
                <div className='h-dvh py-[10dvh] flex flex-col justify-evenly'>
                    <HeaderTitle />
                    <HeaderContent />
                </div>
            </div>
            <ScrollIndicator />
        </div>
    )
}
