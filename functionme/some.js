var question = [
	{
		_id: "5e765c50a93355252e6213f7",
		title: "what is symptom",
		option: [
			{
				_id: "5e765c50a93355252e6213f9",
				optionType: "text",
				text: "cough",
				linkedQuestion: {
					children: ["5e765cefa93355252e6213fe"],
					_id: "5e765c9ea93355252e6213fb",
					title: "how many days",
					option: [
						{
							_id: "5e765c9ea93355252e6213fd",
							optionType: "text",
							text: "10",
							linkedQuestion: {
								children: [],
								_id: "5e765cefa93355252e6213fe",
								title: "what is the temp",
								option: [
									{
										_id: "5e765cefa93355252e621400",
										optionType: "text",
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
							optionType: "text",
							text: "15"
						}
					],
					__v: 0
				}
			},
			{
				_id: "5e765c50a93355252e6213f8",
				optionType: "text",
				text: "fever",
				linkedQuestion: {
					_id: "5e765c9ea93355252e6213fb",
					title: "how many weeks",
					option: [
						{
							_id: "5e765c9ea93355252e6213fd",
							optionType: "text",
							text: "156"
						},
						{
							_id: "5e765c9ea93355252e6213fc",
							optionType: "text",
							text: "15jkjk"
						}
					],
					__v: 0
				}
			}
		],
		__v: 0
	}
];
const giveMytree = async (question, tree) => {
	// console.log("in question", question);
	if (question === undefined) {
		return Promise.resolve();
	}
	// tree={
	// 	title:question.title,
	// 	key:question._id,
	// 	children:[]
	// }
	let option = question.option;
	for (var i = 0; i < option.length; i++) {
		console.log("options" + i, option[i]);
		if (option[i].linkedQuestion) {
			tree.children.push({
				title: option[i].linkedQuestion.title,
				key: option[i].linkedQuestion._id,
				children: []
			});
			let d = await giveMytree(
				question.option[i].linkedQuestion,
				tree.children[tree.children.length - 1]
			);
		}
	}
	return Promise.resolve();
};

let Mytree = [
	{
		title: question[0].title,
		key: question[0]._id,
		children: []
	}
];
// console.log(question);
findingTree = async () => {
	console.log("first call");
	// console.log(JSON.stringify(question[0].children));
	let result = await giveMytree(question[0], Mytree[0]);
	console.log("MyTree is", JSON.stringify(Mytree));
};

findingTree();
