export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            ФЕНИКС<span className="text-red-600">АВТО</span>
          </a>
          <div className="flex space-x-8">
            <a href="#catalog" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Каталог
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              О нас
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <p className="text-sm uppercase tracking-widest text-red-600 mb-4">BMW · Mercedes · 1990–2010</p>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
              ФЕНИКС
              <br />
              <span className="text-red-600">АВТО</span>
            </h1>
            <p className="text-xl max-w-xl mb-8">
              Продажа классических BMW и Mercedes 1990–2010 годов. Проверенные автомобили с доставкой по всей России.
            </p>
            <a
              href="#catalog"
              className="inline-block bg-black text-white text-sm uppercase tracking-widest px-8 py-4 hover:bg-red-600 transition-colors duration-300"
            >
              Смотреть каталог
            </a>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-red-600">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/3fd5c00a-b553-4eda-8daf-3acaff678719/files/067570a7-8f13-45e8-a3b4-a0b4168842ef.jpg"
                  alt="BMW классика"
                  className="w-full h-full object-cover mix-blend-multiply"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black flex items-center justify-center">
                <span className="text-white text-xs font-bold uppercase tracking-wider text-center leading-tight">С 1990<br/>года</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-8 bg-black text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-red-600">200+</p>
              <p className="text-sm uppercase tracking-widest text-neutral-400 mt-1">Авто в наличии</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-600">85</p>
              <p className="text-sm uppercase tracking-widest text-neutral-400 mt-1">Городов доставки</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-600">10+</p>
              <p className="text-sm uppercase tracking-widest text-neutral-400 mt-1">Лет на рынке</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-600">98%</p>
              <p className="text-sm uppercase tracking-widest text-neutral-400 mt-1">Довольных клиентов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-6xl font-bold tracking-tighter">КАТАЛОГ</h2>
            <p className="text-neutral-400 text-sm uppercase tracking-widest">BMW · Mercedes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Car 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-neutral-900 mb-4 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/3fd5c00a-b553-4eda-8daf-3acaff678719/files/067570a7-8f13-45e8-a3b4-a0b4168842ef.jpg"
                  alt="BMW E34"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-1">BMW E34 525i</h3>
                  <p className="text-neutral-400 text-sm">1993 · 2.5L · АКПП · 180 л.с.</p>
                </div>
                <div className="text-right">
                  <p className="text-red-600 font-bold text-lg">750 000 ₽</p>
                  <p className="text-neutral-500 text-xs">+ доставка</p>
                </div>
              </div>
            </div>

            {/* Car 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-neutral-900 mb-4 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/3fd5c00a-b553-4eda-8daf-3acaff678719/files/7bb62a85-338c-41dd-adba-e0890933b24f.jpg"
                  alt="Mercedes W124"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-1">Mercedes W124 E320</h3>
                  <p className="text-neutral-400 text-sm">1995 · 3.2L · АКПП · 220 л.с.</p>
                </div>
                <div className="text-right">
                  <p className="text-red-600 font-bold text-lg">890 000 ₽</p>
                  <p className="text-neutral-500 text-xs">+ доставка</p>
                </div>
              </div>
            </div>

            {/* Car 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-neutral-900 mb-4 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/3fd5c00a-b553-4eda-8daf-3acaff678719/files/8d89e9cc-ad12-4bf1-ab13-eeb8d04c9d10.jpg"
                  alt="BMW E39"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-1">BMW E39 528i</h3>
                  <p className="text-neutral-400 text-sm">2001 · 2.8L · АКПП · 193 л.с.</p>
                </div>
                <div className="text-right">
                  <p className="text-red-600 font-bold text-lg">980 000 ₽</p>
                  <p className="text-neutral-500 text-xs">+ доставка</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-block border-2 border-white text-white text-sm uppercase tracking-widest px-12 py-4 hover:bg-white hover:text-black transition-colors duration-300"
            >
              Запросить полный каталог
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8">О НАС</h2>
              <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/3fd5c00a-b553-4eda-8daf-3acaff678719/files/7bb62a85-338c-41dd-adba-e0890933b24f.jpg"
                  alt="Феникс Авто"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-black"></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6">
                Феникс Авто — специализированный дилер классических BMW и Mercedes 1990–2010 годов. Мы работаем по всей России и доставляем автомобили в любой город страны.
              </p>
              <p className="mb-6">
                Каждый автомобиль проходит полную диагностику перед продажей. Мы проверяем историю по VIN, техническое состояние и юридическую чистоту. Вы получаете честную информацию о каждой машине.
              </p>
              <p className="mb-6">
                Доставка по всей России: заключаем договор, оформляем все документы и привозим автомобиль прямо к вашему дому — безопасно и с гарантией.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Наши принципы</h3>
                  <ul className="space-y-2">
                    <li>Честная история авто</li>
                    <li>Полная диагностика</li>
                    <li>Юридическая чистота</li>
                    <li>Гарантия сделки</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Услуги</h3>
                  <ul className="space-y-2">
                    <li>Продажа BMW</li>
                    <li>Продажа Mercedes</li>
                    <li>Доставка по РФ</li>
                    <li>Подбор под заказ</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12">ДОСТАВКА</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-neutral-700 p-8">
              <p className="text-red-600 text-4xl font-bold mb-4">01</p>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">Выбираете авто</h3>
              <p className="text-neutral-400">Смотрите каталог, задаёте вопросы. Можем подобрать авто под ваш запрос — марка, год, комплектация, бюджет.</p>
            </div>
            <div className="border border-neutral-700 p-8">
              <p className="text-red-600 text-4xl font-bold mb-4">02</p>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">Оформляем договор</h3>
              <p className="text-neutral-400">Заключаем договор купли-продажи с полной защитой ваших интересов. Прозрачные условия, никаких скрытых платежей.</p>
            </div>
            <div className="border border-neutral-700 p-8">
              <p className="text-red-600 text-4xl font-bold mb-4">03</p>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">Привозим к вам</h3>
              <p className="text-neutral-400">Доставляем автомобиль в любой город России. Вы получаете машину с полным пакетом документов прямо у двери.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8">КОНТАКТЫ</h2>
              <p className="text-xl mb-8">Хотите купить авто или подобрать под заказ? Оставьте заявку — перезвоним в течение 30 минут.</p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="w-28 text-sm uppercase tracking-widest">Почта</span>
                  <a href="mailto:info@fenix-auto.ru" className="hover:underline">
                    info@fenix-auto.ru
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-28 text-sm uppercase tracking-widest">Телефон</span>
                  <a href="tel:+78001234567" className="hover:underline">
                    8 800 123-45-67
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-28 text-sm uppercase tracking-widest">Работаем</span>
                  <span>По всей России</span>
                </p>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm uppercase tracking-widest mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm uppercase tracking-widest mb-2">
                    Ваш город
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Москва, Новосибирск, Краснодар..."
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2">
                    Какой автомобиль ищете?
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50 resize-none"
                    placeholder="BMW E39, Mercedes W210, год, бюджет..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white text-sm uppercase tracking-widest py-4 hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-black text-white border-t border-neutral-800">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-bold tracking-tighter">
            ФЕНИКС<span className="text-red-600">АВТО</span>
          </p>
          <p className="text-neutral-500 text-sm">BMW и Mercedes 1990–2010 · Доставка по всей России</p>
          <p className="text-neutral-500 text-sm">© 2024 Феникс Авто</p>
        </div>
      </footer>
    </main>
  );
}
