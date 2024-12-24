Multi-Step Form with Real-Time Collaboration (Frontend Only)
This project implements a multi-step form with real-time collaboration using Next.js, Tailwind CSS, Zustand/Redux (or Context API), and ShadCN UI. The form allows users to fill in personal information, address details, preferences, and review their inputs before submitting.

Tech Stack
Next.js – React-based framework for server-rendered apps.
Tailwind CSS – Utility-first CSS framework for custom styles.
Zustand/Redux (or Context API) – State management library.
ShadCN UI – Pre-built UI components for React.
Framer Motion – Animations for smoother UI transitions.
Features
Dark Mode Toggle: Switch between light and dark themes.
Multi-Step Form: Allows users to progress through multiple steps:
Step 1: Personal Information
Step 2: Address Details
Step 3: Preferences
Step 4: Review & Submit
State Management: Utilizes Zustand/Redux (or Context API) for maintaining form state across steps.
Form Validation: Client-side validation to ensure required fields are filled and correct format is followed (e.g., email validation).
Step-by-Step Implementation
Step 1: Setting Up the Project
Initialize the Project:

Create a new Next.js application.
Set up Tailwind CSS with the dark mode class strategy.
Install ShadCN UI for UI components.
Basic Layout:

Set up a layout component with a header, main content area, and footer.
Add a dark mode toggle to switch between themes.
Install Dependencies:

Install libraries like Zustand (or Redux), ShadCN UI, and Framer Motion.
bash
Copy code
# Initialize Next.js project
npx create-next-app@latest multi-step-form

# Install Tailwind CSS
npm install tailwindcss postcss autoprefixer
npx tailwindcss init

# Install ShadCN UI
npm install @shadcn/ui

# Install Zustand (or Redux)
npm install zustand

# Install Framer Motion
npm install framer-motion
Step 2: Multi-Step Form Layout
Form Navigation:

Use ShadCN UI’s Tabs component (or a custom stepper) for step navigation.
Create Static Form Steps:

Step 1: Personal Information (text inputs).
Step 2: Address Details (address fields).
Step 3: Preferences (checkboxes or toggle inputs).
Step 4: Review & Submit (summary of inputs).
Visibility of Navigation:

Ensure the current step is visually highlighted using ShadCN UI components.
Step 3: Form State Management
Global State:

Set up Zustand/Redux (or Context API) to manage form data.
State Integration:

Ensure form state is updated dynamically as users enter data.
Persist state across different form steps.
Form Validation:

Implement client-side validation for inputs (e.g., email format, required fields).
Show real-time validation errors.
