"use client"

import {
    Button, Checkbox,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure
} from "@nextui-org/react";
import {EnvelopeIcon, LockClosedIcon} from "@heroicons/react/24/outline";
import Link from "next/link";

const Login = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return(
        <>
            <Button
                color="danger"
                variant="flat"
                className={`onyx-heading`}
                onPress={onOpen}
            >Login</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement={"top-center"}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
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
                                        endContent={
                                            <LockClosedIcon className="w-5 text-red-500 pointer-events-none"/>
                                        }
                                        label="Password"
                                        placeholder="Enter your password"
                                        type="password"
                                        variant="bordered"
                                    />
                                    <div className="flex py-2 px-1 justify-between">
                                        <Checkbox
                                            classNames={{
                                                label: "text-small",
                                            }}
                                        >
                                            Remember me
                                        </Checkbox>
                                        <Link className={`text-red-500`} href="#" size="sm">
                                            Forgot password?
                                        </Link>
                                    </div>
                                </>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button color="danger" onPress={onClose}>
                                    Login
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default Login