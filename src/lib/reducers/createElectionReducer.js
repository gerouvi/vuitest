import { CREATE_ELECTION_ACTIONS } from '../../constants/createElectionActions';

export const getCreateElectionInitialValues = address => ({
	title: '',
	description: '',
	addresses: [
		{ address, weight: '' },
		{ address: '', weight: '' }
	],
	questions: [
		{ questionTitle: '', questionDescription: '', options: ['', ''] }
	],
	weightedVoting: {
		active: false,
		total: 0
	},
	loading: false,
	error: false
});

export const createElectionReducer = (state, { type, payload }) => {
	switch (type) {
		case CREATE_ELECTION_ACTIONS.TITLE:
			return { ...state, title: payload, error: false };

		case CREATE_ELECTION_ACTIONS.DESCRIPTION:
			return { ...state, description: payload, error: false };

		case CREATE_ELECTION_ACTIONS.ADD_ADDRESS:
			return {
				...state,
				addresses: [...state.addresses, { address: '', weight: '' }],
				error: false
			};

		case CREATE_ELECTION_ACTIONS.DELETE_ADDRESS: {
			const addressesCopy = [...state.addresses];
			addressesCopy.splice(payload, 1);

			const totalWeight = state.addresses.reduce((acc, curr, index) => {
				if (index === payload) return acc;
				return acc + curr.weight;
			}, 0);

			return {
				...state,
				addresses: addressesCopy,
				weightedVoting: {
					active: state.weightedVoting.active,
					total: totalWeight
				},
				error: false
			};
		}
		case CREATE_ELECTION_ACTIONS.ADDRESS: {
			const addressesCopy = [...state.addresses];
			addressesCopy.splice(payload.index, 1, {
				address: payload.newAddress,
				weight: state.addresses[payload.index].weight
			});
			return { ...state, addresses: addressesCopy, error: false };
		}

		case CREATE_ELECTION_ACTIONS.ADDRESS_WEIGHT: {
			const addressesCopy = [...state.addresses];
			addressesCopy.splice(payload.index, 1, {
				address: state.addresses[payload.index].address,
				weight: Number(payload.newWeight)
			});

			const totalWeight = state.addresses.reduce((acc, curr, index) => {
				if (index === payload.index) return acc;
				return acc + curr.weight;
			}, Number(payload.newWeight));

			if (totalWeight > 100 || payload.newWeight > 99) return { ...state };

			return {
				...state,
				addresses: addressesCopy,
				weightedVoting: {
					active: true,
					total: totalWeight
				},
				error: false
			};
		}

		case CREATE_ELECTION_ACTIONS.WEIGHTED_VOTING_TOGGLE:
			return {
				...state,
				weightedVoting: {
					active: !state.weightedVoting.active,
					total: state.weightedVoting.total
				},
				error: false
			};

		case CREATE_ELECTION_ACTIONS.ADD_QUESTION:
			return {
				...state,
				questions: [
					...state.questions,
					{ questionTitle: '', questionDescription: '', options: ['', ''] }
				]
			};
		case CREATE_ELECTION_ACTIONS.DELETE_QUESTION: {
			const questionsCopy = [...state.questions];
			questionsCopy.splice(payload, 1);

			return { ...state, questions: questionsCopy, error: false };
		}

		case CREATE_ELECTION_ACTIONS.QUESTION_TITLE: {
			const newQuestions = state.questions.map((question, index) => {
				if (index !== payload.index) return question;
				return {
					...question,
					questionTitle: payload.newValue
				};
			});
			return { ...state, questions: newQuestions, error: false };
		}

		case CREATE_ELECTION_ACTIONS.QUESTION_SUBTITLE: {
			const newQuestions = state.questions.map((question, index) => {
				if (index !== payload.index) return question;
				return {
					...question,
					questionDescription: payload.newValue
				};
			});
			return { ...state, questions: newQuestions, error: false };
		}
		case CREATE_ELECTION_ACTIONS.OPTION: {
			const newQuestions = state.questions.map((question, index) => {
				if (index !== payload.questionIndex) return question;
				const options = [...question.options];
				options.splice(payload.optionIndex, 1, payload.newValue);
				return {
					...question,
					options
				};
			});
			return { ...state, questions: newQuestions, error: false };
		}

		case CREATE_ELECTION_ACTIONS.ADD_OPTION: {
			const newQuestions = state.questions.map((question, index) => {
				if (index !== payload) return question;
				return {
					...question,
					options: [...question.options, '']
				};
			});

			return { ...state, questions: newQuestions, error: false };
		}

		case CREATE_ELECTION_ACTIONS.DELETE_OPTION: {
			const newQuestions = state.questions.map((question, index) => {
				if (index !== payload.questionIndex) return question;
				const options = [...question.options];
				options.splice(payload.optionIndex, 1);
				return {
					...question,
					options
				};
			});
			return { ...state, questions: newQuestions, error: false };
		}

		case CREATE_ELECTION_ACTIONS.LOADING:
			return { ...state, loading: !state.loading };

		case CREATE_ELECTION_ACTIONS.ERROR:
			return { ...state, errors: payload };

		default:
			throw new Error('Invalid action type');
	}
};

export default createElectionReducer;
