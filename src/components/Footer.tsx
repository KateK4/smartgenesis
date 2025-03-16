
const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <a href="#" className="inline-block">
              <span className="text-xl font-bold text-primary">StudyAI</span>
            </a>
            <p className="text-gray-600">
              Современное решение для автоматической генерации учебных работ 
              с использованием передовых технологий искусственного интеллекта.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Сервис</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-600 hover:text-primary transition-colors">
                  Возможности
                </a>
              </li>
              <li>
                <a href="#demo" className="text-gray-600 hover:text-primary transition-colors">
                  Примеры работ
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">
                  Тарифы
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Руководство пользователя
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  API для разработчиков
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Компания</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Блог
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Карьера
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Правовая информация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Пользовательское соглашение
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Условия использования
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Правила оплаты
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2023 StudyAI. Все права защищены.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">
                Вакансии
              </a>
              <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">
                Партнерам
              </a>
              <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">
                СМИ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
