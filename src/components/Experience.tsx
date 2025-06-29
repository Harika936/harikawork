
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional <span className="text-orange-500">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-orange-500 to-red-500"></div>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-orange-500 hover:bg-orange-600 text-white">
                  Internship
                </Badge>
                <Badge variant="outline" className="text-orange-600 border-orange-600">
                  VLSI Design
                </Badge>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Abhyasa Semicon Technologies, Vizag
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🔬</div>
                    <p className="text-gray-600 font-medium">VLSI Design Course</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Completed a comprehensive course on VLSI Design, gaining hands-on experience 
                    with industry-standard tools and methodologies.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Developed practical knowledge in semiconductor design and fabrication processes.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Enhanced understanding of embedded systems and real-time system development.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
