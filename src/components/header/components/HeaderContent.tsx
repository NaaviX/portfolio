import { ChipList, MagneticButton, Paper } from '@/components/common'
import { Title } from '@/components/common/typography/Title'
import '@fontsource/space-grotesk/400.css'
import { motion } from 'framer-motion'
import { FaBirthdayCake, FaLinkedinIn } from 'react-icons/fa'
import { FaBriefcase, FaLocationPin } from 'react-icons/fa6'
import { userData } from '../../user'

const InfoItem = ({
    icon: Icon,
    label,
}: {
    icon: React.ComponentType<{ className?: string }>
    label: string
}) => (
    <div className='flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 backdrop-blur-sm transition-all duration-300 hover:bg-primary/10 hover:border-primary/20 group'>
        <Icon className='text-primary/70 text-sm group-hover:text-primary transition-colors' />
        <span className='text-xs text-primary-light/80 group-hover:text-primary-light transition-colors whitespace-nowrap'>
            {label}
        </span>
    </div>
)

export const HeaderContent = () => {
    return (
        <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{
                type: 'spring',
                duration: 2,
                bounce: 0.2,
                delay: 0.4,
            }}
            viewport={{ once: true }}
        >
            <Paper
                style={{
                    alignItems: 'center',
                    paddingLeft: '0.5rem',
                    paddingRight: '0.5rem',
                }}
            >
                <div className='flex flex-col gap-6 lg:gap-8'>
                    <div className='flex flex-col gap-3'>
                        <Title className='font-[Space_Grotesk] text-2xl lg:text-3xl p-0'>
                            {userData.jobTitle}
                        </Title>
                        <ChipList
                            skills={userData.mainSkills}
                            className='justify-center'
                        />
                    </div>
                    <div className='space-y-2'>
                        <p className='font-[Space_Grotesk] text-lg md:text-xl leading-relaxed text-primary-light/90'>
                            {userData.mainDescription1}
                        </p>
                        <p className='font-[Space_Grotesk] text-base md:text-lg leading-relaxed text-primary-light/70'>
                            {userData.mainDescription2}
                        </p>
                        <p className='font-[Space_Grotesk] text-base md:text-lg leading-relaxed text-primary-dark mt-4'>
                            {userData.mainDescription3}
                        </p>
                    </div>
                    <div className='flex flex-wrap justify-center gap-3'>
                        <InfoItem icon={FaBirthdayCake} label='27 ans' />
                        <InfoItem
                            icon={FaLocationPin}
                            label='Ile-de-France (77)'
                        />
                        <InfoItem icon={FaBriefcase} label='CDI' />
                    </div>
                    <div className='flex justify-center pt-2'>
                        <MagneticButton
                            icon={FaLinkedinIn}
                            ariaLabel='LinkedIn'
                            href={userData.linkedin}
                        />
                    </div>
                </div>
            </Paper>
        </motion.div>
    )
}
