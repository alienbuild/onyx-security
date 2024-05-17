"use client"

import {
    Button, Checkbox,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader, Textarea,
    useDisclosure
} from "@nextui-org/react";
import {EnvelopeIcon, LockClosedIcon} from "@heroicons/react/24/outline";
import Link from "next/link";

const Contact = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return(
        <>
            <Button
                color="danger"
                variant="flat"
                className={`onyx-heading`}
                onPress={onOpen}
            >Contact</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement={"top-center"}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Contact us
                                <p className={`text-sm font-normal`}>Fill out the form below and we will get back to you as soon as possible.</p>
                            </ModalHeader>
                            <ModalBody>
                                <>
                                    <Input
                                        autoFocus
                                        endContent={
                                            <EnvelopeIcon className="w-5 text-red-500 pointer-events-none"/>
                                        }
                                        label="Email"
                                        placeholder="Enter your email"
                                        variant="bordered"
                                    />
                                    <Input
                                        autoFocus
                                        endContent={
                                            <EnvelopeIcon className="w-5 text-red-500 pointer-events-none"/>
                                        }
                                        label="Telephone"
                                        placeholder="Enter your telephone number"
                                        variant="bordered"
                                    />
                                    <Textarea
                                        isRequired
                                        label="Message"
                                        variant={"bordered"}
                                        fullWidth
                                        labelPlacement="outside"
                                        minRows={5}
                                        placeholder="Enter your message"
                                    />
                                </>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button color="danger" onPress={onClose}>
                                    Send
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default Contact