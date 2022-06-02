
import axios from "axios";

const instanse=axios.create({
        baseURL:"https://bank.gov.ua/NBUStatService/v1/statdirectory/",

})

export async function actualCurrency() {
    const  {data}  = await instanse.get("exchange?json")
        console.log();
        
    return data;}
  