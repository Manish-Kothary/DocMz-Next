import React, { Component } from "react";
import QuizCard from "../../../components/quizCard/quizCard";
export default class quiz extends Component {
	state = {
		answers: [],
		quiz: {
			_id: "5e765c50a93355252e6213f7",
			children: [
				{
					_id: "5e765c9ea93355252e6213fb",
					children: [
						{
							_id: "5e765cefa93355252e6213fe",
							children: [],
							title: "what is the temp",
							option: [
								{
									_id: "5e765cefa93355252e621400",
									optionType: "radio",
									text: "40"
								},
								{
									_id: "5e765cefa93355252e6213ff",
									optionType: "radio",
									text: "50"
								}
							],
							__v: 0
						},
						{
							_id: "5e766d27ccef962e5ff1e9b4",
							children: [],
							title: "what is week",
							option: [
								{
									_id: "5e766d27ccef962e5ff1e9b6",
									optionType: "radio",
									text: "2"
								},
								{
									_id: "5e766d27ccef962e5ff1e9b5",
									optionType: "radio",
									text: "3"
								}
							],
							__v: 0
						}
					],
					title: "how many days",
					option: [
						{
							_id: "5e765c9ea93355252e6213fd",
							optionType: "text",
							text: "10",
							linkedQuestion: "5e765cefa93355252e6213fe"
						},
						{
							_id: "5e765c9ea93355252e6213fc",
							optionType: "text",
							text: "15",
							linkedQuestion: "5e766d27ccef962e5ff1e9b4"
						}
					],
					__v: 0
				}
			],
			title: "what is symptom",
			option: [
				{
					_id: "5e765c50a93355252e6213f9",
					optionType: "text",
					text: "cough",
					linkedQuestion: {
						_id: "5e765c9ea93355252e6213fb",
						children: ["5e765cefa93355252e6213fe", "5e766d27ccef962e5ff1e9b4"],
						title: "how many days",
						option: [
							{
								_id: "5e765c9ea93355252e6213fd",
								optionType: "radio",
								text: "10",
								linkedQuestion: {
									_id: "5e765cefa93355252e6213fe",
									children: [],
									title: "what is the temp",
									option: [
										{
											_id: "5e765cefa93355252e621400",
											optionType: "radio",
											text: "40"
										},
										{
											_id: "5e765cefa93355252e6213ff",
											optionType: "text",
											text: "50"
										}
									],
									__v: 0
								}
							},
							{
								_id: "5e765c9ea93355252e6213fc",
								optionType: "radio",
								text: "15",
								linkedQuestion: {
									_id: "5e766d27ccef962e5ff1e9b4",
									children: [],
									title: "what is week",
									option: [
										{
											_id: "5e766d27ccef962e5ff1e9b6",
											optionType: "radio",
											text: "2"
										},
										{
											_id: "5e766d27ccef962e5ff1e9b5",
											optionType: "radio",
											text: "3"
										}
									],
									__v: 0
								}
							}
						],
						__v: 0
					}
				},
				{
					_id: "5e765c50a93355252e6213f8",
					optionType: "radio",
					text: "fever"
				}
			],
			__v: 0
		},

		optionValue: "",
		title: "",
		textValue: "",
		index: -1,
		finish: false
	};
	textChangeHandler = e => {
		this.setState({
			textValue: e.target.value
		});
	};
	submitHandler = () => {
		let curAnswer = [...this.state.answers];
		curAnswer.push({
			title: this.state.title,
			optionValue: this.state.optionValue
		});

		if (this.state.quiz.option[this.state.index].linkedQuestion) {
			this.setState({
				answers: curAnswer,
				quiz: this.state.quiz.option[this.state.index].linkedQuestion,
				optionValue: "",
				title: "",
				textValue: "",
				index: -1
			});
		} else {
			this.setState({
				answers: curAnswer,
				quiz: quiz,
				optionValue: "",
				title: "",
				textValue: "",
				index: -1,
				finish: true
			});
		}
	};
	optionChangeHandler = e => {
		this.setState({
			optionValue: e.target.value,
			index: e.target.index
		});
		console.log(e.target.value, e.target.index);
	};
	render() {
		return (
			<div>
				{this.state.finish ? (
					"Your quiz is submitted. Doctor will see you soon"
				) : (
					<QuizCard
						question={this.state.quiz}
						textValue={this.state.textValue}
						submitHandler={this.submitHandler}
						optionChangeHandler={this.optionChangeHandler}
						textChangeHandler={this.textChangeHandler}
					/>
				)}
			</div>
		);
	}
}
