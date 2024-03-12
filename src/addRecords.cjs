const fs = require('fs');

// Функция для генерации случайной даты рождения
function generateBirthday() {
    const start = new Date(1970, 0, 1);
    const end = new Date(2005, 11, 31);
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return randomDate.toISOString();
}

// Функция для генерации случайного номера телефона
function generatePhoneNumber() {
    const phoneFormats = [
        "+7 (9**) ***-**-**",
        "+7 (9##) ###-##-##"
    ];

    const randomFormat = phoneFormats[Math.floor(Math.random() * phoneFormats.length)];
    return randomFormat.replace(/\*/g, () => Math.floor(Math.random() * 10))
        .replace(/\#/g, () => Math.floor(Math.random() * 9) + 1);
}

// Функция для генерации случайного количества детей, братьев и сестер
function random4() {
    return Math.floor(Math.random() * 4);
}

// Функция для генерации случайного ФИО
function generateFullName(gender) {
    const maleFirstNames = ["Иван", "Петр", "Александр", "Сергей", "Михаил"];
    const femaleFirstNames = ["Елена", "Ольга", "Анна", "Мария", "Светлана"];
    const lastNames = ["Иванов", "Петров", "Сидоров", "Кузнецов", "Смирнов"];
    const maleMiddleNames = ["Иванович", "Петрович", "Александрович", "Сергеевич", "Михайлович"];
    const femaleMiddleNames = ["Ивановна", "Петровна", "Александровна", "Сергеевна", "Михайловна"];

    const firstName = gender === "Мужской" ? maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)] : femaleFirstNames[Math.floor(Math.random() * femaleFirstNames.length)];
    const lastName = gender === "Мужской" ? lastNames[Math.floor(Math.random() * lastNames.length)] : lastNames[Math.floor(Math.random() * lastNames.length)] + 'а';
    const middleName = gender === "Мужской" ? maleMiddleNames[Math.floor(Math.random() * maleMiddleNames.length)] : femaleMiddleNames[Math.floor(Math.random() * femaleMiddleNames.length)];

    return `${lastName} ${firstName} ${middleName}`;
}

// Функция для генерации случайного адреса
function generateAddress() {
    const cities = ["Москва", "Санкт-Петербург", "Екатеринбург", "Новосибирск", "Красноярск"];
    const streets = ["Ленина", "Мира", "Пушкина", "Гагарина", "Комсомольская"];

    const city = cities[Math.floor(Math.random() * cities.length)];
    const street = streets[Math.floor(Math.random() * streets.length)];
    const houseNumber = Math.floor(Math.random() * 100) + 1;
    const apartmentNumber = Math.floor(Math.random() * 200) + 1;

    return `г. ${city}, ул. ${street}, д. ${houseNumber}, кв. ${apartmentNumber}`;
}

// Функция для генерации случайного пола
function generateGender() {
    const genders = ["Мужской", "Женский"];
    return genders[Math.floor(Math.random() * genders.length)];
}

// Функция для выбора случайного университета
function generateUniversity() {
    const universities = [
        "Московский государственный университет имени М. В. Ломоносова (МГУ)",
        "Национальный исследовательский ядерный университет «МИФИ»",
        "Московский физико-технический институт (МФТИ)",
        "Национальный исследовательский университет «Высшая школа экономики» (НИУ ВШЭ)",
        "Санкт-Петербургский государственный университет (СПбГУ)",
        "Национальный исследовательский технологический университет «МИСИС»",
        "Университет ИТМО",
        "Российский университет дружбы народов (РУДН)",
        "Московский государственный технический университет имени Н. Э. Баумана (МГТУ)",
        "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)",
        "Российская академия народного хозяйства и государственной службы (РАНХиГС)"
    ];
    return universities[Math.floor(Math.random() * universities.length)];
}

// Функция для генерации случайного статуса брака
function generateMaritalStatus(gender) {
    const statuses = gender === "Мужской" ? ["женат", "холост", "разведен"] : ["замужем", "холоста", "разведена"];
    return statuses[Math.floor(Math.random() * statuses.length)];
}

// Функция для генерации случайного опыта работы
function generateWorkExperience() {
    return Math.floor(Math.random() * 16);
}

// Функция для генерации случайной зарплаты
function generateSalary() {
    return Math.floor(Math.random() * 270001) + 30000;
}

function randomDepartment() {
    return ['IT', 'HR', 'Финансы', 'Продажи', 'Маркетинг', 'Логистика', 'Производство', 'Кадры', 'Бухгалтерия', 'Юридический'][Math.floor(Math.random() * 10)];
}

function randomPosition() {
    return ['Разработчик', 'Менеджер', 'Бухгалтер', 'Директор', 'Специалист', 'Аналитик', 'Консультант', 'Инженер', 'Программист', 'Администратор'][Math.floor(Math.random() * 10)];
}

// Функция для генерации случайных данных пользователя
function generateRandomUserData(id) {
    const gender = generateGender();
    const maritalStatus = generateMaritalStatus(gender);
    const education = [];

    const educationCount = Math.min(random4() + 1, 3); // Случайное количество высших образований (максимум 3)

    for (let j = 0; j < educationCount; j++) {
        const degree = j === 0 ? "Среднее" : (j === 1 ? "Бакалавриат" : "Магистратура");
        const uni = j === 0 ? "Колледж" : generateUniversity();
        education.push({
            title: degree,
            value: uni,
        });
    }

    const career = [];
    const workExperience = generateWorkExperience();
    if (workExperience > 0) {
        career.push({
            title: "Стаж",
            value: workExperience,
        });
        career.push({
            title: "Зарплата",
            value: generateSalary(),
        });
        career.push({
            title: "Должность",
            value: randomPosition(),
        });
        career.push({
            title: "Отдел",
            value: randomDepartment(),
        });
    }

    return {
        id: id,
        params: {
            title: "Основная информация",
            value: [
                {
                    title: "ФИО",
                    value: generateFullName(gender),
                },
                {
                    title: "Дата рождения",
                    value: generateBirthday(),
                },
                {
                    title: "Номер телефона",
                    value: generatePhoneNumber(),
                },
                {
                    title: "Адрес",
                    value: generateAddress(),
                },
                {
                    title: "Пол",
                    value: gender,
                },
            ],
        },
        modules: {
            education: {
                title: "Образование",
                value: education,
            },
            career: {
                title: "Карьера",
                value: career,
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: generateFullName("Мужской"),
                    },
                    {
                        title: "Мать",
                        value: generateFullName("Женский"),
                    },
                    {
                        title: "Семейное положение",
                        value: maritalStatus,
                    },
                ]
            },
        },
    };
}

// Функция для добавления записи в файл
function addRecordToFile(record) {
    fs.appendFileSync('users.js', ',\n' + JSON.stringify(record, null, 4).replace(/\"([^(\")"]+)\":/g, "$1:"));
}

// Генерируем и добавляем 10 случайных записей
for (let i = 1; i <= 100; i++) {
    addRecordToFile(generateRandomUserData(i));
}
