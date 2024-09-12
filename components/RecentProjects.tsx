import { projects } from "@/data";

export const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small section of {''}
        <span className="text-purple">
          recent projects
        </span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((project) => 
          <div>
            {project.title}
          </div>
        )}
      </div>
    </div>
  )
}

export default RecentProjects;