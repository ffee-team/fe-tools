const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
const { execSync } = require('child_process');

(async () => {
  const [TARGET, ENV] = process.argv.slice(2);
  const ROOT_DIR = process.cwd();
  const TARGET_DIR = path.join(ROOT_DIR, TARGET);

  const dirs = fs.readdirSync(TARGET_DIR).map(dir => path.join(TARGET_DIR, dir));
  const execCode = (dir, log) => {
    const CMD = `cd ${dir}; tsc`;
    execSync(CMD, { stdio: 'inherit' });
    log && log(CMD);
  };

  dirs.forEach(d => execCode(d, console.log));

  if (ENV === 'dev') {
    console.log('\nWatching for file changes...');
    const watchDirs = dirs.map(d => path.join(d, 'src'));
    const watcher = chokidar.watch(watchDirs, {
      ignored: /(^|[\/\\])\../, // ignore dotfiles
      persistent: true
    });
    watcher
      .on('change', filePath => {
        const [changedPackage] = filePath.split(path.sep + 'src' + path.sep);
        console.log(filePath, 'changed!');
        execCode(changedPackage);
      });
  }
})();