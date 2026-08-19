"use client";

import { FC, useId } from "react";
import { GhostButton } from "@/shared";
import { Icons } from "@/shared/Icons";
import Modal from "react-modal";

type Props = {
    content: React.ReactNode;
    title: string;
    isOpen: boolean;
    onClose: () => void;
    id?: string
};

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        maxWidth: "85vw",
        zIndex: 334,
        maxHeight: "88vh",
        padding: "2rem",
        minHeight: '20rem'
    },
    overlay: {
        zIndex: 1000,
    },
};

const DisciplineModal: FC<Props> = ({ title, content, onClose, isOpen, id }) => {
    const uuid = useId();

    return (
        <Modal
            isOpen={isOpen}
            id={id ?? uuid}
            style={customStyles}
            onRequestClose={onClose}
            ariaHideApp={false}
        >
            <div className="flex flex-col gap-6 relative">
                <h3 className="text-modal-heading">{title}</h3>
                <GhostButton
                    onClick={onClose}
                    className="absolute right-[-13px] top-[-15px]"
                >
                    <Icons.X size={20} color="#4361ee" />
                </GhostButton>

                {content}
            </div>
        </Modal>
    );
};

export default DisciplineModal;
