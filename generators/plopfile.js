module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        name: 'name',
        type: 'input',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        templateFile: 'templates/component.tsx.hbs',
        path: '../src/components/{{pascalCase name}}/index.tsx'
      },
      {
        type: 'add',
        templateFile: 'templates/test.tsx.hbs',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx'
      },
      {
        type: 'add',
        templateFile: 'templates/stories.tsx.hbs',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx'
      }
    ]
  })
}
