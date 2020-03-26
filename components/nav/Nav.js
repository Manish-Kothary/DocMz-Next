import classNames from "classnames";
import { connect } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import { unsetLoggedInPatient } from "../../redux/actions";
import { Menu, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import _ from "underscore";
const Nav = ({ items, isSubNav, unsetLoggedInPatient, ...props }) => {
	const Router = useRouter();
	const menu = (
		<Menu>
			<Menu.Item key="0" onClick={() => Router.push("/patient/dashboard")}>
				<div>Dashboard</div>
			</Menu.Item>
		</Menu>
	);

	const onAction = action => {
		switch (action) {
			case "logout":
				unsetLoggedInPatient();
				break;

			default:
				break;
		}
	};
	return (
		<ul
			className={classNames("c-nav row align-items-center my-auto px-3", {
				"c-nav--sub-nav": isSubNav
			})}
		>
			{items
				.filter(item => {
					switch (item.condition) {
						case "only-guest":
							return !props.loggedInPatient._id;

						case "only-login":
							return props.loggedInPatient._id;

						default:
							return true;
					}
				})
				.map((navItem, index) => {
					const { extraClass, extraLinkClass, link, action } = navItem;
					return (
						<li
							key={index}
							className={classNames("c-nav__item d-block", {
								[extraClass]: extraClass,
								"c-nav__item--has-submenu":
									navItem.subMenus && navItem.subMenus.length > 0
							})}
						>
							{link ? (
								<LinkItem
									link={link}
									navItem={navItem}
									className={classNames("c-nav__link", {
										[extraLinkClass]: extraLinkClass
									})}
								/>
							) : (
								<ActionItem
									navItem={navItem}
									className={classNames("c-nav__link", {
										[extraLinkClass]: extraLinkClass
									})}
									onClick={() => {
										onAction(action);
									}}
								/>
							)}
							{navItem.subMenus && (
								<Nav isSubNav={true} items={navItem.subMenus} />
							)}
						</li>
					);
				})}
			{!_.isEmpty(props.loggedInPatient) ? (
				<Dropdown overlay={menu} trigger={["click"]}>
					<a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
						<MenuOutlined />
					</a>
				</Dropdown>
			) : null}
		</ul>
	);
};
const LinkItem = ({ className, navItem, link }) => (
	<Link href={link}>
		<a className={className}>{navItem.name}</a>
	</Link>
);
const ActionItem = ({ className, navItem, onClick }) => (
	<span onClick={onClick} className={className}>
		{navItem.name}
	</span>
);

Nav.defaultProps = {
	items: [],
	isSubNav: false
};
const mapStateToProps = state => ({
	loggedInPatient: state.loggedInPatient
});
export default connect(mapStateToProps, {
	unsetLoggedInPatient
})(Nav);
