import { SkillCategory } from '../../skills.type'

import { Paper } from '@/components/common'
import { SkillsCardBody } from './_SkillsCardBody'

type SkillsCardBaseProps = {
    skillCategory: SkillCategory
}

export const SkillsCardBase = (props: SkillsCardBaseProps) => {
    const { skillCategory } = props
    return (
        <Paper
            animateScroll={false}
            style={{
                background: 'linear-gradient(80deg, #101b20, #082c36, #082c36)',
                width: '100%',
                padding: 0,
                marginBottom: '50px',
                height: '50vh',
            }}
        >
            <SkillsCardBody skillCategory={skillCategory}></SkillsCardBody>
        </Paper>
    )
}
