// src/utils/avatar.js

/**
 * Ambil maksimal 2 inisial dari nama lengkap
 * "Muhammad Hilal Ramadhan" → "MH"
 * "Budi"                   → "B"
 * "Siti Nur Aisyah"        → "SN"
 */
export const getInitials = (name = "") => {
  return name
    .trim()
    .split(/\s+/) // pisah per kata
    .filter(Boolean)
    .slice(0, 2) // ambil maksimal 2 kata pertama
    .map((word) => word[0].toUpperCase())
    .join("");
};

/**
 * Generate warna background konsisten berdasarkan nama
 * Nama yang sama selalu dapat warna yang sama
 */
export const getAvatarColor = (name = "") => {
  const colors = [
    "#1E3A5F", // navy
    "#043277", // biru utama app
    "#0E7490", // teal
    "#065F46", // hijau tua
    "#7C3AED", // ungu
    "#B45309", // coklat amber
    "#BE123C", // merah tua
    "#0F766E", // teal gelap
    "#4338CA", // indigo
    "#0369A1", // biru tua
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
};
