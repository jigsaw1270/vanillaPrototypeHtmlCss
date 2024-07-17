// document.addEventListener('DOMContentLoaded', function() {
//     const options = {
//       input: true,
//       type: 'multiple',
//       settings: {
//         range: {
//           disablePast: true,
//         },
//         selection: {
//           day: 'multiple-ranged',
//         },
//         visibility: {
//           daysOutside: true,
//         },
//       },
//       actions: {
//         changeToInput(e, self) {
//           if (!self.HTMLInputElement) return;
//           if (self.selectedDates[1]) {
//             self.selectedDates.sort((a, b) => +new Date(a) - +new Date(b));
//             self.HTMLInputElement.value = `${self.selectedDates[0]} — ${self.selectedDates[self.selectedDates.length - 1]}`;
//           } else if (self.selectedDates[0]) {
//             self.HTMLInputElement.value = self.selectedDates[0];
//           } else {
//             self.HTMLInputElement.value = '';
//           }
//         },
//       },
//     };
  
//     const calendarInput = new VanillaCalendar('#calendar-input', options);
//     console.log('Calendar instance created');
//     calendarInput.init();
//     console.log('Calendar initialized');
//   });



// document.addEventListener('DOMContentLoaded', function() {
 
//   const calendar = new VanillaCalendar('#calendar');
// calendar.init();

document.addEventListener('DOMContentLoaded', function() {
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
        console.log(dates)
        let selectedDate = dates.selectedDates;
        document.getElementById('selected-date').textContent = `Selected date: ${selectedDate[0]} to ${selectedDate[selectedDate.length - 1]}`;
        document.getElementById('my_modal_2').close(); 
      }
    }
  });
  calendar.init();
});
// document.addEventListener('DOMContentLoaded', function() {
//   const options = {
//     input: true,
//     type: 'multiple',
//     settings: {
//       range: {
//         disablePast: true,
//       },
//       selection: {
//         day: 'multiple-ranged',
//       },
//       visibility: {
//         daysOutside: false,
//       },
//     },
//     actions: {
//       changeToInput(e, self) {
//         if (!self.HTMLInputElement) return;
//         if (self.selectedDates[1]) {
//           self.selectedDates.sort((a, b) => +new Date(a) - +new Date(b));
//           self.HTMLInputElement.value = `${self.selectedDates[0]} — ${self.selectedDates[self.selectedDates.length - 1]}`;
//         } else if (self.selectedDates[0]) {
//           self.HTMLInputElement.value = self.selectedDates[0];
//         } else {
//           self.HTMLInputElement.value = '';
//         }

//         // Update the first modal with the selected date(s)
//         document.getElementById('selected-date').textContent = `Selected date(s): ${self.HTMLInputElement.value}`;
//       },
//     },
//   };

//   const calendarInput = new VanillaCalendar('#calendar', options);
//   document.getElementById('my_modal_2').close(); 
//   calendarInput.init();

//   // Close the second modal when a date is selected
//   // document.getElementById('calendar-input').addEventListener('change', () => {
//   //   document.getElementById('my_modal_2').close();
//   // });
// });



  // const options = {
  //   type: 'multiple',
  //   settings: {
  //     range: {
  //       disablePast: true,
  //     },
  //     selection: {
  //       day: 'multiple-ranged',
  //     },
  //     visibility: {
  //       daysOutside: true,
  //     },
  //   },
  //   actions: {
  //     changeToInput(e, self) {
  //       // const inputElement = document.getElementById('calendar-trigger');
  //       if (self.selectedDates[1]) {
  //         self.selectedDates.sort((a, b) => +new Date(a) - +new Date(b));
  //         inputElement.value = `${self.selectedDates[0]} — ${self.selectedDates[self.selectedDates.length - 1]}`;
  //       } else if (self.selectedDates[0]) {
  //         inputElement.value = self.selectedDates[0];
  //       } else {
  //         inputElement.value = '';
  //       }
  //     },
  //   },
  // };
  // const calendarInput = new VanillaCalendar('#calendar-trigger', options);
  //     console.log('Calendar instance created');
  //     calendarInput.init();
  //     console.log('Calendar initialized');

  // const calendarModal = document.getElementById('my_modal_2');
  // const calendarContainer = document.getElementById('calendar-container');

  // calendarModal.addEventListener('showModal', function() {
  //   if (!calendarContainer.vanillaCalendar) {
  //     const calendar = new VanillaCalendar(calendarContainer, options);
  //     console.log('Calendar instance created');
  //     calendar.init();
  //     console.log('Calendar initialized');
  //     calendarContainer.vanillaCalendar = calendar;
  //   }
  // });

  // calendarModal.addEventListener('close', function() {
  //   if (calendarContainer.vanillaCalendar) {
  //     calendarContainer.vanillaCalendar.destroy();
  //     delete calendarContainer.vanillaCalendar;
  //     calendarContainer.innerHTML = '';
  //   }
  // });

