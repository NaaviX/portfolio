import { Theme } from '@emotion/react'
import { Chip as MuiChip, SxProps } from '@mui/material'
import { Skill } from 'components/skills/skills.type'

const Chip = ({ skill, sx }: { skill: Skill; sx?: SxProps<Theme> }) => {
    return (
        <MuiChip
            label={skill.name}
            icon={
                skill.icon ? <skill.icon style={{ width: '1rem' }} /> : <span />
            }
            sx={{ ...sx, pl: '4px', height: 'min' }}
        ></MuiChip>
    )
}

export default Chip
