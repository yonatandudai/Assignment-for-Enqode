# Zero-Trust Score Widget

This repository contains the Zero-Trust Score Widget built with Vue.js and Vuetify. This widget displays a company's Zero-Trust Score along with detailed metrics, observable data, and risk category information.  
In this README, you’ll find step-by-step instructions on how to integrate and use the widget in your own Vue application.

- The Vue.js component code for the widget is located in the following path:  
```Assignment-for-Enqode/part3/zerotrust-score-widget/src/components/ZeroTrustScoreWidget.vue```


## Table of Contents

- [Installation](#installation)
- [Integration into a Vue Application](#integration-into-a-vue-application)
- [Running Your Application](#running-your-application)
- [Try It on Vuetify Playground](#try-it-on-vuetify-playground)
- [Screenshot of The Widget](#screenshot-of-the-widget)


## Installation

### Requirements
- [Node.js](https://nodejs.org/) installed on your machine.

### Setting Up Vue and Vuetify
If you haven’t set up your Vue application with Vuetify, you can do so with the following steps:

1. **Install Vue CLI**: Run the following command to install Vue CLI globally, if it's not installed already.
   
   ```bash
   npm install -g @vue/cli
   ```

2. **Create a New Vue Project**:
   
   ```bash
   vue create zerotrust-score-app
   ```


3. **Navigate to the Project Directory**:
   
   ```bash
   cd zerotrust-score-app
   ```

4. **Add Vuetify to Your Project**:
   
   Inside the project directory, add Vuetify with the following command:

   ```bash
   vue add vuetify
   ```
### Setting Up the Zero-Trust Score Widget

1. **Clone the Repository**:
   
   ```bash
   git clone https://github.com/yonatandudai/Assignment-for-Enqode.git
   ```

2. **Copy the Widget File**: After cloning the repository, locate the `ZeroTrustScoreWidget.vue` file and copy it into your Vue app’s `src/components` directory:

   - **Source Path in Cloned Directory**:
     ```bash
     Assignment-for-Enqode/part3/zerotrust-score-widget/src/components/ZeroTrustScoreWidget.vue
     ```

   - **Destination Path in your Vue application**:
     ```bash
     zerotrust-score-app/src/components/
     ```

   - Simply place the `ZeroTrustScoreWidget.vue` file in your Vue app’s `src/components` directory.  

## Integration into a Vue Application

You can see an example of how the `App.vue` file is structured in the **cloned project** (which contains only the `ZeroTrustScoreWidget` component). This example can be found at:  
```Assignment-for-Enqode/part3/zerotrust-score-widget/src/App.vue```  

Here’s how you can integrate the widget into your own Vue application:

### 1. Import the Component
In your own Vue application, open the file where you want to use the widget. Most commonly, this will be the main `App.vue` file located in your `src/` directory.

For example, in your own `App.vue` file (typically located at `zerotrust-score-app/src/App.vue`), add the following import statement at the top of the script section:

```javascript
import ZeroTrustScoreWidget from './components/ZeroTrustScoreWidget.vue';
```

### 2. Register the Component
In the same `App.vue` file  within your project, register `ZeroTrustScoreWidget` in the `components` section:

```javascript
export default {
  components: {
    ZeroTrustScoreWidget
  }
};
```

### 3. Add the Component to Your Template
In the template section of the same file, use the `ZeroTrustScoreWidget` component where you want it to appear:

```html
<template>
  <div>
    <ZeroTrustScoreWidget />
  </div>
</template>
```

**Note:** Make sure that the `App.vue` file you’re modifying is within your own Vue application directory, such as `zerotrust-score-app/src/App.vue`. Adjust file paths as necessary according to your project’s structure.

## Running Your Application

- To run your application, open your terminal or command prompt and navigate to your Vue project directory. You can do this by using the `cd` command and specifying the path to your project.

- For example, if your project directory is named `zerotrust-score-project`, you can navigate to it as follows:

   ```bash
  cd /path/to/your/projects/zerotrust-score-project
   ```

- Replace `/path/to/your/projects/` with the actual path where your Vue project is located. For example, if your project is in your Documents folder, you might use:

    ```bash
  cd C:/Users/YourUsername/Documents/zerotrust-score-project
    ```
- Replace `YourUsername` with your actual username.

- Once you’re in the project directory, start the Vue development server by running:

  ```bash
  npm run serve
  ```

- This will start the server, and you can then access your application in a web browser at the URL displayed in your terminal, typically `http://localhost:8080`.

## Try it on Vuetify Playground

You can also test the **Zero-Trust Score Widget** directly on the Vuetify Playground.

1. Go to [Vuetify Playground](https://play.vuetifyjs.com/).
2. Copy the component code from `ZeroTrustScoreWidget.vue`.
3. Paste the code into the playground editor and run it.

## Screenshot of The Widget

You can refer to the screenshot for an example of how it looks in this path:  
 `part3\screenshot-of-widget.png`

---
