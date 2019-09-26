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

import { IIssue } from "./doc/Iissue";
import { RestClient, AbstractSession, ImperativeExpect, Logger } from "@zowe/imperative";

export class GitHub {
    public static readonly ISSUES_URI_PREFIX = "/repos";
    public static readonly ISSUES_URI_SUFFIX = "/issues";
    public static readonly REQUEST_HEADERS = [{"User-Agent": "request"}];

    public static getIssues(session: AbstractSession, repoName: string): Promise<IIssue[]> {
        Logger.getAppLogger().trace("GitHub.getIssues() called with repoName " + repoName);
        ImperativeExpect.toNotBeNullOrUndefined(repoName, "repoName must be provided");
        const resource = GitHub.ISSUES_URI_PREFIX + "/" + repoName + GitHub.ISSUES_URI_SUFFIX;
        return RestClient.getExpectJSON<IIssue[]>(session, resource, GitHub.REQUEST_HEADERS);
    }

    public static getIssue(session: AbstractSession, repoName: string, issueNum: number): Promise<IIssue> {
        Logger.getAppLogger().trace("GitHub.getIssue() called with repoName " + repoName + " and issueNum " + issueNum);
        ImperativeExpect.toNotBeNullOrUndefined(repoName, "repoName must be provided");
        ImperativeExpect.toNotBeNullOrUndefined(issueNum, "issueNum must be provided");
        const resource = GitHub.ISSUES_URI_PREFIX + "/" + repoName + GitHub.ISSUES_URI_SUFFIX + "/" + issueNum;
        return RestClient.getExpectJSON<IIssue>(session, resource, GitHub.REQUEST_HEADERS);
    }
}
