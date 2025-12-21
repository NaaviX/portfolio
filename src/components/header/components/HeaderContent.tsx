import { ChipList, MagneticButton, Paper } from '@/components/common'
import { Title } from '@/components/common/typography/Title'
import '@fontsource/space-grotesk/400.css'
import { motion } from 'framer-motion'
import { FaBirthdayCake, FaLinkedinIn } from 'react-icons/fa'
import { FaBriefcase, FaLocationPin } from 'react-icons/fa6'
import { userData } from '../../user'

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
                <div className='flex flex-col gap-4 lg:gap-8'>
                    <div className='flex flex-col gap-1'>
                        <Title className='font-[Space_Grotesk] text-2xl lg:text-3xl p-0'>
                            {userData.jobTitle}
                        </Title>
                        <ChipList
                            skills={userData.mainSkills}
                            className='justify-center'
                        />
                    </div>
                    <p className='font-[Space_Grotesk] text-lg md:text-xl leading-relaxed mt-4'>
                        {userData.mainDescription1}
                        <br />
                        {userData.mainDescription2}
                        <br />
                        <br />
                        {userData.mainDescription3}
                    </p>
                    <div className='flex flex-row gap-12 items-center max-w-lg mx-auto'>
                        <div className='flex flex-col lg:flex-row items-center gap-1'>
                            <FaBirthdayCake />
                            <span className='text-sm'>27&nbsp;ans</span>
                        </div>
                        <div className='flex flex-col lg:flex-row items-center gap-1'>
                            <FaLocationPin />
                            <span className='text-sm'>Ile-de-France (77)</span>
                        </div>
                        <div className='flex flex-col lg:flex-row items-center gap-1'>
                            <FaBriefcase />
                            <span className='text-sm'>CDI</span>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='w-1/2 flex justify-evenly'>
                            <MagneticButton
                                icon={FaLinkedinIn}
                                ariaLabel='Linked in'
                                href={userData.linkedin}
                            />
                        </div>
                    </div>
                </div>
            </Paper>
        </motion.div>
    )
}
