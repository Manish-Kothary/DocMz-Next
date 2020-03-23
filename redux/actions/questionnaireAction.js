import { ADD_QUESTION, GET_QUESTIONS } from "./type";
import { getQuestions } from "../../services/api/doctors";

export const addQuestion = question => ({
	type: ADD_QUESTION,
	payload: question
});

export const getQuestionsTree = () => dispatch => {
	console.log("in action getQuestionTree");
	return getQuestions().then(res => {
		console.log("received response", res);
		dispatch({
			type: GET_QUESTIONS,
			payload: res.data.data
		});
	});
};
