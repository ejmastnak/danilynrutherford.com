import fs from "fs";
import path from "path";

const adminIndexPath = path.join(
  process.cwd(),
  "dist",
  "admin",
  "index.html"
);

if (!fs.existsSync(adminIndexPath)) {
  console.error(
    "[patch-tina-admin] ERROR: index.html file not found."
  );
  process.exit(1);
}

let html = fs.readFileSync(adminIndexPath, "utf8");

// Avoid double-injecting if build runs twice
if (html.includes("TINA_ADMIN_LLAMA_PATCH")) {
  console.log("[patch-tina-admin] Patch already applied.");
  process.exit(0);
}

const injection = `
<!-- TINA_ADMIN_LLAMA_PATCH -->
<style>
  img[alt="TinaCMS Security Illustration"] {
    display: none !important;
  }
</style>
`;

html = html.replace("</head>", `${injection}\n</head>`);

fs.writeFileSync(adminIndexPath, html, "utf8");

console.log("[patch-tina-admin] Llama image hidden.");
