document.addEventListener('DOMContentLoaded', function () {
    const checkCompatibilityLink = document.querySelector('section a');
    const gameSelect = document.getElementById('game');
    const checkCompatibilityButton = document.getElementById('check-compatibility');
    const cpu = document.getElementById('cpu');
    const gpu = document.getElementById('gpu');
    const ram = document.getElementById('ram');
    const storage = document.getElementById('storage');
    const gameSearch = document.getElementById('gameSearch');

    // ตรวจสอบก่อนคลิกลิงก์
    if (checkCompatibilityLink) {
        checkCompatibilityLink.addEventListener('click', function (event) {
            if (gameSelect.value === "") {
                event.preventDefault();
                alert("Please select a game before checking compatibility.");
            }
        });
    }

    // ตรวจสอบก่อนคลิกปุ่ม
    if (checkCompatibilityButton) {
        checkCompatibilityButton.addEventListener('click', function (event) {
            if (cpu.value === "" || gpu.value === "" || ram.value === "" || storage.value === "") {
                event.preventDefault();
                alert("Please fill in all the fields before checking compatibility.");
            }
        });
    }


    // อัปเดต <select> ด้วยรายการเกมที่กรอง
    function updateGameSelect(games) {
        gameSearch.addEventListener('input', function () {
            const query = gameSearch.value.toLowerCase();
            const filteredGames = games.filter(game => game.name.toLowerCase().includes(query));

            // ลบ option เก่าและแสดงผลใหม่
            gameSelect.innerHTML = '';
            if (filteredGames.length > 0) {
                filteredGames.forEach(game => {
                    const option = document.createElement('option');
                    option.value = game.id;
                    option.textContent = game.name;
                    gameSelect.appendChild(option);
                });
            } else {
                gameSelect.innerHTML = '<option value="">No games found</option>';
            }
        });
    }

    gameSelect.addEventListener("change", () => {
        const selectedGameId = gameSelect.value;
        const selectedGameName = gameSelect.options[gameSelect.selectedIndex].text;
    
        console.log("Game ID:", selectedGameId); 
        console.log("Game Name:", selectedGameName);
    
        if (selectedGameId && selectedGameName) {
            localStorage.setItem("selectedGameId", selectedGameId);
            localStorage.setItem("selectedGameName", selectedGameName);
            
            console.log("Data saved to localStorage");
        }
    });
    document.getElementById('check-compatibility').addEventListener('click', function(event) {
        const cpu = document.getElementById('cpu').value;
        const gpu = document.getElementById('gpu').value;
        const ram = document.getElementById('ram').value;
        const space = document.getElementById('space').value;

        // เช็คว่าทุกฟิลด์ถูกกรอกหรือไม่
        if (!cpu || !gpu || !ram || !space) {
            event.preventDefault();  // ยับยั้งการเปลี่ยนหน้า
            alert("Please fill in all the fields before checking compatibility.");
        } else {
            // ถ้าทุกฟิลด์ถูกกรอก ให้ทำการส่งข้อมูลไปที่หน้าอื่น
            console.log("Compatibility Check Passed");
        }

        localStorage.setItem("cpu", cpu);
    localStorage.setItem("gpu", gpu);
    localStorage.setItem("ram", ram);
    localStorage.setItem("space", space);

    console.log("User specs saved!");
    });

    
      document.getElementById('check-compatibility').addEventListener('click', function(event) {
        const cpu = document.getElementById('cpu').value;
        const gpu = document.getElementById('gpu').value;
        const ram = parseInt(document.getElementById('ram').value);
        const space = parseInt(document.getElementById('space').value);
    
        // เช็คว่าทุกฟิลด์ถูกกรอกหรือไม่
        if (!cpu || !gpu || !ram || !space) {
            event.preventDefault();  // ยับยั้งการเปลี่ยนหน้า
            alert("Please fill in all the fields before checking compatibility.");
        } else {
            // ถ้าทุกฟิลด์ถูกกรอก ให้เก็บข้อมูลลงใน localStorage
            localStorage.setItem('cpu', cpu);
            localStorage.setItem('gpu', gpu);
            localStorage.setItem('ram', ram);
            localStorage.setItem('space', space);
    
            // ไปหน้าแสดงผล
            window.location.href = 'RE.html';
        }
    });
      

      
    

    

});
