import {
    AndroidParticle,
    AngularParticle,
    CSSParticle,
    DockerParticle,
    JavaParticle,
    NodeParticle,
    ReactParticle,
    SpringParticle,
    TailwindParticle,
    TsParticle,
    VueParticle
} from '@/assets/icons'
import { isMobile } from 'react-device-detect'
import type { IOptions, RecursivePartial } from 'tsparticles-engine'

export const particlesData: RecursivePartial<IOptions> | undefined = {
    autoPlay: true,

    fullScreen: {
        enable: false,
        zIndex: 0,
    },

    detectRetina: true,
    // Reduce FPS for better performance - particles don't need 60fps
    fpsLimit: 30,

    interactivity: {
        detectsOn: 'window',
        events: {
            onDiv: [
                {
                    selectors: '#repulse-div',
                    enable: true,
                    mode: 'bounce',
                    type: 'circle',
                },
            ],

            onHover: {
                enable: !isMobile,
                mode: ['bubble', 'grab'],
                parallax: {
                    enable: true,
                    force: 200,
                    smooth: 20,
                },
            },
        },

        modes: {
            bounce: {
                distance: 100,
            },
            bubble: {
                distance: 100,
                duration: 2,
                size: 35,
                opacity: 1.5,
                mix: false,
            },

            repulse: {
                distance: 200,
                factor: 200,
                speed: 1,
                maxSpeed: 50,
            },
        },
    },

    particles: {
        collisions: {
            enable: true,
            mode: 'bounce',
        },
        color: {
            value: '#000',
        },
        move: {
            angle: {
                offset: 0,
                value: 90,
            },
            center: {
                x: 50,
                y: 50,
                mode: 'percent',
                radius: 0,
            },
            drift: 0,
            enable: true,
            random: true,
            size: false,
            speed: 2.3,
            // Use outModes object for explicit control of all edges
            // This fixes the teleportation bug when hitting borders
            outModes: {
                default: 'bounce',
                left: 'bounce',
                right: 'bounce',
                top: 'bounce',
                bottom: 'bounce',
            },
            straight: false,
            // Ensure velocity is preserved on bounce
            decay: 0,
        },
        number: {
            limit: 0,
            value: isMobile ? 8 : 12,
        },

        opacity: {
            value: 0.6,
        },

        shape: {
            type: 'image',
            image: [
                {
                    src: AndroidParticle,
                },
                {
                    src: CSSParticle,
                },
                {
                    src: DockerParticle,
                },
                {
                    src: TailwindParticle,
                },
                {
                    src: JavaParticle,
                },
                {
                    src: ReactParticle,
                },
                {
                    src: VueParticle,
                },
                {
                    src: TsParticle,
                },
                {
                    src: SpringParticle,
                },
                {
                    src: NodeParticle,
                },
                {
                    src: AngularParticle,
                },
            ],
        },

        size: {
            value: {
                min: 20,
                max: 30,
            },
        },

        // Modern links configuration (replaces deprecated lineLinked)
        links: {
            blink: false,
            color: {
                value: '#aaa',
            },
            consent: true,
            distance: 120,
            enable: true,
            frequency: 10,
            opacity: 0.6,
            width: 1,
            warp: false,
        },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    smooth: true,
}
