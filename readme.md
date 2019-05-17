# Spotify Controls
### [Download](https://github.com/KentoNishi/Spotify-Controls/archive/master.zip)
An extension for Spotify shortcuts and controls, based on [SpotifyControls](https://github.com/Sergej-Popov/SpotifyControls) by [@Sergej-Popov](https://github.com/Sergej-Popov).

![Screeenshot](images/screenshot.png)

# About
This extension lets you customize and control keyboard shortcuts for Spotify!

# Installation
1. [Download](https://github.com/KentoNishi/Spotify-Controls/archive/master.zip) the file.
2. Unzip the file contents. 
    > When the unzip finishes, make sure you are inside the extracted folder. For example, if you downloaded the file to `Downloads`, make sure you are inside `Downloads/Spotify-Controls-master`.
3. Go to ``chrome:extensions`` and enable developer mode.
4. Drag and drop the extension folder into the ``chrome:extensions`` page.
5. Once the extension is installed, you are good to go!
    > To activate the extension, click on the Spotify icon on the navigation bar.

# Shortcuts
By opening the extension and clicking ``Change shortcuts``, you can set your own custom commands.

![Screeenshot](images/shortcuts.png)

# Issues
* While loading, the player occasionally shows the title as being ``undefined``.
* If you are using a browser that supports hardware media keys, some keys may not register.
    * In Microsoft Edge on Chromium, the feature can be turned off at ``edge://flags/#hardware-media-key-handling``.
        > Keypresses may not be registered if 2 handlers conflict. Disable either the browser feature or ``Play/Pause``, ``Next Track``, and ``Previous Track`` shortcuts to fix the issue.
        >   * All other shortcuts are unaffected by this conflict.
    * Other Chromium browsers can solve the issue with similar procedures.