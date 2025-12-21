interface SeparatorProps {
    children?: React.ReactNode
}

export const Separator = (props: SeparatorProps) => {
    const { children } = props
    if (children) {
        return (
            <div
                role='separator'
                className='ml-[30px] shrink-0 flex whitespace-nowrap text-center w-[70%] z-[100] mb-12 before:w-full before:border-t before:border-border before:content-[""] before:self-center after:w-full after:border-t after:border-border after:content-[""] after:self-center'
            >
                <div className='flex items-center justify-center px-4'>
                    {children}
                </div>
            </div>
        )
    }
    return <hr className='border-t border-border' />
}
