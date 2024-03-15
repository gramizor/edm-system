export const cities = [
    "Москва", "Санкт-Петербург", "Екатеринбург", "Новосибирск", "Красноярск"
]

const users = [
    {
        id: 1,
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
                    value: "1996-07-09",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (961) 721-59-45",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Новосибирск, ул. Гагарина, д. 27, кв. 176",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "Российский университет дружбы народов (РУДН)"
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
                        value: "207727 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Инженер",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Логистика",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Кузнецов Петр Александрович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Сидорова Светлана Александровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведена",
                        type: "dropList"
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
                    value: "Сидоров Александр Иванович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1971-12-25",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (936) 180-54-46",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Санкт-Петербург, ул. Пушкина, д. 77, кв. 94",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Национальный исследовательский ядерный университет «МИФИ»"
                    },
                    {
                        title: "Магистратура",
                        type: "dropList",
                        value: "Национальный исследовательский технологический университет «МИСИС»"
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
                        value: "264810 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Разработчик",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "HR",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Смирнов Сергей Александрович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Кузнецова Ольга Александровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холост",
                        type: "dropList"
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
                    value: "Сидоров Александр Иванович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1970-01-23",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (923) 438-00-71",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Новосибирск, ул. Ленина, д. 19, кв. 57",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Университет ИТМО"
                    },
                    {
                        title: "Магистратура",
                        type: "dropList",
                        value: "Университет ИТМО"
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
                        value: "185824 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Менеджер",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Производство",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Иванов Иван Александрович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Иванова Ольга Михайловна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холост",
                        type: "dropList"
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
                    value: "Иванов Иван Сергеевич",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "2002-01-10",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (904) 720-12-62",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Москва, ул. Пушкина, д. 36, кв. 62",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Санкт-Петербургский государственный университет (СПбГУ)"
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
                        value: "283971 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Разработчик",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Логистика",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Петров Михаил Сергеевич",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Кузнецова Ольга Петровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "женат",
                        type: "dropList"
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
                    value: "Петров Александр Иванович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1981-05-28",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (953) 081-19-10",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Екатеринбург, ул. Пушкина, д. 41, кв. 101",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Национальный исследовательский университет «Высшая школа экономики» (НИУ ВШЭ)"
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
                        value: "75175 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Инженер",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Маркетинг",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Иванов Иван Сергеевич",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Кузнецова Светлана Сергеевна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведен",
                        type: "dropList"
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
                    value: "Смирнова Светлана Сергеевна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1970-03-27",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (911) 789-47-75",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Москва, ул. Гагарина, д. 34, кв. 167",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "Национальный исследовательский университет «Высшая школа экономики» (НИУ ВШЭ)"
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
                        value: "238139 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Консультант",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Кадры",
                        type: "dropList"
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
                        value: "Сидорова Светлана Михайловна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "замужем",
                        type: "dropList"
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
                    value: "Кузнецов Петр Михайлович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "2005-01-15",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (924) 360-17-31",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Екатеринбург, ул. Комсомольская, д. 44, кв. 63",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "95341 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Администратор",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Финансы",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Сидоров Сергей Иванович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Петрова Елена Александровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведен",
                        type: "dropList"
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
                    value: "Петров Сергей Александрович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1974-12-15",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (987) 920-61-53",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Москва, ул. Мира, д. 57, кв. 91",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "91178 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Специалист",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Кадры",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Иванов Иван Сергеевич",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Смирнова Анна Михайловна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "женат",
                        type: "dropList"
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
                    value: "Иванова Анна Михайловна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "2002-11-03",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (952) 742-77-43",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Новосибирск, ул. Гагарина, д. 70, кв. 36",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "Российский университет дружбы народов (РУДН)"
                    },
                    {
                        title: "Магистратура",
                        type: "dropList",
                        value: "Национальный исследовательский технологический университет «МИСИС»"
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
                        value: "224952 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Специалист",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Юридический",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Смирнов Сергей Александрович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Сидорова Анна Петровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведена",
                        type: "dropList"
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
                    value: "Смирнов Петр Иванович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1998-11-10",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (967) 487-19-27",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Санкт-Петербург, ул. Мира, д. 51, кв. 57",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Национальный исследовательский технологический университет «МИСИС»"
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
                        value: "129379 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Специалист",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Логистика",
                        type: "dropList"
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
                        value: "Кузнецова Светлана Сергеевна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "женат",
                        type: "dropList"
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
                    value: "Иванова Елена Сергеевна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1991-10-23",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (983) 838-72-12",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Москва, ул. Комсомольская, д. 89, кв. 132",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "Российская академия народного хозяйства и государственной службы (РАНХиГС)"
                    },
                    {
                        title: "Магистратура",
                        type: "dropList",
                        value: "Московский физико-технический институт (МФТИ)"
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
                        value: "35430 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Администратор",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Логистика",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Иванов Петр Михайлович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Иванова Елена Михайловна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "замужем",
                        type: "dropList"
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
                    value: "Сидоров Михаил Сергеевич",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1994-08-28",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (915) 201-92-90",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Санкт-Петербург, ул. Пушкина, д. 32, кв. 87",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Национальный исследовательский технологический университет «МИСИС»"
                    },
                    {
                        title: "Магистратура",
                        type: "dropList",
                        value: "Санкт-Петербургский государственный университет (СПбГУ)"
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
                        value: "147077 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Администратор",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Логистика",
                        type: "dropList"
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
                        value: "Смирнова Мария Ивановна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холост",
                        type: "dropList"
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
                    value: "Петров Иван Иванович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1975-11-01",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (908) 264-17-88",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Москва, ул. Пушкина, д. 86, кв. 200",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "1 (в годах)",
                        type: "text"
                    },
                    {
                        title: "Зарплата",
                        value: "80341 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Разработчик",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Маркетинг",
                        type: "dropList"
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
                        value: "Иванова Анна Александровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "женат",
                        type: "dropList"
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
                    value: "Иванова Светлана Михайловна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1971-05-24",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (904) 141-08-84",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Новосибирск, ул. Ленина, д. 52, кв. 146",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "Национальный исследовательский технологический университет «МИСИС»"
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
                        value: "293155 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Специалист",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Кадры",
                        type: "dropList"
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
                        value: "Петрова Светлана Михайловна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведена",
                        type: "dropList"
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
                    value: "Петров Александр Иванович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "2004-12-23",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (995) 998-63-95",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Новосибирск, ул. Комсомольская, д. 65, кв. 72",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "31107 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Администратор",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "HR",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Кузнецов Петр Александрович",
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
                        type: "dropList"
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
                    value: "Сидоров Сергей Петрович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1985-01-05",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (964) 545-61-17",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Москва, ул. Пушкина, д. 10, кв. 59",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "59269 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Аналитик",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "HR",
                        type: "dropList"
                    }
                ]
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
                        value: "Иванова Светлана Петровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведен",
                        type: "dropList"
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
                    value: "Смирнова Ольга Сергеевна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1976-07-01",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (965) 735-48-58",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Екатеринбург, ул. Мира, д. 4, кв. 118",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "Иванов Михаил Михайлович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Сидорова Мария Петровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "замужем",
                        type: "dropList"
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
                    value: "Иванова Светлана Ивановна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1975-03-20",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (942) 623-94-66",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Красноярск, ул. Пушкина, д. 38, кв. 160",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "Национальный исследовательский университет «Высшая школа экономики» (НИУ ВШЭ)"
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
                        value: "58808 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Директор",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "HR",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Смирнов Петр Петрович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Петрова Анна Сергеевна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведена",
                        type: "dropList"
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
                    value: "Смирнова Елена Петровна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1970-12-13",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (917) 287-51-56",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Москва, ул. Мира, д. 77, кв. 193",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "Российский университет дружбы народов (РУДН)"
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
                        value: "133407 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Программист",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "IT",
                        type: "dropList"
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
                        value: "Кузнецова Анна Петровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холоста",
                        type: "dropList"
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
                    value: "Иванов Сергей Петрович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1996-06-01",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (984) 171-45-56",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Санкт-Петербург, ул. Пушкина, д. 9, кв. 57",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "246764 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Консультант",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Производство",
                        type: "dropList"
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
                        value: "Иванова Ольга Михайловна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "женат",
                        type: "dropList"
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
                    value: "Петров Петр Иванович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "2005-03-27",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (983) 269-19-31",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Санкт-Петербург, ул. Ленина, д. 100, кв. 177",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Московский государственный университет имени М. В. Ломоносова (МГУ)"
                    },
                    {
                        title: "Магистратура",
                        type: "dropList",
                        value: "Московский физико-технический институт (МФТИ)"
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
                        value: "170585 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Специалист",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "HR",
                        type: "dropList"
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
                        value: "Кузнецова Ольга Сергеевна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "женат",
                        type: "dropList"
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
                    value: "Кузнецова Мария Михайловна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "2000-06-25",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (983) 347-63-21",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Екатеринбург, ул. Пушкина, д. 62, кв. 88",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "Университет ИТМО"
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
                        value: "232427 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Консультант",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Юридический",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Петров Петр Иванович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Петрова Анна Сергеевна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведена",
                        type: "dropList"
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
                    value: "Сидоров Петр Петрович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1977-05-01",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (979) 719-20-61",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Санкт-Петербург, ул. Пушкина, д. 14, кв. 188",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Университет ИТМО"
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
                        value: "280302 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Аналитик",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Логистика",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Кузнецов Петр Михайлович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Иванова Мария Михайловна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холост",
                        type: "dropList"
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
                    value: "Сидоров Петр Михайлович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1997-03-02",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (993) 286-27-59",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Москва, ул. Комсомольская, д. 6, кв. 8",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Национальный исследовательский технологический университет «МИСИС»"
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
                        value: "41541 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Специалист",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Юридический",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Кузнецов Сергей Михайлович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Иванова Ольга Сергеевна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холост",
                        type: "dropList"
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
                    value: "Петров Михаил Александрович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1972-08-03",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (902) 575-21-59",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Екатеринбург, ул. Комсомольская, д. 67, кв. 42",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "84706 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Программист",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Производство",
                        type: "dropList"
                    }
                ]
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
                        value: "Сидорова Анна Петровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведен",
                        type: "dropList"
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
                    value: "Петрова Светлана Ивановна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1985-10-27",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (922) 542-77-22",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Санкт-Петербург, ул. Ленина, д. 40, кв. 173",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "58325 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Директор",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Кадры",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Петров Михаил Сергеевич",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Сидорова Ольга Сергеевна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холоста",
                        type: "dropList"
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
                    value: "Кузнецова Анна Петровна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1994-06-16",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (942) 798-53-41",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Санкт-Петербург, ул. Мира, д. 96, кв. 39",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "192347 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Менеджер",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Маркетинг",
                        type: "dropList"
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
                        value: "Кузнецова Анна Ивановна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холоста",
                        type: "dropList"
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
                    value: "Сидоров Сергей Александрович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1999-02-11",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (935) 738-81-52",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Санкт-Петербург, ул. Гагарина, д. 16, кв. 130",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "55141 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Директор",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Юридический",
                        type: "dropList"
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
                        value: "Иванова Ольга Михайловна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведен",
                        type: "dropList"
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
                    value: "Петров Михаил Сергеевич",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1992-07-11",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (996) 711-92-60",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Екатеринбург, ул. Гагарина, д. 7, кв. 50",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Национальный исследовательский ядерный университет «МИФИ»"
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
                        value: "40212 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Программист",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "IT",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Сидоров Иван Александрович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Петрова Светлана Александровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведен",
                        type: "dropList"
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
                    value: "Петрова Анна Михайловна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1977-02-28",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (902) 618-44-46",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Екатеринбург, ул. Мира, д. 35, кв. 160",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "98344 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Консультант",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Финансы",
                        type: "dropList"
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
                        value: "Смирнова Мария Александровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведена",
                        type: "dropList"
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
                    value: "Кузнецова Ольга Александровна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1986-04-24",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (995) 964-44-31",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Новосибирск, ул. Ленина, д. 25, кв. 181",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "162010 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Бухгалтер",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Производство",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Иванов Михаил Иванович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Смирнова Мария Александровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "замужем",
                        type: "dropList"
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
                    value: "Кузнецов Михаил Петрович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1991-10-19",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (944) 913-88-88",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Красноярск, ул. Гагарина, д. 74, кв. 71",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Университет ИТМО"
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
                        value: "224022 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Администратор",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Производство",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Сидоров Петр Александрович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Петрова Ольга Ивановна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведен",
                        type: "dropList"
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
                    value: "Иванова Ольга Сергеевна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1999-02-26",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (983) 472-49-83",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Екатеринбург, ул. Мира, д. 26, кв. 155",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "Московский государственный технический университет имени Н. Э. Баумана (МГТУ)"
                    },
                    {
                        title: "Магистратура",
                        type: "dropList",
                        value: "Национальный исследовательский ядерный университет «МИФИ»"
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
                        value: "144096 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Бухгалтер",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "HR",
                        type: "dropList"
                    }
                ]
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
                        value: "Петрова Ольга Александровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "замужем",
                        type: "dropList"
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
                    value: "Петров Петр Михайлович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1979-01-12",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (905) 443-51-06",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Санкт-Петербург, ул. Пушкина, д. 72, кв. 47",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)"
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
                        value: "46957 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Директор",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Юридический",
                        type: "dropList"
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
                        value: "Смирнова Светлана Сергеевна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холост",
                        type: "dropList"
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
                    value: "Смирнова Анна Сергеевна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "2001-02-26",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (943) 477-08-74",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Красноярск, ул. Гагарина, д. 99, кв. 173",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "145170 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Аналитик",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Производство",
                        type: "dropList"
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
                        value: "Кузнецова Светлана Михайловна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "замужем",
                        type: "dropList"
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
                    value: "Смирнов Александр Сергеевич",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1990-05-17",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (998) 718-80-57",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Санкт-Петербург, ул. Мира, д. 68, кв. 85",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "192451 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Аналитик",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Финансы",
                        type: "dropList"
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
                        value: "Иванова Светлана Михайловна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холост",
                        type: "dropList"
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
                    value: "Иванова Анна Сергеевна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1981-10-18",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (986) 039-43-77",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Москва, ул. Гагарина, д. 21, кв. 126",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "38019 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Администратор",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Логистика",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Петров Сергей Михайлович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Кузнецова Светлана Сергеевна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холоста",
                        type: "dropList"
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
                    value: "Смирнов Сергей Сергеевич",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1971-10-09",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (948) 168-51-12",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Екатеринбург, ул. Комсомольская, д. 55, кв. 68",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Университет ИТМО"
                    },
                    {
                        title: "Магистратура",
                        type: "dropList",
                        value: "Московский государственный университет имени М. В. Ломоносова (МГУ)"
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
                        value: "211802 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Разработчик",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Кадры",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Кузнецов Сергей Петрович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Сидорова Светлана Ивановна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "женат",
                        type: "dropList"
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
                    value: "Смирнов Петр Сергеевич",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1992-11-08",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (962) 250-84-11",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Екатеринбург, ул. Гагарина, д. 67, кв. 109",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "1 (в годах)",
                        type: "text"
                    },
                    {
                        title: "Зарплата",
                        value: "39295 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Администратор",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Производство",
                        type: "dropList"
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
                        value: "Смирнова Елена Петровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведен",
                        type: "dropList"
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
                    value: "Петров Михаил Петрович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1982-08-19",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (962) 243-11-13",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Москва, ул. Ленина, д. 37, кв. 160",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Московский физико-технический институт (МФТИ)"
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
                        value: "295832 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Администратор",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Продажи",
                        type: "dropList"
                    }
                ]
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
                        value: "Смирнова Елена Михайловна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холост",
                        type: "dropList"
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
                    value: "Сидорова Анна Сергеевна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1995-09-06",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (974) 137-67-55",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Красноярск, ул. Гагарина, д. 3, кв. 184",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "Санкт-Петербургский государственный университет (СПбГУ)"
                    },
                    {
                        title: "Магистратура",
                        type: "dropList",
                        value: "Национальный исследовательский ядерный университет «МИФИ»"
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
                        value: "121299 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Специалист",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Производство",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Кузнецов Петр Петрович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Иванова Мария Александровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холоста",
                        type: "dropList"
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
                    value: "Кузнецова Анна Михайловна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1992-04-13",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (936) 394-99-66",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Красноярск, ул. Пушкина, д. 56, кв. 135",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "1 (в годах)",
                        type: "text"
                    },
                    {
                        title: "Зарплата",
                        value: "167925 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Бухгалтер",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Маркетинг",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Кузнецов Александр Сергеевич",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Кузнецова Елена Ивановна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холоста",
                        type: "dropList"
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
                    value: "Сидорова Анна Александровна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1981-05-19",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (980) 936-01-15",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Санкт-Петербург, ул. Пушкина, д. 64, кв. 165",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "Московский государственный университет имени М. В. Ломоносова (МГУ)"
                    },
                    {
                        title: "Магистратура",
                        type: "dropList",
                        value: "Национальный исследовательский университет «Высшая школа экономики» (НИУ ВШЭ)"
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
                        value: "117893 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Программист",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Продажи",
                        type: "dropList"
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
                        value: "Смирнова Мария Михайловна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "замужем",
                        type: "dropList"
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
                    value: "Петров Петр Иванович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1991-03-21",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (996) 439-33-69",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Санкт-Петербург, ул. Мира, д. 30, кв. 100",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "56127 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Аналитик",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Маркетинг",
                        type: "dropList"
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
                        value: "Кузнецова Светлана Сергеевна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холост",
                        type: "dropList"
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
                    value: "Иванов Сергей Сергеевич",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "2004-10-03",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (921) 892-18-65",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Красноярск, ул. Гагарина, д. 25, кв. 193",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "213645 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Бухгалтер",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Финансы",
                        type: "dropList"
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
                        value: "Смирнова Мария Сергеевна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведен",
                        type: "dropList"
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
                    value: "Иванова Мария Сергеевна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1993-12-31",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (917) 923-85-22",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Новосибирск, ул. Пушкина, д. 97, кв. 194",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "Московский государственный университет имени М. В. Ломоносова (МГУ)"
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
                        value: "141289 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Специалист",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Логистика",
                        type: "dropList"
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
                        value: "Смирнова Елена Петровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведена",
                        type: "dropList"
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
                    value: "Кузнецов Александр Иванович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1994-10-06",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (977) 918-34-86",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Новосибирск, ул. Ленина, д. 48, кв. 84",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Кузнецов Петр Михайлович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Сидорова Елена Ивановна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведен",
                        type: "dropList"
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
                    value: "Сидоров Михаил Александрович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1994-11-14",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (987) 792-17-45",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Санкт-Петербург, ул. Пушкина, д. 18, кв. 65",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Национальный исследовательский технологический университет «МИСИС»"
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
                        value: "Смирнов Сергей Михайлович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Сидорова Мария Петровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "женат",
                        type: "dropList"
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
                    value: "Смирнова Ольга Петровна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1991-04-24",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (987) 156-67-81",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Москва, ул. Комсомольская, д. 39, кв. 57",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "106359 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Аналитик",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "HR",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Смирнов Михаил Петрович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Иванова Анна Ивановна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведена",
                        type: "dropList"
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
                    value: "Смирнов Михаил Александрович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "2002-07-22",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (928) 447-13-32",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Новосибирск, ул. Гагарина, д. 97, кв. 11",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Московский физико-технический институт (МФТИ)"
                    },
                    {
                        title: "Магистратура",
                        type: "dropList",
                        value: "Университет ИТМО"
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
                        value: "173955 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Программист",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "IT",
                        type: "dropList"
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
                        value: "Смирнова Мария Михайловна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "женат",
                        type: "dropList"
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
                    value: "Петров Петр Сергеевич",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1978-08-22",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (934) 573-98-67",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Москва, ул. Ленина, д. 46, кв. 53",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "193126 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Консультант",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Производство",
                        type: "dropList"
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
                        value: "Петрова Светлана Петровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "женат",
                        type: "dropList"
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
                    value: "Петров Иван Сергеевич",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1984-01-24",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (928) 418-52-48",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Екатеринбург, ул. Комсомольская, д. 97, кв. 168",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Московский государственный технический университет имени Н. Э. Баумана (МГТУ)"
                    },
                    {
                        title: "Магистратура",
                        type: "dropList",
                        value: "Национальный исследовательский технологический университет «МИСИС»"
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
                        value: "95081 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Администратор",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "HR",
                        type: "dropList"
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
                        value: "Кузнецова Ольга Ивановна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "женат",
                        type: "dropList"
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
                    value: "Сидорова Мария Александровна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1987-05-26",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (989) 445-74-39",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Москва, ул. Ленина, д. 86, кв. 199",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "Московский государственный университет имени М. В. Ломоносова (МГУ)"
                    },
                    {
                        title: "Магистратура",
                        type: "dropList",
                        value: "Московский государственный университет имени М. В. Ломоносова (МГУ)"
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
                        value: "133108 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Менеджер",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Бухгалтерия",
                        type: "dropList"
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
                        value: "Петрова Мария Александровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холоста",
                        type: "dropList"
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
                    value: "Иванов Михаил Михайлович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1978-03-20",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (946) 258-14-79",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Екатеринбург, ул. Комсомольская, д. 86, кв. 93",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Российский университет дружбы народов (РУДН)"
                    },
                    {
                        title: "Магистратура",
                        type: "dropList",
                        value: "Российский университет дружбы народов (РУДН)"
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
                        value: "135294 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Директор",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Продажи",
                        type: "dropList"
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
                        value: "Смирнова Анна Ивановна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холост",
                        type: "dropList"
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
                    value: "Сидорова Мария Сергеевна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "2004-01-12",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (979) 876-96-68",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Екатеринбург, ул. Комсомольская, д. 34, кв. 63",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "Российский университет дружбы народов (РУДН)"
                    },
                    {
                        title: "Магистратура",
                        type: "dropList",
                        value: "Московский государственный университет имени М. В. Ломоносова (МГУ)"
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
                        value: "272331 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Администратор",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Юридический",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Петров Сергей Сергеевич",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Петрова Ольга Сергеевна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холоста",
                        type: "dropList"
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
                    value: "Сидоров Иван Александрович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1998-12-14",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (964) 869-42-82",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Санкт-Петербург, ул. Гагарина, д. 45, кв. 141",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Национальный исследовательский ядерный университет «МИФИ»"
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
                        value: "123745 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Разработчик",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Финансы",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Кузнецов Александр Петрович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Сидорова Светлана Ивановна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведен",
                        type: "dropList"
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
                    value: "Петров Иван Иванович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "2005-10-24",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (954) 103-78-79",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Санкт-Петербург, ул. Мира, д. 22, кв. 11",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "131577 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Консультант",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Продажи",
                        type: "dropList"
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
                        value: "Петрова Мария Ивановна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холост",
                        type: "dropList"
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
                    value: "Иванова Светлана Михайловна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1971-08-25",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (992) 326-68-17",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Москва, ул. Мира, д. 98, кв. 175",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "133574 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Бухгалтер",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Кадры",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Петров Петр Александрович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Петрова Елена Петровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "замужем",
                        type: "dropList"
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
                    value: "Сидоров Иван Иванович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "2004-10-11",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (954) 832-95-46",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Новосибирск, ул. Комсомольская, д. 41, кв. 168",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)"
                    },
                    {
                        title: "Магистратура",
                        type: "dropList",
                        value: "Московский государственный университет имени М. В. Ломоносова (МГУ)"
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
                        value: "139641 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Администратор",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Производство",
                        type: "dropList"
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
                        value: "Иванова Анна Петровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холост",
                        type: "dropList"
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
                    value: "Смирнова Мария Петровна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "2002-02-13",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (926) 141-00-98",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Москва, ул. Ленина, д. 49, кв. 189",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "Санкт-Петербургский государственный университет (СПбГУ)"
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
                        value: "293369 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Менеджер",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Маркетинг",
                        type: "dropList"
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
                        value: "Сидорова Елена Ивановна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холоста",
                        type: "dropList"
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
                    value: "Кузнецов Михаил Михайлович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "2002-10-04",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (928) 867-36-94",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Санкт-Петербург, ул. Комсомольская, д. 15, кв. 79",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "85744 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Специалист",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Финансы",
                        type: "dropList"
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
                        value: "Иванова Мария Александровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведен",
                        type: "dropList"
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
                    value: "Сидоров Михаил Александрович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1995-07-24",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (982) 008-49-61",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Красноярск, ул. Гагарина, д. 37, кв. 106",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Московский физико-технический институт (МФТИ)"
                    },
                    {
                        title: "Магистратура",
                        type: "dropList",
                        value: "Московский государственный технический университет имени Н. Э. Баумана (МГТУ)"
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
                        value: "Иванов Михаил Петрович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Смирнова Елена Михайловна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холост",
                        type: "dropList"
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
                    value: "Сидорова Ольга Ивановна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1985-06-03",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (989) 188-71-81",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Екатеринбург, ул. Комсомольская, д. 2, кв. 9",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "Российский университет дружбы народов (РУДН)"
                    },
                    {
                        title: "Магистратура",
                        type: "dropList",
                        value: "Российский университет дружбы народов (РУДН)"
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
                        value: "250727 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Бухгалтер",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "HR",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Иванов Петр Михайлович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Петрова Ольга Михайловна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "замужем",
                        type: "dropList"
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
                    value: "Смирнов Александр Сергеевич",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "2001-05-13",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (959) 172-64-26",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Екатеринбург, ул. Пушкина, д. 50, кв. 90",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Российская академия народного хозяйства и государственной службы (РАНХиГС)"
                    },
                    {
                        title: "Магистратура",
                        type: "dropList",
                        value: "Московский физико-технический институт (МФТИ)"
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
                        value: "287576 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Специалист",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "IT",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Петров Сергей Александрович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Смирнова Мария Петровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведен",
                        type: "dropList"
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
                    value: "Сидорова Светлана Сергеевна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "2000-10-31",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (901) 758-15-90",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Екатеринбург, ул. Ленина, д. 23, кв. 22",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "284898 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Аналитик",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Производство",
                        type: "dropList"
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
                        value: "Кузнецова Мария Петровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "замужем",
                        type: "dropList"
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
                    value: "Смирнов Александр Петрович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1990-06-29",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (984) 227-21-65",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Екатеринбург, ул. Пушкина, д. 43, кв. 115",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "101306 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Разработчик",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Маркетинг",
                        type: "dropList"
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
                        value: "Кузнецова Елена Михайловна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холост",
                        type: "dropList"
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
                    value: "Смирнова Анна Ивановна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "2004-05-03",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (947) 261-39-18",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Новосибирск, ул. Мира, д. 76, кв. 135",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "Университет ИТМО"
                    },
                    {
                        title: "Магистратура",
                        type: "dropList",
                        value: "Национальный исследовательский университет «Высшая школа экономики» (НИУ ВШЭ)"
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
                        value: "Сидоров Александр Михайлович",
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
                        type: "dropList"
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
                    value: "Петрова Светлана Сергеевна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1971-03-29",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (994) 943-73-21",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Новосибирск, ул. Мира, д. 74, кв. 193",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "Национальный исследовательский ядерный университет «МИФИ»"
                    },
                    {
                        title: "Магистратура",
                        type: "dropList",
                        value: "Российская академия народного хозяйства и государственной службы (РАНХиГС)"
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
                        value: "75880 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Администратор",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "IT",
                        type: "dropList"
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
                        value: "Иванова Светлана Ивановна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холоста",
                        type: "dropList"
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
                    value: "Смирнова Светлана Петровна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1991-10-10",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (965) 696-84-42",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Новосибирск, ул. Гагарина, д. 56, кв. 45",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "82933 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Консультант",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Кадры",
                        type: "dropList"
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
                        value: "Сидорова Мария Сергеевна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "замужем",
                        type: "dropList"
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
                    value: "Кузнецов Александр Александрович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1976-11-07",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (915) 765-22-14",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Новосибирск, ул. Ленина, д. 72, кв. 107",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)"
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
                        value: "99224 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Инженер",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Производство",
                        type: "dropList"
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
                        value: "Иванова Ольга Александровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведен",
                        type: "dropList"
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
                    value: "Иванов Михаил Михайлович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1998-10-14",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (954) 422-19-88",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Новосибирск, ул. Пушкина, д. 82, кв. 126",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Московский государственный технический университет имени Н. Э. Баумана (МГТУ)"
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
                        value: "35099 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Консультант",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Маркетинг",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Смирнов Сергей Иванович",
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
                        type: "dropList"
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
                    value: "Кузнецов Михаил Иванович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1973-02-18",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (957) 864-05-20",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Екатеринбург, ул. Ленина, д. 10, кв. 144",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Московский государственный университет имени М. В. Ломоносова (МГУ)"
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
                        value: "137384 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Инженер",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Логистика",
                        type: "dropList"
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
                        value: "Иванова Елена Михайловна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "женат",
                        type: "dropList"
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
                    value: "Иванов Александр Сергеевич",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1972-09-16",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (911) 713-81-23",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Новосибирск, ул. Гагарина, д. 64, кв. 155",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "116271 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Аналитик",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Продажи",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Сидоров Петр Иванович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Сидорова Мария Сергеевна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "женат",
                        type: "dropList"
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
                    value: "Кузнецов Александр Иванович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "2002-04-12",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (958) 411-95-17",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Новосибирск, ул. Ленина, д. 92, кв. 29",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "131143 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Консультант",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Маркетинг",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Петров Михаил Иванович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Сидорова Ольга Сергеевна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холост",
                        type: "dropList"
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
                    value: "Сидоров Петр Петрович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1997-01-19",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (987) 491-67-39",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Красноярск, ул. Пушкина, д. 44, кв. 31",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "289684 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Инженер",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Бухгалтерия",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Сидоров Сергей Михайлович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Кузнецова Мария Михайловна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холост",
                        type: "dropList"
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
                    value: "Кузнецов Иван Сергеевич",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1971-08-29",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (951) 444-78-90",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Москва, ул. Пушкина, д. 20, кв. 130",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "44438 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Разработчик",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Кадры",
                        type: "dropList"
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
                        value: "Кузнецова Ольга Петровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "женат",
                        type: "dropList"
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
                    value: "Иванова Анна Ивановна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1971-06-10",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (996) 364-63-53",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Санкт-Петербург, ул. Комсомольская, д. 60, кв. 86",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "Национальный исследовательский университет «Высшая школа экономики» (НИУ ВШЭ)"
                    },
                    {
                        title: "Магистратура",
                        type: "dropList",
                        value: "Московский государственный университет имени М. В. Ломоносова (МГУ)"
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
                        value: "47560 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Аналитик",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Кадры",
                        type: "dropList"
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
                        value: "Петрова Елена Петровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведена",
                        type: "dropList"
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
                    value: "Иванов Михаил Александрович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1973-10-29",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (933) 676-53-64",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Санкт-Петербург, ул. Пушкина, д. 67, кв. 182",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "1 (в годах)",
                        type: "text"
                    },
                    {
                        title: "Зарплата",
                        value: "261432 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Директор",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Финансы",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Смирнов Петр Петрович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Сидорова Мария Александровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведен",
                        type: "dropList"
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
                    value: "Петров Михаил Петрович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1973-01-20",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (920) 176-83-97",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Новосибирск, ул. Комсомольская, д. 28, кв. 45",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "32537 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Администратор",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "IT",
                        type: "dropList"
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
                        value: "Петрова Мария Ивановна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведен",
                        type: "dropList"
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
                    value: "Петров Михаил Сергеевич",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1973-07-26",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (936) 932-65-15",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Красноярск, ул. Гагарина, д. 53, кв. 187",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Университет ИТМО"
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
                        value: "72985 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Директор",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Бухгалтерия",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Иванов Михаил Иванович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Иванова Анна Михайловна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "женат",
                        type: "dropList"
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
                    value: "Иванова Елена Ивановна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "2001-09-17",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (956) 228-86-07",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Новосибирск, ул. Ленина, д. 16, кв. 44",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "243540 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Менеджер",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Кадры",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Иванов Михаил Александрович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Кузнецова Мария Петровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "замужем",
                        type: "dropList"
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
                    value: "Петров Петр Александрович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1971-10-20",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (911) 322-91-33",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Екатеринбург, ул. Пушкина, д. 75, кв. 82",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Российский университет дружбы народов (РУДН)"
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
                        value: "219430 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Бухгалтер",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Маркетинг",
                        type: "dropList"
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
                        value: "Кузнецова Мария Александровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "женат",
                        type: "dropList"
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
                    value: "Сидорова Анна Петровна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1994-08-11",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (923) 256-50-14",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Санкт-Петербург, ул. Гагарина, д. 56, кв. 142",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "179018 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Консультант",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Юридический",
                        type: "dropList"
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
                        value: "Кузнецова Елена Петровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холоста",
                        type: "dropList"
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
                    value: "Сидоров Иван Петрович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1972-10-18",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (944) 743-41-79",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Екатеринбург, ул. Комсомольская, д. 1, кв. 148",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "222623 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Инженер",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "IT",
                        type: "dropList"
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
                        value: "Иванова Светлана Михайловна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "женат",
                        type: "dropList"
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
                    value: "Кузнецов Михаил Михайлович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1998-07-03",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (944) 608-44-27",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Новосибирск, ул. Комсомольская, д. 65, кв. 16",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "284627 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Менеджер",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "HR",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Иванов Иван Петрович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Кузнецова Мария Александровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведен",
                        type: "dropList"
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
                    value: "Иванова Анна Михайловна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1987-04-23",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (979) 322-97-23",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Екатеринбург, ул. Ленина, д. 1, кв. 200",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "Московский государственный университет имени М. В. Ломоносова (МГУ)"
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
                        value: "42724 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Бухгалтер",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Маркетинг",
                        type: "dropList"
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
                        value: "Смирнова Светлана Михайловна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведена",
                        type: "dropList"
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
                    value: "Смирнова Елена Сергеевна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1993-06-07",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (903) 738-59-35",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Красноярск, ул. Ленина, д. 55, кв. 190",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "Российская академия народного хозяйства и государственной службы (РАНХиГС)"
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
                        value: "158724 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Инженер",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Производство",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Иванов Михаил Александрович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Петрова Анна Михайловна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холоста",
                        type: "dropList"
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
                    value: "Иванова Ольга Сергеевна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1989-02-09",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (978) 935-89-11",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Екатеринбург, ул. Мира, д. 63, кв. 51",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "Московский физико-технический институт (МФТИ)"
                    },
                    {
                        title: "Магистратура",
                        type: "dropList",
                        value: "Университет ИТМО"
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
                        value: "155882 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Аналитик",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Производство",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Смирнов Иван Петрович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Петрова Елена Сергеевна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведена",
                        type: "dropList"
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
                    value: "Кузнецов Петр Александрович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1973-12-04",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (998) 917-58-11",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Новосибирск, ул. Мира, д. 7, кв. 106",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Российская академия народного хозяйства и государственной службы (РАНХиГС)"
                    },
                    {
                        title: "Магистратура",
                        type: "dropList",
                        value: "Национальный исследовательский ядерный университет «МИФИ»"
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
                        value: "59653 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Специалист",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Производство",
                        type: "dropList"
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
                        value: "Сидорова Анна Ивановна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холост",
                        type: "dropList"
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
                    value: "Иванова Елена Петровна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "2000-03-18",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (963) 597-24-77",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Санкт-Петербург, ул. Ленина, д. 83, кв. 33",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "Национальный исследовательский ядерный университет «МИФИ»"
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
                        value: "200948 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Администратор",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "HR",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Петров Михаил Иванович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Иванова Ольга Петровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холоста",
                        type: "dropList"
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
                    value: "Петрова Мария Ивановна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1990-02-01",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (979) 444-38-16",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Новосибирск, ул. Пушкина, д. 4, кв. 28",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "Национальный исследовательский университет «Высшая школа экономики» (НИУ ВШЭ)"
                    },
                    {
                        title: "Магистратура",
                        type: "dropList",
                        value: "Московский государственный университет имени М. В. Ломоносова (МГУ)"
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
                        value: "222805 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Аналитик",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Производство",
                        type: "dropList"
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
                        value: "Кузнецова Ольга Александровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведена",
                        type: "dropList"
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
                    value: "Смирнова Светлана Петровна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1977-07-21",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (970) 899-45-56",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Екатеринбург, ул. Гагарина, д. 95, кв. 15",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "Российский университет дружбы народов (РУДН)"
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
                        value: "83843 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Программист",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Юридический",
                        type: "dropList"
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
                        value: "Смирнова Елена Михайловна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведена",
                        type: "dropList"
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
                    value: "Кузнецов Иван Михайлович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1997-03-13",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (945) 953-96-62",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Москва, ул. Пушкина, д. 16, кв. 143",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Российская академия народного хозяйства и государственной службы (РАНХиГС)"
                    },
                    {
                        title: "Магистратура",
                        type: "dropList",
                        value: "Российская академия народного хозяйства и государственной службы (РАНХиГС)"
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
                        value: "140608 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Консультант",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Маркетинг",
                        type: "dropList"
                    }
                ]
            },
            family: {
                title: "Семья",
                value: [
                    {
                        title: "Отец",
                        value: "Иванов Иван Петрович",
                        type: "text"
                    },
                    {
                        title: "Мать",
                        value: "Сидорова Елена Александровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведен",
                        type: "dropList"
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
                    value: "Сидорова Ольга Петровна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "2004-01-06",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (948) 839-93-77",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Москва, ул. Гагарина, д. 77, кв. 152",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "Московский физико-технический институт (МФТИ)"
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
                        value: "217081 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Разработчик",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "HR",
                        type: "dropList"
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
                        value: "Кузнецова Анна Сергеевна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "замужем",
                        type: "dropList"
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
                    value: "Иванов Петр Петрович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1974-12-08",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (937) 965-78-89",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Екатеринбург, ул. Ленина, д. 84, кв. 80",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Национальный исследовательский ядерный университет «МИФИ»"
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
                        value: "40697 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Директор",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Продажи",
                        type: "dropList"
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
                        value: "Смирнова Светлана Михайловна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "женат",
                        type: "dropList"
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
                    value: "Иванова Анна Ивановна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1982-08-27",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (974) 609-04-09",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Екатеринбург, ул. Ленина, д. 54, кв. 132",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "188033 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Менеджер",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Юридический",
                        type: "dropList"
                    }
                ]
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
                        value: "Смирнова Ольга Петровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведена",
                        type: "dropList"
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
                    value: "Смирнов Иван Сергеевич",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1998-09-30",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (906) 188-07-28",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Санкт-Петербург, ул. Гагарина, д. 50, кв. 55",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Московский государственный университет имени М. В. Ломоносова (МГУ)"
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
                        value: "228057 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Администратор",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "IT",
                        type: "dropList"
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
                        value: "Кузнецова Светлана Петровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холост",
                        type: "dropList"
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
                    value: "Кузнецов Сергей Иванович",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1997-03-05",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (943) 841-24-43",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Новосибирск, ул. Пушкина, д. 3, кв. 115",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Мужской",
                    type: "dropList"
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
                        value: "Санкт-Петербургский государственный университет (СПбГУ)"
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
                        value: "237129 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Администратор",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Продажи",
                        type: "dropList"
                    }
                ]
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
                        value: "Петрова Светлана Александровна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведен",
                        type: "dropList"
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
                    value: "Иванова Ольга Ивановна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "2002-02-03",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (922) 101-44-92",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Новосибирск, ул. Мира, д. 6, кв. 93",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "247488 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Программист",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Юридический",
                        type: "dropList"
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
                        value: "Сидорова Елена Сергеевна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "холоста",
                        type: "dropList"
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
                    value: "Иванова Ольга Сергеевна",
                    type: "text"
                },
                {
                    title: "Дата рождения",
                    value: "1982-03-30",
                    type: "date"
                },
                {
                    title: "Номер телефона",
                    value: "+7 (923) 347-58-37",
                    type: "text"
                },
                {
                    title: "Адрес",
                    value: "г. Москва, ул. Ленина, д. 46, кв. 134",
                    type: "text"
                },
                {
                    title: "Пол",
                    value: "Женский",
                    type: "dropList"
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
                        value: "191493 руб.",
                        type: "text"
                    },
                    {
                        title: "Должность",
                        value: "Менеджер",
                        type: "dropList"
                    },
                    {
                        title: "Отдел",
                        value: "Юридический",
                        type: "dropList"
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
                        value: "Кузнецова Мария Михайловна",
                        type: "text"
                    },
                    {
                        title: "Семейное положение",
                        value: "разведена",
                        type: "dropList"
                    }
                ]
            }
        }
    }
]
export default users;