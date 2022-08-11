async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    //new for Lyrics
    const lyrics = document.querySelector('input[name="post-lyrics"]').value;

    const response2 = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        lyrics
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok, response2.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText, response2.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  