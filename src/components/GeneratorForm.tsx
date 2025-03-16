
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Book, FileText, Presentation, FileCheck, Edit, ClipboardList } from "lucide-react";

// Define work types with their details
const workTypes = [
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Реферат",
    pages: "10-15",
    description: "Краткое изложение информации по заданной теме"
  },
  {
    icon: <Book className="h-8 w-8 text-primary" />,
    title: "Курсовая",
    pages: "25-40",
    description: "Исследовательская работа с анализом и выводами"
  },
  {
    icon: <Presentation className="h-8 w-8 text-primary" />,
    title: "Диплом",
    pages: "50-80",
    description: "Итоговая квалификационная работа с исследованием"
  },
  {
    icon: <Edit className="h-8 w-8 text-primary" />,
    title: "Сочинение",
    pages: "3-5",
    description: "Творческая работа с изложением собственных мыслей"
  },
  {
    icon: <ClipboardList className="h-8 w-8 text-primary" />,
    title: "Доклад",
    pages: "8-12",
    description: "Информационное сообщение по конкретной теме"
  },
  {
    icon: <FileCheck className="h-8 w-8 text-primary" />,
    title: "Отчет",
    pages: "15-30",
    description: "Структурированное описание проделанной работы"
  }
];

const GeneratorForm = () => {
  const [projectTopic, setProjectTopic] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Generating project with topic:", projectTopic);
    // Here you would integrate with your AI service
  };

  return (
    <section id="generator" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Создайте свою работу прямо сейчас
          </h2>
          <p className="text-xl text-gray-600">
            Выберите тип работы и введите тему вашего проекта, а нейросеть сделает всё остальное
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 animate-scale-in">
            <div className="mb-6">
              <label htmlFor="projectTopic" className="block text-lg font-medium text-gray-700 mb-2">
                Введите тему проекта
              </label>
              <div className="flex gap-2">
                <Input
                  id="projectTopic"
                  value={projectTopic}
                  onChange={(e) => setProjectTopic(e.target.value)}
                  placeholder="Например: Влияние цифровизации на экономику России"
                  className="flex-1 text-base py-6 rounded-lg"
                />
                <Button type="submit" className="rounded-lg" size="lg">
                  Создать <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {workTypes.map((workType, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="rounded-full w-12 h-12 flex items-center justify-center bg-blue-50">
                  {workType.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{workType.title}</h3>
                  <p className="text-sm text-gray-500">{workType.pages} страниц</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">{workType.description}</p>
              
              <div className="mt-auto">
                <div className="h-3 bg-gray-100 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-100 rounded w-5/6 mb-2"></div>
                <div className="h-3 bg-gray-100 rounded w-4/6"></div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto font-medium">
                  Выбрать <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeneratorForm;
