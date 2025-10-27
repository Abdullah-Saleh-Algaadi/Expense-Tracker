import Modal from "../../common/Modal";

export default function ChangePasswordModal({
  isOpen,
  onClose,
  passwordForm,
  onChange,
  onSubmit,
  errors,
  isLoading,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Change Password"
      footerButtons={[
        { text: "Cancel", onClick: onClose, type: "secondary" },
        {
          text: isLoading ? "Update ..." : "Update",
          onClick: onSubmit,
          type: "primary",
        },
      ]}
    >
      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Password
          </label>
          <input
            type="password"
            name="currentPassword"
            value={passwordForm.currentPassword}
            onChange={onChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter current password"
          />
          {errors.currentPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.currentPassword}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            value={passwordForm.newPassword}
            onChange={onChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter new password"
          />
          <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Confirm New Password
          </label>
          <input
            type="password"
            name="confirmNewPassword"
            value={passwordForm.confirmNewPassword}
            onChange={onChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Confirm new password"
          />
          <p className="text-red-500 text-sm mt-1">
            {errors.confirmNewPassword}
          </p>
        </div>
      </form>
    </Modal>
  );
}
