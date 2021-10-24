import os from 'os';
import fs from 'fs-extra';
import path from 'path';

export module FfeeHome {
  const ENV = process.env;
  const HOME = os.homedir();
  const ROOT_NAME = ENV.ROOT_NAME || '.ffee';
  const ROOT_PATH = ENV.ROOT_PATH || path.join(HOME, ROOT_NAME);

  export const getRootPath = () => ROOT_PATH;

  export const initRootPath = () => {
    if (!fs.existsSync(ROOT_PATH)) {
      fs.mkdirSync(ROOT_PATH);
    }
  };

  export const clearRoot = () => {
    try {
      fs.removeSync(ROOT_PATH);
    } catch (error) {
      console.log(error);
    }
  };
}
