import axios, {AxiosPromise} from "axios";

export class WeatherService {
    static getCurrentWeather(city: string) : Promise<AxiosPromise<any>>{
        return axios.get(`\`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a1ad164b504843fa402d95462b500cf1`);
    }
}