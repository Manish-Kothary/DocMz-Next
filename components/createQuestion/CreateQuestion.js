import React, { Component } from "react";
import { Input, Button, Card } from "antd";
export default class CreateQuestion extends Component {
	render() {
		let allOption = this.props.option.map((elem, index) => {
			return (
				<div key={index}>
					{elem.optionType === "radio" ? (
						<div>
							<Input type="radio" value={elem.text} />
							<Input
								type="text"
								name="title"
								value={elem.text}
								onChange={e => this.props.optionChangeHandler(e, index)}
							/>
						</div>
					) : (
						<Input
							type="text"
							name="title"
							value={elem.text}
							onChange={e => this.props.optionChangeHandler(e, index)}
						/>
					)}
					<Button type="danger" onClick={() => this.props.removeOption(index)}>
						X
					</Button>
				</div>
			);
		});
		return (
			<div>
				<Card>
					<Input
						placeholder="please type your question"
						name="title"
						value={this.props.title}
						onChange={e => this.props.changeHandler(e)}
					/>
					{allOption}
					<Button type="primary" onClick={this.props.addBoolean}>
						Add option
					</Button>
					<Button type="primary" onClick={this.props.addText}>
						Add a text field
					</Button>
				</Card>
				<Button type="primary" onClick={this.props.submitHandler}>
					{this.props.text}
				</Button>
			</div>
		);
	}
}
