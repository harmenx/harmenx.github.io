import { Card, CardContent } from "@/components/ui/card"

interface SkillsProps {
  skills: Array<{
    name: string
    icon: string
  }>
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border-2 hover:border-blue-200"
            >
              <CardContent className="p-0">
                <div className="text-4xl mb-3">{skill.icon}</div>
                <div className="text-sm font-semibold text-gray-700">{skill.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
