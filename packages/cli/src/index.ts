import os from 'os';
import path from 'path';
import Auto from '@ffee/auto-import';

export default function ffee() {
  const HOME_DIR = os.homedir();
  const ROOT_DIR_NAME = '.ffee';
  const ROOT_DIR = path.join(HOME_DIR, ROOT_DIR_NAME);

  console.log(ROOT_DIR);
  const argv = process.argv.slice(2);
  let command = '';

  if (!argv.length) {
    command = 'help';
  } else {
    command = argv.shift();
  }

  if (command === 'clear') {
    require('command/clear')();
  }

  console.log(argv, command);
  // TODO
  Auto.require('@ffee/cli-core', { root: ROOT_DIR, expire: 24 * 60 * 60 }).then((mod) => {
    mod;
  });
}

export module FFeeCLI {
  const HOME_DIR = os.homedir();
  const ROOT_DIR_NAME = process.env.ROOT_DIR || '.ffee';
  export const ROOT_DIR = path.join(HOME_DIR, ROOT_DIR_NAME);
}
