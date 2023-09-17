 const button = document.getElementById('toggle-button');
        const title = document.getElementById('title');
        const subtitle = document.getElementById('subtitle');
        const content = document.getElementById('content');
        const audio = new Audio('moonlight.mp3'); // Replace with your audio file
        audio.volume = 0.2;

        button.addEventListener('click', function() {
            button.style.display = 'none'; // Hide the button
            title.style.display = 'block'; // Show the title
            subtitle.style.display = 'block'; // Show the subtitle
            content.style.display = 'block'; // Show the content
            audio.play(); // Autoplay the audio
        });
