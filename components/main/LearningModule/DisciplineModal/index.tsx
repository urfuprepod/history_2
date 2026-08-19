"use client";

import { FC, useId } from "react";
import { GhostButton } from "@/shared";
import { Icons } from "@/shared/Icons";
import Modal from "react-modal";
import "./styles.css";

type Props = {
    content: React.ReactNode;
    title: string;
    isOpen: boolean;
    onClose: () => void;
    id?: string;
};

const DisciplineModal: FC<Props> = ({
    title,
    content,
    onClose,
    isOpen,
    id,
}) => {
    const uuid = useId();

    return (
        <Modal
            isOpen={isOpen}
            id={id ?? uuid}
            onRequestClose={onClose}
            ariaHideApp={false}
            className="discipline-modal"
            overlayClassName="discipline-modal-overlay"
        >
            <div className="discipline-modal__inner">
                <h3 className="text-modal-heading">{title}</h3>

                <GhostButton
                    onClick={onClose}
                    className="discipline-modal__close"
                >
                    <Icons.X size={20} color="#4361ee" />
                </GhostButton>

                {content}
            </div>
        </Modal>
    );
};

export default DisciplineModal;