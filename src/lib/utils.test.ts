import { cn } from '@/lib/utils'

describe('cn', () => {
    it('merges class names', () => {
        expect(cn('text-sm', 'font-bold')).toBe('text-sm font-bold')
    })

    it('ignores falsy conditions', () => {
        const isHidden = Math.random() > 1
        expect(
            cn('base', isHidden && 'hidden', null, undefined, 0, '', 'end')
        ).toBe('base end')
    })

    it('resolves tailwind conflicts in favor of the last class', () => {
        expect(cn('px-2', 'px-4')).toBe('px-4')
    })
})
