
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Background decorations */}
        <div className="blur-bg top-20 left-[10%] opacity-60"></div>
        <div className="blur-bg bottom-20 right-[10%] opacity-40"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-8 text-center md:text-left">
            <div className="inline-block">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-light text-blue-dark mb-6 animate-fade-in">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-dark mr-2"></span>
                Революция в образовании
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Учебные работы,{" "}
              <span className="text-primary">
                созданные искусственным интеллектом
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl mx-auto md:mx-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Наша нейросеть мгновенно сгенерирует для вас уникальные рефераты, 
              курсовые, дипломные работы и доклады, соответствующие всем 
              академическим требованиям.
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="rounded-full px-8 py-6 text-base font-medium" onClick={() => document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' })}>
                Создать проект сейчас
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-base font-medium">
                Демо-версия
              </Button>
            </div>
            
            <div className="flex items-center justify-center md:justify-start gap-x-6 gap-y-3 flex-wrap mt-6 text-sm text-gray-500 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                100% уникальность
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                Мгновенная генерация
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-purple-500 mr-2"></div>
                Различные форматы
              </div>
            </div>
          </div>
          
          <div className="md:col-span-5 animate-fade-in-right" style={{ animationDelay: "0.5s" }}>
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 transform rotate-6 scale-105"></div>
              <div className="glass-card p-6 md:p-8 animate-float">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">Курсовая работа</h3>
                    <p className="text-sm text-gray-500">Экономика</p>
                  </div>
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Готово
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div className="h-4 bg-gray-100 rounded w-full"></div>
                  <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-100 rounded w-4/6"></div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="font-medium">42 страницы</p>
                      <p className="text-gray-500">12,486 слов</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">100% уникальность</p>
                      <p className="text-gray-500">3 мин. назад</p>
                    </div>
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

export default Hero;
