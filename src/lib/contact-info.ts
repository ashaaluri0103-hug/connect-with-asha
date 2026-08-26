// Contact information for Asha Aluri
// All contact details are centralized here so they can be updated in one place.

export const CONTACT_INFO = {
  name: "Asha Aluri",
  role: "Python Developer",
  email: "ashaaluri0103@gmail.com",
  linkedIn: {
    url: "https://www.linkedin.com/in/asha-aluri-30147742b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    displayName: "Asha Aluri",
  },
  github: {
    url: "https://github.com/ashaaluri0103-hug",
    displayName: "GitHub Profile",
  },
  // Resume download:
  // 1. Upload the PDF to the project as `public/Asha_Aluri_Resume.pdf`
  // 2. Flip `available` to true — the Download Resume button then appears.
  resume: {
    available: false,
    url: "/Asha_Aluri_Resume.pdf",
    fileName: "Asha_Aluri_Resume.pdf",
  },
} as const;
