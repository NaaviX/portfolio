import { Theme } from '@emotion/react'
import { Box, SxProps } from '@mui/material'
import { Skill } from 'components/skills/skills.type'
import Chip from './Chip'

const ChipList = ({ skills, sx }: { skills: Skill[]; sx?: SxProps<Theme> }) => {
    return (
        <Box
            className='skillsList'
            sx={{
                ...sx,
                width: '100%',
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap',
                mt: 2,
            }}
        >
            {skills.map((skill: Skill) => (
                <Chip key={skill.name} skill={skill} />
            ))}
        </Box>
    )
}

export default ChipList
