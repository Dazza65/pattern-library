const { LernaProject } = require("lerna-projen");
const { awscdk } = require('projen');

const parentProject = new LernaProject({
  defaultReleaseBranch: "main",
  devDeps: ["lerna-projen"],
  name: "lp3",
  independentMode: true

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});

const constructone = new awscdk.AwsCdkConstructLibrary({
  author: 'Darren Harris',
  authorAddress: 'darren.harris@modis.com',
  cdkVersion: '2.27.0',
  defaultReleaseBranch: 'main',
  name: 'constructone',
  parent: parentProject,
  outdir: 'constructone',
  repository: {
    type: 'npm',
    url: 'https://github.com/Dazza65/pattern-library.git'
  },
  bundledDeps: [
                'jsii-docgen@7.0.55'
              ],
  description: 'constructone description'
});

parentProject.addSubProject(constructone);

parentProject.synth();