
// ==============================================================================
// 🌍 ФАЙЛ ПЕРЕВОДОВ / TRANSLATIONS FILE
// Здесь находится ВЕСЬ ТЕКСТ сайта.
// Чтобы изменить текст, просто поменяйте слова внутри кавычек ''.
// ==============================================================================

export const translations = {
  // 🇷🇺 РУССКИЙ ЯЗЫК
  ru: {
    // --- Меню (Навигация) ---
    nav_courses: 'Курсы',
    nav_monitoring: 'Мониторинг',
    nav_contact: 'Контакты',
    
    // --- Главный экран (Hero) ---
    hero_tagline: 'Набор открыт на 2025 год',
    hero_title: 'Изучайте английский язык быстро и эффективно', // Главный заголовок
    hero_desc: '', // Описание под заголовком
    hero_joined: '500+ студентов', // Плашка "Присоединилось"
    
    // --- Форма регистрации ---
    form_name_label: 'Ваше имя и фамилия',
    form_name_placeholder: 'Ваше имя и фамилия',
    form_phone_label: 'Ваш номер телефона',
    form_phone_placeholder: '+998901234567',
    form_button: 'Записатся', // Текст на кнопке
    form_disclaimer: 'Нажимая кнопку, вы соглашаетесь с нашей публичной офертой!',
    form_sent_title: 'Заявка отправлена!',
    form_sent_desc: 'Мы свяжемся с вами в ближайшее время.',
    form_new_req: 'Отправить еще',

    // --- Секция Курсов ---
    courses_title: 'Наши программы',
    courses_desc: 'Выберите идеальный путь для вашего обучения.',
    
    // Карточка 1 (Оранжевая)
    course_applicants_title: 'Абитуриентов',
    course_applicants_desc: 'Для тех, кто готовится к экзаменам по английскому языку в государственные и зарубежные университеты.',
    
    // Карточка 2 (Фиолетовая)
    course_school_title: 'Школьники',
    course_school_desc: 'Для учеников, желающих проводить свободное время с пользой.',
    
    // Карточка 3 (Зеленая)
    course_hobby_title: 'Любители',
    course_hobby_desc: 'Для путешественников и полиглотов, интересующихся новыми культурами.',
    
    // --- Остальные секции ---
    slider_title: 'Отзывы студентов',
    gallery_title: 'Атмосфера школы',
    footer_rights: 'Все права защищены.',
    
    // --- Настройки ---
    settings_title: 'Настройки',
    settings_lang: 'Язык',
    settings_theme: 'Тема',
    theme_dark: 'Темная',
    theme_light: 'Светлая'
  },

  // 🇺🇿 УЗБЕКСКИЙ ЯЗЫК
  uz: {
    // --- Menyu ---
    nav_courses: 'Kurslar',
    nav_monitoring: 'Monitoring',
    nav_contact: 'Aloqa',
    
    // --- Bosh sahifa ---
    hero_tagline: '2025 yil uchun qabul ochiq',
    hero_title: 'Ingliz tilini tez va samarali o\'rganing',
    hero_desc: '',
    hero_joined: '500+ talaba',
    
    // --- Ro'yxatdan o'tish formasi ---
    form_name_label: 'Ismingiz va familiyangiz',
    form_name_placeholder: 'Ismingiz va familiyangiz',
    form_phone_label: 'Telefon raqamingiz',
    form_phone_placeholder: '+998901234567',
    form_button: 'Yozilish',
    form_disclaimer: 'Tugmani bosish orqali siz ommaviy ofertaga rozilik bildirasiz!',
    form_sent_title: 'Ariza yuborildi!',
    form_sent_desc: 'Tez orada siz bilan bog\'lanamiz.',
    form_new_req: 'Yana yuborish',

    // --- Kurslar ---
    courses_title: 'Bizning dasturlarimiz',
    courses_desc: 'Ta\'lim olish uchun eng mos yo\'nalishni tanlang.',
    
    course_applicants_title: 'Abituriyentlar',
    course_applicants_desc: 'Universitetlarga kirish imtihonlariga tayyorgarlik.',
    
    course_school_title: 'Maktab o\'quvchilari',
    course_school_desc: 'Bo\'sh vaqtini foydali o\'tkazish uchun.',
    
    course_hobby_title: 'Havasmandlar',
    course_hobby_desc: 'Sayohatchilar va poliglotlar uchun.',
    
    // --- Boshqa ---
    slider_title: 'Talabalar fikrlari',
    gallery_title: 'Maktab muhiti',
    footer_rights: 'Barcha huquqlar himoyalangan.',
    settings_title: 'Sozlamalar',
    settings_lang: 'Til',
    settings_theme: 'Mavzu',
    theme_dark: 'Qorong\'u',
    theme_light: 'Yorug\'',
  }
};

export type Language = 'ru' | 'uz';
export type Theme = 'light' | 'dark';
