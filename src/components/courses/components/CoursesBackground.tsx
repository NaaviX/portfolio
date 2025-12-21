import Courses1 from '@/assets/images/courses1.svg?react'

export const CoursesBackground = () => {
    return (
        <div className='hidden lg:block'>
            <Courses1
                name='exp1'
                style={{
                    position: 'absolute',
                    top: '25%',
                    left: '10%',
                    width: '25%',
                    opacity: '0.5',
                }}
            />
        </div>
    )
}
