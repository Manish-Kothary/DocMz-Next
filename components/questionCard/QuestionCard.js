// import withDashboardLayout from "../../../components/layouts/dashboard-layout/withDashboardLayout";
import React, { Component } from "react";
import { List, Avatar, Button, Input, AutoComplete } from "antd";
import DeleteOutlined from "@ant-design/icons";
const { Search } = Input;
// import CardDrag from "../../../components/CardDrag/CardDrag";
const options = [
	"1 Already Asked Question ??",
	"2  not Already Asked Question ??",
	"3 Already Asked Question ??",
	"4 Already Asked Question ??",
	"5 Already Asked Question ??",
	"6 Already Asked Question ??"
];

class questions extends Component {
	constructor() {
		super();
		this.state = {
			questionToAdd: "",
			data: [
				{
					title: "What are Symtoms ?"
				},
				{
					title: "How many days are you suffering??"
				},
				{
					title: "What is your age ?"
				},
				{
					title: "Have You concerned with other doctor before ?"
				}
			]
		};
	}
	handleChange = e => {
		//console.log(e);
		this.setState({ questionToAdd: e });
	};
	addThisQuestion = question => {
		//console.log(1);
		let previousQuestions = this.state.data;
		const questionToAdd = {
			title: question
		};
		let updatedQuestions = previousQuestions.concat(questionToAdd);
		this.setState({ data: updatedQuestions, questionToAdd: "" });
	};

	removeThisQuestion = (e, item) => {
		//console.log(item);
		let updatedQuestions = this.state.data.filter(i => {
			if (i !== item) {
				return i;
			}
		});
		//console.log(updatedQuestions);
		this.setState({ data: updatedQuestions });
	};
	render() {
		return (
			<div className="p-dashboard-setting pt-4">
				<div className="container">
					<AutoComplete
						style={{
							width: 300
						}}
						dataSource={options}
						filterOption={(value, option) =>
							option.props.children
								.toString()
								.toLowerCase()
								.indexOf(value.toString().toLowerCase()) !== -1
						}
						placeholder="Please search your question"
						onChange={value => this.handleChange(value)}
						onSelect={(value, option) => {
							this.addThisQuestion(option.props.children);
						}}
					/>
					<Button
						variant="contained"
						onClick={e => this.addThisQuestion(this.state.questionToAdd)}
						style={{
							height: 50,
							backgroundColor: "#6f4461",
							color: "#eeeeee",
							marginLeft: "20px",
							borderRadius: "10px"
						}}
					>
						Add Question
					</Button>
					<Button
						variant="contained"
						onClick={e => this.addThisQuestion(this.state.questionToAdd)}
						style={{
							height: 50,
							backgroundColor: "#008CBA",
							color: "#eeeeee",
							marginLeft: "20px",
							borderRadius: "10px"
						}}
					>
						Create your question
					</Button>
					<List
						itemLayout="horizontal"
						dataSource={this.state.data}
						renderItem={(item, index) => {
							return (
								<List.Item>
									<List.Item.Meta title={`Q${index + 1}    ` + item.title} />
									<Button
										color="outlined"
										onClick={e => {
											this.removeThisQuestion(e, item);
										}}
									>
										Remove
									</Button>
								</List.Item>
							);
						}}
					/>
				</div>
			</div>
		);
	}
}

export default questions;
