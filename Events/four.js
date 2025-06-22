
    let intervalId = null;
    const hex = "0123456789ABCDEF";

    const changeColour = () => {
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    const startChangingColour = () => {
      const newColor = changeColour();
      document.body.style.backgroundColor = newColor;
      document.body.style.color = "#fff";
      console.log("Changed to:", newColor);
    };

    document.querySelector('#start').addEventListener('click', () => {
      if (!intervalId) {
        intervalId = setInterval(startChangingColour, 1000);
      }
    });

    document.querySelector('#stop').addEventListener('click', () => {
      clearInterval(intervalId);
      intervalId = null;
      console.log("STOPPED");
    });
 
