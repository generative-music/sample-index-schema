const { expect } = require('chai');
const Ajv = require('ajv');
const schema = require('./schema.json');

describe('schema.json', () => {
  it('should be a valid JSON schema', () => {
    expect(new Ajv().validateSchema(schema)).to.be.true;
  });
});
