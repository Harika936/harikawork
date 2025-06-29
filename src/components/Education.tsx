
import { Card, CardContent } from "@/components/ui/card";

const educationData = [
  {
    degree: "B.Tech",
    institution: "GMR Institute of Technology",
    duration: "2022–2026",
    grade: "CGPA: 8.47",
    color: "from-purple-500 to-pink-500"
  },
  {
    degree: "Intermediate",
    institution: "Sri Aditya Junior College",
    duration: "2020–2022",
    grade: "88.9%",
    color: "from-orange-500 to-red-500"
  },
  {
    degree: "SSC",
    institution: "Sri Vidyaniketan",
    duration: "2019–2020",
    grade: "92%",
    color: "from-blue-500 to-purple-500"
  }
];

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-purple-600">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto"></div>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
          
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-8">
                      <div className={`inline-block px-4 py-2 rounded-full text-white text-sm font-medium mb-4 bg-gradient-to-r ${edu.color}`}>
                        {edu.duration}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                      <p className="text-lg text-gray-600 mb-2">{edu.institution}</p>
                      <p className="text-xl font-semibold text-green-600">{edu.grade}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="relative z-10">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${edu.color} border-4 border-white shadow-lg`}></div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
