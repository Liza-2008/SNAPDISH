// add-recipe.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('recipeForm');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
      title:       form.title.value.trim(),
      imageUrl:    form.imageUrl.value.trim(),
      description: form.description.value.trim(),
      author:      form.author.value.trim()
    };

    try {
      const res = await fetch('http://localhost:5000/api/recipes/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        alert('✅ Recipe added successfully!');
        form.reset();
      } else {
        const { message } = await res.json();
        alert('❌ ' + (message || 'Error saving recipe'));
      }
    } catch (err) {
      alert('❌ Cannot reach server. Is it running?');
      console.error(err);
    }
  });
});
