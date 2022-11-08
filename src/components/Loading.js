import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = ({ type, color }) => (
    <ReactLoading type={'spin'} color={color} height={'5%'} width={'5%'} />
);
 
export default Loading;