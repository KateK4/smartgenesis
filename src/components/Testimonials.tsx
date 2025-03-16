
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Алексей К.",
    role: "Студент, Экономический факультет",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "Сервис просто спас меня перед защитой курсовой! За пару часов получил полностью готовую работу с уникальностью 94%. Преподаватель был в восторге, а я сэкономил неделю времени.",
    rating: 5
  },
  {
    name: "Мария Д.",
    role: "Студентка, Юридический факультет",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "Долго сомневалась, но решила попробовать. Результат превзошел ожидания! Работа получилась структурированной, логичной и полностью соответствовала требованиям. Буду обращаться еще.",
    rating: 5
  },
  {
    name: "Дмитрий В.",
    role: "Аспирант, Технический университет",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    content: "Использовал сервис для создания чернового варианта диссертации. Получил отличную основу, которую затем доработал под свои требования. Очень удобно и экономит массу времени.",
    rating: 4
  },
  {
    name: "Елена С.",
    role: "Магистрантка, Филологический факультет",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
    content: "Потрясающий сервис! Сгенерированная работа была настолько хорошо написана, что я даже не ожидала такого качества от ИИ. Особенно порадовало оформление по ГОСТу и грамотный список литературы.",
    rating: 5
  },
  {
    name: "Игорь М.",
    role: "Студент заочного отделения",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    content: "Когда работаешь полный день, очень сложно найти время на учебу. Этот сервис позволил мне справиться с потоком учебных заданий без ущерба для работы. Очень благодарен!",
    rating: 5
  },
  {
    name: "Анна П.",
    role: "Студентка, Медицинский институт",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    content: "Генератор отлично справляется даже со специфическими медицинскими темами. Работа требовала минимальной корректировки. Рекомендую всем, кто ценит свое время!",
    rating: 4
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Отзывы наших пользователей
          </h2>
          <p className="text-xl text-gray-600">
            Тысячи студентов и профессионалов уже оценили возможности нашего сервиса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card p-6 animate-fade-in hover:scale-[1.02] transition-transform" 
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              <div className="flex items-center space-x-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
