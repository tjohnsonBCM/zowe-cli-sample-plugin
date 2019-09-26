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

import { ICommandHandler, IHandlerParameters, TextUtils, Session } from "@zowe/imperative";
import { GitHub } from "../../../api/GitHub";
export default class GitHubIssuesHandler implements ICommandHandler {
    public static readonly GITHUB_HOST = "api.github.com";
    public async process(params: IHandlerParameters): Promise<void> {

        const session = new Session({hostname: GitHubIssuesHandler.GITHUB_HOST});
        if (params.arguments.issueNum) {
            const issue = await GitHub.getIssue(session, params.arguments.repoName, params.arguments.issueNum);
            params.response.data.setObj(issue);
            params.response.console.log(TextUtils.prettyJson(issue));
        } else {
            const issues = await GitHub.getIssues(session, params.arguments.repoName);
            params.response.data.setObj(issues);
            params.response.console.log(TextUtils.prettyJson(issues));
        }
    }
}
