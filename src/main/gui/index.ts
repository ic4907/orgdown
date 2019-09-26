import { createMainOrgdownWindow } from "./window";

export function startup() {
    const window = createMainOrgdownWindow({});
    window.show()
}