# Zero-Trust Score Widget

This repository contains the Zero-Trust Score Widget built with Vue.js and Vuetify. This widget displays a company's Zero-Trust Score along with detailed metrics, observable data, and risk category information.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Running Your Application](#running-your-application)
- [Example JSON Data](#example-json-data)
- [Demo or Screenshot](#demo-or-screenshot)
- [License](#license)

## Installation

### Prerequisites

1. Ensure you have Node.js, Vue.js, and Vuetify installed in your project.

   If you haven't done this yet, you can create a new Vue project with Vuetify by running:

   ```bash
   vue create my-project
   cd my-project
   vue add vuetify
   ```

2. **Clone the Repository**: Clone the repository that contains the `ZeroTrustScoreWidget.vue` file:

   ```bash
   git clone https://github.com/yonatandudai/Assignment-for-Enqode.git
   ```

3. **Navigate to the Cloned Directory**: After cloning the repository, change into the directory by running:

   ```bash
   cd part3
   cd zerotrust-score-widget
   ```

4. **Locate the Widget File**: Inside the cloned repository, locate the `ZeroTrustScoreWidget.vue` file.  
It will be found in this path:  `part3\zerotrust-score-widget\src\components`

5. **Copy the Widget File**: To copy the `ZeroTrustScoreWidget.vue` file to your Vue project's `src/components` directory, use one of the following commands (adjust the path if necessary):

     ```bash
     copy ZeroTrustScoreWidget.vue C:\path\to\your\vue-project\src\components\
     ```

- Replace `/path/to/your/vue-project` or `C:\path\to\your\vue-project` with the actual path to your Vue project.

6. **Verify the File Copy**: Navigate to your Vue project's `src/components` directory and ensure the `ZeroTrustScoreWidget.vue` file is present.

## Usage

### 1. Import the Component
Open the Vue component file where you want to use the widget (for example, `App.vue` or any other component file in `src/components/`) and import `ZeroTrustScoreWidget`:

```javascript
import ZeroTrustScoreWidget from './components/ZeroTrustScoreWidget.vue';
```

### 2. Register the Component
In the same Vue component file (e.g., `App.vue`), register `ZeroTrustScoreWidget` in the `components` section:

```javascript
export default {
  components: {
    ZeroTrustScoreWidget
  }
};
```

### 3. Add the Component to Your Template
In the template section of the same component file (e.g., `App.vue`), use the component where you want it to appear:

```html
<template>
  <div>
    <ZeroTrustScoreWidget />
  </div>
</template>
```

## Customization

The widget uses progress bars to visually represent each metric based on its score, allowing for an easy-to-understand overview of the company's security status.

You can customize the data displayed in the widget by modifying the `data` property within the `ZeroTrustScoreWidget.vue` file. Here’s an example of the expected JSON structure:

```javascript
data() {
  return {
    data: {
      companyName: "FinTechSecure Ltd.",
      ZeroTrustScore: 58.5,
      metrics: {
        NetworkSecurity: { score: 80, description: "Measures the security of the network infrastructure." },
        DataProtection: { score: 70, description: "Assesses the strength of data protection." },
        // other metrics...
      },
      observableData: {
        averageShannonEntropyScore: 7.8,
        firewallDetected: true,
        DNSsecEnabled: true,
        tlsVersion: "1.2",
        certificateBitStrength: 2048,
        securityHeadersImplemented: ["X-XSS-Protection", "X-Frame-Options"],
        openPortsDetected: 12
      },
      riskCategory: "Moderate Risk"
    }
  };
}
```

### Customization Options
   - **companyName**: Name of the company being evaluated.
   - **ZeroTrustScore**: The overall Zero-Trust Score.
   - **metrics**: Object containing different metric categories like Network Security, Data Protection, etc., along with their scores and descriptions.
   - **observableData**: Contains additional observable information like `firewallDetected`, `DNSsecEnabled`, and `openPortsDetected`.
   - **riskCategory**: Describes the overall risk category (e.g., Low Risk, Moderate Risk).

Modify these values as needed to reflect the data you want to display in the widget.


## Running Your Application

To run your application, navigate to your Vue project directory and execute:

```bash
npm run serve
```

This command will start your Vue.js development server, allowing you to view the widget in action in your browser.

You can modify the values to customize the widget's content.

## Try It on Vuetify Playground

You can also test the **Zero-Trust Score Widget** directly on the Vuetify Playground.

1. Go to [Vuetify Playground](https://play.vuetifyjs.com/).
2. Copy the component code from `ZeroTrustScoreWidget.vue`.
3. Paste the code into the playground editor and run it.

This makes it easy to see the widget in action and make any adjustments before integrating it into your Vue project.


## Demo or Screenshot

You can refer to the screenshot for an example of how it looks in this path:  
 `part3\screenshot of the widget in action.png`

---

### License
This project is licensed under the MIT License.