
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const exampleWorks = [
  {
    type: "Реферат",
    subject: "История",
    title: "Великие географические открытия",
    completeness: 100,
    pages: 12,
    uniqueness: 98,
  },
  {
    type: "Курсовая",
    subject: "Экономика",
    title: "Анализ рынка криптовалют",
    completeness: 100,
    pages: 42,
    uniqueness: 100,
  },
  {
    type: "Дипломная",
    subject: "Программирование",
    title: "Разработка системы машинного обучения",
    completeness: 100,
    pages: 86,
    uniqueness: 99,
  }
];

const steps = [
  {
    number: "01",
    title: "Укажите тип работы",
    description: "Выберите реферат, курсовую, диплом или другой тип документа"
  },
  {
    number: "02",
    title: "Введите тему и требования",
    description: "Опишите тему работы и специфические требования к оформлению"
  },
  {
    number: "03",
    title: "Получите готовый результат",
    description: "Нейросеть сгенерирует уникальную работу за считанные минуты"
  },
];

const Demo = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="demo" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Как это работает
          </h2>
          <p className="text-xl text-gray-600">
            Создание учебной работы никогда не было таким простым и быстрым, 
            как с нашим сервисом на основе искусственного интеллекта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative glass-card p-8 animate-fade-in" 
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-up">
          <div className="p-6 border-b">
            <h3 className="text-2xl font-bold mb-4">Примеры готовых работ</h3>
            <div className="flex space-x-2 border-b">
              {exampleWorks.map((work, index) => (
                <button
                  key={index}
                  className={`py-2 px-4 focus:outline-none transition-all ${
                    activeTab === index
                      ? "border-b-2 border-primary text-primary font-medium"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {work.type}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-3">
                    {exampleWorks[activeTab].subject}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    100% Завершено
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-4">
                  {exampleWorks[activeTab].title}
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/6"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-sm">{exampleWorks[activeTab].pages} страниц</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-sm">{exampleWorks[activeTab].uniqueness}% уникальность</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-sm">ГОСТ оформление</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Список литературы</span>
                  </div>
                </div>
                
                <Button className="rounded-full">
                  Создать похожую работу
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 transform rotate-3 rounded-lg"></div>
                <div className="relative bg-white rounded-lg border p-4 animate-float">
                  <div className="flex justify-between mb-4">
                    <div>
                      <h4 className="font-medium">{exampleWorks[activeTab].type}</h4>
                      <p className="text-sm text-gray-500">{exampleWorks[activeTab].subject}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500">ID: #{Math.floor(Math.random() * 100000)}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <h5 className="font-medium text-sm">Содержание:</h5>
                    <div className="text-sm text-gray-700">
                      <p className="border-l-2 border-gray-200 pl-2 mb-1">Введение</p>
                      <p className="border-l-2 border-gray-200 pl-2 mb-1">Глава 1. Теоретическая часть</p>
                      <p className="border-l-2 border-gray-200 pl-2 mb-1">Глава 2. Аналитическая часть</p>
                      <p className="border-l-2 border-gray-200 pl-2 mb-1">Глава 3. Практическая часть</p>
                      <p className="border-l-2 border-gray-200 pl-2 mb-1">Заключение</p>
                      <p className="border-l-2 border-gray-200 pl-2">Список литературы</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded p-3 mb-4 text-sm">
                    <p className="font-medium text-blue-800 mb-1">Характеристики:</p>
                    <div className="grid grid-cols-2 gap-2 text-gray-700">
                      <div>Страниц: {exampleWorks[activeTab].pages}</div>
                      <div>Уникальность: {exampleWorks[activeTab].uniqueness}%</div>
                      <div>Ссылок: 18</div>
                      <div>Срок: 2 дня</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200 transition-colors">
                      Скачать пример
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
