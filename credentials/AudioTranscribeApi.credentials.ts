// import {
// 	IAuthenticateGeneric,
// 	ICredentialType,
// 	INodeProperties,
// } from 'n8n-workflow';

// export class AudioTranscribeApi implements ICredentialType {
// 	name = 'AudioTranscribe Api';
// 	displayName = 'AudioTranscribe API';
// 	// Uses the link to this tutorial as an example
// 	// Replace with your own docs links when building your own nodes
// 	documentationUrl = 'https://docs.n8n.io/integrations/creating-nodes/build/declarative-style-node/';
// 	properties: INodeProperties[] = [
// 		{
// 			displayName: 'API Key',
// 			name: 'apiKey',
// 			type: 'string',
// 			default: '',
// 		},
// 	];
// 	authenticate = {
// 		type: 'generic',
// 		properties: {
// 			qs: {
// 				'api_key': '={{$credentials.apiKey}}'
// 			}
// 		},
// 	} as IAuthenticateGeneric;
// }

import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class AudioTranscribeApi implements ICredentialType {
	name = 'audioTranscribeApi';
	displayName = 'Audio Transcribe API';
	documentationUrl = 'https://stt-model-production.up.railway.app/docs';
	properties: INodeProperties[] = [
		{
			displayName: 'API Token',
			name: 'apiToken',
			type: 'string',
			default: '',
			required: true,
		},
	];
}
