const fs = require('fs');
function generateBirthday() {
    const start = new Date(1970, 0, 1);
    const end = new Date(2005, 11, 31);
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const year = randomDate.getFullYear();
    const month = String(randomDate.getMonth() + 1).padStart(2, '0');
    const day = String(randomDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function generatePhoneNumber() {
    const phoneFormats = [
        "+7 (9**) ***-**-**",
        "+7 (9##) ###-##-##"
    ];

    const randomFormat = phoneFormats[Math.floor(Math.random() * phoneFormats.length)];
    return randomFormat.replace(/\*/g, () => Math.floor(Math.random() * 10))
        .replace(/\#/g, () => Math.floor(Math.random() * 9) + 1);
}

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

function generateAddress() {
    const cities = ["Москва", "Санкт-Петербург", "Екатеринбург", "Новосибирск", "Красноярск"];
    const streets = ["Ленина", "Мира", "Пушкина", "Гагарина", "Комсомольская"];

    const city = cities[Math.floor(Math.random() * cities.length)];
    const street = streets[Math.floor(Math.random() * streets.length)];
    const houseNumber = Math.floor(Math.random() * 100) + 1;
    const apartmentNumber = Math.floor(Math.random() * 200) + 1;

    return `г. ${city}, ул. ${street}, д. ${houseNumber}, кв. ${apartmentNumber}`;
}

function generateGender() {
    const genders = ["Мужской", "Женский"];
    return genders[Math.floor(Math.random() * genders.length)];
}

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

function generateMaritalStatus(gender) {
    const statuses = gender === "Мужской" ? ["женат", "холост", "разведен"] : ["замужем", "холоста", "разведена"];
    return statuses[Math.floor(Math.random() * statuses.length)];
}

function generateWorkExperience() {
    return Math.floor(Math.random() * 16);
}

function generateSalary() {
    return Math.floor(Math.random() * 270001) + 30000;
}

function randomDepartment() {
    return ['IT', 'HR', 'Финансы', 'Продажи', 'Маркетинг', 'Логистика', 'Производство', 'Кадры', 'Бухгалтерия', 'Юридический'][Math.floor(Math.random() * 10)];
}

function randomPosition() {
    return ['Разработчик', 'Менеджер', 'Бухгалтер', 'Директор', 'Специалист', 'Аналитик', 'Консультант', 'Инженер', 'Программист', 'Администратор'][Math.floor(Math.random() * 10)];
}

function generateRandomUserData(id) {
    const gender = generateGender();
    const maritalStatus = generateMaritalStatus(gender);

    const education = [];
    const educationCount = Math.floor(Math.random() * 3);
    if (educationCount > 0) {
        for (let j = 0; j < educationCount; j++) {
            const degree = j === 0 ? "Бакалавриат" : "Магистратура";
            const uni = generateUniversity();
            education.push({
                title: degree,
                type: 'dropList',
                value: uni,
                variants: 'universitiesVariants',
            });
        }
    }

    const career = [];
    const workExperience = generateWorkExperience();
    if (workExperience > 0) {
        career.push({
            title: "Стаж",
            value: workExperience + " (в годах)",
            type: 'text',
        });
        career.push({
            title: "Зарплата",
            value: generateSalary() + " руб.",
            type: 'text',
        });
        career.push({
            title: "Должность",
            value: randomPosition(),
            type: 'dropList',
            variants: 'positionVariants',
        });
        career.push({
            title: "Отдел",
            value: randomDepartment(),
            type: 'dropList',
            variants: 'departmentVariants',
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
                    type: 'text',
                },
                {
                    title: "Дата рождения",
                    value: generateBirthday(),
                    type: 'date',
                },
                {
                    title: "Номер телефона",
                    value: generatePhoneNumber(),
                    type: 'text',
                },
                {
                    title: "Адрес",
                    value: generateAddress(),
                    type: 'text',
                },
                {
                    title: "Пол",
                    value: gender,
                    type: 'dropList',
                    variants: 'genderVariants',
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
                        type: 'text',
                    },
                    {
                        title: "Мать",
                        value: generateFullName("Женский"),
                        type: 'text',
                    },
                    {
                        title: "Семейное положение",
                        value: maritalStatus,
                        type: 'dropList',
                        variants: 'maritalStatusVariants',
                    },
                ]
            },
        },
    };
}

function addRecordToFile(record) {
    fs.appendFileSync('users.js', ',\n' + JSON.stringify(record, null, 4).replace(/\"([^(\")"]+)\":/g, "$1:"));
}

for (let i = 1; i <= 100; i++) {
    addRecordToFile(generateRandomUserData(i));
}
