const hexToRGBA = (hex, alpha = 1) => {
    if (typeof hex !== "string" || hex.length < 7 || hex[0] !== "#") {
      throw new Error("Invalid input color");
    }
  
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
  
    return `rgba(${r},${g},${b},${alpha})`;
  };

export default hexToRGBA;