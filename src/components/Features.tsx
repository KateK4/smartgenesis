
import { FileText, Clock, Search, FileCheck, Download, Shield } from "lucide-react";

const featureItems = [
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Любой тип работы",
    description: "От простых рефератов до сложных дипломных работ — наш ИИ справится с любым заданием."
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Быстрая генерация",
    description: "Получите готовую работу за минуты, а не часы или дни как при ручном написании."
  },
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "Высокая уникальность",
    description: "Работы проходят все проверки на антиплагиат благодаря уникальным алгоритмам нейросети."
  },
  {
    icon: <FileCheck className="h-8 w-8 text-primary" />,
    title: "Соответствие требованиям",
    description: "Автоматическое форматирование по ГОСТ и другим академическим стандартам."
  },
  {
    icon: <Download className="h-8 w-8 text-primary" />,
    title: "Экспорт в разных форматах",
    description: "Скачивайте готовые работы в форматах DOCX, PDF и других удобных форматах."
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Полная конфиденциальность",
    description: "Ваши данные и созданные работы надежно защищены и не передаются третьим лицам."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ключевые возможности нашего сервиса
          </h2>
          <p className="text-xl text-gray-600">
            Используя передовые алгоритмы искусственного интеллекта, мы создаем 
            работы, которые полностью соответствуют вашим требованиям
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 md:p-8 animate-fade-in" 
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="rounded-full w-16 h-16 flex items-center justify-center bg-blue-50 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
