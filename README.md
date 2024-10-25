# Easy Weather

Mini application allows you to find out the weather in any city in the world. Responsive design will be convenient on any device. Due to the fact that free Weather API is used. Users can make 50 requests per day.

Мини приложение позволяет узнать погоду в любом городе мира. Отзывчивый дизайн будет удобен на любом устройстве. В связи с тем, что используется бесплатный Weather API. Пользователям доступно сделать 50 запросов в день.

The application is deployed using **gh-pages**
[Link to the application](https://Fnami51.github.io/Weather)

## Get started (for developer)

1. Clone the repository to your computer
2. Install dependencies
```
yarn install
```
3. Run the command
```
yarn dev
```
P.S. _Perhaps you do not use **yarn**. It is desirable if you install it globally on your computer. Otherwise, you can use the **npm** command_

## Technologies used

### React & Vite

The React app is built using Vite. It mainly uses useState hooks from react. The app is also split into modules, which makes the code easier to read.

React приложение создано с помощью Vite. В основном используются хуки useState из react. А также приложение разбито на модули, что позволяет лучше читать код.

### Jest-testing

There are three tests in the application. They check the operation of the main functions for the correct display of data. And also check the operation of the asynchronous function

В приложении есть три теста. Они проверяют работу основных функций для корректного отображения данных. А также проверяют работу асинхроной функции

> Command to run tests
```
yarn test
```
> 

### Weatherbit

API that provides weather data for the application. A free package is used that allows you to view the weather for 7 days ahead. And per day, all users can make no more than 50 requests. Otherwise, the API will return error 429. Access is provided from a personal account, so the key is embedded in the request link.

API которая предоставляет данный о погоде для приложения. Используется бесплатный пакет, который позволяет смотреть погоду на 7 дней вперёд. И в день все пользователи могут сделать не больше 50 запросов. В противном случае, апи вернёт ошибку 429. Доступ предоставляется с личного аккаунта, поэтому ключ вшит в ссылку запроса.

[API documentation](https://www.weatherbit.io/api)

>
Look carefully at this section
[16 Day Weather Forecast API (1 day interval)](https://www.weatherbit.io/api/weather-forecast-16-day)
>