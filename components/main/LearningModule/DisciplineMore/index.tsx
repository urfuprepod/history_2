'use client'

import { FC, useState } from "react";
import { Discipline } from "../../Learning/types";
import { PrimaryButton } from "@/shared";
import DisciplineModal from "../DisciplineModal";

type Props = {
    content: Required<Discipline>["content"];
    title: Discipline["title"];
};

const DisciplineMore: FC<Props> = ({ content, title }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <PrimaryButton className="mt-auto" onClick={() => setIsOpen(true)}>
                Подробнее
            </PrimaryButton>

            {isOpen && (
                <DisciplineModal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    title={title}
                    content={content}
                />
            )}
        </>
    );
};

export default DisciplineMore;
