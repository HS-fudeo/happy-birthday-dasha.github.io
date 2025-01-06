// Запуск музыки, удаление кнопки
document.getElementById("start-button").addEventListener("click", function() {
    const audio = document.getElementById("background-music");
    audio.volume = 0.2;
    audio.loop = true; 
    audio.play().catch(err => {
        console.warn("Ошибка при воспроизведении аудио:", err);
    });
    // Убираем кнопку, чтобы не закрывала экран
    this.remove();
});

// Открыть/закрыть все 10 модалок
document.addEventListener("DOMContentLoaded", () => {
    for (let i = 1; i <= 10; i++) {
        const openBtn  = document.getElementById(`open_${i}`);
        const modal    = document.getElementById(`modal_container_${i}`);
        const closeBtn = document.getElementById(`close_${i}`);

        if (openBtn && modal && closeBtn) {
            // Открываем окно
            openBtn.addEventListener("click", () => {
                modal.classList.add("show");
            });
            // Закрываем окно
            closeBtn.addEventListener("click", () => {
                modal.classList.remove("show");
            });
        }
    }
});
