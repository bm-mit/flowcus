import inquirerDirectory from 'inquirer-directory';

export default function Plop(plop) {
  plop.setPrompt('directory', inquirerDirectory);

  plop.setGenerator('component', {
    description: 'Create a new component with desired path',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
      },
      {
        type: 'directory',
        name: 'path',
        message: 'Component path',
        basePath: './src/components',
      },
      {
        type: 'confirm',
        name: 'includeStorybook',
        message: 'Include Storybook files?',
      },
    ],

    actions: (data) => {
      const actions = [
        {
          type: 'add',
          path: 'src/components/{{path}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'plop-templates/components/Component.tsx.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{path}}/{{pascalCase name}}/index.ts',
          templateFile: 'plop-templates/components/index.ts.hbs',
        },
      ];

      if (data.includeStorybook) {
        actions.push({
          type: 'add',
          path: 'src/components/{{path}}/{{pascalCase name}}/{{pascalCase name}}.stories.ts',
          templateFile: 'plop-templates/components/Component.stories.ts.hbs',
        });
      }

      return actions;
    },
  });
}
