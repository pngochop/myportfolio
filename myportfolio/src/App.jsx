import React from 'react'
import {Header} from './components/header/Header'
import {Nav} from './components/nav/Nav'
import {About} from './components/about/About'
import {Experience} from './components/experience/Experience'
import {Contact} from './components/contact/Contact'
import {Footer} from './components/footer/Footer'
import DataControl from './components/dataControl/DataControl'
import {Projects} from './components/projects/Projects'
import './index.css'

const App = () => {
    // const [activeNav,setActiveNav] = useState('#');
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
            <DataControl />
        </>
    )
}

export default App
