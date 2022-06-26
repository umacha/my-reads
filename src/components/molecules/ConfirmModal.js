/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { color } from "../../utils/constant";
import CancelButton from "../atoms/CancelButton";
import OkButton from "../atoms/OkButton";

const ConfirmModal = ({ visible, message, onClickCancel, onClickOk }) => {
	if (!visible) return null;
	return (
		<div css={containerStyle}>
			<div css={cardStyle}>
				<p css={messageStyle}>{message}</p>
				<div css={buttonsContainerStyle}>
					<CancelButton onClick={onClickCancel} />
					<OkButton onClick={onClickOk} />
				</div>
			</div>
		</div>
	);
};

const containerStyle = css(`
	width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
`);

const cardStyle = css(`
	width: 310px;
	height: 100px;
	border-radius: 4px;
	background-color: ${color.middleGray};
	padding: 20px 30px 20px 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 30px;
`);

const messageStyle = css(`
	font-size: 12pt;
	color: ${color.lightGray};
	margin: 0;
`);

const buttonsContainerStyle = css(`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 20px;
`);

export default ConfirmModal;
