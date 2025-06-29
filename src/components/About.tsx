
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-orange-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-orange-500 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Motivated and detail-oriented student with strong skills in programming, web development, 
                  and database management. Driven to apply problem-solving abilities and technical knowledge 
                  in a dynamic software role, contributing to innovative solutions while continuously growing 
                  in the IT industry.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Familiar with embedded systems and VLSI design, with hands-on experience in automation 
                  and real-time system development, and capable of contributing effectively to related projects.
                </p>
              </CardContent>
            </Card>
            
            <div className="pt-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-orange-100 rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">8.47</div>
                  <div className="text-gray-600">Current CGPA</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-orange-500 mb-2">5+</div>
                  <div className="text-gray-600">Technologies</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-pink-500 mb-2">2+</div>
                  <div className="text-gray-600">Projects</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-blue-500 mb-2">1</div>
                  <div className="text-gray-600">Internship</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
