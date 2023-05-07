import React from 'react';
import { NotificationEl } from './Notification.styled';

export const Notification = ({message}) => {
    return (<NotificationEl>{ message}</NotificationEl>)
}