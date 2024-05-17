"use client"

import {
    Button,
    Modal,
    Image,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Divider,
    Chip
} from "@nextui-org/react";
import {TagIcon} from "@heroicons/react/24/outline";

const project = {
    id: 1,
    title: "The 'Clean Up'",
    category: "Domestic",
    image: "https://fakeimg.pl/250x100/",
    description: "Onyx Security was tasked with a 'clean up' maintenance job after another major security company had completed a supposedly 'clean' installation. At first sight it looked grim, but removing a back panel revealed the true nature of the job with meters upon meters of tangled wires and tape joints. Imagine trying to straighten out a chefs bowl of spaghetti pasta.",
};


const ProjectModal = ({ isOpen, onOpenChange }) => {

    return(
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={"5xl"}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <h3 className={`onyx-heading text-xl`}>{project.title}</h3>
                                <Chip color={"danger"} startContent={<TagIcon className={`w-5`} />}>{project.category}</Chip>
                            </ModalHeader>
                            <ModalBody>
                                <Image src={project.image} alt={project.title} width="100%" height="auto" />
                                <p className="mt-4 text-lg">
                                    {project.description}
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default ProjectModal