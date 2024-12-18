// const daysInMonth = 31; // January
//     const calendar = document.getElementById('calendar');

//     for (let i = 1; i <= daysInMonth; i++) {
//       const dayElement = document.createElement('div');
//       dayElement.classList.add('day');
//       dayElement.innerHTML = `${i}<div class="tooltip">Details for January ${i}, 2025</div>`;
//       dayElement.setAttribute('data-date', `January ${i}, 2025`);
//       dayElement.addEventListener('click', () => showDialog(`Details - for January ${i}, 2025`));
//       calendar.appendChild(dayElement);
//     }

//     const dialogOverlay = document.getElementById('dialog-overlay');
//     const dialog = document.getElementById('dialog');
//     const dialogContent = document.getElementById('dialog-content');

//     function showDialog(content) {
//       dialogContent.textContent = content;
//       dialog.style.display = 'block';
//       dialogOverlay.style.display = 'block';
//     }

//     function closeDialog() {
//       dialog.style.display = 'none';
//       dialogOverlay.style.display = 'none';
//     }
const daysInMonth = 31; // January
    const calendar = document.getElementById('calendar');

    // Predefined events for specific dates
    const events = {
      "January 1, 2025": "New Year's Day Celebration 🎉",
      "January 14, 2025": "Makar Sankranti Festival 🪁",
      "January 26, 2025": "Republic Day Parade 🇮🇳",
    };

    for (let i = 1; i <= daysInMonth; i++) {
      const dayElement = document.createElement('div');
      dayElement.classList.add('day');
      const dateStr = `January ${i}, 2025`;

      // Set the date as a custom attribute
      dayElement.setAttribute('data-date', dateStr);

      // Add basic content and tooltip
      dayElement.innerHTML = `
        ${i}
        <div class="tooltip">${events[dateStr] || "No events on this day"}</div>
      `;

      // On click, fetch the event data using 'data-date'
      dayElement.addEventListener('click', (event) => {
        const clickedDate = event.currentTarget.getAttribute('data-date');
        const eventInfo = events[clickedDate] || "No events planned for this day.";
        showDialog(`${clickedDate} pe ${eventInfo}`);
      });

      calendar.appendChild(dayElement);
    }

    const dialogOverlay = document.getElementById('dialog-overlay');
    const dialog = document.getElementById('dialog');
    const dialogContent = document.getElementById('dialog-content');

    function showDialog(content) {
      dialogContent.textContent = content;
      dialog.style.display = 'block';
      dialogOverlay.style.display = 'block';
    }

    function closeDialog() {
      dialog.style.display = 'none';
      dialogOverlay.style.display = 'none';
    }