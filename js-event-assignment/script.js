// Event Handling
document.getElementById('click-button').addEventListener('click', () => {
  alert('Button clicked!');
});

document.getElementById('hover-box').addEventListener('mouseover', () => {
  document.getElementById('hover-box').style.backgroundColor = 'lightblue';
});

document.getElementById('keypress-input').addEventListener('keypress', (e) => {
  console.log(`Key pressed: ${e.key}`);
});

document.getElementById('secret-action').addEventListener('dblclick', () => {
  alert('Secret action triggered!');
});

// Interactive Elements
document.getElementById('color-button').addEventListener('click', () => {
  document.getElementById('color-button').style.backgroundColor = 'green';
});

const tabs = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    tabContents.forEach(content => {
      content.style.display = 'none';
    });

    document.getElementById(`tab-${target}`).style.display = 'block';
  });
});

// Form Validation
document.getElementById('validation-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email.includes('@')) {
    alert('Please enter a valid email.');
    return;
  }

  if (password.length < 8) {
    alert('Password must be at least 8 characters long.');
    return;
  }

  alert('Form submitted successfully!');
});