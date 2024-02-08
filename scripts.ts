import { PathLike, rmSync, rmdirSync } from "fs";

function rimraf(path: PathLike) {
  (rmSync || rmdirSync)(path, { recursive: true, force: true });
}

switch (process.argv[2]) {
  case "rmrf":
    rimraf(process.argv[3]);
    break;
  default:
    console.error("no valid script command given");
    break;
}
