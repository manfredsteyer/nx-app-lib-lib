module.exports = {
  name: 'framework',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/framework',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
