import { Box, Typography } from '@mui/material'
import Chip from '../../base/components/Chip'
import { Skill, SkillCategory } from '../skills.type'

const SkillsCardBody = ({
    skillCategory,
}: {
    skillCategory: SkillCategory
}) => {
    return (
        <>
            <Box
                className='skillCardBody'
                sx={{
                    position: 'relative',
                    display: 'flex',
                    height: '100%',
                    gap: '100px',
                    width: '100%',
                }}
            >
                <Box
                    className='skillCardDescription'
                    sx={{
                        flex: 1.5,
                        ml: '15px',
                        gap: '30px',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Typography variant='h2' textAlign='left'>
                        {skillCategory.name.toString()}
                    </Typography>
                    <Typography variant='body1'>
                        {skillCategory.description}
                    </Typography>
                </Box>

                <Box
                    className='skillCategoryImage'
                    sx={{
                        flex: 1,
                        position: 'relative',
                        width: '100%',
                        display: 'flex',
                        height: '100%',
                        alignItems: 'center',
                    }}
                >
                    <skillCategory.image
                        style={{ width: '100%', objectFit: 'cover' }}
                    />
                </Box>
            </Box>
            <Box
                className='skillsList'
                sx={{
                    width: '100%',
                    display: 'flex',
                    gap: '10px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}
            >
                {skillCategory.skills.map((skill: Skill) => (
                    <Chip
                        key={skill.name}
                        icon={
                            skill.icon ? (
                                <skill.icon style={{ width: '1rem' }} />
                            ) : (
                                <span />
                            )
                        }
                        label={skill.name}
                    />
                ))}
            </Box>
        </>
    )
}

export default SkillsCardBody
