# Accessibility Widget

A comprehensive, lightweight accessibility tool that enhances web accessibility for all users. This single-file JavaScript widget provides multiple accessibility features to make websites more usable for people with disabilities.

## Features

### Core Accessibility Features
- **High Contrast Mode** - Improves visibility for users with low vision
- **Text Size Adjustment** - Increases font size for better readability
- **Text Spacing** - Adds letter and word spacing for easier reading
- **Animation Control** - Pauses animations that may cause distraction or discomfort
- **Image Hiding** - Removes images for users who prefer text-only content
- **Dyslexia-Friendly Font** - Uses OpenDyslexic font for users with dyslexia
- **Cursor Enhancement** - Increases cursor size for better visibility
- **Line Height Adjustment** - Improves text readability with increased line spacing
- **Text Alignment** - Forces left alignment for consistent text layout

### Advanced Features
- **Screen Reader Support** - Built-in text-to-speech functionality
- **Voice Control** - Voice commands to control accessibility features
- **Reading Mode** - Simplified, distraction-free reading experience
- **Enhanced Focus Indicators** - Improved visual focus indicators for keyboard navigation
- **Reduced Motion** - Respects user preferences for reduced motion
- **Font Selection** - Choose between Arial, Times New Roman, and Verdana
- **Color Blindness Filters** - Filters for Protanopia, Deuteranopia, Tritanopia, and Grayscale

## Installation

### Method 1: Direct Download
1. Download the `widget.js` file
2. Include it in your HTML page:

```html
<script src="widget.js"></script>
```

### Method 2: NPM
```bash
npm install web-accessibility-widget
```

### Method 3: CDN
```html
<script src="https://unpkg.com/web-accessibility-widget@latest/widget.js"></script>
```

That's it! The widget will automatically initialize when the page loads.

## Configuration

The widget is highly customizable. You can override the default settings by defining `window.ACCESSIBILITY_WIDGET_CONFIG` before loading the widget script.

### Basic Configuration
```html
<script>
// Define your custom configuration
window.ACCESSIBILITY_WIDGET_CONFIG = {
  // Enable/disable features
  enableVoiceControl: false,
  enableScreenReader: true,
  
  // Customize appearance
  widgetWidth: '350px',
  colors: {
    primary: '#0066cc',
    secondary: '#ffffff'
  }
};
</script>
<script src="https://unpkg.com/web-accessibility-widget@latest/widget.js"></script>
```

### Complete Configuration Options
```html
<script>
window.ACCESSIBILITY_WIDGET_CONFIG = {
  // Feature toggles - set to false to disable
  enableHighContrast: true,
  enableBiggerText: true,
  enableTextSpacing: true,
  enablePauseAnimations: true,
  enableHideImages: true,
  enableDyslexiaFont: true,
  enableBiggerCursor: true,
  enableLineHeight: true,
  enableTextAlign: true,
  enableScreenReader: true,
  enableVoiceControl: true,
  enableReadingMode: true,
  enableEnhancedFocus: true,
  enableReducedMotion: true,
  enableFontSelection: true,
  enableColorFilter: true,
  
  // Widget dimensions and position
  widgetWidth: '440px',
  widgetPosition: {
    right: '20px',
    bottom: '20px'
  },
  
  // Color scheme
  colors: {
    primary: '#1e90ff',
    primaryHover: '#00bfff',
    secondary: '#f9f9f9',
    text: '#333',
    textLight: '#fff',
    border: '#e6e6e6',
    borderHover: '#d4d4d4',
    shadow: 'rgba(0, 0, 0, 0.2)',
    focus: '#ff6b35',
    focusGlow: 'rgba(255, 107, 53, 0.3)'
  },
  
  // Button styling
  button: {
    size: '55px',
    borderRadius: '1000px',
    iconSize: '28px',
    shadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
  },
  
  // Menu styling
  menu: {
    headerHeight: '55px',
    padding: '0 10px 10px 10px',
    optionPadding: '14px 10px',
    optionMargin: '10px',
    borderRadius: '8px',
    fontSize: '16px',
    titleFontSize: '22px',
    closeButtonSize: '44px'
  },
  
  // Typography
  typography: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    titleFontSize: '22px',
    titleFontWeight: '500',
    lineHeight: '1'
  },
  
  // Animation
  animation: {
    transition: '0.2s',
    hoverScale: '1.05'
  }
};
</script>
<script src="https://unpkg.com/web-accessibility-widget@latest/widget.js"></script>
```

