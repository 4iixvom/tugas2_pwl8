let btnTambah = document.getElementById('btn-tambah');
let output = document.getElementById('output');

// Fungsi untuk menambah tugas baru
btnTambah.onclick = (e) => {
   let input = document.getElementById('assignment');
   let title = input.value.trim();
   if (title === "") {
      alert("Inputan masih kosong");
      return;
   }
   let task = document.createElement("div");
   task.id = `${Date.now()}`;
   task.className = `bg-green-50 p-3 rounded shadow mb-2 flex justify-between items-center`;
   task.innerHTML = `
      <span class="text-gray-700">${title}</span>
      <div class="flex gap-2">
         <button class="bg-green-500 text-black font-bold px-2 py-1 rounded hover:bg-green-600" data-task="${task.id}" onclick="markComplete(this)">Selesai</button>
         <button class="bg-red-500 text-black font-bold px-2 py-1 rounded hover:bg-red-600" data-task="${task.id}" onclick="deleteTask(this)">Hapus</button>
      </div>
   `;
   output.appendChild(task);
   input.value = "";
   e.preventDefault();
};

// Fungsi untuk menandai tugas selesai
function markComplete(button) {
   let taskId = button.getAttribute('data-task');
   let taskElement = document.getElementById(taskId);
   if (taskElement) {
      taskElement.classList.toggle('line-through');
      taskElement.classList.toggle('bg-green-100');
   }
}

// Fungsi untuk menghapus tugas
function deleteTask(button) {
   let taskId = button.getAttribute('data-task');
   let taskElement = document.getElementById(taskId);
   if (taskElement) {
      taskElement.remove();
   }
}
