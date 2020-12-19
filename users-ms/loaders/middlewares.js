import fs from "fs";
import path from "path";

const dir = `${path.resolve()}/middlewares/`;
const ext = ".js";

export default fs
  .readdirSync(dir)
  .filter((file) => path.extname(file) === ext)
  .map(async (file) => {
    const middleware = (await import(`${dir}/${file}`)).default;

    return {
      middleware,
    };
  });
