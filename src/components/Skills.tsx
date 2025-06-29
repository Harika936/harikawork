
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java"],
    icon: "💻",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript"],
    icon: "🌐",
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Database",
    skills: ["SQL", "DBMS"],
    icon: "🗄️",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Technologies",
    skills: ["VLSI Design"],
    icon: "⚡",
    color: "from-orange-500 to-red-500"
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-purple-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-gray-100 rounded-full py-2 px-4 text-sm font-medium text-gray-700">
                      {skill}
                    </div>
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
