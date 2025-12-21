import { ChipList, Title } from '@/components/common'
import { SkillCategory } from '../../skills.type'

type SkillCardBodyProps = {
    skillCategory: SkillCategory
}

export const SkillsCardBody = (props: SkillCardBodyProps) => {
    const { skillCategory } = props
    return (
        <div className='skillCardBody flex m-6 md:m-12'>
            <div className='flex flex-col flex-1 gap-[30px]'>
                <Title>{skillCategory.name.toString()}</Title>
                <p>{skillCategory.description}</p>
                <ChipList skills={skillCategory.skills} />
            </div>

            <div className='skillCategoryImage flex-1 relative w-full hidden md:flex h-full items-center'>
                <skillCategory.image
                    width='100%'
                    style={{ objectFit: 'cover' }}
                />
            </div>
        </div>
    )
}
