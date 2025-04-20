tsParticles.load("tsparticles", {
    background: {
        color: {
            value: "transparent"
        }
    },
    fpsLimit: 60,
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            }
        }
    },
    particles: {
        color: {
            value: "#ffffff"
        },
        links: {
            color: "#00ffff",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1
        },
        collisions: {
            enable: false
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false
        },
        number: {
            density: {
                enable: true,
                area: 800
            },
            value: 60
        },
        opacity: {
            value: 0.8
        },
        shape: {
            type: "circle"
        },
        size: {
            random: false,
            value: 4
        }
    },
    detectRetina: true
});
