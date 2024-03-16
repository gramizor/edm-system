export const cities = [
    "Москва", "Санкт-Петербург", "Екатеринбург", "Новосибирск", "Красноярск"
]

export const genderVariants = ["Мужской", "Женский"];
export const positionVariants = ['Разработчик', 'Менеджер', 'Бухгалтер', 'Директор', 'Специалист', 'Аналитик', 'Консультант', 'Инженер', 'Программист', 'Администратор'];
export const departmentVariants = ['IT', 'HR', 'Финансы', 'Продажи', 'Маркетинг', 'Логистика', 'Производство', 'Кадры', 'Бухгалтерия', 'Юридический'];
export const universitiesVariants = [
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
export const maritalStatusVariants = ["женат", "холост", "разведен", "замужем", "холоста", "разведена"];

const users = [{
    id: 1,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Кузнецов Петр Михайлович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1974-08-03",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (986) 207-76-60",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Красноярск, ул. Комсомольская, д. 48, кв. 68",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: []
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "7 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "129691 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Программист",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "IT",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Иванов Петр Иванович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Иванова Анна Михайловна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холост",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 2,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Кузнецова Мария Александровна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1985-08-20",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (928) 953-14-24",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Москва, ул. Мира, д. 47, кв. 117",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Российская академия народного хозяйства и государственной службы (РАНХиГС)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "3 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "218609 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Менеджер",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Производство",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Сидоров Сергей Александрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Смирнова Анна Михайловна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведена",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 3,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Кузнецов Сергей Петрович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1972-10-01",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (997) 226-64-23",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Москва, ул. Комсомольская, д. 56, кв. 136",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Московский государственный университет имени М. В. Ломоносова (МГУ)",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Национальный исследовательский технологический университет «МИСИС»",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "15 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "275125 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Специалист",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Финансы",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Кузнецов Петр Сергеевич",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Петрова Мария Петровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "женат",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 4,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Сидоров Сергей Иванович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1980-08-27",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (932) 131-30-73",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Москва, ул. Комсомольская, д. 87, кв. 160",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Московский государственный университет имени М. В. Ломоносова (МГУ)",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Национальный исследовательский ядерный университет «МИФИ»",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "12 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "121187 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Менеджер",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "IT",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Сидоров Сергей Петрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Петрова Светлана Михайловна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холост",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 5,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Кузнецова Елена Сергеевна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1978-03-29",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (970) 744-09-98",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Красноярск, ул. Пушкина, д. 86, кв. 22",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Университет ИТМО",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "15 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "142526 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Разработчик",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Продажи",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Кузнецов Иван Петрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Петрова Мария Ивановна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "замужем",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 6,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Иванова Елена Петровна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1980-07-22",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (985) 785-65-49",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Красноярск, ул. Гагарина, д. 50, кв. 114",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Национальный исследовательский ядерный университет «МИФИ»",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "6 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "92716 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Инженер",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Производство",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Кузнецов Александр Михайлович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Петрова Анна Ивановна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холоста",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 7,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Кузнецова Анна Александровна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1971-09-28",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (957) 440-57-97",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Екатеринбург, ул. Пушкина, д. 16, кв. 77",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: []
        },
        career: {
            title: "Карьера",
            value: []
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Кузнецов Михаил Александрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Смирнова Анна Сергеевна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведена",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 8,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Смирнова Елена Александровна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1975-11-14",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (963) 894-23-81",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Екатеринбург, ул. Ленина, д. 75, кв. 63",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Национальный исследовательский университет «Высшая школа экономики» (НИУ ВШЭ)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "9 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "292952 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Консультант",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Финансы",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Сидоров Михаил Михайлович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Смирнова Елена Александровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведена",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 9,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Иванова Мария Михайловна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1975-03-12",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (980) 684-44-89",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Санкт-Петербург, ул. Мира, д. 60, кв. 51",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Национальный исследовательский университет «Высшая школа экономики» (НИУ ВШЭ)",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Национальный исследовательский ядерный университет «МИФИ»",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "6 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "33989 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Консультант",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Маркетинг",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Смирнов Иван Александрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Смирнова Мария Сергеевна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведена",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 10,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Сидоров Иван Петрович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1981-03-05",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (999) 594-73-37",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Санкт-Петербург, ул. Мира, д. 26, кв. 53",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Национальный исследовательский ядерный университет «МИФИ»",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "9 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "138061 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Консультант",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "HR",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Смирнов Петр Михайлович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Смирнова Елена Михайловна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "женат",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 11,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Смирнов Петр Александрович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1984-01-22",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (951) 106-71-86",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Екатеринбург, ул. Пушкина, д. 68, кв. 195",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Санкт-Петербургский государственный университет (СПбГУ)",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Московский физико-технический институт (МФТИ)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: []
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Смирнов Александр Александрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Сидорова Мария Александровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холост",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 12,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Кузнецов Сергей Александрович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "2000-03-17",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (957) 734-65-63",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Москва, ул. Мира, д. 26, кв. 114",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Московский государственный технический университет имени Н. Э. Баумана (МГТУ)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "3 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "138987 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Специалист",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Финансы",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Петров Александр Сергеевич",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Иванова Светлана Александровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холост",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 13,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Иванова Елена Михайловна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1970-05-21",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (944) 187-18-68",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Красноярск, ул. Пушкина, д. 19, кв. 180",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Московский государственный технический университет имени Н. Э. Баумана (МГТУ)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "1 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "159113 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Программист",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "HR",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Петров Иван Иванович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Смирнова Елена Сергеевна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "замужем",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 14,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Сидорова Светлана Ивановна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1975-08-23",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (956) 764-78-37",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Екатеринбург, ул. Мира, д. 48, кв. 112",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Российская академия народного хозяйства и государственной службы (РАНХиГС)",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Московский государственный университет имени М. В. Ломоносова (МГУ)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "14 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "276893 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Администратор",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Бухгалтерия",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Петров Михаил Михайлович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Сидорова Мария Петровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холоста",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 15,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Смирнова Елена Михайловна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "2000-07-02",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (948) 656-32-32",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Новосибирск, ул. Мира, д. 27, кв. 182",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Московский государственный университет имени М. В. Ломоносова (МГУ)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "11 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "109223 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Специалист",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "HR",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Сидоров Александр Сергеевич",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Петрова Светлана Александровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "замужем",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 16,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Иванова Ольга Ивановна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1974-04-25",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (935) 042-15-52",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Красноярск, ул. Пушкина, д. 94, кв. 55",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Московский государственный университет имени М. В. Ломоносова (МГУ)",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Национальный исследовательский ядерный университет «МИФИ»",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "3 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "30236 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Аналитик",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Продажи",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Кузнецов Сергей Александрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Кузнецова Мария Михайловна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "замужем",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 17,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Кузнецов Александр Сергеевич",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1986-12-09",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (918) 464-23-51",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Новосибирск, ул. Гагарина, д. 24, кв. 160",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: []
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "2 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "36258 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Программист",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Бухгалтерия",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Сидоров Михаил Петрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Смирнова Светлана Александровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "женат",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 18,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Смирнов Михаил Иванович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1975-03-04",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (912) 036-76-42",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Екатеринбург, ул. Комсомольская, д. 84, кв. 150",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: []
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "5 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "55823 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Программист",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Бухгалтерия",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Кузнецов Михаил Петрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Смирнова Елена Петровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "женат",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 19,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Смирнов Иван Сергеевич",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1982-09-16",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (912) 197-91-25",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Москва, ул. Комсомольская, д. 42, кв. 170",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: []
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "11 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "78708 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Консультант",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Маркетинг",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Петров Петр Сергеевич",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Кузнецова Мария Михайловна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведен",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 20,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Иванов Сергей Сергеевич",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1992-12-05",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (962) 254-16-33",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Красноярск, ул. Комсомольская, д. 49, кв. 7",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Российский университет дружбы народов (РУДН)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "10 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "167124 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Директор",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Юридический",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Иванов Михаил Михайлович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Петрова Анна Михайловна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "женат",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 21,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Петрова Светлана Михайловна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1970-03-13",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (914) 827-36-65",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Санкт-Петербург, ул. Мира, д. 67, кв. 139",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Национальный исследовательский университет «Высшая школа экономики» (НИУ ВШЭ)",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Московский физико-технический институт (МФТИ)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "11 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "63450 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Инженер",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Продажи",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Сидоров Михаил Сергеевич",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Иванова Мария Ивановна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холоста",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 22,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Петрова Светлана Ивановна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1976-06-25",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (940) 190-71-32",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Санкт-Петербург, ул. Гагарина, д. 39, кв. 77",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Российская академия народного хозяйства и государственной службы (РАНХиГС)",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Санкт-Петербургский государственный университет (СПбГУ)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "11 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "46160 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Администратор",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Юридический",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Кузнецов Михаил Иванович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Петрова Анна Михайловна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "замужем",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 23,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Иванов Сергей Иванович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1982-08-26",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (943) 691-60-76",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Новосибирск, ул. Мира, д. 7, кв. 8",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Московский физико-технический институт (МФТИ)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "11 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "272613 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Специалист",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Кадры",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Петров Александр Михайлович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Сидорова Елена Петровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "женат",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 24,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Смирнова Светлана Александровна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1980-12-18",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (997) 644-86-82",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Красноярск, ул. Комсомольская, д. 5, кв. 140",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Российский университет дружбы народов (РУДН)",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "11 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "164736 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Разработчик",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Бухгалтерия",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Петров Иван Сергеевич",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Кузнецова Елена Сергеевна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холоста",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 25,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Сидоров Иван Иванович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1984-10-10",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (959) 644-34-53",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Санкт-Петербург, ул. Гагарина, д. 100, кв. 162",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "8 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "112493 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Менеджер",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "HR",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Смирнов Александр Петрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Сидорова Анна Михайловна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холост",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 26,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Сидоров Петр Сергеевич",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1978-05-27",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (965) 564-42-68",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Санкт-Петербург, ул. Пушкина, д. 42, кв. 16",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Российский университет дружбы народов (РУДН)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "15 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "192193 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Менеджер",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Финансы",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Иванов Сергей Сергеевич",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Кузнецова Светлана Михайловна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведен",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 27,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Иванова Светлана Михайловна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1979-08-07",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (998) 000-58-47",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Новосибирск, ул. Мира, д. 5, кв. 199",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: []
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "7 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "188125 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Инженер",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Юридический",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Петров Сергей Иванович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Сидорова Елена Михайловна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведена",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 28,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Иванова Ольга Михайловна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1991-01-10",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (953) 802-16-13",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Екатеринбург, ул. Мира, д. 11, кв. 10",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: []
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "15 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "148349 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Специалист",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Продажи",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Кузнецов Иван Иванович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Иванова Светлана Александровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холоста",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 29,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Иванова Мария Александровна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1981-09-10",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (905) 992-46-88",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Москва, ул. Пушкина, д. 27, кв. 133",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Московский государственный университет имени М. В. Ломоносова (МГУ)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "6 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "40349 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Инженер",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Юридический",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Смирнов Сергей Михайлович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Кузнецова Светлана Александровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "замужем",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 30,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Сидорова Елена Александровна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1994-11-22",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (997) 767-72-78",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Красноярск, ул. Гагарина, д. 46, кв. 161",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "15 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "121912 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Разработчик",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Юридический",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Сидоров Сергей Сергеевич",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Смирнова Елена Сергеевна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холоста",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 31,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Смирнов Михаил Петрович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1981-04-20",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (923) 426-92-62",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Екатеринбург, ул. Гагарина, д. 93, кв. 111",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Российский университет дружбы народов (РУДН)",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Национальный исследовательский университет «Высшая школа экономики» (НИУ ВШЭ)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "12 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "58955 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Аналитик",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Бухгалтерия",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Петров Михаил Александрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Иванова Мария Ивановна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведен",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 32,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Кузнецов Сергей Петрович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1989-05-02",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (951) 589-60-45",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Красноярск, ул. Ленина, д. 99, кв. 62",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Российский университет дружбы народов (РУДН)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "4 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "54573 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Консультант",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Производство",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Смирнов Петр Сергеевич",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Кузнецова Мария Ивановна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холост",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 33,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Сидоров Михаил Александрович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1981-10-09",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (998) 645-53-87",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Москва, ул. Пушкина, д. 41, кв. 21",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Московский государственный технический университет имени Н. Э. Баумана (МГТУ)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "6 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "115584 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Аналитик",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "IT",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Сидоров Михаил Александрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Смирнова Ольга Петровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холост",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 34,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Петрова Ольга Михайловна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1983-07-25",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (909) 959-97-87",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Новосибирск, ул. Комсомольская, д. 34, кв. 176",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: []
        },
        career: {
            title: "Карьера",
            value: []
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Смирнов Иван Иванович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Смирнова Елена Михайловна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведена",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 35,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Смирнов Михаил Сергеевич",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "2004-02-23",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (992) 092-93-67",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Москва, ул. Мира, д. 90, кв. 199",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: []
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "11 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "118650 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Директор",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "IT",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Иванов Сергей Иванович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Сидорова Елена Александровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холост",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 36,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Смирнова Ольга Александровна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1986-12-15",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (974) 942-65-83",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Екатеринбург, ул. Пушкина, д. 95, кв. 148",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Российская академия народного хозяйства и государственной службы (РАНХиГС)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "1 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "183782 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Администратор",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Кадры",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Сидоров Иван Михайлович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Иванова Ольга Сергеевна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведена",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 37,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Иванова Ольга Сергеевна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1978-02-24",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (955) 201-09-53",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Красноярск, ул. Ленина, д. 44, кв. 138",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Университет ИТМО",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "9 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "286751 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Аналитик",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Финансы",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Петров Александр Михайлович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Иванова Светлана Сергеевна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холоста",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 38,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Кузнецов Сергей Михайлович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1980-03-15",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (998) 989-66-38",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Красноярск, ул. Ленина, д. 70, кв. 91",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Университет ИТМО",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "7 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "274321 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Инженер",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Маркетинг",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Сидоров Петр Михайлович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Смирнова Анна Александровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведен",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 39,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Сидорова Елена Петровна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1996-05-23",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (947) 948-23-69",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Москва, ул. Мира, д. 69, кв. 15",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Национальный исследовательский университет «Высшая школа экономики» (НИУ ВШЭ)",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Московский государственный университет имени М. В. Ломоносова (МГУ)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "5 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "84393 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Аналитик",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Юридический",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Петров Иван Александрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Петрова Ольга Ивановна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холоста",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 40,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Иванова Ольга Ивановна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "2002-11-25",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (942) 645-84-83",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Екатеринбург, ул. Мира, д. 43, кв. 127",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Московский физико-технический институт (МФТИ)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "9 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "69215 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Бухгалтер",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Логистика",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Петров Михаил Михайлович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Сидорова Светлана Сергеевна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "замужем",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 41,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Петрова Анна Михайловна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1990-04-16",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (914) 738-56-73",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Новосибирск, ул. Ленина, д. 31, кв. 126",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: []
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "4 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "294683 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Бухгалтер",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "IT",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Иванов Петр Петрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Иванова Светлана Михайловна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холоста",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 42,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Сидорова Елена Александровна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1995-12-04",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (991) 415-17-56",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Новосибирск, ул. Ленина, д. 1, кв. 129",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Российский университет дружбы народов (РУДН)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "5 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "256651 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Бухгалтер",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "HR",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Смирнов Александр Сергеевич",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Иванова Елена Петровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "замужем",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 43,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Кузнецова Ольга Сергеевна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1975-01-15",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (968) 243-56-83",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Санкт-Петербург, ул. Мира, д. 31, кв. 127",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: []
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "6 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "101882 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Программист",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Финансы",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Иванов Александр Иванович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Кузнецова Елена Ивановна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "замужем",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 44,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Кузнецова Елена Петровна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1974-07-05",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (955) 091-11-82",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Санкт-Петербург, ул. Комсомольская, д. 13, кв. 73",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: []
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "2 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "210363 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Аналитик",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Кадры",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Сидоров Сергей Александрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Сидорова Светлана Михайловна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холоста",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 45,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Петров Сергей Сергеевич",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1980-09-27",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (961) 758-62-77",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Москва, ул. Ленина, д. 12, кв. 96",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: []
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "4 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "179346 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Бухгалтер",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Маркетинг",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Петров Александр Иванович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Иванова Светлана Сергеевна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "женат",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 46,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Петрова Мария Петровна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1977-05-06",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (938) 466-57-17",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Новосибирск, ул. Ленина, д. 25, кв. 93",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Российская академия народного хозяйства и государственной службы (РАНХиГС)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "4 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "61564 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Директор",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Кадры",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Иванов Александр Иванович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Сидорова Мария Ивановна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холоста",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 47,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Смирнова Ольга Петровна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1998-03-17",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (907) 966-45-94",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Новосибирск, ул. Комсомольская, д. 30, кв. 98",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: []
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "8 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "31868 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Администратор",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Продажи",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Смирнов Петр Александрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Смирнова Ольга Михайловна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведена",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 48,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Иванов Михаил Александрович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1982-03-30",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (922) 473-90-33",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Красноярск, ул. Пушкина, д. 13, кв. 74",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Национальный исследовательский университет «Высшая школа экономики» (НИУ ВШЭ)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "7 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "106473 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Бухгалтер",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Маркетинг",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Кузнецов Михаил Петрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Петрова Ольга Михайловна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведен",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 49,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Петров Сергей Михайлович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "2004-10-18",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (938) 728-66-82",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Москва, ул. Пушкина, д. 15, кв. 191",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: []
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "14 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "116954 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Администратор",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Бухгалтерия",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Сидоров Петр Сергеевич",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Сидорова Светлана Александровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "женат",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 50,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Смирнов Сергей Сергеевич",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1976-04-10",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (974) 168-72-82",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Екатеринбург, ул. Мира, д. 75, кв. 94",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Московский физико-технический институт (МФТИ)",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Московский государственный технический университет имени Н. Э. Баумана (МГТУ)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "10 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "266456 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Консультант",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Продажи",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Иванов Александр Александрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Кузнецова Мария Ивановна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холост",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 51,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Иванова Анна Петровна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1985-03-11",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (945) 153-76-25",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Санкт-Петербург, ул. Пушкина, д. 2, кв. 102",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Санкт-Петербургский государственный университет (СПбГУ)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "1 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "102458 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Разработчик",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Бухгалтерия",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Петров Иван Михайлович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Сидорова Ольга Александровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холоста",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 52,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Смирнов Сергей Михайлович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1996-05-14",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (998) 281-04-20",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Санкт-Петербург, ул. Ленина, д. 36, кв. 80",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: []
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "13 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "204314 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Инженер",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Кадры",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Сидоров Михаил Сергеевич",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Сидорова Мария Михайловна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "женат",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 53,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Смирнов Петр Иванович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "2002-10-13",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (949) 952-59-28",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Новосибирск, ул. Мира, д. 24, кв. 32",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: []
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "6 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "285568 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Консультант",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Юридический",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Смирнов Михаил Александрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Петрова Анна Михайловна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "женат",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 54,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Кузнецов Михаил Петрович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1974-01-25",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (945) 129-01-80",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Красноярск, ул. Комсомольская, д. 13, кв. 12",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "14 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "104487 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Директор",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Продажи",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Сидоров Александр Сергеевич",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Иванова Мария Александровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холост",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 55,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Кузнецова Светлана Михайловна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1994-09-11",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (988) 336-51-38",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Новосибирск, ул. Мира, д. 14, кв. 104",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Московский государственный университет имени М. В. Ломоносова (МГУ)",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Российская академия народного хозяйства и государственной службы (РАНХиГС)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "6 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "67053 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Администратор",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Маркетинг",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Иванов Александр Сергеевич",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Сидорова Ольга Петровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "замужем",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 56,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Кузнецов Сергей Михайлович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1997-12-10",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (941) 299-49-92",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Екатеринбург, ул. Ленина, д. 55, кв. 135",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "11 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "215914 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Разработчик",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "IT",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Иванов Иван Иванович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Сидорова Анна Петровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "женат",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 57,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Кузнецов Сергей Иванович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1982-06-06",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (977) 731-45-12",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Красноярск, ул. Ленина, д. 33, кв. 10",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: []
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "6 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "139314 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Разработчик",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "IT",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Иванов Иван Иванович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Петрова Елена Сергеевна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холост",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 58,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Смирнова Светлана Петровна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1989-09-02",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (924) 636-22-35",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Екатеринбург, ул. Комсомольская, д. 26, кв. 73",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Московский государственный технический университет имени Н. Э. Баумана (МГТУ)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "6 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "110758 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Директор",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Маркетинг",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Сидоров Иван Петрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Петрова Анна Петровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведена",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 59,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Смирнова Анна Александровна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1972-03-07",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (963) 458-68-41",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Санкт-Петербург, ул. Комсомольская, д. 27, кв. 45",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Московский государственный университет имени М. В. Ломоносова (МГУ)",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "5 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "201107 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Директор",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "IT",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Кузнецов Сергей Сергеевич",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Кузнецова Мария Александровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холоста",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 60,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Сидорова Светлана Сергеевна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1995-03-10",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (995) 281-93-29",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Санкт-Петербург, ул. Пушкина, д. 52, кв. 193",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: []
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "4 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "83066 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Аналитик",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "IT",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Смирнов Александр Петрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Петрова Светлана Александровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холоста",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 61,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Кузнецов Иван Петрович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1978-05-03",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (911) 975-22-21",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Санкт-Петербург, ул. Пушкина, д. 66, кв. 194",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Российская академия народного хозяйства и государственной службы (РАНХиГС)",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Национальный исследовательский технологический университет «МИСИС»",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "7 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "148344 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Бухгалтер",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Юридический",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Сидоров Михаил Петрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Иванова Елена Александровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холост",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 62,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Сидоров Михаил Сергеевич",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1986-03-29",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (915) 858-19-66",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Екатеринбург, ул. Гагарина, д. 85, кв. 145",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Российская академия народного хозяйства и государственной службы (РАНХиГС)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "12 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "121923 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Директор",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Кадры",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Сидоров Александр Михайлович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Смирнова Мария Ивановна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "женат",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 63,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Сидорова Мария Михайловна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1986-07-04",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (947) 445-67-53",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Екатеринбург, ул. Гагарина, д. 63, кв. 8",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: []
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "6 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "168857 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Консультант",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Маркетинг",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Кузнецов Сергей Александрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Смирнова Анна Александровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холоста",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 64,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Сидоров Иван Михайлович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1978-05-04",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (980) 262-07-22",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Новосибирск, ул. Мира, д. 49, кв. 102",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "2 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "223562 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Бухгалтер",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Бухгалтерия",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Петров Сергей Иванович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Иванова Елена Петровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холост",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 65,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Кузнецов Сергей Петрович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1997-12-31",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (913) 620-07-59",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Красноярск, ул. Гагарина, д. 34, кв. 25",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Московский государственный технический университет имени Н. Э. Баумана (МГТУ)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "6 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "266273 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Директор",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "HR",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Иванов Петр Александрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Иванова Елена Михайловна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведен",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 66,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Кузнецов Иван Петрович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1991-04-03",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (949) 594-65-51",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Москва, ул. Комсомольская, д. 35, кв. 85",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "15 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "85743 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Аналитик",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "IT",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Петров Александр Петрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Иванова Ольга Михайловна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведен",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 67,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Смирнов Иван Сергеевич",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1971-07-01",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (946) 282-16-78",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Красноярск, ул. Мира, д. 15, кв. 81",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Национальный исследовательский университет «Высшая школа экономики» (НИУ ВШЭ)",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Национальный исследовательский ядерный университет «МИФИ»",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "2 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "208006 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Консультант",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Финансы",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Петров Сергей Петрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Смирнова Ольга Александровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведен",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 68,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Иванова Ольга Сергеевна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1977-10-09",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (954) 457-04-95",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Москва, ул. Комсомольская, д. 74, кв. 119",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: []
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "9 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "236846 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Консультант",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Бухгалтерия",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Иванов Сергей Михайлович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Петрова Мария Ивановна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "замужем",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 69,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Кузнецов Михаил Сергеевич",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1983-06-05",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (912) 643-32-64",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Красноярск, ул. Пушкина, д. 94, кв. 28",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Национальный исследовательский университет «Высшая школа экономики» (НИУ ВШЭ)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "10 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "116721 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Разработчик",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Логистика",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Кузнецов Сергей Александрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Смирнова Елена Сергеевна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холост",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 70,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Кузнецов Сергей Иванович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "2001-05-31",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (986) 868-49-85",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Красноярск, ул. Гагарина, д. 18, кв. 152",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Московский физико-технический институт (МФТИ)",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "11 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "94922 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Аналитик",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Производство",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Петров Иван Александрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Кузнецова Светлана Ивановна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "женат",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 71,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Кузнецова Светлана Михайловна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "2001-02-17",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (908) 283-89-64",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Санкт-Петербург, ул. Комсомольская, д. 49, кв. 25",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: []
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "5 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "167688 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Бухгалтер",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "IT",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Смирнов Михаил Иванович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Петрова Светлана Сергеевна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведена",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 72,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Смирнова Ольга Александровна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1978-11-02",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (994) 769-98-95",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Москва, ул. Пушкина, д. 23, кв. 59",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Университет ИТМО",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "12 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "215025 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Бухгалтер",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Маркетинг",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Сидоров Сергей Александрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Сидорова Мария Ивановна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведена",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 73,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Смирнова Ольга Михайловна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1971-08-20",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (946) 594-66-98",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Красноярск, ул. Гагарина, д. 30, кв. 60",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Московский государственный технический университет имени Н. Э. Баумана (МГТУ)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "13 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "194758 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Директор",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Логистика",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Иванов Сергей Петрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Смирнова Светлана Ивановна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведена",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 74,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Сидоров Александр Сергеевич",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "2004-05-05",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (913) 546-64-26",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Москва, ул. Ленина, д. 62, кв. 11",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Российская академия народного хозяйства и государственной службы (РАНХиГС)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "8 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "34487 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Специалист",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Логистика",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Смирнов Михаил Михайлович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Сидорова Анна Ивановна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведен",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 75,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Смирнов Иван Петрович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "2003-04-16",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (935) 962-59-16",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Екатеринбург, ул. Ленина, д. 8, кв. 124",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Национальный исследовательский ядерный университет «МИФИ»",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "15 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "149661 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Разработчик",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Финансы",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Сидоров Александр Петрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Иванова Светлана Ивановна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холост",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 76,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Иванов Александр Михайлович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1978-09-17",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (919) 406-03-95",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Екатеринбург, ул. Комсомольская, д. 80, кв. 85",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: []
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "10 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "107328 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Программист",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Финансы",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Иванов Петр Петрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Иванова Анна Сергеевна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведен",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 77,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Иванов Петр Сергеевич",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1985-10-21",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (928) 588-25-44",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Санкт-Петербург, ул. Ленина, д. 17, кв. 61",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Российская академия народного хозяйства и государственной службы (РАНХиГС)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "2 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "103856 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Администратор",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "IT",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Иванов Петр Иванович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Кузнецова Елена Петровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведен",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 78,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Смирнов Петр Иванович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1973-03-28",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (960) 061-79-08",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Новосибирск, ул. Пушкина, д. 95, кв. 188",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Национальный исследовательский ядерный университет «МИФИ»",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Российская академия народного хозяйства и государственной службы (РАНХиГС)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "14 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "231199 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Программист",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Продажи",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Смирнов Петр Иванович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Петрова Елена Ивановна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холост",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 79,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Иванова Светлана Михайловна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1977-03-30",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (958) 226-22-43",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Москва, ул. Гагарина, д. 33, кв. 188",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Московский физико-технический институт (МФТИ)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "7 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "196074 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Аналитик",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Продажи",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Кузнецов Иван Михайлович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Смирнова Мария Александровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холоста",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 80,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Петров Петр Сергеевич",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1999-07-31",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (927) 438-98-67",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Екатеринбург, ул. Мира, д. 21, кв. 29",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Университет ИТМО",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "5 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "103948 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Бухгалтер",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Логистика",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Иванов Сергей Иванович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Смирнова Ольга Петровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холост",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 81,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Сидорова Елена Ивановна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1997-07-03",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (959) 514-23-21",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Красноярск, ул. Пушкина, д. 22, кв. 75",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Российская академия народного хозяйства и государственной службы (РАНХиГС)",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Российский университет дружбы народов (РУДН)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "5 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "216637 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Директор",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Бухгалтерия",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Петров Петр Михайлович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Сидорова Светлана Михайловна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холоста",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 82,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Смирнов Сергей Александрович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1993-05-27",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (921) 548-98-21",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Красноярск, ул. Комсомольская, д. 6, кв. 146",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: []
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "12 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "250373 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Администратор",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Кадры",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Кузнецов Иван Петрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Смирнова Ольга Александровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холост",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 83,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Кузнецов Сергей Петрович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1991-08-09",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (917) 515-44-16",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Санкт-Петербург, ул. Гагарина, д. 61, кв. 69",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Московский физико-технический институт (МФТИ)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "14 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "50768 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Бухгалтер",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "HR",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Кузнецов Александр Михайлович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Смирнова Анна Александровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведен",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 84,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Смирнова Елена Сергеевна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "2004-09-15",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (918) 547-88-22",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Москва, ул. Комсомольская, д. 55, кв. 140",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Российский университет дружбы народов (РУДН)",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Московский физико-технический институт (МФТИ)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "11 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "51025 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Инженер",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Юридический",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Иванов Петр Петрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Кузнецова Ольга Александровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведена",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 85,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Смирнова Елена Александровна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "2005-01-03",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (939) 918-04-93",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Москва, ул. Пушкина, д. 45, кв. 58",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Российский университет дружбы народов (РУДН)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "4 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "51320 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Инженер",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Продажи",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Кузнецов Михаил Иванович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Иванова Елена Ивановна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведена",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 86,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Петрова Мария Александровна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1997-09-17",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (960) 437-05-74",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Екатеринбург, ул. Ленина, д. 42, кв. 18",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Национальный исследовательский технологический университет «МИСИС»",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Российский университет дружбы народов (РУДН)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "15 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "160854 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Разработчик",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Финансы",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Кузнецов Сергей Сергеевич",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Иванова Ольга Михайловна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведена",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 87,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Петров Петр Михайлович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1994-03-15",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (997) 508-70-98",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Красноярск, ул. Гагарина, д. 25, кв. 129",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Санкт-Петербургский государственный университет (СПбГУ)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "13 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "118699 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Инженер",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "IT",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Смирнов Петр Александрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Иванова Мария Михайловна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведен",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 88,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Смирнов Александр Петрович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "2002-09-16",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (917) 005-21-72",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Красноярск, ул. Ленина, д. 74, кв. 36",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: []
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "3 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "154336 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Специалист",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Кадры",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Кузнецов Сергей Иванович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Петрова Светлана Сергеевна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "женат",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 89,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Сидорова Светлана Сергеевна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1975-07-31",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (926) 158-68-71",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Красноярск, ул. Ленина, д. 3, кв. 154",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: []
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "14 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "230627 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Бухгалтер",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Кадры",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Иванов Сергей Петрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Сидорова Ольга Александровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведена",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 90,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Кузнецова Елена Петровна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1971-04-06",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (999) 665-31-77",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Новосибирск, ул. Мира, д. 53, кв. 70",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Университет ИТМО",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "3 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "293133 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Менеджер",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Юридический",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Сидоров Александр Иванович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Кузнецова Мария Ивановна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведена",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 91,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Сидорова Елена Александровна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1974-08-06",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (911) 592-72-96",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Новосибирск, ул. Пушкина, д. 63, кв. 129",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Российская академия народного хозяйства и государственной службы (РАНХиГС)",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Национальный исследовательский университет «Высшая школа экономики» (НИУ ВШЭ)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "2 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "184616 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Бухгалтер",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Производство",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Иванов Михаил Михайлович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Иванова Ольга Александровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведена",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 92,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Иванова Мария Александровна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1997-05-04",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (981) 556-24-26",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Красноярск, ул. Ленина, д. 75, кв. 79",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: []
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "13 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "214906 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Администратор",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Логистика",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Петров Петр Петрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Сидорова Мария Сергеевна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холоста",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 93,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Кузнецов Александр Михайлович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1997-03-24",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (945) 071-98-45",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Новосибирск, ул. Мира, д. 91, кв. 91",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Российский университет дружбы народов (РУДН)",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Национальный исследовательский ядерный университет «МИФИ»",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "3 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "95469 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Программист",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "IT",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Сидоров Петр Петрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Петрова Елена Петровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холост",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 94,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Смирнов Иван Александрович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1994-07-23",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (985) 232-49-48",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Новосибирск, ул. Гагарина, д. 44, кв. 172",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Национальный исследовательский ядерный университет «МИФИ»",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Московский государственный университет имени М. В. Ломоносова (МГУ)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "5 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "170563 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Директор",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "HR",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Сидоров Петр Петрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Иванова Ольга Александровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "женат",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 95,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Кузнецов Иван Михайлович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "2001-03-30",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (930) 253-14-90",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Новосибирск, ул. Мира, д. 9, кв. 88",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Московский государственный технический университет имени Н. Э. Баумана (МГТУ)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "11 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "267426 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Консультант",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Производство",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Сидоров Иван Сергеевич",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Сидорова Елена Сергеевна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холост",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 96,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Смирнов Иван Александрович",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1999-10-20",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (962) 436-67-91",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Екатеринбург, ул. Ленина, д. 75, кв. 200",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Санкт-Петербургский государственный университет (СПбГУ)",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Национальный исследовательский ядерный университет «МИФИ»",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "7 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "169813 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Программист",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Юридический",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Смирнов Иван Михайлович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Смирнова Светлана Александровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холост",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 97,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Сидорова Мария Сергеевна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1975-09-25",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (917) 768-64-12",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Москва, ул. Мира, д. 100, кв. 89",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Московский государственный университет имени М. В. Ломоносова (МГУ)",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Российская академия народного хозяйства и государственной службы (РАНХиГС)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "1 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "55495 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Инженер",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Логистика",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Иванов Александр Иванович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Сидорова Мария Петровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведена",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 98,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Сидорова Анна Александровна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1994-07-12",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (924) 360-30-06",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Новосибирск, ул. Комсомольская, д. 18, кв. 12",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Университет ИТМО",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "15 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "173427 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Администратор",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Финансы",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Петров Сергей Иванович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Петрова Светлана Ивановна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "разведена",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 99,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Кузнецова Светлана Сергеевна",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1998-02-17",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (934) 878-89-48",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Екатеринбург, ул. Ленина, д. 64, кв. 7",
                type: "text"
            },
            {
                title: "Пол",
                value: "Женский",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Российская академия народного хозяйства и государственной службы (РАНХиГС)",
                    variants: universitiesVariants
                },
                {
                    title: "Магистратура",
                    type: "dropList",
                    value: "Московский физико-технический институт (МФТИ)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "5 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "271316 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Инженер",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Логистика",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Сидоров Сергей Александрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Смирнова Мария Петровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холоста",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
},
{
    id: 100,
    params: {
        title: "Основная информация",
        value: [
            {
                title: "ФИО",
                value: "Кузнецов Иван Сергеевич",
                type: "text"
            },
            {
                title: "Дата рождения",
                value: "1997-08-20",
                type: "date"
            },
            {
                title: "Номер телефона",
                value: "+7 (955) 046-73-24",
                type: "text"
            },
            {
                title: "Адрес",
                value: "г. Екатеринбург, ул. Пушкина, д. 18, кв. 139",
                type: "text"
            },
            {
                title: "Пол",
                value: "Мужской",
                type: "dropList",
                variants: genderVariants
            }
        ]
    },
    modules: {
        education: {
            title: "Образование",
            value: [
                {
                    title: "Бакалавриат",
                    type: "dropList",
                    value: "Российский университет дружбы народов (РУДН)",
                    variants: universitiesVariants
                }
            ]
        },
        career: {
            title: "Карьера",
            value: [
                {
                    title: "Стаж",
                    value: "12 (в годах)",
                    type: "text"
                },
                {
                    title: "Зарплата",
                    value: "167256 руб.",
                    type: "text"
                },
                {
                    title: "Должность",
                    value: "Инженер",
                    type: "dropList",
                    variants: positionVariants
                },
                {
                    title: "Отдел",
                    value: "Бухгалтерия",
                    type: "dropList",
                    variants: departmentVariants
                }
            ]
        },
        family: {
            title: "Семья",
            value: [
                {
                    title: "Отец",
                    value: "Петров Иван Петрович",
                    type: "text"
                },
                {
                    title: "Мать",
                    value: "Петрова Елена Александровна",
                    type: "text"
                },
                {
                    title: "Семейное положение",
                    value: "холост",
                    type: "dropList",
                    variants: maritalStatusVariants
                }
            ]
        }
    }
}
]
export default users;