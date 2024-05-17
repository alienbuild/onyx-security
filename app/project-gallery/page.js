"use client"

import {useState} from "react";
import FilterComponent from "@/app/project-gallery/components/FilterComponent";
import Container from "@/components/Container";
import { AnimatePresence, motion } from 'framer-motion';
import {Grid, Card, Text, CardBody, CardHeader, CardFooter, Divider, Chip, useDisclosure} from "@nextui-org/react";
import {TagIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import ProjectModal from "@/app/project-gallery/components/ProjectModal";

const mockProjects = [
    {
        id: 1,
        title: "Modern Home Security",
        category: "domestic",
        image: "https://fakeimg.pl/250x100/",
        description: "A cutting-edge alarm system installed in a modern residence, providing top-notch security and smart home integration."
    },
    {
        id: 2,
        title: "Advanced Office Surveillance",
        category: "commercial",
        image: "https://fakeimg.pl/250x100/",
        description: "High-definition surveillance cameras set up for an office, ensuring comprehensive monitoring and safety."
    },
    {
        id: 3,
        title: "Smart Home Alarm System",
        category: "domestic",
        image: "https://fakeimg.pl/250x100/",
        description: "Innovative alarm solutions with smart controls for a residential property, offering both security and convenience."
    },
];


const ProjectGalleryPage = () => {

    const [projects, setProjects] = useState(mockProjects);
    const [filter, setFilter] = useState('all');
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

    return(
        <>

            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="onyx-heading text-3xl tracking-tight sm:text-4xl">Project <span className={`text-red-500`}>gallery</span>
                    </h2>
                    <p className="mt-6 text-lg  leading-7 text-gray-600">
                        Browse our Project Gallery to discover how Onyx Security blends cutting-edge technology with unmatched expertise, for both homes and businesses.
                    </p>
                </div>
                <Container>
                    <FilterComponent setFilter={setFilter} filter={filter}/>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                        <AnimatePresence>
                            {filteredProjects.map(project => (
                                <motion.div
                                    key={project.id}
                                    initial={{opacity: 0, x: -100}}
                                    animate={{opacity: 1, x: 0}}
                                    exit={{opacity: 0, x: 100}}
                                    transition={{duration: 0.2}}
                                >
                                    <Card isHoverable isPressable onPress={onOpen}>
                                        <div className="relative">
                                            <img src={project.image} alt={project.title}
                                                 className="w-full h-64 object-cover"/>
                                            <Chip
                                                startContent={<TagIcon className={`w-5`}/>}
                                                className={`absolute bottom-5 right-5 capitalize bg-red-500 text-white`}
                                            >{project.category}</Chip>
                                        </div>
                                        <Divider/>
                                        <CardFooter>
                                            <div>
                                                <h3 className="text-lg onyx-heading mb-2">{project.title}</h3>
                                                <p className="text-sm">{project.description}</p>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </Container>
                <ProjectModal isOpen={isOpen} onOpenChange={onOpenChange} />
            </div>
        </>
    )
}

export default ProjectGalleryPage