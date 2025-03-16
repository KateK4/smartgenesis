
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Базовый",
    price: "499₽",
    period: "за работу",
    description: "Идеальный вариант для простых рефератов и докладов",
    features: [
      "Рефераты и доклады до 15 страниц",
      "Уникальность от 80%",
      "Стандартное время генерации",
      "Экспорт в DOCX и PDF",
      "Базовая проверка орфографии"
    ],
    isPopular: false,
    buttonText: "Выбрать план"
  },
  {
    name: "Стандартный",
    price: "999₽",
    period: "за работу",
    description: "Оптимальный выбор для курсовых работ и серьезных проектов",
    features: [
      "Курсовые работы до 40 страниц",
      "Уникальность от 90%",
      "Ускоренная генерация",
      "Все форматы экспорта",
      "Расширенная проверка текста",
      "Список литературы и ссылки"
    ],
    isPopular: true,
    buttonText: "Выбрать план"
  },
  {
    name: "Премиум",
    price: "2499₽",
    period: "за работу",
    description: "Идеальное решение для дипломных и сложных научных работ",
    features: [
      "Дипломные работы до 100 страниц",
      "Уникальность от 95%",
      "Приоритетная генерация",
      "Все форматы экспорта",
      "Полная проверка и редактирование",
      "Расширенный список источников",
      "Консультация специалиста"
    ],
    isPopular: false,
    buttonText: "Выбрать план"
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Выберите подходящий тарифный план
          </h2>
          <p className="text-xl text-gray-600">
            Мы предлагаем различные варианты сотрудничества, 
            подходящие под разные типы работ и бюджеты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`glass-card p-8 relative animate-fade-in flex flex-col h-full ${
                plan.isPopular ? "border-primary ring-2 ring-primary/20" : ""
              }`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary text-white text-xs font-bold uppercase px-4 py-1 rounded-full">
                    Популярный
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500 ml-1">{plan.period}</span>
              </div>
              
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full rounded-full mt-auto ${
                  plan.isPopular ? "" : "bg-white text-primary border border-primary hover:bg-blue-50"
                }`}
                variant={plan.isPopular ? "default" : "outline"}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
