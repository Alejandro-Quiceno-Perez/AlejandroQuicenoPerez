import React, { useState } from 'react'
import FrontendSkill from './FrontendSkill'
import BackendSkill from './BackendSkill'
import { AnimatePresence, motion } from 'framer-motion';

const Skills = () => {
    const [activeTab, setActiveTab] = useState('frontend');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }
    return (
        <div className='container-skills'>
            <h2>Habilidades</h2>
            <nav>
                <ul>
                    <li className={`skill-link ${activeTab === 'frontend' ? 'active' : ''}`} onClick={() => handleTabClick('frontend')}>
                        Frontend
                    </li>
                    <li className={`skill-link ${activeTab === 'backend' ? 'active' : ''}`} onClick={() => handleTabClick('backend')}>Backend</li>
                </ul>
            </nav>
            <div className='skill-details'>
                <AnimatePresence mode='wait'>
                    {
                        activeTab === 'frontend' && (
                            <motion.div
                                key="frontend"
                                initial={{ opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <FrontendSkill />
                            </motion.div>
                        )
                    }
                    {
                        activeTab === 'backend' && (
                            <motion.div
                                key="backend"
                                initial={{ opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <BackendSkill />
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Skills
