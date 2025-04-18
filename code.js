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

    const gameSpecs = {
        "GTA V": {
          minimum: {
            cpu: "Intel Core 2 Quad Q6600 / AMD Phenom 9850",
            gpu: "NVIDIA 9800 GT 1GB / AMD HD 4870 1GB",
            ram: 4,
            storage: 72
          },
          recommended: {
            cpu: "Intel Core i5 3470 / AMD FX-8350",
            gpu: "NVIDIA GTX 660 2GB / AMD HD 7870 2GB",
            ram: 8,
            storage: 72
          }
        },
        "The Witcher 3": {
          minimum: {
            cpu: "Intel Core i5-2500K / AMD Phenom II X4 940",
            gpu: "NVIDIA GTX 660 / AMD HD 7870",
            ram: 6,
            storage: 35
          },
          recommended: {
            cpu: "Intel Core i7 3770 / AMD FX-8350",
            gpu: "NVIDIA GTX 770 / AMD R9 290",
            ram: 8,
            storage: 35
          }
        },
        "Portal 2": {
          minimum: {
            cpu: "3.0 GHz P4 / Dual Core 2.0GHz / AMD64X2",
            gpu: "ATI Radeon X800 / NVIDIA 7600 / Intel HD Graphics 2000",
            ram: 2,
            storage: 8
          }
        },
        "CSGO": {
          minimum: {
            cpu: "Intel Core 2 Duo E6600 / AMD Phenom X3 8750",
            gpu: "DirectX 9 compatible 256MB VRAM",
            ram: 2,
            storage: 15
          }
        },
        "Tomb Raider": {
          minimum: {
            cpu: "Intel Core i3 / AMD equivalent",
            gpu: "NVIDIA GTX 480 / AMD HD 5870",
            ram: 4,
            storage: 12
          },
          recommended: {
            cpu: "Quad-core CPU",
            gpu: "NVIDIA GTX 670 / AMD HD 7950",
            ram: 8,
            storage: 12
          }
        },
        "Portal": {
          minimum: {
            cpu: "1.7 GHz",
            gpu: "DirectX 8.1 compatible",
            ram: 0.5,
            storage: 4.5
          }
        },
        "Left 4 Dead 2": {
          minimum: {
            cpu: "Pentium 4 3.0GHz",
            gpu: "ATI X800 / NVIDIA 6600",
            ram: 2,
            storage: 13
          },
          recommended: {
            cpu: "Intel Core 2 Duo 2.4GHz",
            gpu: "NVIDIA 7600 / ATI X1600",
            ram: 2,
            storage: 13
          }
        },
        "Red Dead Redemption 2": {
          minimum: {
            cpu: "Intel Core i5-2500K / AMD FX-6300",
            gpu: "NVIDIA GTX 770 2GB / AMD R9 280 3GB",
            ram: 8,
            storage: 150
          },
          recommended: {
            cpu: "Intel Core i7-4770K / AMD Ryzen 5 1500X",
            gpu: "NVIDIA GTX 1060 6GB / AMD RX 480 4GB",
            ram: 12,
            storage: 150
          }
        },
        "BioShock Infinite": {
          minimum: {
            cpu: "Intel Core 2 Duo / AMD Athlon X2",
            gpu: "ATI Radeon HD 3870 / NVIDIA 8800 GT / Intel HD 3000",
            ram: 2,
            storage: 20
          },
          recommended: {
            cpu: "Quad Core Processor",
            gpu: "AMD HD 6950 / NVIDIA GTX 560",
            ram: 4,
            storage: 30
          }
        }
      };
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
