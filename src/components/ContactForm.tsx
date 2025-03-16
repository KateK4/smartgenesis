
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactForm = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Остались вопросы?
              </h2>
              <p className="text-xl text-gray-600">
                Свяжитесь с нами любым удобным способом, и мы 
                ответим на все ваши вопросы
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Электронная почта</h3>
                  <p className="text-gray-600">support@studyai.ru</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Телефон</h3>
                  <p className="text-gray-600">+7 (800) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Адрес</h3>
                  <p className="text-gray-600">
                    г. Москва, ул. Примерная, д. 123, офис 456
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-4 space-y-4">
              <h3 className="font-medium text-xl">Мы в социальных сетях</h3>
              <div className="flex space-x-4">
                {["vk", "telegram", "whatsapp", "instagram"].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center text-primary transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-right">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6">Напишите нам</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Имя
                    </label>
                    <Input
                      id="name"
                      placeholder="Введите ваше имя"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Введите ваш email"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Тема
                  </label>
                  <Input
                    id="subject"
                    placeholder="Укажите тему сообщения"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Введите ваше сообщение"
                    className="w-full h-32"
                  />
                </div>
                
                <Button className="w-full rounded-full">Отправить сообщение</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
