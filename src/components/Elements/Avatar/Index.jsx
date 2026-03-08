// src/components/Elements/Avatar/Index.jsx
import { getInitials, getAvatarColor } from "../../../utils/avatar";

/**
 * AvatarUser
 * - Jika user punya foto → tampilkan foto
 * - Jika tidak → tampilkan inisial nama dengan warna konsisten
 *
 * Props:
 * - name    : string  → nama user (wajib)
 * - foto    : string  → URL foto dari storage Laravel (opsional)
 * - size    : number  → ukuran dalam px, default 40
 * - className: string → tambahan class Tailwind (opsional)
 */
const AvatarUser = ({ name = "", foto = null, size = 40, className = "" }) => {
  const initials = getInitials(name);
  const bgColor = getAvatarColor(name);
  const fontSize = Math.round(size * 0.38);

  const baseStyle = {
    width: size,
    height: size,
    fontSize,
    borderRadius: "50%",
    flexShrink: 0,
  };

  if (foto) {
    return (
      <img
        src={`${import.meta.env.VITE_API_URL}/storage/${foto}`}
        alt={name}
        style={baseStyle}
        className={`object-cover ${className}`}
        onError={(e) => {
          // Fallback ke inisial jika foto gagal dimuat
          e.target.style.display = "none";
          e.target.nextSibling.style.display = "flex";
        }}
      />
    );
  }

  return (
    <div
      style={{ ...baseStyle, backgroundColor: bgColor }}
      className={`flex items-center justify-center text-white font-semibold select-none ${className}`}
      title={name}
    >
      {initials}
    </div>
  );
};

export default AvatarUser;
