module.exports = {
    prompts: [
        {
            type: 'input',
            name: 'appName',
            message: 'Name of the application: '
        },
        {
            type: 'list',
            name: 'framework',
            message: 'What more framework would you install?',
            choices: ['Angular 1.x', 'Angular 2.x', 'React', 'Backbone']
        },
        {
            when: function (prompt) {
                return prompt.framework === 'React';
            },
            type: 'list',
            name: 'reactPlugin',
            message: 'What plugin for React would you like to install?',
            choices: ['Redux', 'Reflux', 'Not any of them']
        },
        {
            type: 'confirm',
            name: 'includeTwitterBootStrap',
            message: 'Do you want to install Twitter Bootstrap?',
            default: false
        },
        {
            type: 'checkbox',
            name: 'plugins',
            message: 'What plugin would you include for Gulp?',
            choices: [
                {
                    name: 'LESS',
                    checked: true
                }, {
                    name: 'Karma',
                    checked: true
                }, {
                    name: 'JSCS',
                    checked: true
                },
                {
                    name: 'ESLint',
                    checked: true
                }
            ]
        },
        {
            type: 'checkbox',
            name: 'concatenatedSources',
            message: 'What sources would you want to concatenate?',
            choices: [
                {
                    name: 'CSS',
                    checked: false
                }, {
                    name: 'JS',
                    checked: false
                }
            ]
        }
    ]
}