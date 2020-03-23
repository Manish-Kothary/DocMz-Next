import { questionnaire } from "./_initialStates";
import { ADD_QUESTION, GET_QUESTIONS } from "../actions/type";
// import { addQuestion } from "../actions/questionnaireAction";

const addQuestion = (state, action) => {
	console.log("Came in reducer addQuestion");
	return state;
};

const getQuestion = (state, action) => {
	console.log("Came in reducer getQuestion");
	console.log(action);
	return {
		questions: action.payload
	};
};

export default (state = questionnaire, action) => {
	switch (action.type) {
		case ADD_QUESTION:
			return addQuestion(state, action);
		case GET_QUESTIONS:
			return getQuestion(state, action);
		default:
			return state;
	}
};
