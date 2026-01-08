# Chromium/Firefox Extension to remove the "?forcedownload=1" attribute from links IPVC's moodle

Prevents [elearning.ipvc.pt](https://elearning.ipvc.pt) from forcing file downloads.

Ever been annoyed by Moodle forcing you to download files instead of opening them in the browser? This extension is here to help! It removes the "?forcedownload=1" attribute from links on IPVC's Moodle, allowing you to open files directly in your browser.

## Installation

- Clone the repo:
  ```bash
  git clone https://github.com/lucascompython/remove_force_download_moodle.git
  ```
  Or download the ZIP file and extract it to a folder of your choice.

### For Chromium-based browsers (like Google Chrome, Microsoft Edge, etc.):

- Open your browser and go to `chrome://extensions/`.
- Enable "Developer mode" using the toggle in the top right corner.
- Click on "Load unpacked" and select the cloned repository folder.

### For Firefox-based browsers:

- Open your browser and go to `about:debugging#/runtime/this-firefox`.
- Click on "Load Temporary Add-on".
- Select the `manifest.json` file from the cloned repository folder.

### And that's it! The extension should now be active and working.
