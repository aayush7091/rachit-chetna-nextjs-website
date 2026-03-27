const fs = require('fs');
const path = require('path');

// Move components
const wrongComponentsDir = path.join(__dirname, '..', 'components');
const correctComponentsDir = path.join(__dirname, 'src', 'components');

if (fs.existsSync(wrongComponentsDir)) {
  if (!fs.existsSync(correctComponentsDir)) {
    fs.mkdirSync(correctComponentsDir, { recursive: true });
  }
  const files = fs.readdirSync(wrongComponentsDir);
  for (const file of files) {
    fs.renameSync(path.join(wrongComponentsDir, file), path.join(correctComponentsDir, file));
  }
}

// Move app folders
const wrongAppDir = path.join(__dirname, '..', 'app');
const correctAppDir = path.join(__dirname, 'src', 'app');

if (fs.existsSync(wrongAppDir)) {
  const folders = fs.readdirSync(wrongAppDir);
  for (const folder of folders) {
    const wrongPath = path.join(wrongAppDir, folder);
    const correctPath = path.join(correctAppDir, folder);
    if (!fs.existsSync(correctPath)) {
      fs.mkdirSync(correctPath, { recursive: true });
    }
    const files = fs.readdirSync(wrongPath);
    for (const file of files) {
      fs.renameSync(path.join(wrongPath, file), path.join(correctPath, file));
    }
  }
}

// Fix APIs to use @/datas/data
const apiFolder = path.join(correctAppDir, 'api');
const apis = ['breaking-news', 'states', 'categories', 'videos', 'shorts', 'latest-news', 'cat-news', 'state-news-items'];

apis.forEach(api => {
  const routePath = path.join(apiFolder, api, 'route.js');
  if (fs.existsSync(routePath)) {
    let content = fs.readFileSync(routePath, 'utf8');
    content = content.replace(/from '..\/..\/..\/..\/datas\/data'/g, "from '@/datas/data'");
    fs.writeFileSync(routePath, content);
  }
});

console.log("Fixes applied.");
