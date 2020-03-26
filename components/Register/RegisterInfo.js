import React, { Component } from "react";
import { Form, Icon, Input, Select, Radio, Spin } from "antd";
import cityJson from "../../constants/US_States_and_Cities.json";
import { getDoctorByNpi } from "../../services/api/doctors.js";
import Loader from "../loader/Loader.js";

import yourhandle from "../../constants/country-state-city.json";

const stateList = Object.keys(cityJson);
const { Item: FormItem } = Form;
const { Option } = Select;

class RegisterInfo extends Component {
	constructor() {
		super();
		this.state = {
			isLoading: false
		};
	}
	handleSubmit = e => {
		e.preventDefault();
		const {
			form: { validateFields },
			onSubmit
		} = this.props;

		validateFields((err, values) => {
			console.log("validateFields are", values);
			if (!err) {
				if (values.npi) {
					this.setState(
						{
							isLoading: true
						},
						() => {
							getDoctorByNpi(values.npi)
								.then(({ data }) => {
									if (data.status) {
										const doctorInfo = data.doctorInfo.results[0];
										this.setState({
											isLoading: false
										});
										onSubmit({
											...values,
											...doctorInfo
										});
									} else {
										this.setState({
											isLoading: false,
											errMsg: data.message,
											err: true
										});
									}
								})
								.catch(err => {
									this.setState({
										err,
										errMsg: err.response?.data?.error,
										isLoading: false
									});
								});
						}
					);
				} else {
					onSubmit(values);
				}
			}
		});
	};
	componentDidUpdate = () => {
		console.log("i am here in registerInfo", this.props);
	};
	componentDidMount = () => {
		// this.setState({
		// 	country: yourhandle.getCountries()
		// });
	};

	render() {
		const {
			getFieldDecorator,
			getFieldValue,
			setFieldsValue
		} = this.props.form;
		const { firstName, lastName, email } = this.props;
		const { isLoading } = this.state;
		// const country = yourhandle.getCountries();
		// console.log(country);
		// console.log(yourhandle.getStatesByShort("US"));
		// const countrylist = country.map(ele => (
		// 	<Option key={ele.name} value={ele.name}>
		// 		{ele.name}
		// 	</Option>
		// ));
		// console.log("countrylist", countrylist);
		console.log({
			firstName,
			lastName
		});

		const changeHandle = () => {
			console.log("called");
		};

		return (
			<div className="c-register-info pt-5">
				<Form onSubmit={this.handleSubmit}>
					<div className="">
						<h5>Start As</h5>
					</div>
					<div className="">
						<FormItem>
							{getFieldDecorator("userType", {
								rules: [
									{ required: true, message: "Please input your username!" }
								],
								initialValue: "user"
							})(
								<Radio.Group>
									<Radio value={"doctor"}>Doctor</Radio>
									<Radio value={"user"}>Regular User</Radio>
								</Radio.Group>
							)}
						</FormItem>
					</div>
					{getFieldValue("userType") === "doctor" && (
						<div className="">
							<FormItem>
								{getFieldDecorator("npi", {
									rules: [
										{ required: true, message: "Please input your NPI Number!" }
									]
								})(
									<Input
										// prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
										placeholder="NPI Number"
									/>
								)}
							</FormItem>
						</div>
					)}
					{getFieldValue("userType") === "user" && (
						<>
							<div className="">
								<div className="row">
									<div className="col-sm-6">
										<FormItem>
											{getFieldDecorator("email", {
												rules: [
													{
														required: true,
														message: "Please input your Email!"
													}
												]
											})(
												<Input
													prefix={
														<Icon
															type="user"
															style={{ color: "rgba(0,0,0,.25)" }}
														/>
													}
													placeholder="Email"
												/>
											)}
										</FormItem>
									</div>
									<div className="col-sm-6">
										<FormItem>
											{getFieldDecorator("phone", {
												rules: [
													{
														required: true,
														message: "Please input your Phone!"
													}
												]
											})(
												<Input
													prefix={
														<Icon
															type="user"
															style={{ color: "rgba(0,0,0,.25)" }}
														/>
													}
													placeholder="Phone"
												/>
											)}
										</FormItem>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-6">
									<FormItem>
										{getFieldDecorator("password", {
											rules: [
												{
													required: true,
													message: "Please input your password!"
												}
											]
										})(
											<Input
												prefix={
													<Icon
														type="lock"
														style={{ color: "rgba(0,0,0,.25)" }}
													/>
												}
												placeholder="Password"
												type="password"
											/>
										)}
									</FormItem>
								</div>
								<div className="col-sm-6">
									<FormItem>
										{getFieldDecorator("repassword", {
											rules: [
												{
													required: true,
													message: "Please retype your password!"
												}
											]
										})(
											<Input
												prefix={
													<Icon
														type="lock"
														style={{ color: "rgba(0,0,0,.25)" }}
													/>
												}
												placeholder="Retype Password"
												type="password"
											/>
										)}
									</FormItem>
								</div>
							</div>
							<div className="">
								<div className="row">
									<div className="col-sm-4">
										<FormItem>
											{getFieldDecorator("country", {
												rules: [
													{ required: true, message: "Please select Country!" }
												],
												// initialValue: stateList[0],
												onChange: a => {
													console.log("this is ", a);
													setFieldsValue({
														country: yourhandle[a].name
													});
													this.setState({
														countryId: a
													});
												}
											})(
												<Select placeholder="Country">
													{yourhandle.map(country => (
														<Option key={country.name} value={country.id}>
															{country.name}
														</Option>
													))}
													{/* {countrylist} */}
													{/* <Option key="1" value="0">
														{countrylist[0].name}
													</Option> */}
												</Select>
											)}
										</FormItem>
									</div>
									<div className="col-sm-4">
										<FormItem>
											{getFieldDecorator("state", {
												rules: [
													{ required: true, message: "Please select state!" }
												],
												// initialValue: stateList[0],
												onChange: a => {
													console.log("this is", a);
													console.log(
														yourhandle[this.state.countryId - 1].states[a]
													);
													// setFieldsValue({
													// 	city: yourhandle[this.state.countryId - 1].states[a]
													// });
													this.setState({
														cities:
															yourhandle[this.state.countryId - 1].states[a]
													});
													// console.log("cities are", getFieldValue("city"));
												}
											})(
												<Select
													disabled={!getFieldValue("country")}
													placeholder="State"
												>
													{Object.keys(
														yourhandle[this.state.countryId - 1 || 1].states ||
															{}
													).map(state => (
														<Option key={state} value={state}>
															{state}
														</Option>
													))}
												</Select>
											)}
										</FormItem>
									</div>
									<div className="col-sm-4">
										<FormItem>
											{getFieldDecorator("city", {
												rules: [
													{ required: true, message: "Please select City!" }
												]
												// initialValue: cityJson[getFieldValue("state")][0]
											})(
												<Select
													disabled={!getFieldValue("state")}
													placeholder="City"
												>
													{(this.state.cities || []).map(city => (
														<Option key={city} value={city}>
															{city}
														</Option>
													))}
												</Select>
											)}
										</FormItem>
									</div>
								</div>
							</div>
						</>
					)}
					<Loader isLoading={isLoading} />
					<div className="text-center d-block">
						<button
							disabled={isLoading}
							className="btn btn-primary"
							type="submit"
						>
							Start Now
						</button>
					</div>
				</Form>
			</div>
		);
	}
}
export default Form.create({
	name: "register-info"
})(RegisterInfo);
