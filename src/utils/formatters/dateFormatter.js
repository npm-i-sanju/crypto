import { format, formatDistanceToNow } from 'date-fns';

export const formatDate = (date, formatStr = 'MMM dd, yyyy') => {
  return format(new Date(date), formatStr);
};

export const formatDateTime = (date) => {
  return format(new Date(date), 'MMM dd, yyyy HH:mm');
};

export const formatTimeAgo = (date) => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export const formatTime = (date) => {
  return format(new Date(date), 'HH:mm:ss');
};