### Partial Configuration
You only need to specify the settings you want to change. The widget will merge your settings with the defaults:

```html
<script>
// Only override what you need
window.ACCESSIBILITY_WIDGET_CONFIG = {
  enableVoiceControl: false,  // Disable voice control
  widgetWidth: '300px',       // Smaller width
  colors: {
    primary: '#purple'        // Custom color (other colors remain default)
  }
};
</script>
<script src="widget.js"></script>
```

## Voice Commands

When voice control is enabled, users can activate features using these commands:

- "show menu" / "open menu" - Opens the accessibility menu
- "high contrast" - Toggles high contrast mode
- "bigger text" - Toggles larger text size
- "text spacing" - Toggles text spacing
- "pause animations" - Toggles animation pausing
- "hide images" - Toggles image hiding
- "dyslexia font" - Toggles dyslexia-friendly font
- "bigger cursor" - Toggles larger cursor
- "screen reader" - Toggles screen reader
- "reset all" - Resets all accessibility settings

## Browser Compatibility

- **Modern Browsers**: Full functionality in Chrome, Firefox, Safari, Edge
- **Screen Reader**: Requires Speech Synthesis API support
- **Voice Control**: Requires Speech Recognition API support
- **Graceful Degradation**: Features that aren't supported are automatically disabled

## Technical Features

- **Single File Deployment** - No dependencies, just include one JavaScript file
- **Persistent Settings** - User preferences saved in localStorage
- **Keyboard Navigation** - Full keyboard accessibility with Tab, Arrow keys, and Escape
- **ARIA Compliance** - Proper ARIA labels and roles for screen readers
- **Performance Optimized** - DOM caching and efficient event handling
- **Error Handling** - Robust error handling for browser compatibility
- **Responsive Design** - Works on desktop and mobile devices

## Usage Examples

### Basic Implementation
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Accessible Website</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This site includes accessibility features.</p>
    
    <!-- Include the widget -->
    <script src="widget.js"></script>
</body>
</html>
```

### Custom Configuration
```html
<script>
// Define custom settings before loading the widget
window.ACCESSIBILITY_WIDGET_CONFIG = {
  enableVoiceControl: false,  // Disable voice control
  widgetWidth: '300px',       // Smaller menu width
  colors: {
    primary: '#0066cc',       // Custom blue color
    secondary: '#ffffff'      // White background
  }
};
</script>
<script src="https://unpkg.com/web-accessibility-widget@latest/widget.js"></script>
```

## Accessibility Standards

This widget helps websites comply with:
- **WCAG 2.1** (Web Content Accessibility Guidelines)
- **Section 508** (US Federal accessibility requirements)
- **ADA** (Americans with Disabilities Act) digital accessibility standards

## File Structure

```
widget/
├── widget.js          # Main accessibility widget file
├── index.html         # Demo/test page
└── README.md          # This documentation
```

## Contributing

When contributing to this project:

1. Test all features across different browsers
2. Ensure keyboard navigation works properly
3. Verify screen reader compatibility
4. Test voice commands (if supported by browser)
5. Check that settings persist across page reloads

## License

This project is open source and available under the GPL License.

## Support

For support or feature requests, please check the browser console for any error messages and ensure your browser supports the required APIs for advanced features like speech synthesis and recognition.
