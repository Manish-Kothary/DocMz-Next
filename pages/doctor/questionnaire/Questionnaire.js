import React, { Component } from "react";
import { connect } from "react-redux";
import { addQuestion } from "../../../redux/actions/questionnaireAction";
class Questionnaire extends Component {
	render() {
		return (
			<div>
				<p onClick={this.props.addQuestion}>Hello</p>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		questions: state.questionnaire.questions
	};
};

const mapActionToProps = dispatch => {
	return {
		addQuestion: () => dispatch(addQuestion())
	};
};
export default connect(mapStateToProps, mapActionToProps)(Questionnaire);
