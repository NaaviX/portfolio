import { Skills } from '@/components/skills/Skills'
import { GitLabPulse } from '@/components/skills/GitLabPulse'

export const SkillsSection = () => {
    return (
        <div className='w-full relative'>
            <Skills />
            <div className='mt-10 w-full px-4 lg:px-6'>
                <GitLabPulse />
            </div>
        </div>
    )
}
