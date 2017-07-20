#!/usr/bin/env node
const fs = require('fs');
const Mustache = require('mustache');
const changeCase = require('change-case');
const templates = require('./templates');

const program = require('commander');

program
  .arguments('<name>')
  .action(name => {
    try {
      return main(name);
    } catch (e) {
      console.log(e);
    }
  })
  .parse(process.argv);

async function main(name) {
  const { pascalCase, paramCase } = parseName(name);

  await makeDirIfNotExist(paramCase);

  const rendered = renderTemplates(templates, { pascalCase, paramCase });

  saveFiles(paramCase, rendered);
}

async function saveFiles(componentName, renderedTemplates) {
  await writeFile(`${componentName}/index.js`, renderedTemplates.index);
  await writeFile(
    `${componentName}/${componentName}.js`,
    renderedTemplates.component
  );
  await writeFile(
    `${componentName}/${componentName}.css`,
    renderedTemplates.style
  );
}

function renderTemplates(templates, { pascalCase, paramCase }) {
  return renderTuple(templates).reduce(function reducer(obj, [key, val]) {
    obj[key] = val;
    return obj;
  }, {});

  function render(template) {
    return Mustache.render(template, { pascalCase, paramCase });
  }

  function renderTuple(templates) {
    return Object.keys(templates).map(k => [k, render(templates[k])]);
  }
}

async function writeFile(filename, fileInput) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, fileInput, err => {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
}

function parseName(name) {
  const paramCase = changeCase.param(name);
  const pascalCase = changeCase.pascal(name);
  return { paramCase, pascalCase };
}

function makeDirIfNotExist(dirname) {
  return new Promise((resolve, reject) =>
    fs.mkdir(
      dirname,
      error => (error && error.code !== 'EEXIST' ? reject(error) : resolve())
    )
  );
}
