export interface WeatherResponce {
    data: WeatherData[];
    city_name: string;
    lon: string;
    timezone: string;
    lat: string;
    country_code: string;
    state_code: string;
}

export interface WeatherData {
    valid_date: string;           // Дата прогноза
    ts: number;                   // Временная метка
    datetime: string;             // Дата и время
    wind_gust_spd: number;        // Скорость порывов ветра
    wind_spd: number;             // Скорость ветра
    wind_dir: number;             // Направление ветра в градусах
    wind_cdir: string;            // Направление ветра (короткое обозначение)
    wind_cdir_full: string;       // Полное направление ветра
    temp: number;                 // Температура
    max_temp: number;             // Максимальная температура
    min_temp: number;             // Минимальная температура
    high_temp: number;            // Высокая температура за день
    low_temp: number;             // Низкая температура за день
    app_max_temp: number;         // Ощущаемая максимальная температура
    app_min_temp: number;         // Ощущаемая минимальная температура
    pop: number;                  // Вероятность осадков
    precip: number;               // Количество осадков
    snow: number;                 // Количество снега
    snow_depth: number;           // Глубина снежного покрова
    slp: number;                  // Давление на уровне моря
    pres: number;                 // Давление
    dewpt: number;                // Точка росы
    rh: number;                   // Относительная влажность
    weather: WeatherDescription;  // Описание погодных условий
    clouds_low: number;           // Облачность на низком уровне
    clouds_mid: number;           // Облачность на среднем уровне
    clouds_hi: number;            // Облачность на высоком уровне
    clouds: number;               // Общая облачность
    vis: number;                  // Видимость
    max_dhi: number;              // Максимальная диффузная горизонтальная освещённость
    uv: number;                   // Индекс ультрафиолетового излучения
    moon_phase: number;           // Фаза луны
    moon_phase_lunation: number;  // Положение луны в лунном цикле
    moonrise_ts: number;          // Время восхода луны (время в формате UNIX)
    moonset_ts: number;           // Время заката луны (время в формате UNIX)
    sunrise_ts: number;           // Время восхода солнца (время в формате UNIX)
    sunset_ts: number;            // Время заката солнца (время в формате UNIX)
}

interface WeatherDescription {
    icon: string;                 // Иконка погоды
    code: string;                 // Код погодных условий
    description: string;          // Описание погодных условий
}
