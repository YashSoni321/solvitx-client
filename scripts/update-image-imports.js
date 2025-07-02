const fs = require("fs");
const path = require("path");

// Map of original image names to optimized versions
const imageMapping = {
  // Hero images
  "hero_image.jpg": "/images/optimized/hero_image.webp",
  "heroImg.jpg": "/images/optimized/heroImg.webp",
  "landingpagehero.png": "/images/optimized/landingpagehero.webp",

  // Service hero images
  "ASO.jpg": "/images/optimized/ASO.webp",
  "SEO.jpg": "/images/optimized/SEO.webp",
  "Api_Development.jpg": "/images/optimized/Api_Development.webp",
  "AppDevelopment.jpg": "/images/optimized/AppDevelopment.webp",
  "Software Development.jpg": "/images/optimized/Software Development.webp",
  "Video_Editing.jpg": "/images/optimized/Video_Editing.webp",
  "UIUX.jpg": "/images/optimized/UIUX.webp",
  "Digital_Marketing.jpg": "/images/optimized/Digital_Marketing.webp",
  "Content_Marketing.jpg": "/images/optimized/Content_Marketing.webp",
  "Web_Development.jpg": "/images/optimized/Web_Development.webp",

  // Mobile hero images
  "API.jpg": "/images/optimized/API.webp",
  "App.jpg": "/images/optimized/App.webp",
  "Content.jpg": "/images/optimized/Content.webp",
  "DigitalMM.jpg": "/images/optimized/DigitalMM.webp",
  "SDM.jpg": "/images/optimized/SDM.webp",
  "UIUX.jpg": "/images/optimized/UIUX.webp",
  "vedioEditing.jpg": "/images/optimized/vedioEditing.webp",
  "WebDev.jpg": "/images/optimized/WebDev.webp",

  // Other large images
  "dashboard.jpg": "/images/optimized/dashboard.webp",
  "banking.jpg": "/images/optimized/banking.webp",
  "healthcare.jpg": "/images/optimized/healthcare.webp",
  "education.jpg": "/images/optimized/education.webp",
  "ecommerce.jpg": "/images/optimized/ecommerce.webp",
  "stat.jpg": "/images/optimized/stat.webp",
  "stat1.jpg": "/images/optimized/stat1.webp",
  "user.jpg": "/images/optimized/user.webp",
};

// Function to update imports in a file
const updateFileImports = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    let hasChanges = false;

    // Update direct image imports
    Object.entries(imageMapping).forEach(([original, optimized]) => {
      const importRegex = new RegExp(
        `from\\s+["']([^"']*${original.replace(
          /[.*+?^${}()|[\]\\]/g,
          "\\$&"
        )})["']`,
        "g"
      );
      const srcRegex = new RegExp(
        `src=["']([^"']*${original.replace(
          /[.*+?^${}()|[\]\\]/g,
          "\\$&"
        )})["']`,
        "g"
      );
      const backgroundImageRegex = new RegExp(
        `backgroundImage=\\{[^}]*${original.replace(
          /[.*+?^${}()|[\]\\]/g,
          "\\$&"
        )}[^}]*\\}`,
        "g"
      );

      if (importRegex.test(content)) {
        content = content.replace(importRegex, `from "${optimized}"`);
        hasChanges = true;
        console.log(`  ✓ Updated import: ${original}   ${optimized}`);
      }

      if (srcRegex.test(content)) {
        content = content.replace(srcRegex, `src="${optimized}"`);
        hasChanges = true;
        console.log(`  ✓ Updated src: ${original}   ${optimized}`);
      }
    });

    // Update relative path patterns for hero images
    const heroImagePatterns = [
      {
        pattern: /from\s+["']\.\.\/public\/images\/heroimages\/([^"']+)["']/g,
        replacement: 'from "/images/optimized/$1"',
      },
      {
        pattern: /from\s+["']\.\.\/public\/images\/hero-mobile\/([^"']+)["']/g,
        replacement: 'from "/images/optimized/$1"',
      },
      {
        pattern: /from\s+["']\.\.\/public\/images\/([^"']+)["']/g,
        replacement: 'from "/images/optimized/$1"',
      },
    ];

    heroImagePatterns.forEach(({ pattern, replacement }) => {
      const matches = content.match(pattern);
      if (matches) {
        content = content.replace(pattern, (match, filename) => {
          const webpName = filename.replace(/\.(jpg|jpeg|png)$/i, ".webp");
          hasChanges = true;
          console.log(`  ✓ Updated hero image path: ${filename}   ${webpName}`);
          return replacement.replace("$1", webpName);
        });
      }
    });

    if (hasChanges) {
      fs.writeFileSync(filePath, content);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error.message);
    return false;
  }
};

// Function to process directory
const processDirectory = (dirPath) => {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  let updatedFiles = 0;

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      updatedFiles += processDirectory(fullPath);
    } else if (
      entry.isFile() &&
      (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts"))
    ) {
      console.log(`\nChecking: ${fullPath}`);
      if (updateFileImports(fullPath)) {
        updatedFiles++;
      }
    }
  }

  return updatedFiles;
};

// Main function
const main = () => {
  console.log("🚀 Updating image imports to use optimized versions...\n");

  const pagesDir = path.join(__dirname, "..", "pages");
  const componentsDir = path.join(__dirname, "..", "components");

  let totalUpdated = 0;

  if (fs.existsSync(pagesDir)) {
    console.log("📁 Processing pages directory...");
    totalUpdated += processDirectory(pagesDir);
  }

  if (fs.existsSync(componentsDir)) {
    console.log("\n📁 Processing components directory...");
    totalUpdated += processDirectory(componentsDir);
  }

  console.log("\n" + "=".repeat(50));
  console.log("📊 UPDATE SUMMARY");
  console.log("=".repeat(50));
  console.log(`📁 Files updated: ${totalUpdated}`);
  console.log("\n✅ Image import updates complete!");
  console.log("\n💡 Next steps:");
  console.log(
    "   1. Test your application to ensure all images load correctly"
  );
  console.log(
    "   2. Check browser DevTools to verify WebP images are being used"
  );
  console.log("   3. Monitor Core Web Vitals improvements");
};

if (require.main === module) {
  main();
}

module.exports = { updateFileImports, processDirectory };
