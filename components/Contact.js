"use client"

import {
    Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea, useDisclosure
} from "@nextui-org/react";
import {EnvelopeIcon} from "@heroicons/react/24/outline";
import {useState} from "react";
import Link from "next/link";

const Contact = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async () => {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, telephone, message }),
        });

        if (response.ok) {
            alert('Message sent successfully!');
        } else {
            alert('Failed to send the message.');
        }

        onOpenChange();
    };

    return(
        <>
            <Button
                as={Link}
                href={"mailto:info@onyxsecurity.com"}
                color={"danger"}
                variant={"flat"}
                className={`onyx-heading`}
            >
                Contact
            </Button>

            {/*<Button*/}
            {/*    color="danger"*/}
            {/*    variant="flat"*/}
            {/*    className={`onyx-heading`}*/}
            {/*    onPress={onOpen}*/}
            {/*>Contact</Button>*/}
            {/*<Modal isOpen={isOpen} onOpenChange={onOpenChange} placement={"top-center"}>*/}
            {/*    <ModalContent>*/}
            {/*        {(onClose) => (*/}
            {/*            <>*/}
            {/*                <ModalHeader className="flex flex-col gap-1">*/}
            {/*                    Contact us*/}
            {/*                    <p className={`text-sm font-normal`}>Fill out the form below and we will get back to you as soon as possible.</p>*/}
            {/*                </ModalHeader>*/}
            {/*                <ModalBody>*/}
            {/*                    <>*/}
            {/*                        <Input*/}
            {/*                            autoFocus*/}
            {/*                            endContent={*/}
            {/*                                <EnvelopeIcon className="w-5 text-red-500 pointer-events-none"/>*/}
            {/*                            }*/}
            {/*                            label="Email"*/}
            {/*                            placeholder="Enter your email"*/}
            {/*                            variant="bordered"*/}
            {/*                            value={email}*/}
            {/*                            onChange={(e) => setEmail(e.target.value)}*/}
            {/*                        />*/}
            {/*                        <Input*/}
            {/*                            endContent={*/}
            {/*                                <EnvelopeIcon className="w-5 text-red-500 pointer-events-none"/>*/}
            {/*                            }*/}
            {/*                            label="Telephone"*/}
            {/*                            placeholder="Enter your telephone number"*/}
            {/*                            variant="bordered"*/}
            {/*                            value={telephone}*/}
            {/*                            onChange={(e) => setTelephone(e.target.value)}*/}
            {/*                        />*/}
            {/*                        <Textarea*/}
            {/*                            isRequired*/}
            {/*                            label="Message"*/}
            {/*                            variant={"bordered"}*/}
            {/*                            fullWidth*/}
            {/*                            labelPlacement="outside"*/}
            {/*                            minRows={5}*/}
            {/*                            placeholder="Enter your message"*/}
            {/*                            value={message}*/}
            {/*                            onChange={(e) => setMessage(e.target.value)}*/}
            {/*                        />*/}
            {/*                    </>*/}
            {/*                </ModalBody>*/}
            {/*                <ModalFooter>*/}
            {/*                    <Button color="danger" variant="light" onPress={onClose}>*/}
            {/*                        Cancel*/}
            {/*                    </Button>*/}
            {/*                    <Button color="danger" onPress={handleSubmit}>*/}
            {/*                        Send*/}
            {/*                    </Button>*/}
            {/*                </ModalFooter>*/}
            {/*            </>*/}
            {/*        )}*/}
            {/*    </ModalContent>*/}
            {/*</Modal>*/}
        </>
    )
}

export default Contact
