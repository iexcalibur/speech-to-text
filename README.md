# Speech-to-Text Application

This is a **Speech-to-Text Application** built using **Next.js** and the **OpenAI API**. The application allows users to convert spoken words into text in real-time providing an efficient solution for transcription.

---

## Features

- **Real-time Speech Recognition**: Convert live speech into text.


---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher recommended)
- **npm** or **yarn**
- An **OpenAI API key**

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/iexcalibur/speech-to-text.git
cd speech-to-text
```

### 2. Install Dependencies

```bash
npm install
# OR
yarn install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root of your project and add the following:

```
OPENAI_API_KEY=Your-openaiapi-key
```

> Replace `Your-openaiapi-key` with your actual OpenAI API key. You can obtain this key from the [OpenAI Dashboard](https://platform.openai.com/account/api-keys).

### 4. Start the Development Server

Run the following command to start the server:

```bash
npm run dev
# OR
yarn dev
```

Visit `http://localhost:3000` in your browser to view the application.

---

## Usage

### 1. Real-Time Transcription
1. Click the "Start Recording" button on the homepage.
2. Speak into your microphone.
3. Watch as your speech is converted to text in real-time.

---

## Scripts

- `npm run dev` or `yarn dev`: Start the development server.
- `npm run build` or `yarn build`: Build the application for production.
- `npm start` or `yarn start`: Run the production build.

---

## Deployment

To deploy the application, follow the instructions for your chosen platform (e.g., Vercel, Netlify).

1. Set up the project on your deployment platform.
2. Add the `OPENAI_API_KEY` as an environment variable.
3. Deploy the project.

---


## Acknowledgments

- [Next.js](https://nextjs.org/)
- [OpenAI](https://openai.com/)
- [Tailwind CSS](https://tailwindcss.com/) *(if used for styling)*

---

## Questions?

If you have any questions or issues, feel free to contact me or open an issue in the repository. 

Happy Coding! 🚀
