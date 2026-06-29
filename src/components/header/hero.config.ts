import {
    projectsData,
    type Project,
    type ProjectId,
} from '@/components/projects'

/**
 * Hero showcase configuration.
 *
 * Controls which project screenshots are displayed in the hero collage and in
 * what order. Each entry points at a project by its stable `id` (as defined in
 * `projects.data.ts`); `imageIndex` optionally selects which screenshot of that
 * project to use (defaults to the first one).
 *
 * Reorder, add, or swap entries here to change the hero - no need to touch the
 * Header component itself.
 */
export interface HeroImageConfigEntry {
    projectId: ProjectId
    imageIndex?: number
}

export type HeroImageConfig = readonly [
    HeroImageConfigEntry,
    HeroImageConfigEntry,
    HeroImageConfigEntry,
]

export interface HeroImage {
    src: string
    alt: string
}

export type HeroImages = readonly [HeroImage, HeroImage, HeroImage]

export const heroImageConfig = [
    { projectId: 'too-many-cooks' },
    { projectId: 'og-spot' },
    { projectId: 'at-the-mos-bar' },
] satisfies HeroImageConfig

const projectsById = new Map<ProjectId, Project>(
    projectsData.map((project) => [project.id, project] as const)
)

const resolveHeroImage = ({
    projectId,
    imageIndex = 0,
}: HeroImageConfigEntry): HeroImage => {
    const project = projectsById.get(projectId)
    if (!project) {
        throw new Error(`Hero config: unknown project id "${projectId}"`)
    }

    const src = project.images[imageIndex]
    if (!src) {
        throw new Error(
            `Hero config: project id "${projectId}" has no image at index ${imageIndex}`
        )
    }

    return { src, alt: project.name }
}

export const heroImages: HeroImages = [
    resolveHeroImage(heroImageConfig[0]),
    resolveHeroImage(heroImageConfig[1]),
    resolveHeroImage(heroImageConfig[2]),
]
