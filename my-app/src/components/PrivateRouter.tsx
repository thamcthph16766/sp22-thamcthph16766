import React from 'react'
import { isAuthenticate } from '../utils/localStorage';
import { Navigate } from 'react-router-dom';

type Props = {
    children: JSX.Element;
}

const PrivateRouter = (props: Props) => {
    const { user: { role} } = isAuthenticate();
    if(!role){
        return <Navigate to="/signin" />
    }
  return props.children
}

export default PrivateRouter