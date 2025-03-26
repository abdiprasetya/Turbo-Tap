(function() {
  const canvasElement = document.querySelector('.canvas-selector');

  if (!canvasElement) {
    alert("Canvas element not found!");
    return;
  }

  const canvasRect = canvasElement.getBoundingClientRect();

  function generateRandomCoordinates() {
    const x = Math.random() * canvasRect.width;
    const y = Math.random() * canvasRect.height;
    return { x, y };
  }

  function simulateClick(x, y) {
    const mouseEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      clientX: canvasRect.left + x,
      clientY: canvasRect.top + y
    });
    canvasElement.dispatchEvent(mouseEvent);
  }

  function clickAtRandomInterval() {
    const { x, y } = generateRandomCoordinates();
    simulateClick(x, y);

    const randomDelay = Math.random() * 3000 + 2000;
    console.log(`Clicked at (${x.toFixed(2)}, ${y.toFixed(2)}) with delay ${randomDelay.toFixed(2)}ms`);

    setTimeout(clickAtRandomInterval, randomDelay);
  }

  clickAtRandomInterval();
})();
