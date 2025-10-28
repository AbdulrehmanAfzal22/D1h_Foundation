const SUPABASE_URL = 'https://hrfiruloaemetionjlfk.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhyZmlydWxvYWVtZXRpb25qbGZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2NjA5ODksImV4cCI6MjA3NzIzNjk4OX0.JPg_MimSFTUvR_EduNrG_WCCXmzMn2shw1dsk2S-vxA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


const form = document.getElementById('form');
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu11');
const closeBtn = document.getElementById('button1');
const popup = document.getElementById('success-popup');
const successClose = document.getElementById('success-close');


if (hamburger && menu) {
  hamburger.addEventListener('click', (event) => {
    event.stopPropagation();
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      menu.style.display = 'none';
    });
  }

  document.addEventListener('click', (ev) => {
    if (menu.style.display === 'block' && !menu.contains(ev.target) && ev.target !== hamburger) {
      menu.style.display = 'none';
    }
  });
}


if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const inputs = form.querySelectorAll('input[name], textarea[name]');
    const submission = {};
    inputs.forEach((el) => {
      submission[el.name] = el.value.trim();
    });

    if (!submission.fullname || !submission.email) {
      console.warn('Missing required fields:', submission);
      return;
    }

    console.log('Attempting to insert:', submission);

    const { data, error } = await client.from('entries').insert([submission]);

    if (error) {
      console.error('Failed to send message:', error.message);
      return;
    }

    console.log('Message successfully saved:', data);
    form.reset();


    popup.style.display = 'flex';


    successClose.addEventListener('click', () => {
      popup.style.display = 'none';
    });


    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.style.display = 'none';
      }
    });

   
    setTimeout(() => {
      popup.style.display = 'none';
    }, 3000);
  });
}


async function fetchMessages(limit = 50) {
  const { data, error } = await client
    .from('entries')
    .select('id, fullname, email, message, created_at')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Fetch error:', error);
    return [];
  }

  console.log('Fetched messages:', data);
  return data;
}
