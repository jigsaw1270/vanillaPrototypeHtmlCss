document.addEventListener('DOMContentLoaded', function() {
    const options = {
      input: true,
      type: 'multiple',
      settings: {
        range: {
          disablePast: true,
        },
        selection: {
          day: 'multiple-ranged',
        },
        visibility: {
          daysOutside: true,
        },
      },
      actions: {
        changeToInput(e, self) {
          if (!self.HTMLInputElement) return;
          if (self.selectedDates[1]) {
            self.selectedDates.sort((a, b) => +new Date(a) - +new Date(b));
            self.HTMLInputElement.value = `${self.selectedDates[0]} — ${self.selectedDates[self.selectedDates.length - 1]}`;
          } else if (self.selectedDates[0]) {
            self.HTMLInputElement.value = self.selectedDates[0];
          } else {
            self.HTMLInputElement.value = '';
          }
        },
      },
    };
  
    const calendarInput = new VanillaCalendar('#calendar-input', options);
    console.log('Calendar instance created');
    calendarInput.init();
    console.log('Calendar initialized');
  });

