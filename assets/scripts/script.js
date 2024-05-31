// burger menu
document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.getElementById('burger-button');
    const closeButton = document.getElementById('close-button');
    const menuContent = document.getElementById('menu-content');

    burgerButton.addEventListener('click', () => {
        menuContent.classList.toggle('active');
    });

    closeButton.addEventListener('click', () => {
        menuContent.classList.remove('active');
    });
});





// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Define UI elements
    const fontSizeSlider = document.getElementById('font-size-slider');
    const letterSpacingSlider = document.getElementById('letter-spacing-slider');
    const wordSpacingSlider = document.getElementById('word-spacing-slider');
    const lineHeightSlider = document.getElementById('line-height-slider');
    const fontSelector = document.getElementById('font-selector');
    const fontUrlInput = document.getElementById('font-url-input');
    const applyFontButton = document.getElementById('apply-font-button');
    const resetButton = document.getElementById('reset-button');
    let currentFontFamily = ''; // Store the current font family
    const defaultSettings = {
        fontSize: '20px',
        letterSpacing: '0px',
        wordSpacing: '0px',
        lineHeight: 'normal',
        fontFamily: 'Arial'
    };

    // Function to apply font
    function applyFont(url) {
        if (!url.startsWith('http')) {
            alert('URL not valid. Please enter a valid URL that starts with http or https.');
            return;
        }

        // Create or update a style element for the font
        let fontStyleElement = document.getElementById('dynamic-font-style');
        if (!fontStyleElement) {
            fontStyleElement = document.createElement('style');
            fontStyleElement.id = 'dynamic-font-style';
            document.head.appendChild(fontStyleElement);
        }
        fontStyleElement.textContent = `@import url('${url}');`;

        // Extract the font family name from the URL
        const fontFamilyMatch = url.match(/family=([^&:]+)/);
        if (fontFamilyMatch && fontFamilyMatch[1]) {
            currentFontFamily = fontFamilyMatch[1].replace(/\+/g, ' ');
            updateFontFamily();
        }
    }

    // Function to update font family
    function updateFontFamily() {
        if (currentFontFamily) {
            document.documentElement.style.setProperty('--font-family', currentFontFamily);
            updateStyleProperties();
        }
    }

    // Update style properties based on slider inputs
    function updateStyleProperties() {
        const elements = document.querySelectorAll('*:not(.unmodifiable)');
        elements.forEach(element => {
            element.style.fontSize = `${fontSizeSlider.value}px`;
            element.style.letterSpacing = `${letterSpacingSlider.value}px`;
            element.style.wordSpacing = `${wordSpacingSlider.value}px`;
            element.style.lineHeight = lineHeightSlider.value;
            if (currentFontFamily) {
                element.style.fontFamily = currentFontFamily;
            }
        });
    }

    // Event listeners for sliders
    fontSizeSlider.addEventListener('input', updateStyleProperties);
    letterSpacingSlider.addEventListener('input', updateStyleProperties);
    wordSpacingSlider.addEventListener('input', updateStyleProperties);
    lineHeightSlider.addEventListener('input', updateStyleProperties);
    fontSelector.addEventListener('change', function() {
        currentFontFamily = fontSelector.value;
        updateFontFamily();
    });

    // Apply font when button is clicked
    applyFontButton.addEventListener('click', function () {
        const fontUrl = fontUrlInput.value.trim();
        if (fontUrl) {
            applyFont(fontUrl);
        } else {
            alert('Please enter a font URL.');
        }
    });

    // Function to reset to default settings
    function resetSettings() {
        currentFontFamily = defaultSettings.fontFamily;
        fontSizeSlider.value = parseInt(defaultSettings.fontSize);
        letterSpacingSlider.value = parseInt(defaultSettings.letterSpacing);
        wordSpacingSlider.value = parseInt(defaultSettings.wordSpacing);
        lineHeightSlider.value = defaultSettings.lineHeight;
        fontSelector.value = defaultSettings.fontFamily;

        const elements = document.querySelectorAll('*:not(.unmodifiable)');
        elements.forEach(element => {
            element.style.fontSize = defaultSettings.fontSize;
            element.style.letterSpacing = defaultSettings.letterSpacing;
            element.style.wordSpacing = defaultSettings.wordSpacing;
            element.style.lineHeight = defaultSettings.lineHeight;
            element.style.fontFamily = defaultSettings.fontFamily;
        });
    }

    // Event listener for reset button
    resetButton.addEventListener('click', resetSettings);

    // Initialize with default font and style properties
    updateStyleProperties();
});




document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll("video");

  videos.forEach(video => {
    video.play()
      .then(() => {
        console.log(`Video ${video.src} is playing`);
      })
      .catch(error => {
        console.error(`Error playing video ${video.src}:`, error);
      });
  });
});
