import AboutData from "@/data/AboutData";
import {
    Card,
    CardDescription,
    CardContent
} from "@/components/ui/card";
import Link from "next/link";

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="pt-12 mb-10 text-center text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
                I&apos;m online!
            </div>
            <section className="flex flex-wrap justify-center items-center gap-10">
                {AboutData.map((props) => (
                    <Link
                        key={props.id}
                        href={props.url}
                        target="_self"
                    >
                        <Card
                            className="p-8 flex flex-col items-center rounded-lg shadow-md space-y-2 mt-5 w-80 sm:w-80 lg:w-[30rem] text-left relative transition-all duration-300 ease-in-out top-0 hover:-top-1 hover:shadow-xl"

                        >
                            <CardContent className="flex items-center justify-center h-full">
                                {props.logo}
                            </CardContent>
                            <CardDescription className="text-3xl flex items-center justify-center h-full">
                                {props.username}
                            </CardDescription>
                        </Card>
                    </Link>
                ))}
            </section>
        </div>
    );
}