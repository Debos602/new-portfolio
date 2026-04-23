export const Projects = () => {
  const filters = ["All", "Full Stack", "Frontend", "Backend"];

  const projects = [
    {
      title: "CRYPTO-FLUX V2",
      tags: ["REACT", "NODE"],
      description: "A real-time cryptocurrency analytics engine with WebSocket integration and counter-predictive modeling.",
    },
    {
      title: "NEO-COMMERCE",
      tags: ["NEXT.JS", "TAILWIND"],
      description: "Next-generation headless commerce solution utilizing Stripe integration and serverless architecture.",
    },
    {
      title: "SYNAPSE API",
      tags: ["EXPRESS", "MONGO"],
      description: "A robust, high-throughput microservices gateway for AI-driven content-generation pipelines.",
    },
  ];

  return (
    <div className="bg-[#F4F7FF]">
      <div className="container mx-auto pb-[128px]">

        {/* Header */}
        <div className="text-center max-w-[600px] pt-[91px] py-[64px] mx-auto relative">
          <div className="absolute top-0 right-0 bg-[#006A71]/5 w-[600px] h-[300px] rounded-full blur-[100px]"></div>
          <h1 className="text-7xl tracking-[-1.8px] font-bold mb-6">SELECTED WORKS</h1>
          <p className="text-[18px] leading-[1.5] font-normal text-[#4D556B]">
            High-performance MERN applications engineered for the modern web.
            Exploring the intersection of design and data.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button key={f} className="">{f}</button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title}>

              {/* Card Image */}
              <div className="relative">
                <img src="" alt={project.title} className="w-full h-[200px] object-cover" />
                {/* Tags */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                {/* Card Footer */}
                <div className="flex items-center justify-between">
                  <button>Live Demo</button>
                  <button>&lt;/&gt;</button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;