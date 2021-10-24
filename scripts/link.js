const fs = require('fs-extra');
const path = require('path');
const os = require('os');


(async () => {
  const home = os.homedir();

  const [TARGET] = process.argv.slice(2);
  const ROOT_DIR = process.cwd();
  const TARGET_DIR = path.join(ROOT_DIR, TARGET);
  fs.readdirSync(TARGET_DIR).forEach((dir) => {
    const srcPath = path.join(TARGET_DIR, dir);
    const pkg = fs.readJSONSync(path.join(srcPath, 'package.json'));
    const distPath = dir === 'cli-core'
      ? path.join(home, '.ffee/node_modules', pkg.name)
      : path.join(__dirname, '../node_modules', pkg.name);

    console.log(pkg.name, 'ln --->', distPath)
    fs.ensureSymlinkSync(srcPath, distPath);
  });
})();
