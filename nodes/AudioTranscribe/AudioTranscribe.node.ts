// import { INodeType, INodeTypeDescription } from 'n8n-workflow';



// export class AudioTranscribe implements INodeType {
// 	description: INodeTypeDescription = {
// 		// Basic node details will go here
//         displayName: 'AddioTranscribe',
// name: 'AudioTranscribe',
// icon: 'darjiastt.svg',
// group: ['transform'],
// version: 1,
// subtitle: 'Transcribe audio files',
// description: 'you can transcribe morrocon language audio files',
// defaults: {
// 	name: 'Darjia STT Pics',
// },
// inputs: ['main'],
// outputs: ['main'],
// credentials: [
// 	{
// 		name: 'SttdarjiaApi',
// 		required: true,
// 	},
// ],
// requestDefaults: {
// 	baseURL: 'https://stt-model-production.up.railway.app/transcribe/',
// 	headers: {
// 		Accept: 'application/json',
// 		'Content-Type': 'application/json',
// 	},
// },
// 		properties: [
// 		// Resources and operations will go here
//         {
//             displayName: 'Resource',
//             name: 'resource',
//             type: 'options',
//             noDataExpression: true,
//             options: [
//                 {
//                     name: 'Transcribe Audio',
//                     value: 'transcribeAudio',
//                 },
//             ],
//             default: 'transcribeAudio',
//         },
    
//         {
//             displayName: 'Operation',
//             name: 'operation',
//             type: 'options',
//             displayOptions: {
//                 show: {
//                     resource: ['transcribeAudio'],
//                 },
//             },
//             options: [
//                 {
//                     name: 'Upload & Transcribe',
//                     value: 'uploadAndTranscribe',
//                     description: 'Upload an audio file and get transcription',
//                 },
//             ],
//             default: 'uploadAndTranscribe',
//         },
    
//         {
//             displayName: 'Token',
//             name: 'token',
//             type: 'string',
//             required: true,
//             displayOptions: {
//                 show: {
//                     resource: ['transcribeAudio'],
//                     operation: ['uploadAndTranscribe'],
//                 },
//             },
//             default: '',
//             placeholder: 'Enter your API token',
//         },
    
//         {
//             displayName: 'Audio File',
//             name: 'file',
//             type: 'string',
//             typeOptions: {
//                 multipleValues: false,
//                 alwaysOpenEditWindow: true,
//             },
//             required: true,
//             displayOptions: {
//                 show: {
//                     resource: ['transcribeAudio'],
//                     operation: ['uploadAndTranscribe'],
//                 },
//             },
//             default: '',
//             description: 'Binary file to be transcribed',
//         },
// 		]
// 	};
// }


import {
	INodeType,
	INodeTypeDescription,
	NodeConnectionType,
} from 'n8n-workflow';

export class AudioTranscribe implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Audio Transcribe',
		name: 'audioTranscribe',
		icon: 'fa:microphone',
		group: ['transform'],
		version: 1,
		subtitle: 'Transcribe Moroccan Darija audio files',
		description: 'Upload and transcribe audio using a remote ASR model',
		defaults: {
			name: 'Audio Transcribe',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [
			{
				name: 'SttdarjiaApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://stt-model-production.up.railway.app',
			headers: {
				Accept: 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Transcribe Audio',
						value: 'transcribeAudio',
					},
				],
				default: 'transcribeAudio',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				displayOptions: {
					show: {
						resource: ['transcribeAudio'],
					},
				},
				options: [
					{
						name: 'Upload & Transcribe',
						value: 'uploadAndTranscribe',
						description: 'Upload an audio file and get transcription',
					},
				],
				default: 'uploadAndTranscribe',
			},
			{
				displayName: 'Token',
				name: 'token',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['transcribeAudio'],
						operation: ['uploadAndTranscribe'],
					},
				},
				default: '',
				placeholder: 'Enter your API token',
			},
			{
				displayName: 'Audio File (Binary Property)',
				name: 'binaryPropertyName',
				type: 'string',
				required: true,
				default: 'data',
				description: 'Name of the binary property that contains the audio file',
				displayOptions: {
					show: {
						resource: ['transcribeAudio'],
						operation: ['uploadAndTranscribe'],
					},
				},
			},
		],
	};
}
