        playButton.addEventListener("click", () => {
            alarmSound.play().then(() => {
                alarmSound.pause();
                alarmSound.currentTime = 0;
                startTimer();
            }).catch((error) => console.error("Gagal memulai audio:", error));
            
            
        });
        

        changeTimeButton.addEventListener("click", () => {
            stopTimer(); 
            timeSettings.classList.remove("hidden");
            timeSettings.classList.add("flex")
        });

        backButton.addEventListener("click", () => {
            timeSettings.classList.add("hidden");
            timeSettings.classList.remove("flex");
            time = 0; 
            timerElement.textContent = time.toFixed(3);
        });

        saveTimeButton.addEventListener("click", () => {
            const customTime = parseInt(customTimeInput.value);
            if (!isNaN(customTime) && customTime > 0) {
                maxTime = customTime;
               /* alert(`Waktu disimpan: ${maxTime} detik`);*/
                timeSettings.classList.add("hidden");
                timeSettings.classList.remove("flex");
                time = 0; 
                timerElement.textContent = time.toFixed(3);
            } else {
                alert("Masukkan nilai yang valid!");
            }
        });

        presetButtons.forEach(button => {
            button.addEventListener("click", () => {
                maxTime = parseInt(button.dataset.time);
                /*alert(`Waktu disimpan: ${maxTime} detik`);*/
                timeSettings.classList.add("hidden");
                timeSettings.classList.remove("flex");
                time = 0; 
                timerElement.textContent = time.toFixed(3);
            });
        });

    customTimeInput.addEventListener('input', function () {
      output.textContent = customTimeInput.value;
    });