import { Card, Divider } from "@/shared";
import { IProfessor } from "@/types";
import Image from "next/image";
import React, { FC } from "react";

type Props = {
    professor: IProfessor;
};

const Professor: FC<Props> = ({ professor }) => {
    const { name, status, courses, photo } = professor;

    return (
        <Card className="grid grid-cols-[1fr_5%_1fr] gap-2 mb-5">
            <div className="flex gap-5 items-center">
                <Image
                    src={`/professors/${photo}.jpg`}
                    alt={name}
                    width={200}
                    height={200}
                    className="w-[200px] h-[200px] rounded-full object-cover shrink-0"
                />
                <h3 className="text-sub-heading">
                    {name.split(" ").map((el, id) => (
                        <React.Fragment key={id}>
                            <span>{el}</span>
                            <br />
                        </React.Fragment>
                    ))}
                </h3>
            </div>

            <Divider isVertical />

            <div className="flex flex-col gap-7">
                <p className="text-strong">{status}</p>

                <div>
                    <span className="text-strong">Курсы:</span>{" "}
                    <span className="text-small text-text-secondary">
                        {courses.join(", ")}
                    </span>
                </div>
            </div>
        </Card>
    );
};

export default Professor;
