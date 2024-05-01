// Utils.js
const Utils = {
    months: ({ count }) => {
      const currentDate = new Date();
      const months = [];
      for (let i = 0; i < count; i++) {
        currentDate.setMonth(currentDate.getMonth() - 1);
        months.unshift(currentDate.toLocaleString('default', { month: 'long' }));
      }
      return months;
    },
  };
  
  export default Utils;