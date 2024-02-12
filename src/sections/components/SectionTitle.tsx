import { Separator } from '@/components/base/Separator'
import { Title } from '@/components/base/typography/Title'
import { useMediumScreen } from '@/utils/Utils'

interface SectionTitleProps {
    text?: string
}

export const SectionTitle = (props: SectionTitleProps) => {
    const { text } = props
    if (!useMediumScreen()) {
        return <Title sx={{ textAlign: 'center', mb: '2rem' }}>{text}</Title>
    }
    return (
        <Separator>
            <Title
                sx={{
                    textAlign: 'center',
                    marginInline: '2rem',
                    letterSpacing: 'widest',
                    fontWeight: '600',
                }}
            >
                {text?.toUpperCase()}
            </Title>
        </Separator>
    )
}
