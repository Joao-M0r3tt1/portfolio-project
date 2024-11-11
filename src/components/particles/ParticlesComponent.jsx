import React, { useCallback } from 'react';
import './particles.css'

// Import Functions From The Particular Component
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesComponent = () => {
    // Particle Function
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async () => {}, []);

    return (
        <Particles className='particles' id='tsparticles' init={particlesInit} loaded={particlesLoaded} 
            options={{
                fullScreen: {enable: false},
                background: {
                    color: {
                        value: ''
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: 'push',
                        },
                        onHover: {
                            enable: true,
                            // mode: 'repulse',
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 90,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: '#337acc',
                    },
                    links: {
                        color: '#337acc',
                        distance: 150,
                        enable: true,
                        opacity: 0.3,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: 'none',
                        enable: true,
                        outModes: {
                            default: 'bounce',
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 700,
                        },
                        value: 50,
                    },
                    opacity: {
                        value: 0.6,
                    },
                    shape: {
                        type: 'circle',
                    },
                    size: {
                        value: {min:1 , max: 5},
                    },
                },
                detectRetina: true,
            }}
        />
    );
}

export default ParticlesComponent