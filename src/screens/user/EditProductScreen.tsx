import { useDispatch, useSelector } from "react-redux"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useAppSelector } from "../../hooks/useAppSelector"
import { userProducts } from "../../slice/productSlice"
import { AppDispatch } from "../../store"


export default () => {
  const userProds = useAppSelector(userProducts)
  const dispatch = useAppDispatch()

  return (
{}
  )
}