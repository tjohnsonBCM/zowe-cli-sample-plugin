/*
* This program and the accompanying materials are made available under the terms of the
* Eclipse Public License v2.0 which accompanies this distribution, and is available at
* https://www.eclipse.org/legal/epl-v20.html
*
* SPDX-License-Identifier: EPL-2.0
*
* Copyright Contributors to the Zowe Project.
*
*/

import { ICommandDefinition } from "@zowe/imperative";
export const GitHubIssuesDefinition: ICommandDefinition = {
    name: "github-issues",
    aliases: ["ghi"],
    summary: "Lists GitHub issues",
    description: "List one or more GitHub issues for a specific repo",
    type: "command",
    handler: __dirname + "/GitHubIssues.handler",
    options: [
        {
            name: "repoName",
            description: "Name of GitHub repo (formatted as `owner/repo`)",
            type: "string"
        },
        {
            name: "issueNum",
            description: "Number of issue to list",
            type: "number"
        }
    ]
};
