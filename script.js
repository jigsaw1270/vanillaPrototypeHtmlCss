// 

document.addEventListener('DOMContentLoaded', function() {
  let selectedDates = [];

  const calendar = new VanillaCalendar('#calendar', {
    type: 'multiple',
    settings: {
      range: {
        disablePast: true,
        disableGap : true,
      },
      selection: {
        day: 'multiple-ranged',
      },
      visibility: {
        daysOutside: false,
      },
    },
    actions: {
      clickDay(e, dates) {
        selectedDates = dates.selectedDates;
        console.log(selectedDates);
      },  
      getDays(day, date, HTMLElement, HTMLButtonElement, self) {
        const currentDate = new Date(date);
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
  
        const lastDayOfMonth = new Date(year, month + 1, 0);
        const daysInMonth = lastDayOfMonth.getDate();
        let saturdays = [];
        let sundays = [];
  
        for (let d = daysInMonth; d > 0; d--) {
          const checkDate = new Date(year, month, d);
          if (checkDate.getDay() === 6 && saturdays.length < 2) {
            saturdays.push(d);
          } else if (checkDate.getDay() === 0 && sundays.length < 2) {
            sundays.push(d);
          }
        }
  
        if (saturdays.includes(currentDate.getDate()) || sundays.includes(currentDate.getDate())) {
          HTMLButtonElement.style.flexDirection = 'column';
          HTMLButtonElement.innerHTML += `
            <span style="font-size: 11px;color: #FF5722;">Deal!</span>
          `;
        }
   
      }
    }
  });
  calendar.init();


  document.getElementById('select-dates-btn').addEventListener('click', function() {
    if (selectedDates.length > 0) {
      document.getElementById('selected-date').textContent = `Selected date: ${selectedDates[0]} to ${selectedDates[selectedDates.length - 1]}`;
    } else {
      document.getElementById('selected-date').textContent = 'No date selected';
    }
    document.getElementById('my_modal_5').close();
  });
});
