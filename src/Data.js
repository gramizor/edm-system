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
                    title: "Full name",
                    full_name: "Сидорова Ольга Сергеевна"
                },
                {
                    title: "Date of birth",
                    birthday: "1979-04-02T01:14:30.356Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (961) 210-20-93"
                },
                {
                    title: "Address",
                    address: "г. Санкт-Петербург, ул. Ленина, д. 63, кв. 177"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Московский государственный университет имени М. В. Ломоносова (МГУ)"
                    },
                    {
                        title: "Магистратура",
                        name: "Московский физико-технический институт (МФТИ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 2
                    },
                    {
                        title: "Зарплата",
                        salary: 57767
                    },
                    {
                        title: "Должность",
                        position: "Администратор"
                    },
                    {
                        title: "Отдел",
                        department: "IT"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Смирнов Сергей Михайлович"
                    },
                    {
                        title: "Mother",
                        mother: "Смирнова Мария Александровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холоста"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Сидоров Петр Сергеевич"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Иванова Елена Петровна"
                },
                {
                    title: "Date of birth",
                    birthday: "1982-04-25T12:28:00.821Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (938) 173-64-77"
                },
                {
                    title: "Address",
                    address: "г. Новосибирск, ул. Гагарина, д. 26, кв. 153"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 8
                    },
                    {
                        title: "Зарплата",
                        salary: 217608
                    },
                    {
                        title: "Должность",
                        position: "Аналитик"
                    },
                    {
                        title: "Отдел",
                        department: "Логистика"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Иванов Александр Сергеевич"
                    },
                    {
                        title: "Mother",
                        mother: "Иванова Ольга Александровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холоста"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Иванов Михаил Михайлович"
                            },
                            {
                                title: "Брат",
                                name: "Сидоров Сергей Михайлович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Сидорова Ольга Ивановна"
                },
                {
                    title: "Date of birth",
                    birthday: "2000-08-31T22:34:32.635Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (913) 984-49-75"
                },
                {
                    title: "Address",
                    address: "г. Новосибирск, ул. Ленина, д. 37, кв. 65"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Университет ИТМО"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 8
                    },
                    {
                        title: "Зарплата",
                        salary: 122114
                    },
                    {
                        title: "Должность",
                        position: "Программист"
                    },
                    {
                        title: "Отдел",
                        department: "Продажи"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Смирнов Иван Петрович"
                    },
                    {
                        title: "Mother",
                        mother: "Иванова Светлана Михайловна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведена"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Сестра",
                                name: "Кузнецова Ольга Сергеевна"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Иванов Александр Петрович"
                },
                {
                    title: "Date of birth",
                    birthday: "1974-10-11T19:31:33.968Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (992) 884-92-60"
                },
                {
                    title: "Address",
                    address: "г. Новосибирск, ул. Ленина, д. 18, кв. 123"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Московский физико-технический институт (МФТИ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 8
                    },
                    {
                        title: "Зарплата",
                        salary: 71104
                    },
                    {
                        title: "Должность",
                        position: "Администратор"
                    },
                    {
                        title: "Отдел",
                        department: "Кадры"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Смирнов Александр Петрович"
                    },
                    {
                        title: "Mother",
                        mother: "Иванова Ольга Александровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведен"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Сестра",
                                name: "Кузнецова Мария Александровна"
                            },
                            {
                                title: "Брат",
                                name: "Сидоров Иван Михайлович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Сидорова Анна Александровна"
                },
                {
                    title: "Date of birth",
                    birthday: "1972-04-05T11:03:01.975Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (958) 645-53-18"
                },
                {
                    title: "Address",
                    address: "г. Новосибирск, ул. Комсомольская, д. 89, кв. 182"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Национальный исследовательский ядерный университет «МИФИ»"
                    },
                    {
                        title: "Магистратура",
                        name: "Университет ИТМО"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 15
                    },
                    {
                        title: "Зарплата",
                        salary: 172808
                    },
                    {
                        title: "Должность",
                        position: "Директор"
                    },
                    {
                        title: "Отдел",
                        department: "Юридический"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Иванов Иван Сергеевич"
                    },
                    {
                        title: "Mother",
                        mother: "Иванова Светлана Ивановна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холоста"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Сестра",
                                name: "Иванова Анна Петровна"
                            },
                            {
                                title: "Брат",
                                name: "Смирнов Иван Иванович"
                            },
                            {
                                title: "Брат",
                                name: "Сидоров Иван Петрович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Смирнов Александр Александрович"
                },
                {
                    title: "Date of birth",
                    birthday: "1989-11-04T17:53:29.321Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (919) 128-44-73"
                },
                {
                    title: "Address",
                    address: "г. Новосибирск, ул. Комсомольская, д. 51, кв. 10"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Санкт-Петербургский государственный университет (СПбГУ)"
                    },
                    {
                        title: "Магистратура",
                        name: "Московский государственный технический университет имени Н. Э. Баумана (МГТУ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 1
                    },
                    {
                        title: "Зарплата",
                        salary: 94031
                    },
                    {
                        title: "Должность",
                        position: "Программист"
                    },
                    {
                        title: "Отдел",
                        department: "Продажи"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Иванов Петр Александрович"
                    },
                    {
                        title: "Mother",
                        mother: "Иванова Анна Михайловна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведен"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Сестра",
                                name: "Иванова Елена Михайловна"
                            },
                            {
                                title: "Брат",
                                name: "Иванов Михаил Петрович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Иванова Елена Ивановна"
                },
                {
                    title: "Date of birth",
                    birthday: "1990-03-20T18:04:27.811Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (998) 517-03-42"
                },
                {
                    title: "Address",
                    address: "г. Москва, ул. Мира, д. 36, кв. 198"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 7
                    },
                    {
                        title: "Зарплата",
                        salary: 222355
                    },
                    {
                        title: "Должность",
                        position: "Программист"
                    },
                    {
                        title: "Отдел",
                        department: "Продажи"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Петров Сергей Александрович"
                    },
                    {
                        title: "Mother",
                        mother: "Петрова Мария Сергеевна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведена"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Сестра",
                                name: "Петрова Светлана Петровна"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Сидоров Иван Александрович"
                },
                {
                    title: "Date of birth",
                    birthday: "1991-10-28T12:20:45.425Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (929) 252-82-99"
                },
                {
                    title: "Address",
                    address: "г. Санкт-Петербург, ул. Ленина, д. 55, кв. 97"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Российский университет дружбы народов (РУДН)"
                    },
                    {
                        title: "Магистратура",
                        name: "Санкт-Петербургский государственный университет (СПбГУ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 2
                    },
                    {
                        title: "Зарплата",
                        salary: 157747
                    },
                    {
                        title: "Должность",
                        position: "Инженер"
                    },
                    {
                        title: "Отдел",
                        department: "Логистика"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Сидоров Александр Иванович"
                    },
                    {
                        title: "Mother",
                        mother: "Кузнецова Светлана Михайловна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "женат"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Сестра",
                                name: "Кузнецова Анна Сергеевна"
                            },
                            {
                                title: "Брат",
                                name: "Кузнецов Михаил Сергеевич"
                            },
                            {
                                title: "Брат",
                                name: "Кузнецов Петр Иванович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Сидорова Мария Сергеевна"
                },
                {
                    title: "Date of birth",
                    birthday: "1995-08-11T10:20:15.465Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (922) 218-90-22"
                },
                {
                    title: "Address",
                    address: "г. Красноярск, ул. Гагарина, д. 39, кв. 167"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 15
                    },
                    {
                        title: "Зарплата",
                        salary: 241102
                    },
                    {
                        title: "Должность",
                        position: "Администратор"
                    },
                    {
                        title: "Отдел",
                        department: "Продажи"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Кузнецов Иван Михайлович"
                    },
                    {
                        title: "Mother",
                        mother: "Петрова Елена Михайловна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "замужем"
                    },
                    {
                        title: "Siblings",
                        siblings: []
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
                    title: "Full name",
                    full_name: "Кузнецов Михаил Михайлович"
                },
                {
                    title: "Date of birth",
                    birthday: "1984-08-09T04:07:31.640Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (986) 675-72-30"
                },
                {
                    title: "Address",
                    address: "г. Санкт-Петербург, ул. Комсомольская, д. 31, кв. 52"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Университет ИТМО"
                    },
                    {
                        title: "Магистратура",
                        name: "Московский физико-технический институт (МФТИ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 13
                    },
                    {
                        title: "Зарплата",
                        salary: 93885
                    },
                    {
                        title: "Должность",
                        position: "Менеджер"
                    },
                    {
                        title: "Отдел",
                        department: "Продажи"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Иванов Александр Александрович"
                    },
                    {
                        title: "Mother",
                        mother: "Иванова Светлана Ивановна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холост"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Сидоров Иван Иванович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Смирнова Светлана Михайловна"
                },
                {
                    title: "Date of birth",
                    birthday: "1989-04-20T07:50:03.022Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (965) 584-22-23"
                },
                {
                    title: "Address",
                    address: "г. Санкт-Петербург, ул. Комсомольская, д. 52, кв. 72"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Московский государственный технический университет имени Н. Э. Баумана (МГТУ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 5
                    },
                    {
                        title: "Зарплата",
                        salary: 137199
                    },
                    {
                        title: "Должность",
                        position: "Директор"
                    },
                    {
                        title: "Отдел",
                        department: "Кадры"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Сидоров Петр Иванович"
                    },
                    {
                        title: "Mother",
                        mother: "Кузнецова Мария Ивановна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "замужем"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Иванов Александр Александрович"
                            },
                            {
                                title: "Сестра",
                                name: "Петрова Ольга Ивановна"
                            },
                            {
                                title: "Брат",
                                name: "Кузнецов Александр Михайлович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Смирнов Сергей Иванович"
                },
                {
                    title: "Date of birth",
                    birthday: "1970-03-10T10:25:51.152Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (977) 429-77-86"
                },
                {
                    title: "Address",
                    address: "г. Санкт-Петербург, ул. Ленина, д. 84, кв. 55"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)"
                    },
                    {
                        title: "Магистратура",
                        name: "Московский государственный университет имени М. В. Ломоносова (МГУ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 12
                    },
                    {
                        title: "Зарплата",
                        salary: 98954
                    },
                    {
                        title: "Должность",
                        position: "Директор"
                    },
                    {
                        title: "Отдел",
                        department: "Кадры"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Петров Петр Петрович"
                    },
                    {
                        title: "Mother",
                        mother: "Кузнецова Анна Петровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холост"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Петров Сергей Сергеевич"
                            },
                            {
                                title: "Брат",
                                name: "Петров Александр Петрович"
                            },
                            {
                                title: "Сестра",
                                name: "Петрова Мария Сергеевна"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Смирнова Светлана Петровна"
                },
                {
                    title: "Date of birth",
                    birthday: "1979-10-16T17:59:22.459Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (955) 019-64-08"
                },
                {
                    title: "Address",
                    address: "г. Красноярск, ул. Ленина, д. 4, кв. 182"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Санкт-Петербургский государственный университет (СПбГУ)"
                    },
                    {
                        title: "Магистратура",
                        name: "Московский физико-технический институт (МФТИ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 6
                    },
                    {
                        title: "Зарплата",
                        salary: 59493
                    },
                    {
                        title: "Должность",
                        position: "Директор"
                    },
                    {
                        title: "Отдел",
                        department: "Юридический"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Иванов Иван Михайлович"
                    },
                    {
                        title: "Mother",
                        mother: "Кузнецова Светлана Сергеевна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холоста"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Иванов Иван Иванович"
                            },
                            {
                                title: "Брат",
                                name: "Иванов Александр Михайлович"
                            },
                            {
                                title: "Брат",
                                name: "Кузнецов Сергей Петрович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Петрова Мария Александровна"
                },
                {
                    title: "Date of birth",
                    birthday: "1972-06-08T07:56:12.198Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (923) 333-31-45"
                },
                {
                    title: "Address",
                    address: "г. Новосибирск, ул. Гагарина, д. 59, кв. 166"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Университет ИТМО"
                    },
                    {
                        title: "Магистратура",
                        name: "Московский государственный университет имени М. В. Ломоносова (МГУ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 4
                    },
                    {
                        title: "Зарплата",
                        salary: 295633
                    },
                    {
                        title: "Должность",
                        position: "Аналитик"
                    },
                    {
                        title: "Отдел",
                        department: "Юридический"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Сидоров Александр Иванович"
                    },
                    {
                        title: "Mother",
                        mother: "Кузнецова Анна Сергеевна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведена"
                    },
                    {
                        title: "Siblings",
                        siblings: []
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
                    title: "Full name",
                    full_name: "Иванова Анна Петровна"
                },
                {
                    title: "Date of birth",
                    birthday: "1999-03-27T15:24:41.226Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (905) 963-87-72"
                },
                {
                    title: "Address",
                    address: "г. Красноярск, ул. Пушкина, д. 71, кв. 178"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Национальный исследовательский технологический университет «МИСИС»"
                    },
                    {
                        title: "Магистратура",
                        name: "Московский физико-технический институт (МФТИ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 13
                    },
                    {
                        title: "Зарплата",
                        salary: 250767
                    },
                    {
                        title: "Должность",
                        position: "Администратор"
                    },
                    {
                        title: "Отдел",
                        department: "Маркетинг"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Кузнецов Сергей Михайлович"
                    },
                    {
                        title: "Mother",
                        mother: "Иванова Анна Михайловна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холоста"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Сестра",
                                name: "Петрова Анна Ивановна"
                            },
                            {
                                title: "Сестра",
                                name: "Смирнова Елена Ивановна"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Петрова Елена Михайловна"
                },
                {
                    title: "Date of birth",
                    birthday: "1999-02-20T13:51:53.140Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (901) 483-98-79"
                },
                {
                    title: "Address",
                    address: "г. Екатеринбург, ул. Комсомольская, д. 64, кв. 182"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Московский государственный университет имени М. В. Ломоносова (МГУ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 13
                    },
                    {
                        title: "Зарплата",
                        salary: 94709
                    },
                    {
                        title: "Должность",
                        position: "Консультант"
                    },
                    {
                        title: "Отдел",
                        department: "Логистика"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Кузнецов Михаил Иванович"
                    },
                    {
                        title: "Mother",
                        mother: "Сидорова Светлана Петровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холоста"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Сестра",
                                name: "Сидорова Ольга Петровна"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Иванов Михаил Александрович"
                },
                {
                    title: "Date of birth",
                    birthday: "1987-10-11T11:56:31.144Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (948) 564-78-11"
                },
                {
                    title: "Address",
                    address: "г. Новосибирск, ул. Комсомольская, д. 23, кв. 99"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Национальный исследовательский технологический университет «МИСИС»"
                    },
                    {
                        title: "Магистратура",
                        name: "Санкт-Петербургский государственный университет (СПбГУ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 2
                    },
                    {
                        title: "Зарплата",
                        salary: 137190
                    },
                    {
                        title: "Должность",
                        position: "Программист"
                    },
                    {
                        title: "Отдел",
                        department: "Кадры"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Петров Петр Иванович"
                    },
                    {
                        title: "Mother",
                        mother: "Смирнова Ольга Ивановна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холост"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Кузнецов Михаил Михайлович"
                            },
                            {
                                title: "Сестра",
                                name: "Петрова Елена Петровна"
                            },
                            {
                                title: "Брат",
                                name: "Смирнов Сергей Иванович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Смирнов Петр Александрович"
                },
                {
                    title: "Date of birth",
                    birthday: "1999-08-31T03:05:13.804Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (954) 829-13-55"
                },
                {
                    title: "Address",
                    address: "г. Москва, ул. Пушкина, д. 29, кв. 93"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 10
                    },
                    {
                        title: "Зарплата",
                        salary: 70945
                    },
                    {
                        title: "Должность",
                        position: "Бухгалтер"
                    },
                    {
                        title: "Отдел",
                        department: "IT"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Смирнов Александр Александрович"
                    },
                    {
                        title: "Mother",
                        mother: "Смирнова Мария Михайловна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведен"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Сестра",
                                name: "Петрова Анна Ивановна"
                            },
                            {
                                title: "Брат",
                                name: "Кузнецов Александр Александрович"
                            },
                            {
                                title: "Сестра",
                                name: "Кузнецова Елена Михайловна"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Сидорова Елена Александровна"
                },
                {
                    title: "Date of birth",
                    birthday: "1980-01-12T22:23:43.154Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (930) 415-77-72"
                },
                {
                    title: "Address",
                    address: "г. Санкт-Петербург, ул. Ленина, д. 1, кв. 116"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Российская академия народного хозяйства и государственной службы (РАНХиГС)"
                    },
                    {
                        title: "Магистратура",
                        name: "Московский государственный технический университет имени Н. Э. Баумана (МГТУ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 5
                    },
                    {
                        title: "Зарплата",
                        salary: 140652
                    },
                    {
                        title: "Должность",
                        position: "Разработчик"
                    },
                    {
                        title: "Отдел",
                        department: "IT"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Иванов Александр Михайлович"
                    },
                    {
                        title: "Mother",
                        mother: "Смирнова Елена Александровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведена"
                    },
                    {
                        title: "Siblings",
                        siblings: []
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
                    title: "Full name",
                    full_name: "Смирнов Александр Александрович"
                },
                {
                    title: "Date of birth",
                    birthday: "1970-08-16T21:29:53.507Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (939) 684-68-33"
                },
                {
                    title: "Address",
                    address: "г. Красноярск, ул. Ленина, д. 99, кв. 181"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Российская академия народного хозяйства и государственной службы (РАНХиГС)"
                    },
                    {
                        title: "Магистратура",
                        name: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 12
                    },
                    {
                        title: "Зарплата",
                        salary: 282985
                    },
                    {
                        title: "Должность",
                        position: "Программист"
                    },
                    {
                        title: "Отдел",
                        department: "HR"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Кузнецов Александр Сергеевич"
                    },
                    {
                        title: "Mother",
                        mother: "Сидорова Ольга Александровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведен"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Смирнов Александр Александрович"
                            },
                            {
                                title: "Брат",
                                name: "Смирнов Сергей Александрович"
                            },
                            {
                                title: "Брат",
                                name: "Смирнов Сергей Сергеевич"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Петрова Ольга Ивановна"
                },
                {
                    title: "Date of birth",
                    birthday: "1994-05-16T14:29:57.816Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (968) 126-96-28"
                },
                {
                    title: "Address",
                    address: "г. Москва, ул. Гагарина, д. 62, кв. 73"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 15
                    },
                    {
                        title: "Зарплата",
                        salary: 167203
                    },
                    {
                        title: "Должность",
                        position: "Бухгалтер"
                    },
                    {
                        title: "Отдел",
                        department: "Логистика"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Иванов Петр Александрович"
                    },
                    {
                        title: "Mother",
                        mother: "Петрова Мария Михайловна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холоста"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Сидоров Иван Александрович"
                            },
                            {
                                title: "Брат",
                                name: "Сидоров Александр Сергеевич"
                            },
                            {
                                title: "Брат",
                                name: "Петров Александр Сергеевич"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Смирнова Светлана Александровна"
                },
                {
                    title: "Date of birth",
                    birthday: "1985-05-03T04:39:11.564Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (997) 712-22-77"
                },
                {
                    title: "Address",
                    address: "г. Новосибирск, ул. Мира, д. 34, кв. 81"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 11
                    },
                    {
                        title: "Зарплата",
                        salary: 249837
                    },
                    {
                        title: "Должность",
                        position: "Программист"
                    },
                    {
                        title: "Отдел",
                        department: "IT"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Сидоров Иван Петрович"
                    },
                    {
                        title: "Mother",
                        mother: "Смирнова Светлана Сергеевна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "замужем"
                    },
                    {
                        title: "Siblings",
                        siblings: []
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
                    title: "Full name",
                    full_name: "Смирнова Елена Александровна"
                },
                {
                    title: "Date of birth",
                    birthday: "1992-09-15T17:47:32.931Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (966) 823-13-54"
                },
                {
                    title: "Address",
                    address: "г. Екатеринбург, ул. Ленина, д. 4, кв. 55"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Национальный исследовательский ядерный университет «МИФИ»"
                    },
                    {
                        title: "Магистратура",
                        name: "Московский государственный технический университет имени Н. Э. Баумана (МГТУ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 15
                    },
                    {
                        title: "Зарплата",
                        salary: 295414
                    },
                    {
                        title: "Должность",
                        position: "Директор"
                    },
                    {
                        title: "Отдел",
                        department: "HR"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Смирнов Петр Михайлович"
                    },
                    {
                        title: "Mother",
                        mother: "Петрова Светлана Михайловна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холоста"
                    },
                    {
                        title: "Siblings",
                        siblings: []
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
                    title: "Full name",
                    full_name: "Петрова Ольга Петровна"
                },
                {
                    title: "Date of birth",
                    birthday: "1997-01-24T05:12:55.353Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (945) 196-72-88"
                },
                {
                    title: "Address",
                    address: "г. Красноярск, ул. Комсомольская, д. 16, кв. 71"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Российский университет дружбы народов (РУДН)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 8
                    },
                    {
                        title: "Зарплата",
                        salary: 273408
                    },
                    {
                        title: "Должность",
                        position: "Инженер"
                    },
                    {
                        title: "Отдел",
                        department: "Юридический"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Сидоров Сергей Петрович"
                    },
                    {
                        title: "Mother",
                        mother: "Петрова Ольга Александровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "замужем"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Смирнов Александр Иванович"
                            },
                            {
                                title: "Брат",
                                name: "Смирнов Петр Иванович"
                            },
                            {
                                title: "Брат",
                                name: "Кузнецов Иван Петрович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Петров Иван Иванович"
                },
                {
                    title: "Date of birth",
                    birthday: "1995-05-17T04:45:22.881Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (961) 667-88-87"
                },
                {
                    title: "Address",
                    address: "г. Красноярск, ул. Ленина, д. 24, кв. 189"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Московский физико-технический институт (МФТИ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 5
                    },
                    {
                        title: "Зарплата",
                        salary: 234316
                    },
                    {
                        title: "Должность",
                        position: "Аналитик"
                    },
                    {
                        title: "Отдел",
                        department: "Бухгалтерия"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Петров Михаил Михайлович"
                    },
                    {
                        title: "Mother",
                        mother: "Кузнецова Мария Ивановна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведен"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Сестра",
                                name: "Петрова Светлана Михайловна"
                            },
                            {
                                title: "Брат",
                                name: "Смирнов Александр Михайлович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Кузнецов Михаил Петрович"
                },
                {
                    title: "Date of birth",
                    birthday: "1989-09-16T21:55:50.162Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (991) 384-82-87"
                },
                {
                    title: "Address",
                    address: "г. Новосибирск, ул. Мира, д. 5, кв. 45"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 14
                    },
                    {
                        title: "Зарплата",
                        salary: 94501
                    },
                    {
                        title: "Должность",
                        position: "Менеджер"
                    },
                    {
                        title: "Отдел",
                        department: "Логистика"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Сидоров Александр Иванович"
                    },
                    {
                        title: "Mother",
                        mother: "Сидорова Елена Ивановна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "женат"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Сестра",
                                name: "Иванова Ольга Михайловна"
                            },
                            {
                                title: "Брат",
                                name: "Сидоров Петр Сергеевич"
                            },
                            {
                                title: "Сестра",
                                name: "Петрова Мария Александровна"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Кузнецова Анна Петровна"
                },
                {
                    title: "Date of birth",
                    birthday: "1975-10-30T18:39:53.476Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (961) 757-58-71"
                },
                {
                    title: "Address",
                    address: "г. Красноярск, ул. Мира, д. 89, кв. 158"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Российская академия народного хозяйства и государственной службы (РАНХиГС)"
                    },
                    {
                        title: "Магистратура",
                        name: "Московский государственный технический университет имени Н. Э. Баумана (МГТУ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 3
                    },
                    {
                        title: "Зарплата",
                        salary: 243360
                    },
                    {
                        title: "Должность",
                        position: "Инженер"
                    },
                    {
                        title: "Отдел",
                        department: "Юридический"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Иванов Сергей Михайлович"
                    },
                    {
                        title: "Mother",
                        mother: "Сидорова Елена Александровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "замужем"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Сестра",
                                name: "Петрова Анна Александровна"
                            },
                            {
                                title: "Сестра",
                                name: "Кузнецова Елена Сергеевна"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Кузнецов Александр Петрович"
                },
                {
                    title: "Date of birth",
                    birthday: "1975-03-25T22:30:13.062Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (985) 731-69-83"
                },
                {
                    title: "Address",
                    address: "г. Новосибирск, ул. Комсомольская, д. 41, кв. 123"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Московский государственный университет имени М. В. Ломоносова (МГУ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 12
                    },
                    {
                        title: "Зарплата",
                        salary: 122403
                    },
                    {
                        title: "Должность",
                        position: "Директор"
                    },
                    {
                        title: "Отдел",
                        department: "Юридический"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Кузнецов Петр Михайлович"
                    },
                    {
                        title: "Mother",
                        mother: "Сидорова Елена Петровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "женат"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Смирнов Александр Петрович"
                            },
                            {
                                title: "Брат",
                                name: "Сидоров Иван Иванович"
                            },
                            {
                                title: "Сестра",
                                name: "Смирнова Светлана Сергеевна"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Петрова Елена Сергеевна"
                },
                {
                    title: "Date of birth",
                    birthday: "1988-02-26T17:17:09.657Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (966) 476-62-83"
                },
                {
                    title: "Address",
                    address: "г. Екатеринбург, ул. Гагарина, д. 1, кв. 166"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Национальный исследовательский ядерный университет «МИФИ»"
                    },
                    {
                        title: "Магистратура",
                        name: "Национальный исследовательский технологический университет «МИСИС»"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 10
                    },
                    {
                        title: "Зарплата",
                        salary: 99299
                    },
                    {
                        title: "Должность",
                        position: "Бухгалтер"
                    },
                    {
                        title: "Отдел",
                        department: "Маркетинг"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Иванов Петр Михайлович"
                    },
                    {
                        title: "Mother",
                        mother: "Петрова Елена Александровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холоста"
                    },
                    {
                        title: "Siblings",
                        siblings: []
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
                    title: "Full name",
                    full_name: "Петрова Ольга Сергеевна"
                },
                {
                    title: "Date of birth",
                    birthday: "1977-09-30T14:27:11.721Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (972) 863-85-57"
                },
                {
                    title: "Address",
                    address: "г. Красноярск, ул. Ленина, д. 96, кв. 36"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Национальный исследовательский технологический университет «МИСИС»"
                    },
                    {
                        title: "Магистратура",
                        name: "Санкт-Петербургский государственный университет (СПбГУ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 12
                    },
                    {
                        title: "Зарплата",
                        salary: 37774
                    },
                    {
                        title: "Должность",
                        position: "Консультант"
                    },
                    {
                        title: "Отдел",
                        department: "Маркетинг"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Кузнецов Михаил Александрович"
                    },
                    {
                        title: "Mother",
                        mother: "Кузнецова Ольга Петровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холоста"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Сестра",
                                name: "Петрова Анна Сергеевна"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Сидорова Светлана Петровна"
                },
                {
                    title: "Date of birth",
                    birthday: "1994-07-28T04:58:11.701Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (954) 751-91-61"
                },
                {
                    title: "Address",
                    address: "г. Екатеринбург, ул. Пушкина, д. 92, кв. 183"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Санкт-Петербургский государственный университет (СПбГУ)"
                    },
                    {
                        title: "Магистратура",
                        name: "Московский государственный технический университет имени Н. Э. Баумана (МГТУ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 15
                    },
                    {
                        title: "Зарплата",
                        salary: 128801
                    },
                    {
                        title: "Должность",
                        position: "Аналитик"
                    },
                    {
                        title: "Отдел",
                        department: "IT"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Петров Петр Александрович"
                    },
                    {
                        title: "Mother",
                        mother: "Кузнецова Ольга Петровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведена"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Сестра",
                                name: "Иванова Елена Михайловна"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Кузнецова Елена Александровна"
                },
                {
                    title: "Date of birth",
                    birthday: "1973-10-20T04:58:03.477Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (935) 313-29-74"
                },
                {
                    title: "Address",
                    address: "г. Екатеринбург, ул. Гагарина, д. 53, кв. 163"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Национальный исследовательский технологический университет «МИСИС»"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 5
                    },
                    {
                        title: "Зарплата",
                        salary: 150406
                    },
                    {
                        title: "Должность",
                        position: "Директор"
                    },
                    {
                        title: "Отдел",
                        department: "IT"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Сидоров Иван Сергеевич"
                    },
                    {
                        title: "Mother",
                        mother: "Сидорова Светлана Сергеевна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холоста"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Смирнов Александр Александрович"
                            },
                            {
                                title: "Сестра",
                                name: "Петрова Светлана Петровна"
                            },
                            {
                                title: "Сестра",
                                name: "Иванова Светлана Александровна"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Петров Сергей Петрович"
                },
                {
                    title: "Date of birth",
                    birthday: "1995-04-01T13:32:23.513Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (977) 374-42-41"
                },
                {
                    title: "Address",
                    address: "г. Новосибирск, ул. Мира, д. 16, кв. 147"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 7
                    },
                    {
                        title: "Зарплата",
                        salary: 87526
                    },
                    {
                        title: "Должность",
                        position: "Менеджер"
                    },
                    {
                        title: "Отдел",
                        department: "Логистика"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Иванов Александр Иванович"
                    },
                    {
                        title: "Mother",
                        mother: "Иванова Елена Михайловна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведен"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Кузнецов Михаил Петрович"
                            },
                            {
                                title: "Брат",
                                name: "Петров Петр Михайлович"
                            },
                            {
                                title: "Брат",
                                name: "Петров Петр Сергеевич"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Смирнов Александр Иванович"
                },
                {
                    title: "Date of birth",
                    birthday: "2004-11-14T15:03:07.591Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (922) 546-34-71"
                },
                {
                    title: "Address",
                    address: "г. Красноярск, ул. Ленина, д. 41, кв. 15"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Московский физико-технический институт (МФТИ)"
                    },
                    {
                        title: "Магистратура",
                        name: "Московский государственный университет имени М. В. Ломоносова (МГУ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 13
                    },
                    {
                        title: "Зарплата",
                        salary: 115782
                    },
                    {
                        title: "Должность",
                        position: "Специалист"
                    },
                    {
                        title: "Отдел",
                        department: "Бухгалтерия"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Кузнецов Иван Петрович"
                    },
                    {
                        title: "Mother",
                        mother: "Смирнова Ольга Петровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведен"
                    },
                    {
                        title: "Siblings",
                        siblings: []
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
                    title: "Full name",
                    full_name: "Смирнов Иван Михайлович"
                },
                {
                    title: "Date of birth",
                    birthday: "1981-05-30T05:59:21.589Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (986) 390-12-24"
                },
                {
                    title: "Address",
                    address: "г. Новосибирск, ул. Пушкина, д. 6, кв. 156"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 12
                    },
                    {
                        title: "Зарплата",
                        salary: 114675
                    },
                    {
                        title: "Должность",
                        position: "Администратор"
                    },
                    {
                        title: "Отдел",
                        department: "Бухгалтерия"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Кузнецов Сергей Михайлович"
                    },
                    {
                        title: "Mother",
                        mother: "Сидорова Мария Михайловна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холост"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Петров Александр Михайлович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Смирнова Светлана Сергеевна"
                },
                {
                    title: "Date of birth",
                    birthday: "1974-02-13T08:19:33.088Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (925) 114-57-37"
                },
                {
                    title: "Address",
                    address: "г. Санкт-Петербург, ул. Пушкина, д. 19, кв. 21"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 15
                    },
                    {
                        title: "Зарплата",
                        salary: 285312
                    },
                    {
                        title: "Должность",
                        position: "Директор"
                    },
                    {
                        title: "Отдел",
                        department: "Юридический"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Кузнецов Сергей Михайлович"
                    },
                    {
                        title: "Mother",
                        mother: "Петрова Ольга Михайловна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведена"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Сестра",
                                name: "Петрова Мария Ивановна"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Кузнецов Иван Петрович"
                },
                {
                    title: "Date of birth",
                    birthday: "1978-01-25T05:58:06.310Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (955) 355-83-75"
                },
                {
                    title: "Address",
                    address: "г. Екатеринбург, ул. Мира, д. 42, кв. 10"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Российская академия народного хозяйства и государственной службы (РАНХиГС)"
                    },
                    {
                        title: "Магистратура",
                        name: "Московский государственный университет имени М. В. Ломоносова (МГУ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 3
                    },
                    {
                        title: "Зарплата",
                        salary: 212292
                    },
                    {
                        title: "Должность",
                        position: "Инженер"
                    },
                    {
                        title: "Отдел",
                        department: "Логистика"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Сидоров Александр Иванович"
                    },
                    {
                        title: "Mother",
                        mother: "Смирнова Ольга Петровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведен"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Иванов Сергей Александрович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Иванов Александр Петрович"
                },
                {
                    title: "Date of birth",
                    birthday: "1974-09-05T04:02:45.738Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (998) 547-07-85"
                },
                {
                    title: "Address",
                    address: "г. Красноярск, ул. Мира, д. 1, кв. 53"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Санкт-Петербургский государственный университет (СПбГУ)"
                    },
                    {
                        title: "Магистратура",
                        name: "Национальный исследовательский ядерный университет «МИФИ»"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 13
                    },
                    {
                        title: "Зарплата",
                        salary: 207288
                    },
                    {
                        title: "Должность",
                        position: "Консультант"
                    },
                    {
                        title: "Отдел",
                        department: "Финансы"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Иванов Петр Михайлович"
                    },
                    {
                        title: "Mother",
                        mother: "Кузнецова Светлана Петровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холост"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Петров Петр Сергеевич"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Петрова Анна Михайловна"
                },
                {
                    title: "Date of birth",
                    birthday: "2003-04-01T13:01:44.233Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (968) 990-43-26"
                },
                {
                    title: "Address",
                    address: "г. Москва, ул. Гагарина, д. 49, кв. 74"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)"
                    },
                    {
                        title: "Магистратура",
                        name: "Санкт-Петербургский государственный университет (СПбГУ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: []
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Кузнецов Петр Иванович"
                    },
                    {
                        title: "Mother",
                        mother: "Петрова Светлана Петровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "замужем"
                    },
                    {
                        title: "Siblings",
                        siblings: []
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
                    title: "Full name",
                    full_name: "Сидоров Сергей Петрович"
                },
                {
                    title: "Date of birth",
                    birthday: "1992-12-07T10:08:13.939Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (983) 096-08-04"
                },
                {
                    title: "Address",
                    address: "г. Екатеринбург, ул. Пушкина, д. 23, кв. 176"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)"
                    },
                    {
                        title: "Магистратура",
                        name: "Национальный исследовательский технологический университет «МИСИС»"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 1
                    },
                    {
                        title: "Зарплата",
                        salary: 124066
                    },
                    {
                        title: "Должность",
                        position: "Разработчик"
                    },
                    {
                        title: "Отдел",
                        department: "HR"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Кузнецов Александр Александрович"
                    },
                    {
                        title: "Mother",
                        mother: "Иванова Елена Александровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведен"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Сидоров Иван Михайлович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Кузнецов Петр Михайлович"
                },
                {
                    title: "Date of birth",
                    birthday: "2003-06-11T03:57:08.066Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (985) 584-96-67"
                },
                {
                    title: "Address",
                    address: "г. Екатеринбург, ул. Ленина, д. 18, кв. 12"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Московский государственный университет имени М. В. Ломоносова (МГУ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 15
                    },
                    {
                        title: "Зарплата",
                        salary: 202260
                    },
                    {
                        title: "Должность",
                        position: "Аналитик"
                    },
                    {
                        title: "Отдел",
                        department: "HR"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Иванов Сергей Александрович"
                    },
                    {
                        title: "Mother",
                        mother: "Сидорова Анна Александровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведен"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Иванов Михаил Петрович"
                            },
                            {
                                title: "Брат",
                                name: "Смирнов Иван Александрович"
                            },
                            {
                                title: "Сестра",
                                name: "Петрова Светлана Ивановна"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Сидорова Мария Александровна"
                },
                {
                    title: "Date of birth",
                    birthday: "1989-05-08T10:47:12.834Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (938) 385-54-88"
                },
                {
                    title: "Address",
                    address: "г. Красноярск, ул. Ленина, д. 43, кв. 101"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Национальный исследовательский технологический университет «МИСИС»"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 6
                    },
                    {
                        title: "Зарплата",
                        salary: 268759
                    },
                    {
                        title: "Должность",
                        position: "Администратор"
                    },
                    {
                        title: "Отдел",
                        department: "Логистика"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Смирнов Иван Михайлович"
                    },
                    {
                        title: "Mother",
                        mother: "Сидорова Анна Петровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "замужем"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Смирнов Иван Сергеевич"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Смирнова Мария Михайловна"
                },
                {
                    title: "Date of birth",
                    birthday: "1994-09-20T15:10:42.432Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (962) 224-74-26"
                },
                {
                    title: "Address",
                    address: "г. Екатеринбург, ул. Комсомольская, д. 92, кв. 105"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Университет ИТМО"
                    },
                    {
                        title: "Магистратура",
                        name: "Российский университет дружбы народов (РУДН)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 13
                    },
                    {
                        title: "Зарплата",
                        salary: 180321
                    },
                    {
                        title: "Должность",
                        position: "Инженер"
                    },
                    {
                        title: "Отдел",
                        department: "Юридический"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Кузнецов Александр Сергеевич"
                    },
                    {
                        title: "Mother",
                        mother: "Смирнова Ольга Ивановна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "замужем"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Сестра",
                                name: "Сидорова Светлана Ивановна"
                            },
                            {
                                title: "Сестра",
                                name: "Петрова Елена Петровна"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Сидорова Ольга Михайловна"
                },
                {
                    title: "Date of birth",
                    birthday: "1990-11-29T13:15:20.224Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (962) 359-73-52"
                },
                {
                    title: "Address",
                    address: "г. Новосибирск, ул. Ленина, д. 14, кв. 14"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 8
                    },
                    {
                        title: "Зарплата",
                        salary: 123162
                    },
                    {
                        title: "Должность",
                        position: "Консультант"
                    },
                    {
                        title: "Отдел",
                        department: "IT"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Смирнов Сергей Иванович"
                    },
                    {
                        title: "Mother",
                        mother: "Петрова Мария Михайловна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведена"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Сестра",
                                name: "Петрова Светлана Александровна"
                            },
                            {
                                title: "Брат",
                                name: "Сидоров Михаил Петрович"
                            },
                            {
                                title: "Брат",
                                name: "Иванов Михаил Михайлович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Смирнова Ольга Ивановна"
                },
                {
                    title: "Date of birth",
                    birthday: "1984-03-15T17:09:58.199Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (967) 915-24-82"
                },
                {
                    title: "Address",
                    address: "г. Новосибирск, ул. Ленина, д. 61, кв. 147"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    }
                ]
            },
            career: {
                title: "Career",
                value: []
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Кузнецов Петр Сергеевич"
                    },
                    {
                        title: "Mother",
                        mother: "Кузнецова Елена Сергеевна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холоста"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Иванов Иван Михайлович"
                            },
                            {
                                title: "Брат",
                                name: "Смирнов Петр Иванович"
                            },
                            {
                                title: "Брат",
                                name: "Смирнов Сергей Александрович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Иванов Сергей Сергеевич"
                },
                {
                    title: "Date of birth",
                    birthday: "2004-07-29T13:09:02.616Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (927) 285-38-35"
                },
                {
                    title: "Address",
                    address: "г. Екатеринбург, ул. Ленина, д. 88, кв. 161"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Санкт-Петербургский государственный университет (СПбГУ)"
                    },
                    {
                        title: "Магистратура",
                        name: "Российский университет дружбы народов (РУДН)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 1
                    },
                    {
                        title: "Зарплата",
                        salary: 55900
                    },
                    {
                        title: "Должность",
                        position: "Менеджер"
                    },
                    {
                        title: "Отдел",
                        department: "Маркетинг"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Сидоров Михаил Иванович"
                    },
                    {
                        title: "Mother",
                        mother: "Петрова Елена Петровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "женат"
                    },
                    {
                        title: "Siblings",
                        siblings: []
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
                    title: "Full name",
                    full_name: "Петров Александр Петрович"
                },
                {
                    title: "Date of birth",
                    birthday: "1988-07-20T21:33:21.172Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (948) 315-63-64"
                },
                {
                    title: "Address",
                    address: "г. Красноярск, ул. Комсомольская, д. 75, кв. 95"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Московский физико-технический институт (МФТИ)"
                    },
                    {
                        title: "Магистратура",
                        name: "Университет ИТМО"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 3
                    },
                    {
                        title: "Зарплата",
                        salary: 181762
                    },
                    {
                        title: "Должность",
                        position: "Специалист"
                    },
                    {
                        title: "Отдел",
                        department: "Кадры"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Смирнов Петр Сергеевич"
                    },
                    {
                        title: "Mother",
                        mother: "Иванова Анна Ивановна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведен"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Сидоров Сергей Петрович"
                            },
                            {
                                title: "Брат",
                                name: "Сидоров Иван Петрович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Сидоров Петр Михайлович"
                },
                {
                    title: "Date of birth",
                    birthday: "1999-08-30T01:44:36.033Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (938) 582-92-32"
                },
                {
                    title: "Address",
                    address: "г. Екатеринбург, ул. Комсомольская, д. 59, кв. 116"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Московский физико-технический институт (МФТИ)"
                    },
                    {
                        title: "Магистратура",
                        name: "Московский физико-технический институт (МФТИ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 14
                    },
                    {
                        title: "Зарплата",
                        salary: 159311
                    },
                    {
                        title: "Должность",
                        position: "Директор"
                    },
                    {
                        title: "Отдел",
                        department: "Юридический"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Кузнецов Петр Александрович"
                    },
                    {
                        title: "Mother",
                        mother: "Петрова Светлана Сергеевна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведен"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Петров Александр Петрович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Петрова Светлана Петровна"
                },
                {
                    title: "Date of birth",
                    birthday: "1994-12-13T02:59:16.195Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (942) 119-77-49"
                },
                {
                    title: "Address",
                    address: "г. Екатеринбург, ул. Мира, д. 59, кв. 96"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 4
                    },
                    {
                        title: "Зарплата",
                        salary: 244762
                    },
                    {
                        title: "Должность",
                        position: "Аналитик"
                    },
                    {
                        title: "Отдел",
                        department: "Производство"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Смирнов Сергей Иванович"
                    },
                    {
                        title: "Mother",
                        mother: "Кузнецова Мария Ивановна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холоста"
                    },
                    {
                        title: "Siblings",
                        siblings: []
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
                    title: "Full name",
                    full_name: "Иванов Александр Иванович"
                },
                {
                    title: "Date of birth",
                    birthday: "1978-05-17T04:39:06.642Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (924) 939-14-97"
                },
                {
                    title: "Address",
                    address: "г. Санкт-Петербург, ул. Ленина, д. 83, кв. 53"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 12
                    },
                    {
                        title: "Зарплата",
                        salary: 292275
                    },
                    {
                        title: "Должность",
                        position: "Администратор"
                    },
                    {
                        title: "Отдел",
                        department: "Логистика"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Сидоров Иван Иванович"
                    },
                    {
                        title: "Mother",
                        mother: "Смирнова Мария Александровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "женат"
                    },
                    {
                        title: "Siblings",
                        siblings: []
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
                    title: "Full name",
                    full_name: "Петров Сергей Александрович"
                },
                {
                    title: "Date of birth",
                    birthday: "1996-08-26T20:40:24.748Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (987) 930-43-47"
                },
                {
                    title: "Address",
                    address: "г. Екатеринбург, ул. Комсомольская, д. 65, кв. 102"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 2
                    },
                    {
                        title: "Зарплата",
                        salary: 89485
                    },
                    {
                        title: "Должность",
                        position: "Менеджер"
                    },
                    {
                        title: "Отдел",
                        department: "Логистика"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Смирнов Александр Михайлович"
                    },
                    {
                        title: "Mother",
                        mother: "Сидорова Светлана Ивановна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведен"
                    },
                    {
                        title: "Siblings",
                        siblings: []
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
                    title: "Full name",
                    full_name: "Петрова Мария Михайловна"
                },
                {
                    title: "Date of birth",
                    birthday: "1999-04-07T00:04:01.478Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (983) 141-31-95"
                },
                {
                    title: "Address",
                    address: "г. Москва, ул. Ленина, д. 45, кв. 188"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Российский университет дружбы народов (РУДН)"
                    },
                    {
                        title: "Магистратура",
                        name: "Санкт-Петербургский государственный университет (СПбГУ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 3
                    },
                    {
                        title: "Зарплата",
                        salary: 119299
                    },
                    {
                        title: "Должность",
                        position: "Консультант"
                    },
                    {
                        title: "Отдел",
                        department: "Кадры"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Иванов Сергей Михайлович"
                    },
                    {
                        title: "Mother",
                        mother: "Петрова Мария Петровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холоста"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Кузнецов Михаил Михайлович"
                            },
                            {
                                title: "Брат",
                                name: "Кузнецов Иван Михайлович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Петрова Ольга Александровна"
                },
                {
                    title: "Date of birth",
                    birthday: "2005-08-02T08:38:04.603Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (935) 687-19-53"
                },
                {
                    title: "Address",
                    address: "г. Новосибирск, ул. Комсомольская, д. 37, кв. 22"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 10
                    },
                    {
                        title: "Зарплата",
                        salary: 52248
                    },
                    {
                        title: "Должность",
                        position: "Администратор"
                    },
                    {
                        title: "Отдел",
                        department: "Бухгалтерия"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Сидоров Сергей Сергеевич"
                    },
                    {
                        title: "Mother",
                        mother: "Смирнова Анна Сергеевна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведена"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Смирнов Александр Петрович"
                            },
                            {
                                title: "Сестра",
                                name: "Сидорова Ольга Ивановна"
                            },
                            {
                                title: "Брат",
                                name: "Сидоров Петр Иванович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Сидорова Ольга Александровна"
                },
                {
                    title: "Date of birth",
                    birthday: "1987-04-20T13:37:57.124Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (924) 462-11-33"
                },
                {
                    title: "Address",
                    address: "г. Москва, ул. Пушкина, д. 12, кв. 34"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Российская академия народного хозяйства и государственной службы (РАНХиГС)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 12
                    },
                    {
                        title: "Зарплата",
                        salary: 95778
                    },
                    {
                        title: "Должность",
                        position: "Инженер"
                    },
                    {
                        title: "Отдел",
                        department: "Маркетинг"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Иванов Александр Иванович"
                    },
                    {
                        title: "Mother",
                        mother: "Кузнецова Ольга Ивановна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведена"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Сестра",
                                name: "Петрова Мария Александровна"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Иванова Мария Ивановна"
                },
                {
                    title: "Date of birth",
                    birthday: "1993-09-21T02:16:57.208Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (943) 891-52-57"
                },
                {
                    title: "Address",
                    address: "г. Новосибирск, ул. Гагарина, д. 3, кв. 76"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Российская академия народного хозяйства и государственной службы (РАНХиГС)"
                    },
                    {
                        title: "Магистратура",
                        name: "Санкт-Петербургский государственный университет (СПбГУ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 7
                    },
                    {
                        title: "Зарплата",
                        salary: 141895
                    },
                    {
                        title: "Должность",
                        position: "Консультант"
                    },
                    {
                        title: "Отдел",
                        department: "HR"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Кузнецов Петр Сергеевич"
                    },
                    {
                        title: "Mother",
                        mother: "Иванова Светлана Сергеевна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведена"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Сестра",
                                name: "Кузнецова Мария Петровна"
                            },
                            {
                                title: "Сестра",
                                name: "Смирнова Ольга Сергеевна"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Смирнов Сергей Сергеевич"
                },
                {
                    title: "Date of birth",
                    birthday: "1995-01-24T15:14:10.246Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (943) 377-56-31"
                },
                {
                    title: "Address",
                    address: "г. Красноярск, ул. Мира, д. 39, кв. 171"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Национальный исследовательский технологический университет «МИСИС»"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 2
                    },
                    {
                        title: "Зарплата",
                        salary: 102525
                    },
                    {
                        title: "Должность",
                        position: "Бухгалтер"
                    },
                    {
                        title: "Отдел",
                        department: "Логистика"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Смирнов Сергей Сергеевич"
                    },
                    {
                        title: "Mother",
                        mother: "Кузнецова Елена Петровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "женат"
                    },
                    {
                        title: "Siblings",
                        siblings: []
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
                    title: "Full name",
                    full_name: "Кузнецов Петр Петрович"
                },
                {
                    title: "Date of birth",
                    birthday: "1973-07-07T03:40:57.602Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (928) 910-27-71"
                },
                {
                    title: "Address",
                    address: "г. Красноярск, ул. Ленина, д. 20, кв. 131"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Московский государственный технический университет имени Н. Э. Баумана (МГТУ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 12
                    },
                    {
                        title: "Зарплата",
                        salary: 218781
                    },
                    {
                        title: "Должность",
                        position: "Аналитик"
                    },
                    {
                        title: "Отдел",
                        department: "Производство"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Кузнецов Сергей Сергеевич"
                    },
                    {
                        title: "Mother",
                        mother: "Иванова Елена Александровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "женат"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Смирнов Петр Сергеевич"
                            },
                            {
                                title: "Брат",
                                name: "Петров Александр Петрович"
                            },
                            {
                                title: "Брат",
                                name: "Иванов Сергей Александрович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Иванов Сергей Сергеевич"
                },
                {
                    title: "Date of birth",
                    birthday: "2005-07-19T03:08:40.009Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (968) 527-99-92"
                },
                {
                    title: "Address",
                    address: "г. Новосибирск, ул. Пушкина, д. 89, кв. 21"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Национальный исследовательский университет «Высшая школа экономики» (НИУ ВШЭ)"
                    },
                    {
                        title: "Магистратура",
                        name: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 4
                    },
                    {
                        title: "Зарплата",
                        salary: 131591
                    },
                    {
                        title: "Должность",
                        position: "Администратор"
                    },
                    {
                        title: "Отдел",
                        department: "Продажи"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Сидоров Сергей Михайлович"
                    },
                    {
                        title: "Mother",
                        mother: "Смирнова Анна Михайловна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холост"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Смирнов Михаил Иванович"
                            },
                            {
                                title: "Брат",
                                name: "Иванов Михаил Петрович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Кузнецова Ольга Петровна"
                },
                {
                    title: "Date of birth",
                    birthday: "1996-02-03T02:40:26.472Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (998) 544-59-14"
                },
                {
                    title: "Address",
                    address: "г. Новосибирск, ул. Мира, д. 98, кв. 74"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Университет ИТМО"
                    },
                    {
                        title: "Магистратура",
                        name: "Национальный исследовательский университет «Высшая школа экономики» (НИУ ВШЭ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 4
                    },
                    {
                        title: "Зарплата",
                        salary: 85285
                    },
                    {
                        title: "Должность",
                        position: "Директор"
                    },
                    {
                        title: "Отдел",
                        department: "Кадры"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Сидоров Иван Петрович"
                    },
                    {
                        title: "Mother",
                        mother: "Сидорова Мария Петровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведена"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Сестра",
                                name: "Иванова Светлана Петровна"
                            },
                            {
                                title: "Брат",
                                name: "Иванов Александр Александрович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Иванов Петр Михайлович"
                },
                {
                    title: "Date of birth",
                    birthday: "1977-01-21T16:12:41.135Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (925) 717-32-57"
                },
                {
                    title: "Address",
                    address: "г. Санкт-Петербург, ул. Комсомольская, д. 22, кв. 36"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    }
                ]
            },
            career: {
                title: "Career",
                value: []
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Смирнов Сергей Иванович"
                    },
                    {
                        title: "Mother",
                        mother: "Иванова Светлана Сергеевна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холост"
                    },
                    {
                        title: "Siblings",
                        siblings: []
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
                    title: "Full name",
                    full_name: "Иванова Мария Александровна"
                },
                {
                    title: "Date of birth",
                    birthday: "1979-06-08T07:24:50.236Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (911) 162-81-43"
                },
                {
                    title: "Address",
                    address: "г. Москва, ул. Ленина, д. 42, кв. 22"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Национальный исследовательский ядерный университет «МИФИ»"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 4
                    },
                    {
                        title: "Зарплата",
                        salary: 150166
                    },
                    {
                        title: "Должность",
                        position: "Директор"
                    },
                    {
                        title: "Отдел",
                        department: "Бухгалтерия"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Кузнецов Сергей Александрович"
                    },
                    {
                        title: "Mother",
                        mother: "Сидорова Анна Александровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "замужем"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Сестра",
                                name: "Смирнова Анна Сергеевна"
                            },
                            {
                                title: "Сестра",
                                name: "Петрова Ольга Михайловна"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Петрова Анна Петровна"
                },
                {
                    title: "Date of birth",
                    birthday: "1989-08-30T21:58:47.275Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (974) 263-41-42"
                },
                {
                    title: "Address",
                    address: "г. Санкт-Петербург, ул. Комсомольская, д. 30, кв. 167"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 10
                    },
                    {
                        title: "Зарплата",
                        salary: 248891
                    },
                    {
                        title: "Должность",
                        position: "Менеджер"
                    },
                    {
                        title: "Отдел",
                        department: "IT"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Сидоров Петр Петрович"
                    },
                    {
                        title: "Mother",
                        mother: "Сидорова Светлана Александровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведена"
                    },
                    {
                        title: "Siblings",
                        siblings: []
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
                    title: "Full name",
                    full_name: "Иванов Михаил Александрович"
                },
                {
                    title: "Date of birth",
                    birthday: "1990-10-14T02:15:10.545Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (970) 809-13-42"
                },
                {
                    title: "Address",
                    address: "г. Москва, ул. Комсомольская, д. 52, кв. 160"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Санкт-Петербургский государственный университет (СПбГУ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 1
                    },
                    {
                        title: "Зарплата",
                        salary: 155149
                    },
                    {
                        title: "Должность",
                        position: "Специалист"
                    },
                    {
                        title: "Отдел",
                        department: "Продажи"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Петров Александр Александрович"
                    },
                    {
                        title: "Mother",
                        mother: "Кузнецова Елена Сергеевна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холост"
                    },
                    {
                        title: "Siblings",
                        siblings: []
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
                    title: "Full name",
                    full_name: "Сидорова Мария Александровна"
                },
                {
                    title: "Date of birth",
                    birthday: "1987-09-17T08:12:18.319Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (985) 385-12-84"
                },
                {
                    title: "Address",
                    address: "г. Москва, ул. Ленина, д. 51, кв. 173"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Санкт-Петербургский государственный университет (СПбГУ)"
                    },
                    {
                        title: "Магистратура",
                        name: "Российская академия народного хозяйства и государственной службы (РАНХиГС)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 11
                    },
                    {
                        title: "Зарплата",
                        salary: 218033
                    },
                    {
                        title: "Должность",
                        position: "Программист"
                    },
                    {
                        title: "Отдел",
                        department: "Финансы"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Петров Сергей Иванович"
                    },
                    {
                        title: "Mother",
                        mother: "Сидорова Елена Александровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведена"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Петров Иван Петрович"
                            },
                            {
                                title: "Брат",
                                name: "Кузнецов Сергей Иванович"
                            },
                            {
                                title: "Сестра",
                                name: "Сидорова Елена Александровна"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Петров Александр Петрович"
                },
                {
                    title: "Date of birth",
                    birthday: "1988-09-11T12:16:21.379Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (928) 555-34-55"
                },
                {
                    title: "Address",
                    address: "г. Новосибирск, ул. Комсомольская, д. 62, кв. 69"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 14
                    },
                    {
                        title: "Зарплата",
                        salary: 252008
                    },
                    {
                        title: "Должность",
                        position: "Аналитик"
                    },
                    {
                        title: "Отдел",
                        department: "IT"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Смирнов Михаил Петрович"
                    },
                    {
                        title: "Mother",
                        mother: "Смирнова Светлана Михайловна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "женат"
                    },
                    {
                        title: "Siblings",
                        siblings: []
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
                    title: "Full name",
                    full_name: "Петров Иван Михайлович"
                },
                {
                    title: "Date of birth",
                    birthday: "1977-04-30T03:44:27.156Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (951) 455-63-67"
                },
                {
                    title: "Address",
                    address: "г. Санкт-Петербург, ул. Ленина, д. 59, кв. 171"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Московский физико-технический институт (МФТИ)"
                    },
                    {
                        title: "Магистратура",
                        name: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 2
                    },
                    {
                        title: "Зарплата",
                        salary: 48312
                    },
                    {
                        title: "Должность",
                        position: "Консультант"
                    },
                    {
                        title: "Отдел",
                        department: "IT"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Смирнов Сергей Петрович"
                    },
                    {
                        title: "Mother",
                        mother: "Кузнецова Анна Александровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холост"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Сестра",
                                name: "Кузнецова Елена Сергеевна"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Смирнова Светлана Александровна"
                },
                {
                    title: "Date of birth",
                    birthday: "1997-10-13T03:59:02.191Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (988) 306-43-41"
                },
                {
                    title: "Address",
                    address: "г. Екатеринбург, ул. Гагарина, д. 21, кв. 63"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Национальный исследовательский университет «Высшая школа экономики» (НИУ ВШЭ)"
                    },
                    {
                        title: "Магистратура",
                        name: "Национальный исследовательский ядерный университет «МИФИ»"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 10
                    },
                    {
                        title: "Зарплата",
                        salary: 214569
                    },
                    {
                        title: "Должность",
                        position: "Менеджер"
                    },
                    {
                        title: "Отдел",
                        department: "Маркетинг"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Петров Петр Петрович"
                    },
                    {
                        title: "Mother",
                        mother: "Сидорова Ольга Сергеевна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведена"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Кузнецов Михаил Иванович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Иванова Мария Александровна"
                },
                {
                    title: "Date of birth",
                    birthday: "1977-01-25T05:17:02.930Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (967) 549-75-76"
                },
                {
                    title: "Address",
                    address: "г. Екатеринбург, ул. Гагарина, д. 88, кв. 53"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Московский государственный университет имени М. В. Ломоносова (МГУ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 3
                    },
                    {
                        title: "Зарплата",
                        salary: 242455
                    },
                    {
                        title: "Должность",
                        position: "Бухгалтер"
                    },
                    {
                        title: "Отдел",
                        department: "Финансы"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Петров Александр Александрович"
                    },
                    {
                        title: "Mother",
                        mother: "Петрова Ольга Александровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холоста"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Сестра",
                                name: "Петрова Елена Александровна"
                            },
                            {
                                title: "Сестра",
                                name: "Петрова Елена Петровна"
                            },
                            {
                                title: "Брат",
                                name: "Петров Петр Петрович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Сидорова Светлана Сергеевна"
                },
                {
                    title: "Date of birth",
                    birthday: "2005-06-19T11:31:05.569Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (918) 753-99-92"
                },
                {
                    title: "Address",
                    address: "г. Москва, ул. Гагарина, д. 6, кв. 4"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Санкт-Петербургский государственный университет (СПбГУ)"
                    },
                    {
                        title: "Магистратура",
                        name: "Национальный исследовательский ядерный университет «МИФИ»"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 11
                    },
                    {
                        title: "Зарплата",
                        salary: 191769
                    },
                    {
                        title: "Должность",
                        position: "Бухгалтер"
                    },
                    {
                        title: "Отдел",
                        department: "HR"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Кузнецов Михаил Александрович"
                    },
                    {
                        title: "Mother",
                        mother: "Петрова Анна Петровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холоста"
                    },
                    {
                        title: "Siblings",
                        siblings: []
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
                    title: "Full name",
                    full_name: "Иванов Сергей Иванович"
                },
                {
                    title: "Date of birth",
                    birthday: "1989-12-07T04:57:48.404Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (925) 107-05-75"
                },
                {
                    title: "Address",
                    address: "г. Екатеринбург, ул. Комсомольская, д. 4, кв. 21"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Национальный исследовательский университет «Высшая школа экономики» (НИУ ВШЭ)"
                    },
                    {
                        title: "Магистратура",
                        name: "Национальный исследовательский технологический университет «МИСИС»"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 13
                    },
                    {
                        title: "Зарплата",
                        salary: 131860
                    },
                    {
                        title: "Должность",
                        position: "Программист"
                    },
                    {
                        title: "Отдел",
                        department: "IT"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Смирнов Александр Михайлович"
                    },
                    {
                        title: "Mother",
                        mother: "Кузнецова Мария Петровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "женат"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Петров Сергей Михайлович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Смирнов Петр Иванович"
                },
                {
                    title: "Date of birth",
                    birthday: "1979-03-03T11:21:50.387Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (970) 524-25-22"
                },
                {
                    title: "Address",
                    address: "г. Москва, ул. Мира, д. 24, кв. 135"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Университет ИТМО"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 6
                    },
                    {
                        title: "Зарплата",
                        salary: 219108
                    },
                    {
                        title: "Должность",
                        position: "Инженер"
                    },
                    {
                        title: "Отдел",
                        department: "Продажи"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Кузнецов Михаил Михайлович"
                    },
                    {
                        title: "Mother",
                        mother: "Сидорова Елена Александровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведен"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Петров Петр Иванович"
                            },
                            {
                                title: "Брат",
                                name: "Кузнецов Иван Петрович"
                            },
                            {
                                title: "Сестра",
                                name: "Кузнецова Мария Александровна"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Иванова Мария Михайловна"
                },
                {
                    title: "Date of birth",
                    birthday: "1982-12-27T20:54:01.576Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (982) 972-30-63"
                },
                {
                    title: "Address",
                    address: "г. Новосибирск, ул. Гагарина, д. 29, кв. 51"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Национальный исследовательский ядерный университет «МИФИ»"
                    },
                    {
                        title: "Магистратура",
                        name: "Московский физико-технический институт (МФТИ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 11
                    },
                    {
                        title: "Зарплата",
                        salary: 193963
                    },
                    {
                        title: "Должность",
                        position: "Менеджер"
                    },
                    {
                        title: "Отдел",
                        department: "Маркетинг"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Иванов Петр Александрович"
                    },
                    {
                        title: "Mother",
                        mother: "Петрова Мария Михайловна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "замужем"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Сестра",
                                name: "Сидорова Ольга Михайловна"
                            },
                            {
                                title: "Брат",
                                name: "Петров Петр Михайлович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Иванов Александр Александрович"
                },
                {
                    title: "Date of birth",
                    birthday: "2000-06-10T22:23:36.918Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (928) 823-19-21"
                },
                {
                    title: "Address",
                    address: "г. Красноярск, ул. Пушкина, д. 43, кв. 183"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Национальный исследовательский технологический университет «МИСИС»"
                    }
                ]
            },
            career: {
                title: "Career",
                value: []
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Сидоров Александр Петрович"
                    },
                    {
                        title: "Mother",
                        mother: "Смирнова Анна Сергеевна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "женат"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Кузнецов Михаил Иванович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Иванова Светлана Ивановна"
                },
                {
                    title: "Date of birth",
                    birthday: "1996-01-12T04:39:27.036Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (946) 434-97-85"
                },
                {
                    title: "Address",
                    address: "г. Москва, ул. Пушкина, д. 33, кв. 62"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Российский университет дружбы народов (РУДН)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 6
                    },
                    {
                        title: "Зарплата",
                        salary: 262067
                    },
                    {
                        title: "Должность",
                        position: "Менеджер"
                    },
                    {
                        title: "Отдел",
                        department: "Бухгалтерия"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Кузнецов Александр Александрович"
                    },
                    {
                        title: "Mother",
                        mother: "Петрова Анна Сергеевна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "замужем"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Иванов Михаил Петрович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Смирнов Петр Александрович"
                },
                {
                    title: "Date of birth",
                    birthday: "1970-12-27T23:45:37.784Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (955) 884-55-40"
                },
                {
                    title: "Address",
                    address: "г. Санкт-Петербург, ул. Пушкина, д. 82, кв. 20"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Российская академия народного хозяйства и государственной службы (РАНХиГС)"
                    },
                    {
                        title: "Магистратура",
                        name: "Национальный исследовательский технологический университет «МИСИС»"
                    }
                ]
            },
            career: {
                title: "Career",
                value: []
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Иванов Иван Иванович"
                    },
                    {
                        title: "Mother",
                        mother: "Смирнова Елена Сергеевна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холост"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Кузнецов Петр Сергеевич"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Иванова Елена Сергеевна"
                },
                {
                    title: "Date of birth",
                    birthday: "1976-03-09T11:51:59.570Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (926) 277-64-28"
                },
                {
                    title: "Address",
                    address: "г. Москва, ул. Мира, д. 98, кв. 18"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Российская академия народного хозяйства и государственной службы (РАНХиГС)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 4
                    },
                    {
                        title: "Зарплата",
                        salary: 246852
                    },
                    {
                        title: "Должность",
                        position: "Директор"
                    },
                    {
                        title: "Отдел",
                        department: "Маркетинг"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Кузнецов Александр Сергеевич"
                    },
                    {
                        title: "Mother",
                        mother: "Кузнецова Светлана Михайловна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холоста"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Сидоров Сергей Петрович"
                            },
                            {
                                title: "Брат",
                                name: "Смирнов Петр Иванович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Смирнова Светлана Ивановна"
                },
                {
                    title: "Date of birth",
                    birthday: "1977-01-02T10:26:00.481Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (963) 729-84-74"
                },
                {
                    title: "Address",
                    address: "г. Красноярск, ул. Ленина, д. 95, кв. 129"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 8
                    },
                    {
                        title: "Зарплата",
                        salary: 118976
                    },
                    {
                        title: "Должность",
                        position: "Директор"
                    },
                    {
                        title: "Отдел",
                        department: "Бухгалтерия"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Сидоров Петр Михайлович"
                    },
                    {
                        title: "Mother",
                        mother: "Сидорова Ольга Петровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведена"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Иванов Иван Иванович"
                            },
                            {
                                title: "Брат",
                                name: "Кузнецов Иван Иванович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Кузнецова Светлана Сергеевна"
                },
                {
                    title: "Date of birth",
                    birthday: "1970-12-19T10:44:49.370Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (956) 418-72-79"
                },
                {
                    title: "Address",
                    address: "г. Москва, ул. Мира, д. 45, кв. 77"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 5
                    },
                    {
                        title: "Зарплата",
                        salary: 168026
                    },
                    {
                        title: "Должность",
                        position: "Директор"
                    },
                    {
                        title: "Отдел",
                        department: "Производство"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Кузнецов Александр Петрович"
                    },
                    {
                        title: "Mother",
                        mother: "Смирнова Ольга Александровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "замужем"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Сестра",
                                name: "Петрова Елена Ивановна"
                            },
                            {
                                title: "Брат",
                                name: "Петров Петр Петрович"
                            },
                            {
                                title: "Сестра",
                                name: "Петрова Ольга Михайловна"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Иванова Елена Ивановна"
                },
                {
                    title: "Date of birth",
                    birthday: "1980-05-04T08:04:50.408Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (953) 496-26-91"
                },
                {
                    title: "Address",
                    address: "г. Санкт-Петербург, ул. Пушкина, д. 79, кв. 199"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Университет ИТМО"
                    },
                    {
                        title: "Магистратура",
                        name: "Московский государственный университет имени М. В. Ломоносова (МГУ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 6
                    },
                    {
                        title: "Зарплата",
                        salary: 145021
                    },
                    {
                        title: "Должность",
                        position: "Программист"
                    },
                    {
                        title: "Отдел",
                        department: "Бухгалтерия"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Петров Михаил Михайлович"
                    },
                    {
                        title: "Mother",
                        mother: "Смирнова Светлана Михайловна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "замужем"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Петров Александр Александрович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Иванова Анна Михайловна"
                },
                {
                    title: "Date of birth",
                    birthday: "1973-10-06T20:16:33.516Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (968) 481-17-83"
                },
                {
                    title: "Address",
                    address: "г. Екатеринбург, ул. Комсомольская, д. 49, кв. 48"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Московский государственный университет имени М. В. Ломоносова (МГУ)"
                    },
                    {
                        title: "Магистратура",
                        name: "Национальный исследовательский технологический университет «МИСИС»"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 5
                    },
                    {
                        title: "Зарплата",
                        salary: 168674
                    },
                    {
                        title: "Должность",
                        position: "Консультант"
                    },
                    {
                        title: "Отдел",
                        department: "Финансы"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Кузнецов Иван Сергеевич"
                    },
                    {
                        title: "Mother",
                        mother: "Смирнова Анна Михайловна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведена"
                    },
                    {
                        title: "Siblings",
                        siblings: []
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
                    title: "Full name",
                    full_name: "Смирнова Светлана Михайловна"
                },
                {
                    title: "Date of birth",
                    birthday: "1980-08-20T22:07:41.824Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (927) 854-69-66"
                },
                {
                    title: "Address",
                    address: "г. Новосибирск, ул. Комсомольская, д. 36, кв. 73"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Национальный исследовательский ядерный университет «МИФИ»"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 5
                    },
                    {
                        title: "Зарплата",
                        salary: 133683
                    },
                    {
                        title: "Должность",
                        position: "Бухгалтер"
                    },
                    {
                        title: "Отдел",
                        department: "Финансы"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Петров Александр Михайлович"
                    },
                    {
                        title: "Mother",
                        mother: "Сидорова Анна Сергеевна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холоста"
                    },
                    {
                        title: "Siblings",
                        siblings: []
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
                    title: "Full name",
                    full_name: "Петрова Светлана Петровна"
                },
                {
                    title: "Date of birth",
                    birthday: "1983-06-04T07:51:44.946Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (909) 099-00-19"
                },
                {
                    title: "Address",
                    address: "г. Красноярск, ул. Мира, д. 35, кв. 95"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 8
                    },
                    {
                        title: "Зарплата",
                        salary: 131636
                    },
                    {
                        title: "Должность",
                        position: "Бухгалтер"
                    },
                    {
                        title: "Отдел",
                        department: "Логистика"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Кузнецов Александр Михайлович"
                    },
                    {
                        title: "Mother",
                        mother: "Смирнова Елена Александровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "замужем"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Сидоров Иван Иванович"
                            },
                            {
                                title: "Сестра",
                                name: "Иванова Анна Сергеевна"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Петров Михаил Петрович"
                },
                {
                    title: "Date of birth",
                    birthday: "1990-02-02T06:19:22.347Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (984) 181-41-48"
                },
                {
                    title: "Address",
                    address: "г. Санкт-Петербург, ул. Комсомольская, д. 42, кв. 86"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Университет ИТМО"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 6
                    },
                    {
                        title: "Зарплата",
                        salary: 186819
                    },
                    {
                        title: "Должность",
                        position: "Консультант"
                    },
                    {
                        title: "Отдел",
                        department: "Финансы"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Петров Петр Сергеевич"
                    },
                    {
                        title: "Mother",
                        mother: "Сидорова Анна Сергеевна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "женат"
                    },
                    {
                        title: "Siblings",
                        siblings: []
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
                    title: "Full name",
                    full_name: "Кузнецова Мария Ивановна"
                },
                {
                    title: "Date of birth",
                    birthday: "1971-09-26T02:01:55.102Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (955) 258-41-15"
                },
                {
                    title: "Address",
                    address: "г. Новосибирск, ул. Гагарина, д. 32, кв. 153"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 14
                    },
                    {
                        title: "Зарплата",
                        salary: 141789
                    },
                    {
                        title: "Должность",
                        position: "Специалист"
                    },
                    {
                        title: "Отдел",
                        department: "Финансы"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Кузнецов Иван Михайлович"
                    },
                    {
                        title: "Mother",
                        mother: "Иванова Светлана Александровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "замужем"
                    },
                    {
                        title: "Siblings",
                        siblings: []
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
                    title: "Full name",
                    full_name: "Петрова Мария Сергеевна"
                },
                {
                    title: "Date of birth",
                    birthday: "1978-02-23T21:54:13.253Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (993) 591-01-76"
                },
                {
                    title: "Address",
                    address: "г. Новосибирск, ул. Гагарина, д. 98, кв. 135"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Российский университет дружбы народов (РУДН)"
                    },
                    {
                        title: "Магистратура",
                        name: "Санкт-Петербургский государственный университет (СПбГУ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 5
                    },
                    {
                        title: "Зарплата",
                        salary: 203643
                    },
                    {
                        title: "Должность",
                        position: "Директор"
                    },
                    {
                        title: "Отдел",
                        department: "Продажи"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Петров Александр Петрович"
                    },
                    {
                        title: "Mother",
                        mother: "Сидорова Светлана Ивановна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "замужем"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Сестра",
                                name: "Иванова Ольга Ивановна"
                            },
                            {
                                title: "Брат",
                                name: "Сидоров Петр Петрович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Кузнецова Елена Сергеевна"
                },
                {
                    title: "Date of birth",
                    birthday: "1977-12-26T10:06:10.720Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (988) 904-15-73"
                },
                {
                    title: "Address",
                    address: "г. Красноярск, ул. Мира, д. 89, кв. 88"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Московский физико-технический институт (МФТИ)"
                    },
                    {
                        title: "Магистратура",
                        name: "Московский государственный университет имени М. В. Ломоносова (МГУ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 4
                    },
                    {
                        title: "Зарплата",
                        salary: 286157
                    },
                    {
                        title: "Должность",
                        position: "Разработчик"
                    },
                    {
                        title: "Отдел",
                        department: "Маркетинг"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Кузнецов Александр Петрович"
                    },
                    {
                        title: "Mother",
                        mother: "Петрова Светлана Сергеевна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "замужем"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Кузнецов Иван Петрович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Сидоров Иван Александрович"
                },
                {
                    title: "Date of birth",
                    birthday: "2003-10-13T00:39:56.121Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (995) 957-24-22"
                },
                {
                    title: "Address",
                    address: "г. Красноярск, ул. Гагарина, д. 90, кв. 99"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Российский университет дружбы народов (РУДН)"
                    },
                    {
                        title: "Магистратура",
                        name: "Национальный исследовательский университет «Высшая школа экономики» (НИУ ВШЭ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 5
                    },
                    {
                        title: "Зарплата",
                        salary: 89191
                    },
                    {
                        title: "Должность",
                        position: "Бухгалтер"
                    },
                    {
                        title: "Отдел",
                        department: "Производство"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Сидоров Александр Сергеевич"
                    },
                    {
                        title: "Mother",
                        mother: "Кузнецова Анна Ивановна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холост"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Сидоров Петр Петрович"
                            },
                            {
                                title: "Сестра",
                                name: "Смирнова Мария Александровна"
                            },
                            {
                                title: "Брат",
                                name: "Сидоров Михаил Михайлович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Петрова Анна Сергеевна"
                },
                {
                    title: "Date of birth",
                    birthday: "2003-06-19T06:25:07.134Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (912) 118-55-85"
                },
                {
                    title: "Address",
                    address: "г. Санкт-Петербург, ул. Пушкина, д. 42, кв. 75"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Российский университет дружбы народов (РУДН)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 5
                    },
                    {
                        title: "Зарплата",
                        salary: 95439
                    },
                    {
                        title: "Должность",
                        position: "Менеджер"
                    },
                    {
                        title: "Отдел",
                        department: "Юридический"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Сидоров Сергей Александрович"
                    },
                    {
                        title: "Mother",
                        mother: "Петрова Анна Петровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "замужем"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Петров Александр Петрович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Смирнов Петр Михайлович"
                },
                {
                    title: "Date of birth",
                    birthday: "1982-02-10T05:04:08.996Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (955) 001-14-53"
                },
                {
                    title: "Address",
                    address: "г. Санкт-Петербург, ул. Комсомольская, д. 73, кв. 14"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Санкт-Петербургский государственный университет (СПбГУ)"
                    },
                    {
                        title: "Магистратура",
                        name: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 4
                    },
                    {
                        title: "Зарплата",
                        salary: 183049
                    },
                    {
                        title: "Должность",
                        position: "Бухгалтер"
                    },
                    {
                        title: "Отдел",
                        department: "Маркетинг"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Кузнецов Петр Сергеевич"
                    },
                    {
                        title: "Mother",
                        mother: "Кузнецова Ольга Александровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холост"
                    },
                    {
                        title: "Siblings",
                        siblings: []
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
                    title: "Full name",
                    full_name: "Сидорова Светлана Петровна"
                },
                {
                    title: "Date of birth",
                    birthday: "1997-10-13T16:57:29.814Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (966) 523-88-14"
                },
                {
                    title: "Address",
                    address: "г. Москва, ул. Гагарина, д. 26, кв. 191"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)"
                    },
                    {
                        title: "Магистратура",
                        name: "Российский университет дружбы народов (РУДН)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 11
                    },
                    {
                        title: "Зарплата",
                        salary: 190733
                    },
                    {
                        title: "Должность",
                        position: "Администратор"
                    },
                    {
                        title: "Отдел",
                        department: "Бухгалтерия"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Сидоров Михаил Иванович"
                    },
                    {
                        title: "Mother",
                        mother: "Смирнова Мария Петровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведена"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Петров Иван Иванович"
                            },
                            {
                                title: "Сестра",
                                name: "Петрова Ольга Петровна"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Иванова Елена Ивановна"
                },
                {
                    title: "Date of birth",
                    birthday: "1999-02-13T23:44:40.941Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (925) 367-44-36"
                },
                {
                    title: "Address",
                    address: "г. Красноярск, ул. Мира, д. 9, кв. 101"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Университет ИТМО"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 11
                    },
                    {
                        title: "Зарплата",
                        salary: 122347
                    },
                    {
                        title: "Должность",
                        position: "Консультант"
                    },
                    {
                        title: "Отдел",
                        department: "IT"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Петров Петр Иванович"
                    },
                    {
                        title: "Mother",
                        mother: "Иванова Мария Сергеевна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведена"
                    },
                    {
                        title: "Siblings",
                        siblings: []
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
                    title: "Full name",
                    full_name: "Кузнецова Мария Михайловна"
                },
                {
                    title: "Date of birth",
                    birthday: "2004-11-15T01:25:14.955Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (935) 293-72-17"
                },
                {
                    title: "Address",
                    address: "г. Санкт-Петербург, ул. Ленина, д. 49, кв. 46"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 4
                    },
                    {
                        title: "Зарплата",
                        salary: 281508
                    },
                    {
                        title: "Должность",
                        position: "Бухгалтер"
                    },
                    {
                        title: "Отдел",
                        department: "Производство"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Петров Александр Александрович"
                    },
                    {
                        title: "Mother",
                        mother: "Кузнецова Анна Ивановна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холоста"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Сестра",
                                name: "Иванова Светлана Сергеевна"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Иванова Елена Александровна"
                },
                {
                    title: "Date of birth",
                    birthday: "1993-12-10T04:28:07.996Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (942) 896-92-73"
                },
                {
                    title: "Address",
                    address: "г. Санкт-Петербург, ул. Пушкина, д. 44, кв. 154"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)"
                    },
                    {
                        title: "Магистратура",
                        name: "Российский университет дружбы народов (РУДН)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 3
                    },
                    {
                        title: "Зарплата",
                        salary: 151089
                    },
                    {
                        title: "Должность",
                        position: "Консультант"
                    },
                    {
                        title: "Отдел",
                        department: "Производство"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Петров Иван Иванович"
                    },
                    {
                        title: "Mother",
                        mother: "Сидорова Анна Александровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "разведена"
                    },
                    {
                        title: "Siblings",
                        siblings: []
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
                    title: "Full name",
                    full_name: "Кузнецов Александр Иванович"
                },
                {
                    title: "Date of birth",
                    birthday: "1995-01-10T07:57:24.116Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (939) 885-61-78"
                },
                {
                    title: "Address",
                    address: "г. Санкт-Петербург, ул. Комсомольская, д. 6, кв. 162"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Московский государственный университет имени М. В. Ломоносова (МГУ)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 12
                    },
                    {
                        title: "Зарплата",
                        salary: 42675
                    },
                    {
                        title: "Должность",
                        position: "Аналитик"
                    },
                    {
                        title: "Отдел",
                        department: "HR"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Сидоров Михаил Иванович"
                    },
                    {
                        title: "Mother",
                        mother: "Кузнецова Светлана Ивановна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холост"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Сестра",
                                name: "Смирнова Ольга Ивановна"
                            },
                            {
                                title: "Сестра",
                                name: "Иванова Ольга Петровна"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Иванова Светлана Ивановна"
                },
                {
                    title: "Date of birth",
                    birthday: "1984-03-17T12:45:22.220Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (947) 544-86-23"
                },
                {
                    title: "Address",
                    address: "г. Екатеринбург, ул. Гагарина, д. 47, кв. 122"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 14
                    },
                    {
                        title: "Зарплата",
                        salary: 127568
                    },
                    {
                        title: "Должность",
                        position: "Менеджер"
                    },
                    {
                        title: "Отдел",
                        department: "Юридический"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Сидоров Михаил Александрович"
                    },
                    {
                        title: "Mother",
                        mother: "Иванова Светлана Михайловна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "замужем"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Петров Александр Михайлович"
                            },
                            {
                                title: "Брат",
                                name: "Сидоров Михаил Иванович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Кузнецов Петр Иванович"
                },
                {
                    title: "Date of birth",
                    birthday: "1980-07-01T11:02:32.281Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (959) 652-42-43"
                },
                {
                    title: "Address",
                    address: "г. Красноярск, ул. Пушкина, д. 92, кв. 172"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Российская академия народного хозяйства и государственной службы (РАНХиГС)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 15
                    },
                    {
                        title: "Зарплата",
                        salary: 265989
                    },
                    {
                        title: "Должность",
                        position: "Программист"
                    },
                    {
                        title: "Отдел",
                        department: "Бухгалтерия"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Кузнецов Сергей Александрович"
                    },
                    {
                        title: "Mother",
                        mother: "Сидорова Мария Сергеевна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холост"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Сестра",
                                name: "Иванова Ольга Петровна"
                            },
                            {
                                title: "Брат",
                                name: "Иванов Сергей Михайлович"
                            },
                            {
                                title: "Сестра",
                                name: "Кузнецова Елена Петровна"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Смирнова Ольга Ивановна"
                },
                {
                    title: "Date of birth",
                    birthday: "1976-04-10T03:52:25.942Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (914) 704-57-95"
                },
                {
                    title: "Address",
                    address: "г. Новосибирск, ул. Мира, д. 25, кв. 140"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 9
                    },
                    {
                        title: "Зарплата",
                        salary: 216996
                    },
                    {
                        title: "Должность",
                        position: "Консультант"
                    },
                    {
                        title: "Отдел",
                        department: "Юридический"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Сидоров Михаил Михайлович"
                    },
                    {
                        title: "Mother",
                        mother: "Кузнецова Мария Михайловна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холоста"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Кузнецов Александр Иванович"
                            },
                            {
                                title: "Брат",
                                name: "Иванов Сергей Иванович"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Петрова Мария Петровна"
                },
                {
                    title: "Date of birth",
                    birthday: "1984-05-10T12:59:10.029Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (941) 484-39-73"
                },
                {
                    title: "Address",
                    address: "г. Москва, ул. Ленина, д. 13, кв. 142"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)"
                    },
                    {
                        title: "Магистратура",
                        name: "Российский университет дружбы народов (РУДН)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 8
                    },
                    {
                        title: "Зарплата",
                        salary: 228610
                    },
                    {
                        title: "Должность",
                        position: "Бухгалтер"
                    },
                    {
                        title: "Отдел",
                        department: "Производство"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Кузнецов Иван Петрович"
                    },
                    {
                        title: "Mother",
                        mother: "Петрова Елена Петровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "замужем"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Петров Сергей Сергеевич"
                            },
                            {
                                title: "Сестра",
                                name: "Кузнецова Анна Петровна"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Сидорова Елена Петровна"
                },
                {
                    title: "Date of birth",
                    birthday: "1976-08-30T11:36:34.501Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (922) 677-79-25"
                },
                {
                    title: "Address",
                    address: "г. Красноярск, ул. Гагарина, д. 78, кв. 75"
                },
                {
                    title: "Gender",
                    gender: "Женский"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    },
                    {
                        title: "Бакалавриат",
                        name: "Московский государственный университет имени М. В. Ломоносова (МГУ)"
                    },
                    {
                        title: "Магистратура",
                        name: "Первый Московский государственный медицинский университет имени И. М. Сеченова (Сеченовский Университет)"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 6
                    },
                    {
                        title: "Зарплата",
                        salary: 157052
                    },
                    {
                        title: "Должность",
                        position: "Инженер"
                    },
                    {
                        title: "Отдел",
                        department: "HR"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Смирнов Иван Иванович"
                    },
                    {
                        title: "Mother",
                        mother: "Сидорова Анна Михайловна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холоста"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Смирнов Михаил Иванович"
                            },
                            {
                                title: "Брат",
                                name: "Смирнов Иван Сергеевич"
                            },
                            {
                                title: "Сестра",
                                name: "Смирнова Елена Сергеевна"
                            }
                        ]
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
                    title: "Full name",
                    full_name: "Петров Петр Иванович"
                },
                {
                    title: "Date of birth",
                    birthday: "1987-11-21T07:36:16.478Z"
                },
                {
                    title: "Phone number",
                    phone: "+7 (979) 622-77-91"
                },
                {
                    title: "Address",
                    address: "г. Красноярск, ул. Мира, д. 6, кв. 18"
                },
                {
                    title: "Gender",
                    gender: "Мужской"
                }
            ]
        },
        modules: {
            education: {
                title: "Education",
                value: [
                    {
                        title: "Среднее",
                        name: "Колледж"
                    }
                ]
            },
            career: {
                title: "Career",
                value: [
                    {
                        title: "Стаж",
                        workExperience: 9
                    },
                    {
                        title: "Зарплата",
                        salary: 138530
                    },
                    {
                        title: "Должность",
                        position: "Специалист"
                    },
                    {
                        title: "Отдел",
                        department: "Бухгалтерия"
                    }
                ]
            },
            family: {
                title: "Family",
                value: [
                    {
                        title: "Father",
                        father: "Сидоров Михаил Петрович"
                    },
                    {
                        title: "Mother",
                        mother: "Смирнова Елена Петровна"
                    },
                    {
                        title: "Marriage",
                        maritalStatus: "холост"
                    },
                    {
                        title: "Siblings",
                        siblings: [
                            {
                                title: "Брат",
                                name: "Петров Петр Сергеевич"
                            },
                            {
                                title: "Сестра",
                                name: "Сидорова Светлана Петровна"
                            }
                        ]
                    }
                ]
            }
        }
    }
];

export default users;