export const saveToLocalStorage = (key, data)=>{
try {
    localStorage.setItem(key, JSON.stringify(data));
} catch (error) {
    console.log("Error saving to localStorage:", error);
}
}

export const loadFromLocalStorage =(key)=>{
    try {
      const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;  
    } catch (error) {
        console.log("Error loading from localStorage:", error);
        return null;
    }
}

export const removeFromLocalStorage = (key)=>{
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.log("Error removing from localStorage:", error);
    }
}

export const clearLocalStorage = ()=>{
    try {
        localStorage.clear();
    } catch (error) {
        console.log("Error clearing localStorage:", error);
    }
}