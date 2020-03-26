import React from "react";
import { Input, Button, Card, Radio } from "antd";
export default function quizCard(props) {
	// console.log(props);
	let allOption = props.question.option.map((elem, index) => {
		return (
			<div key={index}>
				{elem.optionType === "radio" ? (
					<div>
						<Radio
							value={elem.text}
							index={index}
							// onChange={e => props.optionChangeHandler(e)}
						/>
						{elem.text}
					</div>
				) : (
					<Radio value={props.textValue} index={index}>
						<Input
							type="text"
							value={props.textValue}
							onChange={e => props.textChangeHandler(e)}
						/>
					</Radio>
				)}
			</div>
		);
	});
	return (
		<div>
			<Card title={props.question.title}>
				<Radio.Group onChange={props.optionChangeHandler}>
					{allOption}
				</Radio.Group>
			</Card>
			<Button type="primary" onClick={props.submitHandler}>
				Next
			</Button>
		</div>
	);
}
