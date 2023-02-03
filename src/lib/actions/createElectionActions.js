import { CREATE_ELECTION_ACTIONS } from '../../constants/createElectionActions';

export const electionTitleChanged = newTitle => ({
  type: CREATE_ELECTION_ACTIONS.ELECTION_TITLE,
  payload: newTitle,
});

export const electionDescriptionChanged = newDescription => ({
  type: CREATE_ELECTION_ACTIONS.ELECTION_DESCRIPTION,
  payload: newDescription,
});

export const addAddress = () => ({
  type: CREATE_ELECTION_ACTIONS.ADD_ADDRESS,
});

export const deleteAddress = index => ({
  type: CREATE_ELECTION_ACTIONS.DELETE_ADDRESS,
  payload: index,
});

export const addressChanged = (index, newAddress) => ({
  type: CREATE_ELECTION_ACTIONS.ADDRESS,
  payload: {
    index,
    newAddress,
  },
});

export const addressWeightChanged = (index, newWeight) => ({
  type: CREATE_ELECTION_ACTIONS.ADDRESS_WEIGHT,
  payload: {
    index,
    newWeight,
  },
});

export const addQuestion = () => ({
  type: CREATE_ELECTION_ACTIONS.ADD_QUESTION,
});

export const deleteQuestion = index => ({
  type: CREATE_ELECTION_ACTIONS.DELETE_QUESTION,
  payload: index,
});

export const titleChanged = (index, newValue) => ({
  type: CREATE_ELECTION_ACTIONS.TITLE,
  payload: {
    index,
    newValue,
  },
});

export const subtitleChanged = (index, newValue) => ({
  type: CREATE_ELECTION_ACTIONS.SUBTITLE,
  payload: {
    index,
    newValue,
  },
});

export const addOption = index => ({
  type: CREATE_ELECTION_ACTIONS.ADD_OPTION,
  payload: index,
});

export const deleteOption = (questionIndex, optionIndex) => ({
  type: CREATE_ELECTION_ACTIONS.DELETE_OPTION,
  payload: {
    questionIndex,
    optionIndex,
  },
});

export const optionChanged = (questionIndex, optionIndex, newValue) => ({
  type: CREATE_ELECTION_ACTIONS.OPTION,
  payload: {
    questionIndex,
    optionIndex,
    newValue,
  },
});

export const weightedVotingChanged = () => ({
  type: CREATE_ELECTION_ACTIONS.WEIGHTED_VOTING_ACTIVE,
});

export const loadingChanged = () => ({
  type: CREATE_ELECTION_ACTIONS.LOADING,
});

export const errorChanged = newError => ({
  type: CREATE_ELECTION_ACTIONS.ERROR,
  payload: newError,
});
