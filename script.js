 <button id="incrementBtn">Increment</button>

  <script>
    let count = 0;

    document.getElementById('incrementBtn').addEventListener('click', function() {
      alert(count); // Show current (un-incremented) value
      count += 1;   // Increment count
      document.getElementById('counter').innerText = count; // Update UI
    });
  </script>