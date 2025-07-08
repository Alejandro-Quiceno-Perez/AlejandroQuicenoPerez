import React, {useState} from 'react'
import '../styles/aboutPage.css'
import aboutPage from '../assets/data/aboutPage'
import ShortDescription from './ShortDescription'
import MoreDescription from './MoreDescription'
import MusicDescription from './MusicDescription'
import { AnimatePresence, motion } from 'framer-motion'

const AboutPage = () => {
    const [activeTab, setActiveTab] = useState('short');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }

    return (
        <div className="about-page">
            <div className="container-about-page">
                <AnimatePresence mode='wait'>
                    {
                        activeTab === 'short' && (
                            <motion.div
                                key="short"
                                initial={{ opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <ShortDescription />
                            </motion.div>
                        )
                    }
                    {
                        activeTab === 'more' && (
                            <motion.div
                                key="more"
                                initial={{ opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <MoreDescription />
                            </motion.div>
                        )
                    }
                    {
                        activeTab === 'music' && (
                            <motion.div
                                key="music"
                                initial={{ opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <MusicDescription />
                            </motion.div>
                        )
                    }
                </AnimatePresence>
                
            </div>
            <ul>
                <li className={`aboutlink ${activeTab === 'short' ? 'activo' : ''}`} onClick={() => handleTabClick('short')}></li>

                <li className={`aboutlink ${activeTab === 'more' ? 'activo' : ''}`} onClick={() => handleTabClick('more')}></li>

                <li className={`aboutlink ${activeTab === 'music' ? 'activo' : ''}`} onClick={() => handleTabClick('music')}></li>
            </ul>
        </div>
    )
}

export default AboutPage
