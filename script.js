const form = document.getElementById('contactForm');
const success = document.getElementById('success');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = new FormData(form);
      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          success.style.display = 'block';
          form.reset();
        } else {
          alert('Error! Please try again.');
        }
      } catch (err) {
        alert('Network error. Please try later.');
      }
    });

    document.getElementById('mailtoBtn').addEventListener('click', (e) => {
      e.preventDefault();
      const name = encodeURIComponent(document.getElementById('name').value || '');
      const email = encodeURIComponent(document.getElementById('email').value || '');
      const phone = encodeURIComponent(document.getElementById('phone').value || '');
      const type = encodeURIComponent(document.getElementById('type').value || '');
      const addr = encodeURIComponent(document.getElementById('address').value || '');
      const msg = encodeURIComponent(document.getElementById('message').value || '');
      const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ADonation: ${type}%0AAddress: ${addr}%0A%0A${msg}`;
      window.location.href = `mailto:YOUR_EMAIL_HERE?subject=Donation%20Contact&body=${body}`;
    });
