import { Box, Typography } from '@mui/material'
import ChipList from 'components/base/components/ChipList'
import { SkillCategory } from '../skills.type'

const SkillsCardBody = ({
    skillCategory,
}: {
    skillCategory: SkillCategory
}) => {
    return (
        <Box
            className='skillCardBody'
            sx={{
                position: 'relative',
                display: 'flex',
                height: '100%',
                gap: '20px',
                width: '100%',
            }}
        >
            <Box
                className='skillCardDescription'
                sx={{
                    flex: 1,
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
                <ChipList skills={skillCategory.skills} />
            </Box>

            <Box
                className='skillCategoryImage'
                sx={{
                    flex: 1,
                    position: 'relative',
                    width: '100%',
                    display: { xs: 'none', lg: 'flex' },
                    height: '100%',
                    alignItems: 'center',
                }}
            >
                <skillCategory.image
                    style={{ width: '100%', objectFit: 'cover' }}
                />
            </Box>
        </Box>
    )
}

export default SkillsCardBody
