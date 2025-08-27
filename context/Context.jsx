"use client";
import React, { useEffect } from "react";
import { useContext, useState } from "react";
const dataContext = React.createContext();
export const useContextElement = () => {
  return useContext(dataContext);
};

export default function Context({ children }) {
  const [isChecked, setIsChecked] = useState(false);
  const toggleDark = (value) => {
    if (value) {
      document.documentElement.classList.add("uc-dark");
    } else {
      document.documentElement.classList.remove("uc-dark");
    }
  };
  useEffect(() => {
    const getBooleanValue = (key) => {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : false; // Default to false if the value is not found
    };
    // Retrieve the saved boolean value when the component mounts
    const savedValue = getBooleanValue("isDark");
    toggleDark(savedValue);
    setIsChecked(savedValue);
  }, []);

  const handleToggle = () => {
    const saveBooleanValue = (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
    };
    const newValue = !isChecked;
    setIsChecked(newValue);
    saveBooleanValue("isDark", newValue);
    toggleDark(newValue);
  };

  const contextElement = {
    isChecked,
    handleToggle,
  };
  return (
    <dataContext.Provider value={contextElement}>
      {children}
    </dataContext.Provider>
  );
}
