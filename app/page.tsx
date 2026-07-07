import { Abiturients, Activities, Info, Learning } from "@/components/main";

export default function Home() {
    return (
        <div className="flex flex-col gap-6">
            <Info />
            <Learning />
            <Activities />
            <Abiturients /> 
        </div>
    );
}
