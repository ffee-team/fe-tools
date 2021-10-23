const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

(async () => {
  const [TARGET] = process.argv.slice(2);
  const ROOT_DIR = process.cwd();
  const TARGET_DIR = path.join(ROOT_DIR, TARGET);

  const dirs = fs.readdirSync(TARGET_DIR)
    .map((dir) => path.join(TARGET_DIR, dir));
  const execCode = (dir) => {
    const CMD = `cd ${dir}; npm publish --access public`;
    const pkg = fs.readJSONSync(path.join(dir, 'package.json'));
    let status = true;
    try {
      execSync(CMD, { stdio: 'ignore' });
    } catch (error) {
      status = false;
    }

    if (status) {
      console.log(pkg.name, pkg.version, 'publish success!');
    } else {
      console.log(pkg.name, pkg.version, 'publish fail!');
    }
  };

  dirs.forEach(execCode);
})();
