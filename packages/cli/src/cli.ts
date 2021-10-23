import os from 'os';
import path from 'path';
import Auto from '@ffee/auto-import';

export default function ffee() {
  const HOME_DIR = os.homedir();
  const ROOT_DIR_NAME = '.ffee';
  const ROOT_DIR = path.join(HOME_DIR, ROOT_DIR_NAME);

  console.log(ROOT_DIR);

  // TODO
  Auto.require('@ffee/cli-core', { root: ROOT_DIR }).then((mod) => {
    console.log(mod);
  });

  console.log('ffee');
}
