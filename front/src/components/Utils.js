import { format, parseISO } from 'date-fns';

export const formattedDate = (dateString) => {
    const parsedDate = parseISO(dateString);
    return format(parsedDate, 'd MMM y');
};
  