import {
	Election,
	EnvOptions,
	PlainCensus,
	VocdoniSDKClient
} from '@vocdoni/sdk';

export const getClient = wallet =>
	new VocdoniSDKClient({
		env: EnvOptions.DEV,
		wallet
	});

export const updateBalance = async client => {
	const acc = await client.createAccount();
	try {
		if (!acc) {
			throw new Error('fetch account failed');
		}

		if (acc.balance <= 0) {
			await client.collectFaucetTokens();
		}
	} catch (e) {
		console.error('failed account creation', e);
	}
};

export const getCensus = async (signer, signers) => {
	const census = new PlainCensus();

	for (const w of signers) {
		census.add(w.address);
	}

	census.add(await signer.getAddress());

	return census;
};

const addQuestions = (election, questions) => {
	questions.forEach(question => {
		election.addQuestion(
			question.questionTitle,
			question.questionDescription,
			question.options.map((value, i) => ({ title: value, value: i }))
		);
	});
};

export const createElectionFn = async (createElection, census, client) => {
	const endDate = new Date();
	endDate.setHours(endDate.getHours() + 10);

	const election = Election.from({
		title: createElection.title,
		description: createElection.description,
		header: 'https://source.unsplash.com/random',
		streamUri: 'https://source.unsplash.com/random',
		endDate: endDate.getTime(),
		census
	});
	addQuestions(election, createElection.questions);

	await client.createElection(election);
};
