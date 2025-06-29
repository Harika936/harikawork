
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Health Monitoring System",
    description: "Developed a low-cost system to monitor and transmit patient vital parameters during emergencies. Used ECG, Heart Rate, and Temperature sensors, connected to a cloud via microcontroller modules.",
    technologies: ["IoT", "Arduino", "Cloud Computing", "Sensors"],
    category: "Embedded Systems",
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Uber Clone (Front-End)",
    description: "Developed a static, responsive Uber page clone using HTML5 and CSS3. Demonstrated use of Flexbox, media queries, and responsive layouts.",
    technologies: ["HTML5", "CSS3", "Flexbox", "Responsive Design"],
    category: "Web Development",
    color: "from-blue-500 to-purple-500"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some of my key projects that showcase my skills in both web development and embedded systems. 
            Each project comes with earned certificates demonstrating my commitment to learning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-sm">
                    {project.category}
                  </Badge>
                  <Badge variant="outline" className="text-sm text-green-600 border-green-600">
                    Certified
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className={`w-full h-48 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center mb-4`}>
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">📱</div>
                      <p className="text-sm opacity-90">Project Screenshot</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
