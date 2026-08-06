"use client";

import { FC, useId, useState } from "react";
import { Discipline } from "../../Learning/types";
import { GhostButton, Tooltip } from "@/shared";
import { Icons } from "@/shared/Icons";
import Modal from "react-modal";

type Props = {
    discipline: Required<Discipline>;
};

const isMobile = window.innerWidth <= 768;

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        maxWidth: isMobile ? "100vw" : "85vw",
        zIndex: 334,
        maxHeight: isMobile ? "100vh" : "85vh",
        padding: "2rem",
    },
    overlay: {
        zIndex: 1000,
    },
};

const DisciplineModal: FC<Props> = ({ discipline }) => {
    const { content, title } = discipline;
    const [isOpen, setIsOpen] = useState(false);
    const id = useId(); 

    return (
        <>
            <GhostButton
                onClick={() => setIsOpen(true)}
                className="absolute right-0 bottom-0 -translate-x-1/2 -translate-y-1/2"
            >
                <Icons.Glasses size={18} color="#4361ee" />
            </GhostButton>

            {isOpen && (
                <Modal
                    isOpen
                    id={id}
                    style={customStyles}
                    onRequestClose={() => setIsOpen(false)}
                    ariaHideApp={false}
                >
                    <div className="flex flex-col gap-4 relative">
                        <h3 className="text-modal-heading">{title}</h3>
                        <GhostButton
                            onClick={() => setIsOpen(false)}
                            className="absolute right-0 top-0"
                        >
                            <Icons.X size={18} color="#4361ee" />
                        </GhostButton>

                        {content}
                    </div>
                </Modal>
            )}
        </>
    );
};

export default DisciplineModal;
