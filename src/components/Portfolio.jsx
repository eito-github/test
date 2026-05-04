import { useState } from "react";
import { PROJECTS, BASE_URL } from "../constants"; // 追加

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(PROJECTS[1]);

    const handleProjectClick = (index) => {
        setSelectedProject(PROJECTS[index]);
    };

    return (
        <section id="portfolio" className="py-24 bg-stone-50">
            <div className="container mx-auto max-w-4xl space-y-8">
                <h2 className="text-5xl font-bold text-stone-800">Portfolio</h2>
                <p className="text-stone-500 leading-relaxed text-xl">
                    学習を通じて、実際に開発した成果物のリストです🤖
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* プロジェクトリスト */}
                    <div className="flex flex-col space-y-4">
                        {PROJECTS.map((project, index) => (
                            <button
                                onClick={() => {
                                    handleProjectClick(index);
                                }}
                                type="button"
                                key={project.title}
                                className={`${project.title === selectedProject.title &&
                                    "border-stone-400 bg-stone-100"
                                    } " py-6 px-2 border rounded-xl shadow-sm flex items-center space-x-2 "`}
                            >
                                <div className="bg-white border text-3xl h-16 w-16 rounded-full flex justify-center items-center">
                                    {project.emoji}
                                </div>
                                <h3 className="text-lg font-medium text-stone-800">
                                    {project.title}
                                </h3>
                            </button>
                        ))}
                    </div>

                    {/* プロジェクト詳細 */}
                    <div className="w-full col-span-2">
                        <img
                            src={BASE_URL + selectedProject.img} // 追加
                            alt={selectedProject.title}
                            className="rounded-t-xl border border-stone-400 border-b-0 h-[380px] w-full object-cover"
                        />
                        <div className="rounded-b-xl bg-white border-t-0 border-stone-400 border p-6 shadow-lg">
                            <p className="text-stone-600 mb-2">{selectedProject.desc}</p>
                            <a
                                className="text-emerald-600 underline"
                                href={selectedProject.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                👀 View on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;