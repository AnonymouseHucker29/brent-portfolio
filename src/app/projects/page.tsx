import Layout from "@/components/Layout"

export default function Projects() {
    return (
        <>
            <Layout>
                <div className="flex justify-center items-center h-screen text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                    You are in: {Projects.name}
                </div>
            </Layout>
        </>
    )
}