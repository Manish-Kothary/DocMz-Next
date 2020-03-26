import React, { Component } from "react";
import { connect } from "react-redux";
import {
	addQuestion,
	getQuestionsTree,
	updateQuestion
} from "../../../redux/actions/questionnaireAction";

import CreateQuestion from "../.././../components/createQuestion/CreateQuestion";
import TreeSection from "../.././../components/treeSection/TreeSection";
import { Tree } from "antd";
import "./_questions.scss";

// import { getQuestions } from "../../../services/api/doctors";

class Questionnaire extends Component {
	state = {
		loading: true,
		title: "",
		option: [],
		id: "",
		optionText: ""
	};

	changeHandler = e => {
		console.log("change handler");

		this.setState(
			{
				title: e.target.value
			},
			() => console.log(this.state)
		);
	};

	optionChangeHandler = (e, i) => {
		console.log("option change");
		let curOption = this.state.option;
		console.log(i, curOption[i]);
		curOption[i][e.target.name] = e.target.value;
		this.setState(
			{
				option: curOption
			},
			() => console.log(this.state)
		);
	};

	removeOption = index => {
		let curOption = this.state.option;
		curOption.splice(index, 1);
		this.setState({
			option: curOption
		});
	};
	addBoolean = () => {
		console.log("on add Boolean");
		let curOption = this.state.option;
		curOption.push({
			title: "",
			type: "radio"
		});
		this.setState({
			option: curOption
		});
	};
	addText = () => {
		console.log("on add Text");
		let curOption = this.state.option;
		curOption.push({
			title: "",
			type: "text"
		});
		this.setState({
			option: curOption
		});
	};
	changeState = key => {
		console.log("changeState");

		// this.setState({
		// 	id: key
		// });
	};

	onSelectHandler = (selectedKeys, info) => {
		console.log("It came in here", selectedKeys, info.selectedNodes);
		this.changeState(selectedKeys);
		if (info)
			this.setState(
				{
					title: info.selectedNodes[0].props.title,
					id: selectedKeys[0],
					option: info.selectedNodes[0].props.option
				},
				() => console.log(this.state)
			);
		else {
			console.log("sonething wrong", info);
		}
		// console.log("selected", selectedKeys, info.selectedNodes);
	};

	componentDidUpdate = () => {
		console.log("updated state", this.props.questions);
	};
	componentDidMount = () => {
		console.log("component mounted");
		this.props.getQuestions().then(() => {
			this.setState({
				loading: false,
				title: this.props.questions.title,
				option: this.props.questions.option
			});
		});
		console.log("all questions are", this.props.questions);
	};

	render() {
		console.log("all questions", this.props.questions);
		return (
			<div className="container">
				{!this.state.loading ? (
					<div className="main">
						<div>
							<TreeSection
								question={[this.props.questions]}
								onSelectHandler={this.onSelectHandler}
							/>
						</div>
						<div>
							<h3>Add Your question</h3>
							<CreateQuestion
								optionChangeHandler={this.optionChangeHandler}
								removeOption={this.removeOption}
								changeHandler={this.changeHandler}
								addText={this.addText}
								addBoolean={this.addBoolean}
								addQuestion={this.addQuestion}
								title={this.state.title}
								option={this.state.option}
								submitHandler={this.props.addQuestion}
							/>
						</div>
					</div>
				) : (
					"Loading"
				)}
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
		addQuestion: () => dispatch(addQuestion()),
		getQuestions: () => dispatch(getQuestionsTree()),
		updateQuestion: (id, title, option) =>
			dispatch(updateQuestion(id, title, option))
	};
};
export default connect(mapStateToProps, mapActionToProps)(Questionnaire);
