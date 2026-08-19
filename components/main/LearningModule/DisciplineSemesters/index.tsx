"use client";

import React, { FC, useId, useState } from "react";
import { Discipline } from "../../Learning/types";
import { GhostButton } from "@/shared";
import DisciplineModal from "../DisciplineModal";

type Props = {
    contents: Required<Discipline>["contents"];
};

const DisciplineSemesters: FC<Props> = ({ contents }) => {
    const [activeSemester, setActiveSemester] = useState<null | {
        title: string;
        content: React.ReactNode;
    }>(null);

    return (
        <>
            <div className="absolute flex flex-col gap-3 right-[15px] top-[12%]">
                {contents.map((el, id) => (
                    <GhostButton
                        key={id}
                        onClick={() =>
                            setActiveSemester({
                                title: el.title,
                                content: el.config,
                            })
                        }
                        className="text-primary text-small duration-150 border-b-transparent border-b hover:border-b-primary "
                    >
                        {id + 1}
                    </GhostButton>
                ))}
            </div>

            {activeSemester && (
                <DisciplineModal
                    title={activeSemester.title}
                    isOpen
                    id={activeSemester.title}
                    key={activeSemester.title}
                    onClose={() => setActiveSemester(null)}
                    content={activeSemester.content}
                />
            )}
        </>
    );
};

export default DisciplineSemesters;
