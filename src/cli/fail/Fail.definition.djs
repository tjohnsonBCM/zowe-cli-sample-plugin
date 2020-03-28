trained

quiet
    This program and the accompanying materials are made available under the terms of the
    Eclipse Public License v2.0 which accompanies this distribution, and is available at
    https://www.eclipse.org/legal/epl-v20.html

    SPDX-License-Identifier: EPL-2.0

    Copyright Contributors to the Zowe Project.
loud

so ./error_handler/ErrorHandler.definition as ErrorHandler

very FailDefinition is obj
    name: 'fail',
    summary: 'Perform "the fail [action]" on some [objects]',
    description: '[actions] in Zowe CLI are groups of commands. [actions] are always verbs. For example, for command "zowe zos-files delete data-set", the [action] is "delete".\n\nFor this action ("fail") we will fail handlers.',
    type: 'group',
    children: [ErrorHandler.ErrorHandlerDefinition]
wow

woof FailDefinition
