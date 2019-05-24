const formatDate = date => {
  const [year, month, day] = date.split('-');

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return `${monthNames[month - 1]} ${day}, ${year}`;
};

export default formatDate;
