import { ADD_QUESTION, GET_QUESTIONS, UPDATE_QUESTION } from "./type";
import { getQuestions, updateQues } from "../../services/api/doctors";

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

export const updateQuestion = (id, title, option) => {
	console.log("in update question actionCreator");
	return updateQues(id, title, option)
		.then(() => getQuestionsTree())
		.catch(err => {
			console.log("error while updating qus", err);
		});
};
