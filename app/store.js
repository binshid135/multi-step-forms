import {create} from "zustand";

const useStore = create((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),

  personalInfo: {
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
  },
  address: {
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
  },
  preferences: {
    newsletter: false,
    emailNotifications: false,
    smsNotifications: false,
    theme: 'light',
  },

  step: 1,

  setPersonalInfo: (firstName, lastName, dob, email) => set((state) => ({
    personalInfo: { ...state.personalInfo, firstName, lastName, dob, email },
  })),
  setAddress: (streetAddress, city, state, postalCode) => set((state) => ({
    address: { ...state.address, streetAddress, city, state, postalCode },
  })),
  setPreferences: (newsletter, emailNotifications, smsNotifications, theme) => set((state) => ({
    preferences: { ...state.preferences, newsletter, emailNotifications, smsNotifications, theme },
  })),
  setStep: (step) => set({ step }),
}));

export default useStore;
