// Your code here.
  const container = document.querySelector('.items');
  const items = document.querySelectorAll('.item');

  let selected = null;
  let offsetX = 0;
  let offsetY = 0;
  let containerRect = container.getBoundingClientRect();

  items.forEach(item => {
    item.style.position = 'absolute'; // make items movable
    item.addEventListener('mousedown', (e) => {
      selected = item;
      const rect = selected.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;

      // Move the selected item to front
      selected.style.zIndex = 1000;
    });
  });

  document.addEventListener('mousemove', (e) => {
    if (selected) {
      // Calculate new position
      let newX = e.clientX - containerRect.left - offsetX;
      let newY = e.clientY - containerRect.top - offsetY;

      // Apply boundary constraints
      newX = Math.max(0, Math.min(newX, container.clientWidth - selected.offsetWidth));
      newY = Math.max(0, Math.min(newY, container.clientHeight - selected.offsetHeight));

      selected.style.left = `${newX}px`;
      selected.style.top = `${newY}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    if (selected) {
      selected.style.zIndex = '';
      selected = null;
    }
  });

  // Optional: Random initial positions to prevent overlap
  items.forEach(item => {
    item.style.left = `${Math.random() * (container.clientWidth - 200)}px`;
    item.style.top = `${Math.random() * (container.clientHeight - 100)}px`;
  });