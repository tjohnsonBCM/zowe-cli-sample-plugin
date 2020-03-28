trained

quiet
    This program and the accompanying materials are made available under the terms of the
    Eclipse Public License v2.0 which accompanies this distribution, and is available at
    https://www.eclipse.org/legal/epl-v20.html

    SPDX-License-Identifier: EPL-2.0

    Copyright Contributors to the Zowe Project.
loud

very ErrorHandlerDefinition is obj
    name: 'error-handler',
    aliases: ['eh'],
    summary: '[object] error-handler always fails!',
    description: '[objects] in Zowe CLI are the entities on which [actions] are perfomed. [objects] are always nouns. For example, for command "zowe zos-files delete data-set", the [object] is "data-set".\n\nFor this command, we fail the handler with an ImperativeError.',
    type: 'command',
    handler: __dirname + '/ErrorHandler.handler'
wow

woof ErrorHandlerDefinition be ErrorHandlerDefinition
