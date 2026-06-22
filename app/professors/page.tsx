import { ProfessorHeader, ProfessorList } from "@/components/professors";

const Professors = () => {
    return (
        <div className="flex flex-col gap-6">
            <ProfessorHeader />
            <ProfessorList />
        </div>
    );
};

export default Professors;
