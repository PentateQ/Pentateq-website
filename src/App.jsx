import React, { useState } from "react";
import "./App.css"; // Assuming CSS is defined for styling

function TechStack() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Backend", "Frontend", "Databases"];

  const icons = {
    All: [
      {
        name: "Python",
        url: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
      },
      {
        name: "Node.js",
        url: "https://cdn-icons-png.flaticon.com/128/15484/15484303.png",
      },
      {
        name: "PHP",
        url: "https://cdn-icons-png.flaticon.com/128/15474/15474204.png",
      },
      {
        name: "Java",
        url: "https://cdn-icons-png.flaticon.com/128/5968/5968282.png",
      },
      {
        name: "Swift",
        url: "https://cdn-icons-png.flaticon.com/128/5968/5968371.png",
      },
      {
        name: "React",
        url: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
      },
      {
        name: "HTML",
        url: "https://cdn-icons-png.flaticon.com/128/174/174854.png",
      },
      {
        name: "CSS",
        url: "https://cdn-icons-png.flaticon.com/128/732/732190.png",
      },
      {
        name: "Next.js",
        url: "https://raw.githubusercontent.com/codesandbox/sandbox-templates/main/nextjs/.codesandbox/icon.png",
      },
      {
        name: "Angular",
        url: "https://raw.githubusercontent.com/codesandbox/sandbox-templates/main/angular/.codesandbox/icon.png",
      },
      {
        name: "Vite",
        url: "https://raw.githubusercontent.com/codesandbox/sandbox-templates/main/vite-ts/.codesandbox/icon.png",
      },
      {
        name: "Expo",
        url: "https://raw.githubusercontent.com/codesandbox/sandbox-templates/main/react-native-expo/.codesandbox/icon.png",
      },
      {
        name: "MySQL",
        url: "https://cdn-icons-png.flaticon.com/128/919/919836.png",
      },
      {
        name: "MongoDB",
        url: "https://cdn.icon-icons.com/icons2/2415/PNG/96/mongodb_plain_wordmark_logo_icon_146423.png",
      },
      {
        name: "PostgreSQL",
        url: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
      },
      {
        name: "Cloudflare",
        url: "https://raw.githubusercontent.com/codesandbox/sandbox-templates/main/cloudflare-worker/.codesandbox/icon.png",
      },
      {
        name: "Rails",
        url: "https://raw.githubusercontent.com/codesandbox/sandbox-templates/main/rails/.codesandbox/icon.png",
      },
    ],
    Backend: [
      {
        name: "Python",
        url: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
      },
      {
        name: "Node.js",
        url: "https://cdn-icons-png.flaticon.com/128/15484/15484303.png",
      },
      {
        name: "PHP",
        url: "https://cdn-icons-png.flaticon.com/128/15474/15474204.png",
      },
      {
        name: "Java",
        url: "https://cdn-icons-png.flaticon.com/128/5968/5968282.png",
      },
      {
        name: "Swift",
        url: "https://cdn-icons-png.flaticon.com/128/5968/5968371.png",
      },
      {
        name: "Cloudflare",
        url: "https://raw.githubusercontent.com/codesandbox/sandbox-templates/main/cloudflare-worker/.codesandbox/icon.png",
      },
      {
        name: "Rails",
        url: "https://raw.githubusercontent.com/codesandbox/sandbox-templates/main/rails/.codesandbox/icon.png",
      },
    ],
    Frontend: [
      {
        name: "React",
        url: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
      },
      {
        name: "HTML",
        url: "https://cdn-icons-png.flaticon.com/128/174/174854.png",
      },
      {
        name: "CSS",
        url: "https://cdn-icons-png.flaticon.com/128/732/732190.png",
      },
      {
        name: "Next.js",
        url: "https://raw.githubusercontent.com/codesandbox/sandbox-templates/main/nextjs/.codesandbox/icon.png",
      },
      {
        name: "Angular",
        url: "https://raw.githubusercontent.com/codesandbox/sandbox-templates/main/angular/.codesandbox/icon.png",
      },
      {
        name: "Vite",
        url: "https://raw.githubusercontent.com/codesandbox/sandbox-templates/main/vite-ts/.codesandbox/icon.png",
      },
      {
        name: "Expo",
        url: "https://raw.githubusercontent.com/codesandbox/sandbox-templates/main/react-native-expo/.codesandbox/icon.png",
      },
    ],
    Databases: [
      {
        name: "MySQL",
        url: "https://cdn-icons-png.flaticon.com/128/919/919836.png",
      },
      {
        name: "MongoDB",
        url: "https://cdn.icon-icons.com/icons2/2415/PNG/96/mongodb_plain_wordmark_logo_icon_146423.png",
      },
      {
        name: "PostgreSQL",
        url: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
      },
    ],
  };

  return (
    <div className="tech-stack">
      <br></br>
      <h1></h1>
      
      <div className="categories">
        {categories.map((category) => (
          <p
            key={category}
            className={`category ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </p>
        ))}
      </div>

      <div className="icon-container">
        <div className="icons">
          {icons[activeCategory].map((icon, index) => (
            <div key={index}>
              <img src={icon.url} alt={`${icon.name} icon`} />
              <p>{icon.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
