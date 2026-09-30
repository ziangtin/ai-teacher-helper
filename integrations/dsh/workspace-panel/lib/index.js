// Host half of the workspace-panel bundle. The panel reads the current session
// workspace through the official client Remote (`ctx.remote.workspaceFiles`),
// so the host half carries no logic; it exists only to satisfy the loader row.
function apply() {}

export { apply };
