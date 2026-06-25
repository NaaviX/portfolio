import { projectsData } from '@/components/projects'

/**
 * Hero showcase configuration.
 *
 * Controls which project screenshots are displayed in the hero collage and in
 * what order. Each entry points at a project by its `name` (as defined in
 * `projects.data.ts`); `imageIndex` optionally selects which screenshot of that
 * project to use (defaults to the first one).
 *
 * Reorder, add, or swap entries here to change the hero - no need to touch the
 * Header component itself.
 */
export interface HeroImageConfig {
    project: string
    imageIndex?: number
}

export const heroImageConfig: HeroImageConfig[] = [
    { project: 'Too Many Cooks' },
    { project: 'OG Spot' },
    { project: 'Too Many Cooks - Prediction' },
]

export interface HeroImage {
    src: string
    alt: string
}

export const heroImages: HeroImage[] = heroImageConfig.map(
    ({ project: name, imageIndex = 0 }) => {
        const project = projectsData.find((p) => p.name === name)
        if (!project) {
            throw new Error(`Hero config: unknown project "${name}"`)
        }
        const src = project.images[imageIndex]
        if (!src) {
            throw new Error(
                `Hero config: project "${name}" has no image at index ${imageIndex}`
            )
        }
        return { src, alt: project.name }
    }
)
