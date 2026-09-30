window.__ModuleLoader__.load({
	id: "workspace-panel",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		let react = require("react");
		let jsxrt = require("react/jsx-runtime");
		//#region css
		const css = [
			".wsp-root{height:100%;min-height:0;display:flex;flex-direction:column;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);font-size:14px;position:relative;box-sizing:border-box}",
			".wsp-root,.wsp-root *{box-sizing:border-box}",
			".wsp-root button{font:inherit}",
			".wsp-header{display:flex;align-items:center;gap:10px;padding:12px 16px;border-bottom:1px solid var(--dsw-alias-border-l1);flex-wrap:wrap}",
			".wsp-title{font-size:15px;font-weight:600;white-space:nowrap}",
			".wsp-title-wrap{min-width:0;display:flex;flex-direction:column;gap:2px}",
			".wsp-count{font-size:12px;color:var(--dsw-alias-label-secondary)}",
			".wsp-spacer{flex:1}",
			".wsp-btn{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--dsw-alias-border-l3);background:transparent;color:var(--dsw-alias-label-primary);border-radius:8px;padding:5px 12px;cursor:pointer;transition:background .15s ease;white-space:nowrap}",
			".wsp-btn:hover{background:var(--dsw-alias-interactive-bg-hover)}",
			".wsp-btn:disabled{opacity:.5;cursor:default}",
			".wsp-scope{padding:8px 16px 0;font-size:12px;color:var(--dsw-alias-label-secondary);word-break:break-all}",
			".wsp-scope b{font-weight:600;word-break:break-all}",
			".wsp-body{flex:1;min-height:0;overflow:auto;padding:12px 16px 20px;display:flex;flex-direction:column;gap:12px}",
			".wsp-card{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-1);border-radius:10px;padding:12px 14px}",
			".wsp-card-title{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:600;margin-bottom:8px;flex-wrap:wrap}",
			".wsp-badge{display:inline-flex;align-items:center;border-radius:999px;padding:1px 10px;font-size:12px;font-weight:400;border:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-secondary)}",
			".wsp-badge-ok{color:var(--dsw-alias-state-success-primary,#2F7D4A);border-color:currentColor}",
			".wsp-badge-warn{color:var(--dsw-alias-state-warning-primary,#B45309);border-color:currentColor}",
			".wsp-kv{display:flex;gap:8px;padding:3px 0;font-size:13px;line-height:1.55;align-items:baseline}",
			".wsp-kv-key{color:var(--dsw-alias-label-secondary);white-space:nowrap;flex:none}",
			".wsp-kv-val{word-break:break-all}",
			".wsp-kv-pending{background:rgba(217,119,6,.12);border-radius:6px;padding:3px 6px;margin:1px -6px}",
			".wsp-pending-item{padding:6px 10px;border-left:3px solid #D97706;background:rgba(217,119,6,.08);border-radius:0 8px 8px 0;margin:4px 0;font-size:13px;line-height:1.55}",
			".wsp-pending-src{font-size:11px;color:var(--dsw-alias-label-secondary);margin-bottom:2px}",
			".wsp-tree{display:flex;flex-direction:column;gap:2px;font-size:13px}",
			".wsp-dir{display:flex;align-items:center;gap:8px;padding:5px 6px;border-radius:8px;min-width:0}",
			".wsp-dir:hover{background:var(--dsw-alias-interactive-bg-hover)}",
			".wsp-dir-icon{color:var(--dsw-alias-label-secondary);flex:none}",
			".wsp-dir-name{font-weight:600;word-break:break-all}",
			".wsp-dir-count{font-size:11px;color:var(--dsw-alias-label-secondary);margin-left:auto;white-space:nowrap}",
			".wsp-sub{margin-left:14px;display:flex;flex-direction:column;gap:2px;border-left:1px dashed var(--dsw-alias-border-l2);padding-left:8px;margin-top:2px}",
			".wsp-file{display:flex;align-items:center;gap:8px;padding:4px 6px;border-radius:8px;border:none;background:transparent;color:inherit;text-align:left;width:100%;cursor:pointer;min-width:0}",
			".wsp-file:hover{background:var(--dsw-alias-interactive-bg-hover)}",
			".wsp-file-name{word-break:break-all}",
			".wsp-empty{padding:24px 12px;text-align:center;color:var(--dsw-alias-label-secondary);font-size:13px;line-height:1.8}",
			".wsp-error{border:1px solid var(--dsw-alias-state-error-primary,#C2410C);background:rgba(194,65,12,.08);color:var(--dsw-alias-state-error-primary,#C2410C);border-radius:10px;padding:10px 12px;font-size:13px;word-break:break-all}",
			".wsp-note{font-size:12px;color:var(--dsw-alias-label-secondary);line-height:1.6}",
			".wsp-md{font-size:13px;line-height:1.65;word-break:break-word}",
			".wsp-md h1,.wsp-md h2,.wsp-md h3{margin:10px 0 6px;line-height:1.4}",
			".wsp-md h1{font-size:16px}.wsp-md h2{font-size:15px}.wsp-md h3{font-size:14px}",
			".wsp-md p{margin:6px 0}",
			".wsp-md ul{margin:4px 0;padding-left:18px}",
			".wsp-md li{margin:2px 0}",
			".wsp-md code{background:var(--dsw-alias-bg-layer-2,var(--dsw-alias-bg-layer-1));border-radius:4px;padding:1px 5px;font-size:12px}",
			".wsp-md table{border-collapse:collapse;margin:8px 0;width:100%;display:block;overflow-x:auto}",
			".wsp-md th,.wsp-md td{border:1px solid var(--dsw-alias-border-l2);padding:4px 8px;font-size:12px;text-align:left;vertical-align:top}",
			".wsp-md th{background:var(--dsw-alias-bg-layer-2,var(--dsw-alias-bg-layer-1))}",
			".wsp-md hr{border:none;border-top:1px solid var(--dsw-alias-border-l2);margin:10px 0}",
			".wsp-pre{font-size:12px;line-height:1.6;white-space:pre-wrap;word-break:break-word;font-family:Consolas,Menlo,monospace;margin:0}",
			".wsp-foot{padding:6px 16px 10px;border-top:1px solid var(--dsw-alias-border-l1);font-size:12px;color:var(--dsw-alias-label-secondary)}",
			".wsp-spin{display:inline-block;width:12px;height:12px;border:2px solid var(--dsw-alias-border-l2);border-top-color:var(--dsw-alias-label-secondary);border-radius:50%;animation:wsp-spin 1s linear infinite;vertical-align:-2px}",
			"@keyframes wsp-spin{to{transform:rotate(360deg)}}"
		].join("\n");
		const tagId = "workspace-panel/panel.css";
		if (typeof document !== "undefined" && document.querySelector('style[data-plugin-css="' + tagId + '"]') === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "workspace-panel";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		//#endregion
		//#region element helper
		/**
		 * Plain-JS hyperscript: type, props (key extracted), then children.
		 * Arrays flatten; null/false children are dropped — mirrors jsx runtime.
		 */
		function el(type, props) {
			let key;
			const config = {};
			if (props) {
				for (const name of Object.keys(props)) {
					if (name === "key") key = props[name];
					else config[name] = props[name];
				}
			}
			const children = [];
			for (let i = 2; i < arguments.length; i++) {
				const child = arguments[i];
				if (Array.isArray(child)) children.push(...child);
				else if (child !== null && child !== false && child !== undefined) children.push(child);
			}
			if (children.length === 1) config.children = children[0];
			else if (children.length > 1) config.children = children;
			return jsxrt.jsx(type, config, key);
		}
		//#endregion
		//#region clipboard
		function copyText(text) {
			if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
				return navigator.clipboard.writeText(text).catch(() => copyFallback(text));
			}
			copyFallback(text);
			return Promise.resolve();
		}
		function copyFallback(text) {
			const area = document.createElement("textarea");
			area.value = text;
			area.style.position = "fixed";
			area.style.opacity = "0";
			document.body.appendChild(area);
			area.select();
			try { document.execCommand("copy"); } finally { document.body.removeChild(area); }
		}
		function CopyButton(props) {
			const [done, setDone] = react.useState(false);
			return el("button", {
				className: props.className || "wsp-btn",
				type: "button",
				onClick: () => {
					copyText(props.text).then(() => {
						setDone(true);
						setTimeout(() => setDone(false), 1500);
					});
				}
			}, done ? "已复制 ✓" : props.label);
		}
		//#endregion
		//#region marked-block parser
		const KNOWN_KINDS = ["profile", "persona", "rules"];
		const BLOCK_BODY_RE = "<!--\\s*teacher-init:([a-zA-Z][a-zA-Z0-9-]*):begin\\s*-->([\\s\\S]*?)<!--\\s*teacher-init:\\1:end\\s*-->";
		const BLOCK_BEGIN_RE = "<!--\\s*teacher-init:([a-zA-Z][a-zA-Z0-9-]*):begin\\s*-->";
		function splitKV(text) {
			const full = text.indexOf("：");
			if (full > 0) return { key: text.slice(0, full).trim(), value: text.slice(full + 1).trim() };
			const half = text.indexOf(":");
			if (half > 0) return { key: text.slice(0, half).trim(), value: text.slice(half + 1).trim() };
			return null;
		}
		function parseBlockBody(body) {
			const fields = [];
			const loose = [];
			for (const rawLine of String(body).split(/\r?\n/)) {
				const line = rawLine.trim();
				if (line === "" || line.indexOf("<!--") === 0) continue;
				const listMatch = /^[-*·]\s+(.*)$/.exec(line);
				if (listMatch) {
					const kv = splitKV(listMatch[1]);
					if (kv && kv.key) fields.push({ key: kv.key, value: kv.value, pending: kv.value.indexOf("待定") >= 0 });
					else loose.push(line);
				} else {
					loose.push(line);
				}
			}
			return { fields, loose };
		}
		/**
		 * 解析 AGENTS.md 全文 → { blocks, anomalies }。
		 * 宽松容错：块缺失/重复/未闭合/未知类型都不抛错，只产出 anomaly 供面板提示。
		 */
		function parseAgentsMd(text) {
			const source = String(text || "");
			const blocks = {};
			const anomalies = [];
			const seen = new Set();
			const matchedKinds = [];
			const bodyRe = new RegExp(BLOCK_BODY_RE, "g");
			let match;
			while ((match = bodyRe.exec(source)) !== null) {
				const kind = match[1];
				matchedKinds.push(kind);
				if (blocks[kind]) {
					if (!seen.has("duplicate:" + kind)) {
						seen.add("duplicate:" + kind);
						anomalies.push({ kind, type: "duplicate", message: "标记块 " + kind + " 出现多处，面板只显示第一处。" });
					}
					continue;
				}
				const parsed = parseBlockBody(match[2]);
				blocks[kind] = { kind, fields: parsed.fields, loose: parsed.loose };
			}
			const beginRe = new RegExp(BLOCK_BEGIN_RE, "g");
			let beginMatch;
			while ((beginMatch = beginRe.exec(source)) !== null) {
				if (matchedKinds.indexOf(beginMatch[1]) < 0 && !seen.has("unclosed:" + beginMatch[1])) {
					seen.add("unclosed:" + beginMatch[1]);
					anomalies.push({ kind: beginMatch[1], type: "unclosed", message: "标记块 " + beginMatch[1] + " 只有 begin 没有 end（未闭合），面板无法解析它。" });
				}
			}
			for (const kind of Object.keys(blocks)) {
				if (KNOWN_KINDS.indexOf(kind) < 0) {
					anomalies.push({ kind, type: "unknown", message: "遇到未知标记块 " + kind + "，面板会照常显示它的字段。" });
				}
			}
			return { blocks, anomalies };
		}
		//#endregion
		//#region tiny markdown renderer
		function inlineMd(text) {
			const parts = String(text || "").split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
			return parts.filter((part) => part !== "").map((part, index) => {
				if (part.length > 2 && part.charAt(0) === "`" && part.charAt(part.length - 1) === "`") {
					return el("code", { key: String(index) }, part.slice(1, -1));
				}
				if (part.length > 4 && part.slice(0, 2) === "**" && part.slice(-2) === "**") {
					return el("b", { key: String(index) }, part.slice(2, -2));
				}
				return part;
			});
		}
		function tableRowsFrom(buffer) {
			const rows = buffer.map((raw) => raw.replace(/^\s*\|/, "").replace(/\|\s*$/, "").split("|").map((cell) => cell.trim()));
			return rows.filter((cells) => !cells.every((cell) => cell === "" || /^:?-{2,}:?$/.test(cell)));
		}
		/** 极简 Markdown 渲染：标题 / 列表 / 表格 / 分隔线 / 行内代码加粗。不引依赖。 */
		function renderMd(text) {
			const lines = String(text || "").split(/\r?\n/);
			const out = [];
			let listBuffer = null;
			let tableBuffer = null;
			function flushList() {
				if (!listBuffer) return;
				out.push(el("ul", { key: "ul" + out.length },
					listBuffer.map((item, index) => el("li", { key: String(index) }, inlineMd(item)))));
				listBuffer = null;
			}
			function flushTable() {
				if (!tableBuffer) return;
				const rows = tableRowsFrom(tableBuffer);
				if (rows.length) {
					const head = rows[0];
					const bodyRows = rows.slice(1);
					out.push(el("table", { key: "tb" + out.length },
						el("thead", null, el("tr", null, head.map((cell, index) => el("th", { key: String(index) }, inlineMd(cell))))),
						el("tbody", null, bodyRows.map((cells, rowIndex) => el("tr", { key: String(rowIndex) },
							cells.map((cell, index) => el("td", { key: String(index) }, inlineMd(cell))))))));
				}
				tableBuffer = null;
			}
			for (const rawLine of lines) {
				const line = rawLine.trim();
				if (line === "") { flushList(); flushTable(); continue; }
				const heading = /^(#{1,3})\s+(.*)$/.exec(line);
				if (heading) {
					flushList(); flushTable();
					out.push(el("h" + heading[1].length, { key: "h" + out.length }, inlineMd(heading[2])));
					continue;
				}
				if (/^(---+|\*\*\*+)$/.test(line)) { flushList(); flushTable(); out.push(el("hr", { key: "hr" + out.length })); continue; }
				if (line.charAt(0) === "|" && line.indexOf("|", 1) > 0) { flushList(); if (!tableBuffer) tableBuffer = []; tableBuffer.push(line); continue; }
				flushTable();
				const listItem = /^[-*]\s+(.*)$/.exec(line);
				if (listItem) {
					if (!listBuffer) listBuffer = [];
					listBuffer.push(listItem[1]);
					continue;
				}
				out.push(el("p", { key: "p" + out.length }, inlineMd(line)));
			}
			flushList(); flushTable();
			return out;
		}
		//#endregion
		//#region store
		const PREFIX_RE = /^\d{2}-/;
		const MAX_ENTRIES = 50;
		const MAX_CONCURRENT = 4;
		const MAX_PAGES = 8;
		function joinPath(dir, name) {
			return (dir ? String(dir).replace(/\/+$/, "") + "/" : "") + String(name).replace(/^\/+/, "");
		}
		function createWorkspaceStore(workspaceFiles, sessions) {
			let state = {
				phase: "loading",   // loading | nosession | incompatible | error | ready
				error: null,
				sessionId: null, sessionTitle: null, sessionCwd: undefined,
				agents: { status: "missing", truncated: false, blocks: {}, anomalies: [] },
				tree: { scanned: false, truncated: false, rootFiles: [], dirs: [], otherDirs: [] },
				rulesIndex: { status: "idle", text: "", truncated: false },
				bodies: {}
			};
			const listeners = new Set();
			let controller = null;
			function set(patch) {
				state = { ...state, ...patch };
				for (const listener of listeners) {
					try { listener(); } catch (error) { console.error("[workspace-panel] listener failed:", error); }
				}
			}
			function setBody(path, patch) {
				const current = state.bodies[path] || { state: "loading" };
				set({ bodies: { ...state.bodies, [path]: { ...current, ...patch } } });
			}
			function pickSession() {
				if (!sessions || !sessions.list || typeof sessions.list.getSnapshot !== "function") return null;
				const snap = sessions.list.getSnapshot();
				const ids = snap && Array.isArray(snap.ids) ? snap.ids : [];
				for (const id of ids) {
					const entry = snap.byId ? snap.byId[id] : undefined;
					if (!entry) continue;
					if (entry.parentId !== undefined || entry.origin === "subagent") continue;
					if (typeof sessions.subagentAddress === "function" && sessions.subagentAddress(id) !== undefined) continue;
					return { id, title: entry.displayTitle || entry.title || id, cwd: entry.cwd };
				}
				return null;
			}
			async function readFullBody(sessionId, path, signal) {
				let offset = 1;
				let collected = "";
				for (let page = 0; page < MAX_PAGES; page += 1) {
					const result = await workspaceFiles.read(sessionId, path, { offset }, signal);
					signal.throwIfAborted();
					if (!result || result.ok !== true) {
						const detail = result && result.error ? result.error.code + ": " + result.error.message : "unknown response";
						throw new Error(detail);
					}
					const value = result.value || {};
					collected += (collected === "" ? "" : "\n") + String(value.text || "");
					if (value.eof !== false) return { text: collected, truncated: false };
					const base = value.offset === undefined ? offset : Number(value.offset);
					offset = base + Number(value.lines || 0);
					if (!Number.isFinite(offset) || offset <= 0) return { text: collected, truncated: true };
				}
				return { text: collected, truncated: true };
			}
			async function readOrNull(sessionId, path, signal) {
				try {
					return await readFullBody(sessionId, path, signal);
				} catch (error) {
					if (signal && signal.aborted) throw error;
					return null;
				}
			}
			async function listOrNull(sessionId, path, signal) {
				try {
					const result = await workspaceFiles.list(sessionId, path, signal);
					signal.throwIfAborted();
					if (!result || result.ok !== true) return null;
					const entries = Array.isArray(result.value && result.value.entries) ? result.value.entries : [];
					return entries.slice(0, MAX_ENTRIES);
				} catch (error) {
					if (signal && signal.aborted) throw error;
					return null;
				}
			}
			async function mapLimit(items, limit, worker) {
				const results = new Array(items.length);
				let next = 0;
				async function runner() {
					while (next < items.length) {
						const index = next;
						next += 1;
						results[index] = await worker(items[index], index);
					}
				}
				const runners = [];
				for (let i = 0; i < Math.min(limit, items.length); i += 1) runners.push(runner());
				await Promise.all(runners);
				return results;
			}
			/**
			 * 扫描目录树：根目录一层 + 每个契约目录（两位数编号目录、.agents）一层。
			 * 护栏：每目录最多 MAX_ENTRIES 条、并发 MAX_CONCURRENT；超限记 truncated。
			 */
			async function scanTree(sessionId, cwd, signal) {
				const root = String(cwd).replace(/\\/g, "/").replace(/\/+$/, "");
				const rootEntries = await listOrNull(sessionId, root, signal);
				if (!rootEntries) return { scanned: false, truncated: false, rootFiles: [], dirs: [], otherDirs: [] };
				const rootFiles = [];
				const contractDirs = [];
				const otherDirs = [];
				let truncated = rootEntries.length >= MAX_ENTRIES;
				for (const entry of rootEntries) {
					const name = String(entry.name || "");
					if (name === "") continue;
					if (entry.type !== "directory") { rootFiles.push({ name, path: joinPath(root, name) }); continue; }
					if (name === ".agents" || PREFIX_RE.test(name)) contractDirs.push(name);
					else if (!name.startsWith(".")) otherDirs.push(name);
				}
				contractDirs.sort((left, right) => left.localeCompare(right, "zh-Hans-CN"));
				otherDirs.sort((left, right) => left.localeCompare(right, "zh-Hans-CN"));
				const dirs = await mapLimit(contractDirs, MAX_CONCURRENT, async (name) => {
					const dirPath = joinPath(root, name);
					const children = await listOrNull(sessionId, dirPath, signal);
					if (!children) {
						return { name, path: dirPath, available: false, fileCount: 0, files: [], subdirs: [], truncated: false };
					}
					const files = [];
					const subdirs = [];
					for (const child of children) {
						const childName = String(child.name || "");
						if (childName === "") continue;
						if (child.type === "directory") {
							if (childName.startsWith(".")) continue;
							subdirs.push({ name: childName, path: joinPath(dirPath, childName) });
						} else {
							files.push({ name: childName, path: joinPath(dirPath, childName) });
						}
					}
					return {
						name, path: dirPath, available: true,
						fileCount: files.length, files, subdirs,
						truncated: children.length >= MAX_ENTRIES
					};
				});
				return { scanned: true, truncated, rootFiles, dirs, otherDirs };
			}
			function refresh() {
				if (!workspaceFiles || typeof workspaceFiles.list !== "function" || typeof workspaceFiles.read !== "function") {
					set({ phase: "incompatible", error: null, sessionId: null, sessionTitle: null, sessionCwd: undefined });
					return;
				}
				const chosen = pickSession();
				if (!chosen) {
					if (controller) controller.abort();
					set({ phase: "nosession", error: null, sessionId: null, sessionTitle: null, sessionCwd: undefined });
					return;
				}
				if (controller) controller.abort();
				controller = new AbortController();
				const signal = controller.signal;
				set({ phase: "loading", sessionId: chosen.id, sessionTitle: chosen.title, sessionCwd: chosen.cwd, error: null });
				(async () => {
					try {
						// 工作区文件 API 按绝对路径寻址（与 scanTree 一致；先例见 skill-inspector fileAddressFor）
					const agentsPath = chosen.cwd ? joinPath(chosen.cwd, "AGENTS.md") : "AGENTS.md";
					const agentsEntry = await readOrNull(chosen.id, agentsPath, signal);
						if (signal.aborted) return;
						const parsed = agentsEntry ? parseAgentsMd(agentsEntry.text) : { blocks: {}, anomalies: [] };
						set({
							agents: agentsEntry
								? { status: "loaded", truncated: agentsEntry.truncated, blocks: parsed.blocks, anomalies: parsed.anomalies }
								: { status: "missing", truncated: false, blocks: {}, anomalies: [] }
						});
						const tree = chosen.cwd
							? await scanTree(chosen.id, chosen.cwd, signal)
							: { scanned: false, truncated: false, rootFiles: [], dirs: [], otherDirs: [] };
						if (signal.aborted) return;
						set({ tree });
						const rulesPath = chosen.cwd ? joinPath(chosen.cwd, ".agents/rules/README.md") : ".agents/rules/README.md";
					const rulesEntry = await readOrNull(chosen.id, rulesPath, signal);
						if (signal.aborted) return;
						set({
							rulesIndex: rulesEntry
								? { status: "loaded", text: rulesEntry.text, truncated: rulesEntry.truncated }
								: { status: "missing", text: "", truncated: false },
							phase: "ready"
						});
					} catch (error) {
						if (signal.aborted) return;
						set({ phase: "error", error: String((error && error.message) || error) });
					}
				})();
			}
			function loadBody(path) {
				const existing = state.bodies[path];
				if (existing && (existing.state === "loaded" || existing.state === "loading")) return;
				if (!workspaceFiles || typeof workspaceFiles.read !== "function" || !state.sessionId) return;
				setBody(path, { state: "loading" });
				const pageController = new AbortController();
				(async () => {
					try {
						const outcome = await readFullBody(state.sessionId, path, pageController.signal);
						pageController.signal.throwIfAborted();
						setBody(path, { state: "loaded", text: outcome.text, truncated: outcome.truncated });
					} catch (error) {
						if (pageController.signal.aborted) return;
						setBody(path, { state: "failed", failure: String((error && error.message) || error) });
					}
				})();
			}
			function ensureFullBody(path) {
				const existing = state.bodies[path];
				if (existing && (existing.state === "loaded" || existing.state === "loading")) return;
				loadBody(path);
			}
			function subscribe(listener) {
				listeners.add(listener);
				return () => listeners.delete(listener);
			}
			function getSnapshot() {
				return state;
			}
			function dispose() {
				if (controller) controller.abort();
				listeners.clear();
			}
			return { refresh, subscribe, getSnapshot, dispose, loadBody, ensureFullBody };
		}
		//#endregion
		//#region glyph
		function PanelGlyph(props) {
			const size = props && props.size ? props.size : 18;
			return el("svg", {
				width: size,
				height: size,
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: 1.8,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				"aria-hidden": true
			},
				el("path", { d: "M3.5 5.5A1.5 1.5 0 0 1 5 4h14a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 19 20H5a1.5 1.5 0 0 1-1.5-1.5z" }),
				el("path", { d: "M3.5 9h17" }),
				el("path", { d: "M7 13h6M7 16.5h9" })
			);
		}
		//#endregion
		//#region cards
		function ProfileCard(props) {
			const block = props.block;
			return el("div", { className: "wsp-card" },
				el("div", { className: "wsp-card-title" },
					"教师档案",
					el("span", { className: "wsp-badge" }, "teacher-init:profile")),
				block.fields.length
					? block.fields.map((field, index) => el("div", {
						className: "wsp-kv" + (field.pending ? " wsp-kv-pending" : ""),
						key: String(index)
					},
						el("span", { className: "wsp-kv-key" }, field.key),
						el("span", { className: "wsp-kv-val" }, field.value || "（空）")))
					: el("div", { className: "wsp-note" }, "块内没有可解析的字段行。"),
				block.loose.length
					? el("div", { className: "wsp-note", style: { marginTop: "6px" } }, block.loose.join("　·　"))
					: null);
		}
		function PendingCard(props) {
			const items = [];
			for (const kind of Object.keys(props.blocks)) {
				const block = props.blocks[kind];
				for (const field of block.fields) {
					if (field.pending) items.push({ kind, key: field.key, value: field.value });
				}
				for (const line of block.loose) {
					if (line.indexOf("待定") >= 0) items.push({ kind, key: "备注", value: line });
				}
			}
			const kindLabel = { profile: "教师档案", persona: "人设与边界", rules: "规则" };
			return el("div", { className: "wsp-card" },
				el("div", { className: "wsp-card-title" },
					"待定项",
					el("span", { className: items.length ? "wsp-badge wsp-badge-warn" : "wsp-badge wsp-badge-ok" },
						items.length ? items.length + " 项待确认" : "没有待定项")),
				items.length
					? items.map((item, index) => el("div", { className: "wsp-pending-item", key: String(index) },
						el("div", { className: "wsp-pending-src" }, kindLabel[item.kind] || item.kind),
						el("div", null, el("b", null, item.key), "：", item.value)))
					: el("div", { className: "wsp-note" }, "所有设定都已明确。以后有变化，直接在会话里让助手更新，刷新后这里会跟着变。"));
		}
		function FileRow(props) {
			return el("button", {
				className: "wsp-file",
				type: "button",
				onClick: () => props.onOpen(props.file.path),
				title: props.file.path
			},
				el("span", { className: "wsp-dir-icon" }, "·"),
				el("span", { className: "wsp-file-name" }, props.file.name));
		}
		function TreeCard(props) {
			const tree = props.tree;
			if (!tree.scanned) {
				return el("div", { className: "wsp-card" },
					el("div", { className: "wsp-card-title" }, "教学目录"),
					el("div", { className: "wsp-note" }, "没有工作区路径，无法列出目录。"));
			}
			const children = [];
			if (tree.rootFiles.length) {
				children.push(el("div", { className: "wsp-sub", key: "root-files", style: { marginLeft: "0", borderLeft: "none", paddingLeft: "0", marginTop: "0" } },
					tree.rootFiles.map((file) => el(FileRow, { key: file.path, file, onOpen: props.onOpenFile }))));
			}
			for (const dir of tree.dirs) {
				children.push(el("div", { key: dir.path },
					el("div", { className: "wsp-dir" },
						el("span", { className: "wsp-dir-icon" }, "▸"),
						el("span", { className: "wsp-dir-name" }, dir.name),
						el("span", { className: "wsp-dir-count" },
							dir.available
								? dir.fileCount + " 个文件" + (dir.subdirs.length ? " · " + dir.subdirs.length + " 个子目录" : "")
								: "无法读取")),
					dir.available && (dir.files.length || dir.subdirs.length)
						? el("div", { className: "wsp-sub" },
							dir.files.map((file) => el(FileRow, { key: file.path, file, onOpen: props.onOpenFile })),
							dir.subdirs.map((sub) => el("div", { className: "wsp-dir", key: sub.path },
								el("span", { className: "wsp-dir-icon" }, "·"),
								el("span", { className: "wsp-dir-name", style: { fontWeight: "400" } }, sub.name))))
						: null));
			}
			return el("div", { className: "wsp-card" },
				el("div", { className: "wsp-card-title" },
					"教学目录",
					tree.truncated ? el("span", { className: "wsp-badge wsp-badge-warn" }, "已截断") : null),
				children.length
					? el("div", { className: "wsp-tree" }, children)
					: el("div", { className: "wsp-note" }, "根目录下没有两位数编号目录和 .agents。"),
				tree.otherDirs.length
					? el("div", { className: "wsp-note", style: { marginTop: "8px" } },
						"其他目录（面板只展开编号目录与 .agents）：", tree.otherDirs.join("、"))
					: null);
		}
		function RulesCard(props) {
			const ri = props.rulesIndex;
			return el("div", { className: "wsp-card" },
				el("div", { className: "wsp-card-title" },
					"规则索引",
					el("span", { className: "wsp-count" }, ".agents/rules/README.md")),
				ri.status === "loaded"
					? [
						el("div", { className: "wsp-md", key: "content" }, renderMd(ri.text)),
						ri.truncated ? el("div", { className: "wsp-note", key: "trunc" }, "内容过长，仅显示前一部分。") : null
					]
					: el("div", { className: "wsp-note" },
						ri.status === "missing" ? "工作区没有 .agents/rules/README.md（未初始化或未建规则）。" : "尚未读取。"));
		}
		//#endregion
		//#region main view
		function MainView(props) {
			const store = props.store;
			const state = react.useSyncExternalStore(store.subscribe, store.getSnapshot, store.getSnapshot);
			react.useEffect(() => {
				if (state.phase !== "ready") store.refresh();
				return () => store.dispose();
			}, [store]);
			const body = [];
			if (state.phase === "incompatible") {
				body.push(el("div", { className: "wsp-empty", key: "incompatible" },
					"当前 DSH 宿主缺少 workspaceFiles 服务，面板无法读取工作区。", el("br"),
					"请升级宿主，或在插件页停用本面板。"));
			} else if (state.phase === "nosession") {
				body.push(el("div", { className: "wsp-empty", key: "nosession" },
					"暂无可用会话 —— 面板跟随当前会话的工作区。", el("br"),
					"打开或新建一个会话，然后点「↻ 刷新」。"));
			} else if (state.phase === "error") {
				body.push(el("div", { className: "wsp-error", key: "error" }, "加载失败：" + state.error));
				body.push(el("div", { key: "retry" },
					el("button", { className: "wsp-btn", type: "button", onClick: () => store.refresh() }, "重试")));
			} else if (state.phase === "loading" && state.agents.status === "missing" && !state.tree.scanned) {
				body.push(el("div", { className: "wsp-empty", key: "loading" },
					el("span", { className: "wsp-spin" }), " 正在读取工作区…"));
			} else {
				if (state.phase === "loading") {
					body.push(el("div", { className: "wsp-note", key: "refreshing" },
						el("span", { className: "wsp-spin" }), " 正在刷新，以下为上一次结果…"));
				}
				const inited = state.agents.status === "loaded";
				const anomalies = state.agents.anomalies;
				body.push(el("div", { className: "wsp-card", key: "init" },
					el("div", { className: "wsp-card-title" },
						"初始化状态",
						inited
							? el("span", { className: anomalies.length ? "wsp-badge wsp-badge-warn" : "wsp-badge wsp-badge-ok" },
								anomalies.length ? "已初始化 · " + anomalies.length + " 处标记异常" : "已初始化")
							: el("span", { className: "wsp-badge" }, "未找到 AGENTS.md")),
					inited ? null : el("div", { className: "wsp-note" },
						"当前工作区还没有初始化（未找到或无法读取 AGENTS.md）。在会话里对助手说：",
						el("br"),
						el("code", null, "用 teacher-init 初始化这个文件夹"),
						el("br"),
						"初始化之后，这里会显示教学档案、待定项与目录结构。")));
				if (inited && anomalies.length) {
					body.push(el("div", { className: "wsp-card", key: "anomalies" },
						el("div", { className: "wsp-card-title" }, "标记异常"),
						anomalies.map((item, index) => el("div", { className: "wsp-note", key: String(index) }, item.message))));
				}
				const profile = state.agents.blocks.profile;
				if (profile) {
					body.push(el(ProfileCard, { block: profile, key: "profile" }));
				} else if (inited) {
					body.push(el("div", { className: "wsp-card", key: "profile-missing" },
						el("div", { className: "wsp-card-title" }, "教师档案"),
						el("div", { className: "wsp-note" }, "AGENTS.md 里没有 teacher-init:profile 标记块。")));
				}
				if (inited) body.push(el(PendingCard, { blocks: state.agents.blocks, key: "pending" }));
				body.push(el(TreeCard, { tree: state.tree, onOpenFile: props.onOpenFile, key: "tree" }));
				body.push(el(RulesCard, { rulesIndex: state.rulesIndex, key: "rules" }));
			}
			return el("div", { className: "wsp-root" },
				el("div", { className: "wsp-header" },
					el("span", { className: "wsp-title" }, "教学面板"),
					el("span", { className: "wsp-spacer" }),
					el("button", {
						className: "wsp-btn",
						type: "button",
						onClick: () => store.refresh(),
						disabled: state.phase === "loading"
					}, "↻ 刷新")),
				state.sessionCwd
					? el("div", { className: "wsp-scope" }, "工作区：", el("b", null, String(state.sessionCwd).replace(/\\/g, "/")))
					: null,
				el("div", { className: "wsp-body" }, body),
				el("div", { className: "wsp-foot" },
					"只读面板：只查看，不修改任何文件。文件在会话里被改动后，点「↻ 刷新」更新。"));
		}
		//#endregion
		//#region file preview
		function FilePreview(props) {
			const store = props.store;
			const state = react.useSyncExternalStore(store.subscribe, store.getSnapshot, store.getSnapshot);
			const entry = state.bodies[props.path];
			react.useEffect(() => {
				store.ensureFullBody(props.path);
			}, [props.path, store]);
			const isMd = /\.md$/i.test(props.path);
			const text = entry && entry.state === "loaded" && typeof entry.text === "string" ? entry.text : null;
			let bodyArea;
			if (!entry || entry.state === "loading") {
				bodyArea = el("div", { className: "wsp-note" }, el("span", { className: "wsp-spin" }), " 正在读取…");
			} else if (entry.state === "failed") {
				bodyArea = el("div", { className: "wsp-error" }, "读取失败：" + String(entry.failure || ""));
			} else if (text !== null) {
				bodyArea = [
					el(isMd ? "div" : "pre", { className: isMd ? "wsp-md" : "wsp-pre", key: "content" }, isMd ? renderMd(text) : text),
					entry.truncated ? el("div", { className: "wsp-note", key: "trunc" }, "内容过长，仅显示前一部分。") : null
				];
			} else {
				bodyArea = el("div", { className: "wsp-note" }, el("span", { className: "wsp-spin" }), " 正在读取…");
			}
			return el("div", { className: "wsp-root" },
				el("div", { className: "wsp-header" },
					el("button", { className: "wsp-btn", type: "button", onClick: props.onBack }, "← 返回"),
					el("span", { className: "wsp-title-wrap" },
						el("span", { className: "wsp-title", style: { whiteSpace: "normal", wordBreak: "break-all", fontSize: "13px" } }, props.path)),
					el("span", { className: "wsp-spacer" }),
					el(CopyButton, { label: "复制路径", text: props.path })),
				el("div", { className: "wsp-body" }, bodyArea));
		}
		//#endregion
		//#region apply
		const PANEL_ID = "workspace-panel";
		// 槽位注册在插件生命周期竞态下可能撞键（例如模块热替换后旧注册尚未反注册）。
		// 撞键错误一旦抛出 apply 就会让 fiber 变为 FAILED，进而触发 Web 启动审计失败
		// → 致命恢复 → 配置被清洗。这里把注册包成"失败后延迟重试"的受控 disposer：
		// 最坏情况是面板短暂缺失，应用启动永不因此失败。
		function registerPanelEntry(register, what) {
			const MAX_RETRIES = 5;
			const RETRY_DELAY = 100;
			let disposeActual = null;
			let timer = null;
			let attempts = 0;
			const attempt = () => {
				timer = null;
				try {
					disposeActual = register();
					console.log("[workspace-panel] " + what + " 注册成功");
				} catch (error) {
					attempts += 1;
					if (attempts >= MAX_RETRIES) {
						console.error("[workspace-panel] " + what + " 注册失败，已放弃（本次会话面板可能缺失，刷新窗口可恢复；不影响应用启动）:", error && (error.message || error));
						return;
					}
					console.warn("[workspace-panel] " + what + " 注册冲突（第 " + attempts + " 次），" + RETRY_DELAY + "ms 后重试:", error && (error.message || error));
					timer = setTimeout(attempt, RETRY_DELAY);
				}
			};
			attempt();
			return () => {
				if (timer !== null) { clearTimeout(timer); timer = null; }
				if (disposeActual) {
					try { disposeActual(); } catch (error) { console.error("[workspace-panel] " + what + " 反注册失败:", error && (error.message || error)); }
					disposeActual = null;
				}
			};
		}
		function apply(ctx) {
			try {
				const workspaceFiles = ctx.remote && ctx.remote.workspaceFiles;
				const sessions = ctx.sessions;
				console.log("[workspace-panel] client bundle 已加载，依赖可用性:",
					JSON.stringify({ workspaceFiles: !!(workspaceFiles && typeof workspaceFiles.list === "function"), sessions: !!(sessions && sessions.list) }));
				const store = createWorkspaceStore(workspaceFiles, sessions);
				if (typeof ctx.on === "function") {
					ctx.on("connection/reset", () => store.refresh());
				}
				if (sessions && sessions.list && typeof sessions.list.subscribe === "function") {
					let lastId = null;
					sessions.list.subscribe(() => {
						const current = store.getSnapshot().sessionId;
						if (lastId === null) { lastId = current; return; }
						if (current !== lastId) { lastId = current; store.refresh(); }
					});
				}
				ctx.slots.inject("main", () => {
					try {
						return ctx.slots.inject("sidebar.panellist", function* () {
							yield registerPanelEntry(
								() => ctx.slots.register({ name: "main", key: PANEL_ID }, function WorkspacePanel() {
									const [view, setView] = react.useState({ name: "main" });
									const state = store.getSnapshot();
									if (view.name === "file" && view.path) {
										return el(FilePreview, {
											key: "file-" + view.path,
											path: view.path,
											store,
											onBack: () => setView({ name: "main" })
										});
									}
									return el(MainView, {
										store,
										onOpenFile: (path) => setView({ name: "file", path })
									});
								}),
								"主面板"
							);
							yield registerPanelEntry(
								() => ctx.slots.register({ name: "sidebar.panellist", id: PANEL_ID, order: 30, label: "教学面板" }, PanelGlyph),
								"侧栏图标"
							);
						});
					} catch (error) {
						console.error("[workspace-panel] 侧栏注册控制器初始化失败（不影响应用启动）:", error && (error.stack || error.message || error));
						return null;
					}
				});
			} catch (error) {
				console.error("[workspace-panel] 插件初始化失败（已跳过，不影响应用启动；如面板缺失请刷新窗口）:", error && (error.stack || error.message || error));
			}
		}
		//#endregion
		exports.apply = apply;
		// 受限 ctx 按"服务路径"校验属性访问：缺了 "remote.workspaceFiles" 会在
		// apply 里抛 cannot get property "remote.workspaceFiles" without inject，
		// 导致面板注册被防御 catch 跳过。此清单与实际访问的 ctx 服务一一对应。
		exports.inject = ["slots", "layout", "sessions", "remote", "remote.workspaceFiles"];
		return module.exports;
	}
});
