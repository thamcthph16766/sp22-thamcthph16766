import { ProductType } from "../types/product";
import instance from "./instance";
import { isAuthenticate } from "../utils/localStorage";
const { token, user } = isAuthenticate();

export const list = () => {
    const url = `/products`;
    return instance.get(url);
}
export const add = (product: any) => {
    const url = `/products/${user}`;
    return instance.post(url,product),{
        header:{
            "Authorization": `Bearer ${token}`
        }
    }
}
export const remove = (id: any) => {
    const url = `/products/$id`;
    return instance.delete(url);
}
export const read = (id: any) => {
    const url = `/products/$id`;
    return instance.get(url);
}