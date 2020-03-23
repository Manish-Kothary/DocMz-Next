import React from "react";
import { Tree } from "antd";
const { TreeNode } = Tree;

export default function TreeSection(props) {
	const giveMytree = (question, tree) => {
		if (question === undefined) {
			return;
		}
		let option = question.option;
		for (var i = 0; i < option.length; i++) {
			console.log("options" + i, option[i]);
			if (option[i].linkedQuestion) {
				tree.children.push({
					title: option[i].linkedQuestion.title,
					key: option[i].linkedQuestion._id,
					option: option[i].option,
					children: []
				});
				let d = giveMytree(
					question.option[i].linkedQuestion,
					tree.children[tree.children.length - 1]
				);
			}
		}
	};
	let Mytree = [
		{
			title: props.question[0].title,
			key: props.question[0]._id,
			option: props.question[0].option,
			children: []
		}
	];
	giveMytree(props.question[0], Mytree[0]);
	console.log("MyTree is", JSON.stringify(Mytree));

	console.log(props);
	// const onSelect = (selectedKeys, info) => {
	// 	console.log("selected", selectedKeys, info);
	// 	props.onSelectHandler(selectedKeys[0]);
	// };

	return <Tree treeData={Mytree} onSelect={props.onSelectHandler} />;
}
