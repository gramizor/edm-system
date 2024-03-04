const fs = require('fs');

// Функция для генерации случайной даты рождения
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// Функция для генерации случайного номера телефона
function randomPhoneNumber() {
    return '+7 (' + Math.floor(Math.random() * 1000) + ') ' + Math.floor(Math.random() * 1000) + '-' + Math.floor(Math.random() * 100) + '-' + Math.floor(Math.random() * 100);
}

// Функция для генерации случайного адреса
function randomAddress() {
    return 'г. ' + ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск', 'Омск', 'Самара', 'Ростов-на-Дону'][Math.floor(Math.random() * 10)] + ', ул. ' + ['Ленина', 'Пушкина', 'Гагарина', 'Кирова', 'Сталина', 'Маркса', 'Красной Армии', 'Октябрьская', 'Советская', 'Мира'][Math.floor(Math.random() * 10)] + ', д. ' + Math.floor(Math.random() * 100) + ', кв. ' + Math.floor(Math.random() * 100);
}

// Функция для генерации случайного имени и фамилии
function randomName() {
    return ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Михайлов', 'Федоров', 'Морозов', 'Волков', 'Алексеев'][Math.floor(Math.random() * 10)] + ' ' + ['Иван', 'Петр', 'Александр', 'Андрей', 'Сергей', 'Михаил', 'Николай', 'Владимир', 'Артем', 'Дмитрий'][Math.floor(Math.random() * 10)] + ' ' + ['Иванович', 'Петрович', 'Александрович', 'Андреевич', 'Сергеевич', 'Михайлович', 'Николаевич', 'Владимирович', 'Артемович', 'Дмитриевич'][Math.floor(Math.random() * 10)];
}

// Функция для генерации случайных символов в почтовом адресе
function randomEmail() {
    const symbols = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    let email = '';
    for (let i = 0; i < 8; i++) {
        email += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    email += Math.floor(Math.random() * 100) + '@' + ['yandex.ru', 'mail.ru', 'google.com'][Math.floor(Math.random() * 3)];
    return email;
}

// Функция для генерации случайного стажа работы
function randomWorkExperience() {
    return Math.floor(Math.random() * 40);
}

// Функция для генерации случайного отдела работы
function randomDepartment() {
    return ['IT', 'HR', 'Финансы', 'Продажи', 'Маркетинг', 'Логистика', 'Производство', 'Кадры', 'Бухгалтерия', 'Юридический'][Math.floor(Math.random() * 10)];
}

// Функция для генерации случайного количества детей, братьев и сестер
function randomFamilyMembers() {
    return Math.floor(Math.random() * 4);
}

// Функция для генерации случайной записи
function generateRandomRecord(id) {
    return {
        id: id,
        full_name: randomName(),
        birthday: randomDate(new Date(1950, 0, 1), new Date(2000, 0, 1)).toLocaleDateString(),
        phone: randomPhoneNumber(),
        email: randomEmail(),
        address: randomAddress(),
        sisters: Array.from({ length: randomFamilyMembers() }, () => randomName()),
        brothers: Array.from({ length: randomFamilyMembers() }, () => randomName()),
        children: Array.from({ length: randomFamilyMembers() }, () => randomName()),
        father: randomName(),
        mother: randomName(),
        maritalStatus: ['женат', 'не женат'][Math.floor(Math.random() * 2)],
        education: ['Высшее', 'Среднее', 'Среднее специальное', 'Начальное'][Math.floor(Math.random() * 4)],
        workExperience: randomWorkExperience(),
        salary: Math.floor(Math.random() * 100000),
        position: ['Разработчик', 'Менеджер', 'Бухгалтер', 'Директор', 'Специалист', 'Аналитик', 'Консультант', 'Инженер', 'Программист', 'Администратор'][Math.floor(Math.random() * 10)],
        department: randomDepartment()
    };
}

// Функция для добавления записи в файл
function addRecordToFile(record) {
    fs.appendFileSync('users.js', ',\n' + JSON.stringify(record, null, 4).replace(/\"([^(\")"]+)\":/g, "$1:"));
}

// Генерируем и добавляем 10 случайных записей
for (let i = 1; i <= 100; i++) {
    addRecordToFile(generateRandomRecord(i));
}
