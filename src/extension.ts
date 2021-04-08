'use strict';

import * as vscode from 'vscode'
import { functionProvider } from './features/completionItemProvider';
import { signatureProvider } from './features/signatureHelpProvider';
import { hoverProvider } from './features/hoverProvider';
import { generateResource, generateMeta, generateClient, generateServer } from './features/resourceGenerator';
import { startResource, stopResource, restartResource, restartResourceSave } from './features/serverInteractions';
import { documentLinkProvider } from './features/documentLinkProvider';

export function activate(context: vscode.ExtensionContext) {
	console.log("Lua:MTA LUA: Init");

	context.subscriptions.push(vscode.commands.registerCommand("extension.mta-new-resource", generateResource));
	context.subscriptions.push(vscode.commands.registerCommand("extension.mta-new-meta", generateMeta));
	context.subscriptions.push(vscode.commands.registerCommand("extension.mta-new-client", generateClient));
	context.subscriptions.push(vscode.commands.registerCommand("extension.mta-new-server", generateServer));

	if (vscode.workspace.getConfiguration("luamta-http").get("enabled", true)) {
		context.subscriptions.push(vscode.commands.registerCommand("extension.mta-start-resource", startResource));
		context.subscriptions.push(vscode.commands.registerCommand("extension.mta-stop-resource", stopResource));
		context.subscriptions.push(vscode.commands.registerCommand("extension.mta-restart-resource", restartResource));
	}

	vscode.workspace.onDidSaveTextDocument((document: vscode.TextDocument) => {
		if (!vscode.workspace.getConfiguration("luamta-http").get("enable_restart_on_save", false))
			return;
		restartResourceSave(document);
	});

	// TODO: Write a CompletionItemProvider/SignatureHelpProvider/HoverProvider for meta.xml files. See https://github.com/Subtixx/vscode-luamta/issues/10

	if (vscode.workspace.getConfiguration("luamta-sense").get("show_reference_links", false))
		vscode.languages.registerDocumentLinkProvider({ scheme: "file", language: "luamta" }, new documentLinkProvider(context.extensionPath));

	// Register the built-in function definitions
	vscode.languages.registerCompletionItemProvider({ scheme: "file", language: "luamta" }, new functionProvider(context.extensionPath), ".");
	vscode.languages.registerHoverProvider({ scheme: "file", language: "luamta" }, new hoverProvider(context.extensionPath));

	if (!vscode.workspace.getConfiguration("luamta-sense").get("activate_signature_help_parentheses", true))
		vscode.languages.registerSignatureHelpProvider({ scheme: "file", language: "luamta" }, new signatureProvider(context.extensionPath), "");
	else
		vscode.languages.registerSignatureHelpProvider({ scheme: "file", language: "luamta" }, new signatureProvider(context.extensionPath), "(");
}

export function deactivate() {
	console.log("Lua:MTA : Free");
}