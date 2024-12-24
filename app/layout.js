"use client";

import "./globals.css";
import { Switch } from "@/components/ui/switch";
import useStore from "./store";

export default function RootLayout({ children }) {

  const darkMode = useStore((state) => state.darkMode);
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);

  return (
    <html lang="en" className={darkMode ? "dark" : ""}>
      <body>
        <div className="flex flex-col min-h-screen">
          <header className="flex justify-between p-4">
            <div>
              <h1 className="text-2xl dark:text-white">Multi-Step-Form</h1>
            </div>
            <div className="flex items-center mr-5">
              <label className="mr-2">Mode</label>
              <Switch id="dark-mode-toggle" onClick={toggleDarkMode} />
            </div>
          </header>
          <main className="flex-grow flex justify-center p-6">{children}</main>
          <footer className="p-4 text-center dark:text-white">Footer Content</footer>
        </div>
      </body>
    </html>
  );
}
