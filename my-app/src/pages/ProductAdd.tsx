import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: String,
    price: Number,
};

type ProductAddProps = {
    name: string,
    onAdd: (product: Inputs) => void
}

const ProductAdd = (props: ProductAddProps) => {

    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (dataInput) => {
        // console.log(dataInput);
        props.onAdd(dataInput)
    }
  return (
    <form action="" onClick={handleSubmit(onSubmit)}>
    <input type="text" {...register('name')} placeholder='Tên sản phẩm' />  
    <input type="number" {...register('price')} placeholder='Giá' />  
    <button>Add</button>
    </form>
  )
}

export default ProductAdd;