import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Projects from '../components/sections/Projects';

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Services />
            <Projects />
        </main>
    );
}
