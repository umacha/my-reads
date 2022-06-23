import CancelButton from "./CancelButton";
import OkButton from "./OkButton";

const ConfirmModal = ({ visible, message, onClickCancel, onClickOk }) => {
	if (!visible) return null;
	return (
		<div className="confirm-modal">
			<div className="confirm-modal-card">
				<p className="confirm-modal-message">{message}</p>
				<div className="confirm-modal-buttons">
					<CancelButton onClick={onClickCancel} />
					<OkButton onClick={onClickOk} />
				</div>
			</div>
		</div>
	);
};

export default ConfirmModal;
