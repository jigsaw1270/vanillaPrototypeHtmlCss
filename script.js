

document.addEventListener('DOMContentLoaded', function() {
  let selectedDates = [];

  const calendar = new VanillaCalendar('#calendar', {
    type: 'multiple',
    settings: {
      range: {
        disablePast: true,
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
        if (selectedDates.length > 0) {
          document.getElementById('confirm-date-btn').disabled = false;
        }
      }
    }
  });
  calendar.init();


  const confirmBtn = document.getElementById('confirm-date-btn');
  confirmBtn.addEventListener('click', function() {
    if (selectedDates.length > 0) {
      document.getElementById('selected-date').textContent = `Selected date: ${selectedDates[0]} to ${selectedDates[selectedDates.length - 1]}`;
      document.getElementById('my_modal_2').close();
    }
  });
});
