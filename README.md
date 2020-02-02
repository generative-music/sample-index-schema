# @generative-music/sample-index-schema

A schema for specifying an index of audio sample files in generative music projects.

## Schema

The schema is defined in [schema.json](schema.json]).

This schema describes an object whose properties are groups of audio samples with a group name as the property key and either an array or an object containing the audio samples as the property value. An audio sample is typically a string containing a path to the file.

The following example adheres to the schema and describes three audio samples which correspond to three different piano notes, and two audio samples of a drum:

```json
{
  "piano": {
    "G4": "url/to/g4.wav",
    "C5": "url/to/c5.wav",
    "A6": "url/to/a6.wav"
  },
  "drum": ["url/to/hit/1.wav", "url/to/hit/2.wav"]
}
```

This schema is convenient for passing samples to [Tone.js](https://tonejs.github.io).

```js
const samples = {
  piano: {
    G4: 'url/to/g4.wav',
    C5: 'url/to/c5.wav',
    A6: 'url/to/a6.wav',
  },
  drum: ['url/to/hit/1.wav', 'url/to/hit/2.wav'],
};

const pianoSampler = new Tone.Sampler(samples.piano);
const drumBuffers = new Tone.Buffers(samples.drum);
```
